#!/bin/bash
# deploy.sh — push feest 2026 changes to CT 105 and rebuild
set -e

SRC="$(cd "$(dirname "$0")" && pwd)"
HOST="root@192.168.1.96"
DST="/opt/feest2026"
SSH_KEY="/Users/joostvantiggelen/Documents/Claude/Projects/Proxmox/cowork_key"

chmod 600 "$SSH_KEY"
SSH=(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no)
SCP=(scp -i "$SSH_KEY" -o StrictHostKeyChecking=no)

echo "→ Syncing files to $HOST…"
"${SSH[@]}" "$HOST" "mkdir -p $DST/api $DST/Images"

for f in index.html styles.css app.jsx sections.jsx entities.jsx tweaks-panel.jsx Dockerfile nginx.conf compose.yaml .dockerignore; do
  "${SCP[@]}" "$SRC/$f" "$HOST:$DST/"
done

"${SCP[@]}" -r "$SRC/api/." "$HOST:$DST/api/"
"${SCP[@]}" "$SRC/Images/"* "$HOST:$DST/Images/"

echo "→ Building and restarting containers…"
"${SSH[@]}" "$HOST" "cd $DST && docker compose up --build -d 2>&1"

echo "→ Verifying…"
sleep 5
STATUS=$("${SSH[@]}" "$HOST" "curl -s -o /dev/null -w '%{http_code}' http://localhost:8080/")
if [ "$STATUS" = "200" ]; then
  echo "✓ Live at https://josso.party (HTTP $STATUS)"
else
  echo "✗ Something's wrong — HTTP $STATUS"
  "${SSH[@]}" "$HOST" "docker logs feest2026-web-1 2>&1 | tail -20"
  exit 1
fi
