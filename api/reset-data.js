'use strict';

const Database = require('better-sqlite3');

const DB_PATH = process.env.DB_PATH || '/data/votes.db';
const db = new Database(DB_PATH);

db.exec(`
  CREATE TABLE IF NOT EXISTS votes (
    ip         TEXT PRIMARY KEY,
    answer     TEXT NOT NULL CHECK (answer IN ('yes','no')),
    name       TEXT,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS snake_scores (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    name       TEXT NOT NULL,
    score      INTEGER NOT NULL CHECK (score >= 0),
    created_at INTEGER NOT NULL
  );

  DELETE FROM votes;
  DELETE FROM snake_scores;
`);

console.log(`reset votes and snake scores in ${DB_PATH}`);
