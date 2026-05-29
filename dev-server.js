'use strict';

// Dev server: serves the static files in this directory AND spawns the
// API server as a child process pointing at a dev-only SQLite database,
// so the live production DB is never touched. Proxies /api/* and /votes
// to the local API. Run with: node dev-server.js
//
// Override with env vars:
//   PORT=3000          frontend port
//   API_PORT=8080      local API port
//   DEV_DB_PATH=...    dev SQLite file (default: ./api/data/dev-votes.db)
//   BACKEND=http://... skip spawning the API and proxy to this URL instead

const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const { spawn } = require('child_process');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const API_PORT = parseInt(process.env.API_PORT, 10) || 8080;
const ROOT = __dirname;
const DEV_DB_PATH = path.resolve(
  process.env.DEV_DB_PATH || path.join(ROOT, 'api', 'data', 'dev-votes.db')
);
const BACKEND = new URL(process.env.BACKEND || `http://localhost:${API_PORT}`);
const SPAWN_API = !process.env.BACKEND;

function startApi() {
  fs.mkdirSync(path.dirname(DEV_DB_PATH), { recursive: true });
  const apiDir = path.join(ROOT, 'api');
  if (!fs.existsSync(path.join(apiDir, 'node_modules'))) {
    console.error('api/node_modules missing — run: (cd api && npm install)');
    process.exit(1);
  }
  console.log(`starting api on :${API_PORT}  db=${DEV_DB_PATH}`);
  const child = spawn(process.execPath, ['server.js'], {
    cwd: apiDir,
    env: { ...process.env, PORT: String(API_PORT), DB_PATH: DEV_DB_PATH },
    stdio: 'inherit'
  });
  child.on('exit', (code, sig) => {
    console.error(`api exited (code=${code}, signal=${sig})`);
    process.exit(code ?? 1);
  });
  const shutdown = () => { try { child.kill('SIGTERM'); } catch {} };
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
  process.on('exit', shutdown);
}

if (SPAWN_API) startApi();

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
