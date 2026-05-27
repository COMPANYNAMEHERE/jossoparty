'use strict';

// Dev server: serves the static files in this directory and proxies
// /api/* and /votes to the docker nginx on :8080 so the RSVP backend
// works the same as in production. No npm install required, uses
// only Node built-ins. Run with: node dev-server.js
//
// Override port/backend with env vars: PORT=3000 BACKEND=http://localhost:8080

const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const BACKEND = new URL(process.env.BACKEND || 'http://localhost:8080');
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.jsx':  'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.map':  'application/json; charset=utf-8',
  '.txt':  'text/plain; charset=utf-8'
};

function proxy(req, res) {
  const opts = {
    hostname: BACKEND.hostname,
    port: BACKEND.port || 80,
    method: req.method,
    path: req.url,
    headers: { ...req.headers, host: BACKEND.host }
  };
  const upstream = http.request(opts, (up) => {
    res.writeHead(up.statusCode, up.headers);
    up.pipe(res);
  });
  upstream.on('error', (err) => {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end(`Bad gateway: ${err.message}\nIs the docker stack running on ${BACKEND.origin}?`);
  });
  req.pipe(upstream);
}

function serveStatic(req, res) {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.normalize(path.join(ROOT, urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403); res.end('forbidden'); return;
  }
  fs.stat(filePath, (err, st) => {
    if (err || st.isDirectory()) {
      filePath = path.join(ROOT, 'index.html');
    }
    fs.readFile(filePath, (err2, buf) => {
      if (err2) { res.writeHead(404); res.end('not found'); return; }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {
        'Content-Type': MIME[ext] || 'application/octet-stream',
        'Cache-Control': 'no-store'
      });
      res.end(buf);
    });
  });
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api/') || req.url === '/votes' || req.url.startsWith('/votes?')) {
    return proxy(req, res);
  }
  return serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`dev-server on http://localhost:${PORT}  →  /api/*, /votes proxied to ${BACKEND.origin}`);
});
