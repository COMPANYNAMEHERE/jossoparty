############################
# Stage 1: build static dist
############################
FROM node:20-alpine AS builder

RUN apk add --no-cache curl ca-certificates python3 \
 && npm install -g esbuild@0.24.0

WORKDIR /src

COPY index.html styles.css ./
COPY tweaks-panel.jsx entities.jsx sections.jsx app.jsx ./
COPY Images ./Images

RUN mkdir -p dist/vendor dist/Images \
 && cp styles.css dist/ \
 && cp -r Images/. dist/Images/

# Transform JSX -> JS (no bundling; preserve global-scope semantics)
RUN for f in tweaks-panel entities sections app; do \
      esbuild "$f.jsx" --loader:.jsx=jsx --target=es2020 --minify \
        --outfile="dist/$f.js"; \
    done

# Vendor third-party JS/CSS
RUN curl -fsSLo dist/vendor/react.production.min.js \
      https://unpkg.com/react@18.3.1/umd/react.production.min.js \
 && curl -fsSLo dist/vendor/react-dom.production.min.js \
      https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js \
 && curl -fsSLo dist/vendor/leaflet.js \
      https://unpkg.com/leaflet@1.9.4/dist/leaflet.js \
 && curl -fsSLo dist/vendor/leaflet.css \
      https://unpkg.com/leaflet@1.9.4/dist/leaflet.css \
 && curl -fsSLo dist/vendor/leaflet/images/marker-icon.png \
      --create-dirs \
      https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png \
 && curl -fsSLo dist/vendor/leaflet/images/marker-icon-2x.png \
      https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png \
 && curl -fsSLo dist/vendor/leaflet/images/marker-shadow.png \
      https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png \
 && curl -fsSLo dist/vendor/leaflet/images/layers.png \
      https://unpkg.com/leaflet@1.9.4/dist/images/layers.png \
 && curl -fsSLo dist/vendor/leaflet/images/layers-2x.png \
      https://unpkg.com/leaflet@1.9.4/dist/images/layers-2x.png \
 # Leaflet CSS references images via ../images/*; we placed leaflet.css in
 # /vendor and the images under /vendor/leaflet/images so rewrite the URLs:
 && sed -i 's#url(images/#url(leaflet/images/#g' dist/vendor/leaflet.css

# Rewrite index.html: drop Babel, swap CDN URLs, swap jsx -> js
COPY index.html dist/index.html
RUN python3 - <<'PY'
import re, pathlib
p = pathlib.Path("dist/index.html")
html = p.read_text()

# Drop Babel standalone <script> (only the @babel/standalone CDN tag,
# NOT the type="text/babel" tags loading our .jsx files)
html = re.sub(
    r'\s*<script[^>]*src="[^"]*@babel/standalone[^"]*"[^>]*></script>\s*',
    '\n  ', html, flags=re.I,
)

# Swap Leaflet css/js (drop integrity/crossorigin)
html = re.sub(
    r'<link[^>]*leaflet@[^"]*\.css"[^>]*/?>',
    '<link rel="stylesheet" href="./vendor/leaflet.css" />',
    html, flags=re.I,
)
html = re.sub(
    r'<script[^>]*leaflet@[^"]*\.js"[^>]*></script>',
    '<script src="./vendor/leaflet.js"></script>',
    html, flags=re.I,
)

# Swap React/ReactDOM
html = re.sub(
    r'<script[^>]*react@[^"]*react\.development\.js"[^>]*></script>',
    '<script src="./vendor/react.production.min.js"></script>',
    html, flags=re.I,
)
html = re.sub(
    r'<script[^>]*react-dom@[^"]*react-dom\.development\.js"[^>]*></script>',
    '<script src="./vendor/react-dom.production.min.js"></script>',
    html, flags=re.I,
)

# Swap JSX -> JS script tags (drop type="text/babel")
for name in ("tweaks-panel", "entities", "sections", "app"):
    html = re.sub(
        rf'<script[^>]*type="text/babel"[^>]*src="{name}\.jsx[^"]*"[^>]*></script>',
        f'<script src="{name}.js"></script>',
        html,
    )

# Content-hash our JS/CSS files so each build gets a new URL —
# this busts CDN/browser caches without needing a manual purge.
import hashlib
for name, ext in [("tweaks-panel","js"),("entities","js"),("sections","js"),("app","js"),("styles","css")]:
    src = pathlib.Path(f"dist/{name}.{ext}")
    if not src.exists():
        continue
    h = hashlib.md5(src.read_bytes()).hexdigest()[:8]
    hashed = f"{name}.{h}.{ext}"
    src.rename(f"dist/{hashed}")
    html = html.replace(f'src="{name}.{ext}"', f'src="{hashed}"')
    html = html.replace(f'href="{name}.{ext}"', f'href="{hashed}"')

p.write_text(html)
PY

# Precompress for gzip_static
RUN find dist -type f \( -name '*.html' -o -name '*.js' -o -name '*.css' -o -name '*.svg' \) \
      -exec gzip -9 -k {} +

############################
# Stage 2: runtime
############################
FROM nginxinc/nginx-unprivileged:1.27-alpine

COPY --chown=nginx:nginx --from=builder /src/dist /usr/share/nginx/html
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:8080/ || exit 1
