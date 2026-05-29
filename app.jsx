// app.jsx, root: Windows 95 desktop shell around the existing party content.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "nl",
  "chaos": 1,
  "showClickFx": true,
  "palette": ["#ff2d55", "#f7e94b", "#f7e94b"],
  "partyDate": "2026-06-19T19:00",
  "headline": "I haven't died yet",
  "headlineNl": "Ik word 28 jaar"
} /*EDITMODE-END*/;

const PALETTES = [
  ["#ff2d55", "#f7e94b", "#f7e94b"],
  ["#ff5722", "#f7e94b", "#f7e94b"],
  ["#000000", "#ff2d55", "#ff2d55"],
  ["#1a73e8", "#f7e94b", "#f7e94b"],
  ["#ff2d55", "#7fffd4", "#7fffd4"]
];

const WIN_IDS = [
  "invite",
  "setlist",
  "location",
  "door",
  "after",
  "rsvp",
  "about",
  "snake",
  "snakeScores",
  "mine",
  "mineScores"
];

const DESKTOP_WIN_IDS = WIN_IDS.filter((id) => id !== "snakeScores" && id !== "mineScores");

const WIN_META = {
  invite: { title: "Uitnodiging - Notepad", titleEn: "Invitation - Notepad", task: "Uitnodiging", taskEn: "Invitation", icon: "doc" },
  countdown: { title: "Aftellen", titleEn: "Counting down", task: "Aftellen", taskEn: "Counting down", icon: "clock" },
  setlist: { title: "Agenda", task: "Agenda", icon: "list" },
  location: { title: "Locatie", titleEn: "Location", task: "Locatie", taskEn: "Location", icon: "map" },
  door: { title: "De Deur", titleEn: "The door", task: "De Deur", taskEn: "The door", icon: "image" },
  after: { title: "Blijf je slapen?", titleEn: "After hours", task: "Blijf je slapen?", taskEn: "After hours", icon: "folder" },
  rsvp: { title: "Kom je?", titleEn: "Respond", task: "Kom je?", taskEn: "Respond", icon: "mail" },
  about: { title: "Nog vragen?", titleEn: "Questions?", task: "Info", icon: "help" },
  snake: { title: "Snake.exe", task: "Snake", icon: "snake" },
  snakeScores: { title: "Snake Highscores", task: "Highscores", icon: "scores" },
  mine: { title: "Minesweeper.exe", task: "Minesweeper", icon: "mine" },
  mineScores: { title: "Minesweeper Highscores", task: "Mine Scores", icon: "scores" }
};

const HELP_CONTENT = {
  invite: {
    nl: {
      title: "Help - Uitnodiging",
      body: "Hier lees je de uitnodiging, datum en belangrijkste feestinformatie. Gebruik dit scherm als startpunt en open via de desktop of Start-menu de andere vensters voor route, agenda en RSVP."
    },
    en: {
      title: "Help - Invitation",
      body: "This window shows the invitation, date, and main party details. Use it as the starting point, then open the other windows from the desktop or Start menu for route, agenda, and RSVP."
    }
  },
  countdown: {
    nl: {
      title: "Help - Aftellen",
      body: "Dit scherm telt af naar het feest. Je ziet hoeveel dagen, uren, minuten en seconden er nog over zijn tot de ingestelde starttijd."
    },
    en: {
      title: "Help - Counting down",
      body: "This window counts down to the party. It shows the remaining days, hours, minutes, and seconds until the configured start time."
    }
  },
  setlist: {
    nl: {
      title: "Help - Agenda",
      body: "In dit scherm zie je wat er tijdens het feest gebeurt. Scroll door de onderdelen om planning, sfeer en praktische momenten te bekijken."
    },
    en: {
      title: "Help - Agenda",
      body: "This window shows what happens during the party. Scroll through the sections to check the schedule, vibe, and practical moments."
    }
  },
  location: {
    nl: {
      title: "Help - Locatie",
      body: "Hier vind je het adres, de kaart en informatie over aankomen. Wissel tussen locatie en parkeren om de juiste route, fietsplek of parkeeroptie te vinden."
    },
    en: {
      title: "Help - Location",
      body: "This window contains the address, map, and arrival info. Switch between location and parking to find the right route, bike spot, or parking option."
    }
  },
  door: {
    nl: {
      title: "Help - De Deur",
      body: "Dit scherm laat zien welke deur je nodig hebt en hoe je binnenkomt. Gebruik de afbeelding en aanwijzingen om bij de juiste ingang te staan."
    },
    en: {
      title: "Help - The door",
      body: "This window shows which door to use and how to get inside. Use the image and notes to make sure you are at the right entrance."
    }
  },
  after: {
    nl: {
      title: "Help - Blijven slapen",
      body: "Hier staat informatie voor wie blijft hangen of slapen. Bekijk wat handig is om mee te nemen en wat je kunt verwachten na het feest."
    },
    en: {
      title: "Help - After hours",
      body: "This window has info for anyone staying late or sleeping over. Check what to bring and what to expect after the party."
    }
  },
  rsvp: {
    nl: {
      title: "Help - RSVP",
      body: "Gebruik dit scherm om te laten weten of je komt. Kies ja of nee; bij ja kun je je naam invullen en verzenden zodat de teller wordt bijgewerkt."
    },
    en: {
      title: "Help - RSVP",
      body: "Use this window to say whether you are coming. Pick yes or no; if yes, enter your name and send it so the counter updates."
    }
  },
  about: {
    nl: {
      title: "Help - Nog vragen?",
      body: "Dit scherm is voor extra vragen en contactinformatie. Kijk hier als iets onduidelijk is of als je nog praktische details zoekt."
    },
    en: {
      title: "Help - Questions?",
      body: "This window is for extra questions and contact info. Check it if something is unclear or if you need more practical details."
    }
  },
  snake: {
    nl: {
      title: "Help - Snake",
      body: "Speel Snake met de pijltjestoetsen of de knoppen op mobiel. Verzamel eten, ontwijk muren en jezelf, en sla je score op wanneer het spel voorbij is."
    },
    en: {
      title: "Help - Snake",
      body: "Play Snake with the arrow keys or the mobile buttons. Collect food, avoid walls and yourself, and save your score when the game ends."
    }
  },
  snakeScores: {
    nl: {
      title: "Help - Highscores",
      body: "Hier zie je de opgeslagen Snake-scores. Gebruik dit scherm om te vergelijken wie bovenaan staat en open Snake.exe om opnieuw te spelen."
    },
    en: {
      title: "Help - Highscores",
      body: "This window shows saved Snake scores. Use it to compare who is on top, then open Snake.exe to play again."
    }
  },
  mine: {
    nl: {
      title: "Help - Minesweeper",
      body: "Je hebt 60 seconden. Linkermuisknop opent een vakje, rechtermuisknop plaatst een vlag. Op mobiel: kort tikken om te openen, ingedrukt houden om een vlag te plaatsen. Je eerste klik is altijd veilig en opent meteen een groter gebied. Scoreboard: alleen wie wint krijgt de grote tijdsbonus (1000 + 100 per seconde die je overhoudt + 10 per correcte vlag). Wie afgaat of de tijd overschrijdt krijgt een kleine troostprijs (5 per geopend vakje) — die telt ook mee op het bord, maar wordt makkelijk verslagen door iedere winnaar. Tijd is dus de hoofdfactor: hoe sneller je oplost, hoe hoger je staat."
    },
    en: {
      title: "Help - Minesweeper",
      body: "You have 60 seconds. Left click opens a cell, right click flags it. On mobile: tap to open, long-press to flag. Your first click is always safe and opens a larger area. Scoreboard: only winners get the big time bonus (1000 + 100 per second left + 10 per correct flag). Losing or timing out gives a small consolation score (5 per opened cell) — it still posts to the board, but any winner beats it. Time is the leading factor: solve fast, rank high."
    }
  },
  mineScores: {
    nl: {
      title: "Help - Minesweeper Highscores",
      body: "Hier staan de opgeslagen Minesweeper-scores. Open Minesweeper.exe om opnieuw te spelen."
    },
    en: {
      title: "Help - Minesweeper Highscores",
      body: "This window shows saved Minesweeper scores. Open Minesweeper.exe to play again."
    }
  }
};

const SHORTCUT_ICON_IMAGES = {
  doc: "Images/invite.png",
  clock: "Images/clock.png",
  list: "Images/agenda.png",
  map: "Images/location.png",
  image: "Images/the_door_real_transparent.png",
  folder: "Images/sleepover.png",
  mail: "Images/checkmark.png",
  help: "Images/info.png",
  snake: "Images/snake.png"
};

const INITIAL_OPEN = {
  invite: true,
  countdown: false,
  setlist: true,
  location: false,
  door: false,
  after: false,
  rsvp: true,
  about: false,
  snake: false,
  snakeScores: false,
  mine: false,
  mineScores: false
};

const CLOSED_WINDOWS = WIN_IDS.reduce((acc, id) => {
  acc[id] = false;
  return acc;
}, {});

const STARTUP_SEQUENCE = ["rsvp", "setlist", "invite"];
const INITIAL_MAXIMIZED = {
  setlist: true
};
const OPEN_RESTORED = {
  countdown: true
};
const STAGGER_MS = 150;

const INITIAL_Z = {
  countdown: 21,
  setlist: 22,
  rsvp: 23,
  invite: 50
};

const BASE_POSITIONS = {
  invite: { x: 136, y: 32 },
  countdown: { x: 620, y: 42 },
  setlist: { x: 608, y: 260 },
  location: { x: 210, y: 96 },
  door: { x: 180, y: 150 },
  after: { x: 720, y: 120 },
  rsvp: { x: 152, y: 370 },
  about: { x: 700, y: 430 },
  snake: { x: 470, y: 72 },
  snakeScores: { x: 548, y: 112 },
  mine: { x: 320, y: 180 },
  mineScores: { x: 398, y: 220 }
};

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function getResponsiveWindowPositions() {
  if (typeof window === "undefined") return BASE_POSITIONS;
  if (window.innerWidth < 700) {
    return WIN_IDS.reduce((acc, id, i) => {
      acc[id] = { x: 6, y: 162 + i * 26 };
      return acc;
    }, {});
  }
  if (window.innerWidth < 1050) {
    return {
      invite: { x: 112, y: 34 },
      countdown: { x: 410, y: 54 },
      setlist: { x: 382, y: 260 },
      location: { x: 124, y: 98 },
      door: { x: 146, y: 146 },
      after: { x: 430, y: 160 },
      rsvp: { x: 138, y: 368 },
      about: { x: 410, y: 410 },
      snake: { x: 360, y: 86 },
      snakeScores: { x: 410, y: 122 },
      mine: { x: 240, y: 180 },
      mineScores: { x: 300, y: 220 }
    };
  }
  return BASE_POSITIONS;
}

function Icon({ name, size = 20 }) {
  const common = {
    width: size, height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  switch (name) {
    case "calendar":
      return <svg {...common} aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="1" /><path d="M3 9h18M8 3v4M16 3v4" /></svg>;
    case "clock":
      return <svg {...common} aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case "pin":
      return <svg {...common} aria-hidden="true"><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case "star":
      return <svg {...common} aria-hidden="true"><path d="M12 2l2.6 6.3 6.8.6-5.2 4.5 1.6 6.6L12 16.8 6.2 20l1.6-6.6L2.6 8.9l6.8-.6z" /></svg>;
    case "down":
      return <svg {...common} aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>;
    default:
      return null;
  }
}

function WinDesktopIcon({ type }) {
  const imageSrc = SHORTCUT_ICON_IMAGES[type];

  if (imageSrc) {
    return (
      <span className={"desktop-icon-art " + type + " image-icon"} aria-hidden="true">
        <img src={imageSrc} alt="" />
      </span>
    );
  }

  return (
    <span className={"desktop-icon-art " + type} aria-hidden="true">
      <span />
    </span>
  );
}

const SNAKE_GRID = 18;
const SNAKE_TICK_MS = 120;
const SNAKE_START = [
  { x: 8, y: 9 },
  { x: 7, y: 9 },
  { x: 6, y: 9 }
];
const SNAKE_DIRS = {
  ArrowUp: { x: 0, y: -1, name: "up" },
  ArrowDown: { x: 0, y: 1, name: "down" },
  ArrowLeft: { x: -1, y: 0, name: "left" },
  ArrowRight: { x: 1, y: 0, name: "right" }
};

function cleanSnakeName(value) {
  return (value || "").replace(/[^a-z0-9]/gi, "").toUpperCase().slice(0, 5);
}

function normalizeSnakeScores(rows) {
  if (!Array.isArray(rows)) return [];
  return rows
    .filter((row) => row && Number.isFinite(Number(row.score)))
    .map((row) => ({
      name: cleanSnakeName(row.name) || "ANON",
      score: Math.max(0, Math.floor(Number(row.score))),
      date: row.date || ""
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

function snakeKey(point) {
  return point.x + "-" + point.y;
}

function makeSnakeFood(snake) {
  const occupied = new Set(snake.map(snakeKey));
  const free = [];
  for (let y = 0; y < SNAKE_GRID; y++) {
    for (let x = 0; x < SNAKE_GRID; x++) {
      const point = { x, y };
      if (!occupied.has(snakeKey(point))) free.push(point);
    }
  }
  return free[Math.floor(Math.random() * free.length)] || { x: 0, y: 0 };
}

function SnakeGame({ scores, onSaveScore, openScores }) {
  const [snake, setSnake] = React.useState(SNAKE_START);
  const [food, setFood] = React.useState(() => makeSnakeFood(SNAKE_START));
  const [status, setStatus] = React.useState("idle");
  const [score, setScore] = React.useState(0);
  const [name, setName] = React.useState("");
  const [saveError, setSaveError] = React.useState(false);
  const directionRef = React.useRef(SNAKE_DIRS.ArrowRight);
  const nextDirectionRef = React.useRef(SNAKE_DIRS.ArrowRight);
  const scoreRef = React.useRef(0);

  const resetGame = React.useCallback(() => {
    const startSnake = SNAKE_START.map((point) => ({ ...point }));
    directionRef.current = SNAKE_DIRS.ArrowRight;
    nextDirectionRef.current = SNAKE_DIRS.ArrowRight;
    scoreRef.current = 0;
    setSnake(startSnake);
    setFood(makeSnakeFood(startSnake));
    setScore(0);
    setName("");
    setSaveError(false);
    setStatus("running");
  }, []);

  const setDirection = React.useCallback((dir) => {
    const current = directionRef.current;
    if (current.x + dir.x === 0 && current.y + dir.y === 0) return;
    nextDirectionRef.current = dir;
    if (status === "idle") setStatus("running");
  }, [status]);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      const dir = SNAKE_DIRS[event.key];
      if (!dir) return;
      event.preventDefault();
      setDirection(dir);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setDirection]);

  React.useEffect(() => {
    if (status !== "running") return;
    const id = window.setInterval(() => {
      setSnake((prevSnake) => {
        const dir = nextDirectionRef.current;
        directionRef.current = dir;
        const head = prevSnake[0];
        const nextHead = { x: head.x + dir.x, y: head.y + dir.y };
        const ateFood = nextHead.x === food.x && nextHead.y === food.y;
        const bodyToCheck = ateFood ? prevSnake : prevSnake.slice(0, -1);
        const hitWall = nextHead.x < 0 || nextHead.x >= SNAKE_GRID || nextHead.y < 0 || nextHead.y >= SNAKE_GRID;
        const hitSelf = bodyToCheck.some((part) => part.x === nextHead.x && part.y === nextHead.y);

        if (hitWall || hitSelf) {
          setStatus("dead");
          return prevSnake;
        }

        const nextSnake = [nextHead, ...prevSnake];
        if (ateFood) {
          const nextScore = scoreRef.current + 10;
          scoreRef.current = nextScore;
          setScore(nextScore);
          setFood(makeSnakeFood(nextSnake));
          return nextSnake;
        }
        nextSnake.pop();
        return nextSnake;
      });
    }, SNAKE_TICK_MS);
    return () => window.clearInterval(id);
  }, [food, status]);

  const saveScore = async (event) => {
    event.preventDefault();
    const cleaned = cleanSnakeName(name) || "ANON";
    setSaveError(false);
    setStatus("saving");
    try {
      await onSaveScore({ name: cleaned, score, date: new Date().toISOString() });
      setStatus("saved");
    } catch (error) {
      setSaveError(true);
      setStatus("dead");
    }
  };

  const snakeCells = React.useMemo(() => new Set(snake.map(snakeKey)), [snake]);
  const highScore = scores[0]?.score || 0;

  return (
    <section className="snake-app">
      <div className="snake-toolbar">
        <div className="snake-stat"><span>Score</span><strong>{score}</strong></div>
        <div className="snake-stat"><span>Best</span><strong>{highScore}</strong></div>
        <WinButton onClick={openScores}>Highscores</WinButton>
        <WinButton onClick={resetGame}>{status === "running" ? "Restart" : "Start"}</WinButton>
      </div>

      <div className="snake-board" aria-label="Snake speelveld">
        {Array.from({ length: SNAKE_GRID * SNAKE_GRID }).map((_, index) => {
          const x = index % SNAKE_GRID;
          const y = Math.floor(index / SNAKE_GRID);
          const isHead = snake[0]?.x === x && snake[0]?.y === y;
          const isSnake = snakeCells.has(x + "-" + y);
          const isFood = food.x === x && food.y === y;
          return (
            <span
              key={index}
              className={
                "snake-cell " +
                (isHead ? "head " : "") +
                (isSnake ? "body " : "") +
                (isFood ? "food " : "")
              }
            />
          );
        })}
        {status !== "running" && (
          <div className="snake-overlay">
            {status === "dead" || status === "saving" ? (
              <form className="snake-score-form" onSubmit={saveScore}>
                <strong>Game over</strong>
                <span>{score} punten</span>
                <label>
                  Naam
                  <input
                    value={name}
                    maxLength={5}
                    disabled={status === "saving"}
                    onChange={(event) => setName(cleanSnakeName(event.target.value))}
                    autoFocus
                  />
                </label>
                {saveError && <span>Opslaan mislukt</span>}
                <WinButton type="submit" disabled={status === "saving"}>{status === "saving" ? "Opslaan..." : "Opslaan"}</WinButton>
              </form>
            ) : (
              <div className="snake-start">
                <strong>{status === "saved" ? "Score opgeslagen" : "Snake"}</strong>
                <WinButton onClick={resetGame}>{status === "saved" ? "Nog een keer" : "Start"}</WinButton>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="snake-mobile-controls" aria-label="Snake controls">
        <button onClick={() => setDirection(SNAKE_DIRS.ArrowUp)} aria-label="Omhoog">▲</button>
        <button onClick={() => setDirection(SNAKE_DIRS.ArrowLeft)} aria-label="Links">◀</button>
        <button onClick={() => setDirection(SNAKE_DIRS.ArrowDown)} aria-label="Omlaag">▼</button>
        <button onClick={() => setDirection(SNAKE_DIRS.ArrowRight)} aria-label="Rechts">▶</button>
      </div>
    </section>
  );
}

function SnakeScores({ scores }) {
  return (
    <section className="snake-scores">
      <h2>Highscores</h2>
      {scores.length ? (
        <ol>
          {scores.map((row, index) => (
            <li key={row.name + row.score + row.date + index}>
              <span>{String(index + 1).padStart(2, "0")}. {row.name}</span>
              <strong>{row.score}</strong>
            </li>
          ))}
        </ol>
      ) : (
        <p>Nog geen scores.</p>
      )}
    </section>
  );
}

const MINE_COLS = 9;
const MINE_ROWS = 9;
const MINE_TOTAL = MINE_COLS * MINE_ROWS;
const MINE_COUNT = 10;
const MINE_SAFE = MINE_TOTAL - MINE_COUNT;
const MINE_DURATION = 60;

function cleanMineName(value) {
  return (value || "").replace(/[^a-z0-9]/gi, "").toUpperCase().slice(0, 5);
}

function normalizeMineScores(rows) {
  if (!Array.isArray(rows)) return [];
  return rows
    .filter((row) => row && Number.isFinite(Number(row.score)))
    .map((row) => ({
      name: cleanMineName(row.name) || "ANON",
      score: Math.max(0, Math.floor(Number(row.score))),
      date: row.date || ""
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

function mineNeighbours(index) {
  const x = index % MINE_COLS;
  const y = Math.floor(index / MINE_COLS);
  const out = [];
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dx === 0 && dy === 0) continue;
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || nx >= MINE_COLS || ny < 0 || ny >= MINE_ROWS) continue;
      out.push(ny * MINE_COLS + nx);
    }
  }
  return out;
}

function buildMineBoard(safeIndex) {
  const safeZone = new Set();
  if (safeIndex >= 0) {
    safeZone.add(safeIndex);
    for (const n of mineNeighbours(safeIndex)) safeZone.add(n);
  }
  const mines = new Set();
  while (mines.size < MINE_COUNT) {
    const idx = Math.floor(Math.random() * MINE_TOTAL);
    if (safeZone.has(idx)) continue;
    mines.add(idx);
  }
  const cells = [];
  for (let i = 0; i < MINE_TOTAL; i++) {
    const isMine = mines.has(i);
    let adjacent = 0;
    if (!isMine) {
      for (const n of mineNeighbours(i)) {
        if (mines.has(n)) adjacent++;
      }
    }
    cells.push({ mine: isMine, adjacent, revealed: false, flagged: false });
  }
  return cells;
}

function computeMineScore(cells, timeLeft, won) {
  let revealedSafe = 0;
  let correctFlags = 0;
  let wrongFlags = 0;
  for (const c of cells) {
    if (c.revealed && !c.mine) revealedSafe++;
    if (c.flagged) {
      if (c.mine) correctFlags++;
      else wrongFlags++;
    }
  }
  const flagPts = correctFlags * 10 - wrongFlags * 10;
  if (won) {
    // Time dominates: 100 pts per second saved + flat completion bonus.
    return Math.max(0, 1000 + timeLeft * 100 + flagPts);
  }
  // Non-winners still post a (much smaller) consolation score.
  return Math.max(0, revealedSafe * 5 + flagPts);
}

function floodReveal(cells, startIndex) {
  const next = cells.map((c) => ({ ...c }));
  const stack = [startIndex];
  const seen = new Set();
  while (stack.length) {
    const idx = stack.pop();
    if (seen.has(idx)) continue;
    seen.add(idx);
    const cell = next[idx];
    if (cell.revealed || cell.flagged || cell.mine) continue;
    cell.revealed = true;
    if (cell.adjacent === 0) {
      for (const n of mineNeighbours(idx)) {
        if (!next[n].revealed && !next[n].flagged && !next[n].mine) stack.push(n);
      }
    }
  }
  return next;
}

function Minesweeper({ scores, onSaveScore, openScores }) {
  const [cells, setCells] = React.useState(() => buildMineBoard(-1));
  const [status, setStatus] = React.useState("idle");
  const [timeLeft, setTimeLeft] = React.useState(MINE_DURATION);
  const [firstClick, setFirstClick] = React.useState(true);
  const [name, setName] = React.useState("");
  const longPressTimer = React.useRef(null);
  const longPressFired = React.useRef(false);
  const [saveError, setSaveError] = React.useState(false);
  const [finalScore, setFinalScore] = React.useState(0);

  const liveScore = React.useMemo(
    () => computeMineScore(cells, timeLeft, status === "won"),
    [cells, timeLeft, status]
  );
  const flagsPlaced = React.useMemo(
    () => cells.reduce((n, c) => n + (c.flagged ? 1 : 0), 0),
    [cells]
  );
  const minesLeft = Math.max(0, MINE_COUNT - flagsPlaced);
  const highScore = scores[0]?.score || 0;

  const resetGame = React.useCallback(() => {
    setCells(buildMineBoard(-1));
    setStatus("idle");
    setTimeLeft(MINE_DURATION);
    setFirstClick(true);
    setName("");
    setSaveError(false);
    setFinalScore(0);
  }, []);

  React.useEffect(() => {
    if (status !== "running") return;
    if (timeLeft <= 0) return;
    const id = window.setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => window.clearTimeout(id);
  }, [status, timeLeft]);

  React.useEffect(() => {
    if (status === "running" && timeLeft <= 0) {
      setFinalScore(computeMineScore(cells, 0, false));
      setStatus("timeout");
    }
  }, [status, timeLeft, cells]);

  const endGame = (nextStatus, nextCells, tLeft) => {
    setCells(nextCells);
    setFinalScore(computeMineScore(nextCells, tLeft, nextStatus === "won"));
    setStatus(nextStatus);
  };

  const revealAt = (index) => {
    if (status !== "idle" && status !== "running") return;
    if (cells[index].revealed || cells[index].flagged) return;

    let board = cells;
    if (firstClick) {
      board = buildMineBoard(index);
      setFirstClick(false);
      if (status === "idle") setStatus("running");
    }

    const target = board[index];
    if (target.mine) {
      const exploded = board.map((c, i) => ({
        ...c,
        revealed: c.revealed || c.mine,
        exploded: i === index ? true : c.exploded
      }));
      endGame("dead", exploded, timeLeft);
      return;
    }

    const next = floodReveal(board, index);
    const safeRevealed = next.reduce((n, c) => n + (c.revealed && !c.mine ? 1 : 0), 0);
    if (safeRevealed >= MINE_SAFE) {
      const flagged = next.map((c) => (c.mine ? { ...c, flagged: true } : c));
      endGame("won", flagged, timeLeft);
      return;
    }
    setCells(next);
  };

  const toggleFlag = (index) => {
    if (status !== "idle" && status !== "running") return;
    if (cells[index].revealed) return;
    if (status === "idle") setStatus("running");
    setCells((prev) => prev.map((c, i) => (i === index ? { ...c, flagged: !c.flagged } : c)));
  };

  const clearLongPress = () => {
    if (longPressTimer.current) {
      window.clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  const onCellPointerDown = (index, event) => {
    if (event.button && event.button !== 0) return;
    longPressFired.current = false;
    clearLongPress();
    longPressTimer.current = window.setTimeout(() => {
      longPressFired.current = true;
      longPressTimer.current = null;
      toggleFlag(index);
    }, 450);
  };

  const onCellPointerEnd = () => {
    clearLongPress();
  };

  const onCellClick = (index, event) => {
    if (longPressFired.current) {
      longPressFired.current = false;
      event.preventDefault();
      return;
    }
    if (event.button && event.button !== 0) return;
    revealAt(index);
  };

  const onCellContextMenu = (index, event) => {
    event.preventDefault();
    clearLongPress();
    toggleFlag(index);
  };

  const saveScore = async (event) => {
    event.preventDefault();
    const cleaned = cleanMineName(name) || "ANON";
    setSaveError(false);
    setStatus("saving");
    try {
      await onSaveScore({ name: cleaned, score: finalScore, date: new Date().toISOString() });
      setStatus("saved");
    } catch (error) {
      setSaveError(true);
      setStatus("dead");
    }
  };

  const isEnded = status === "dead" || status === "won" || status === "timeout" || status === "saving";
  const endLabel = status === "won" ? "Gewonnen!" : status === "timeout" ? "Tijd om!" : "Boem!";

  return (
    <section className="mine-app">
      <div className="mine-toolbar">
        <div className="mine-stat"><span>Score</span><strong>{isEnded ? finalScore : liveScore}</strong></div>
        <div className="mine-stat"><span>Tijd</span><strong>{String(timeLeft).padStart(2, "0")}</strong></div>
        <div className="mine-stat"><span>Mijnen</span><strong>{String(minesLeft).padStart(2, "0")}</strong></div>
        <div className="mine-stat"><span>Best</span><strong>{highScore}</strong></div>
        <WinButton onClick={openScores}>Highscores</WinButton>
        <WinButton onClick={resetGame}>{status === "idle" ? "Start" : "Restart"}</WinButton>
      </div>

      <div
        className="mine-board"
        aria-label="Minesweeper speelveld"
        onContextMenu={(e) => e.preventDefault()}
      >
        {cells.map((cell, index) => {
          const classes = ["mine-cell"];
          if (cell.revealed) classes.push("revealed");
          if (cell.flagged) classes.push("flagged");
          if (cell.revealed && cell.mine) classes.push("mine");
          if (cell.exploded) classes.push("exploded");
          if (cell.revealed && !cell.mine && cell.adjacent > 0) classes.push("n" + cell.adjacent);
          let label = "";
          if (cell.revealed && cell.mine) label = "*";
          else if (cell.flagged) label = "⚑";
          else if (cell.revealed && cell.adjacent > 0) label = String(cell.adjacent);
          return (
            <button
              key={index}
              type="button"
              className={classes.join(" ")}
              onClick={(e) => onCellClick(index, e)}
              onPointerDown={(e) => onCellPointerDown(index, e)}
              onPointerUp={onCellPointerEnd}
              onPointerLeave={onCellPointerEnd}
              onPointerCancel={onCellPointerEnd}
              onContextMenu={(e) => onCellContextMenu(index, e)}
              aria-label={"Vakje " + (index + 1)}
            >
              {label}
            </button>
          );
        })}
        {isEnded && status !== "saved" && (
          <div className="mine-overlay">
            <form className="mine-score-form" onSubmit={saveScore}>
              <strong>{endLabel}</strong>
              <span>{finalScore} punten</span>
              <label>
                Naam
                <input
                  value={name}
                  maxLength={5}
                  disabled={status === "saving"}
                  onChange={(event) => setName(cleanMineName(event.target.value))}
                  autoFocus
                />
              </label>
              {saveError && <span>Opslaan mislukt</span>}
              <WinButton type="submit" disabled={status === "saving"}>{status === "saving" ? "Opslaan..." : "Opslaan"}</WinButton>
            </form>
          </div>
        )}
        {status === "saved" && (
          <div className="mine-overlay">
            <div className="mine-start">
              <strong>Score opgeslagen</strong>
              <WinButton onClick={resetGame}>Nog een keer</WinButton>
            </div>
          </div>
        )}
      </div>

    </section>
  );
}

function MineScores({ scores }) {
  return (
    <section className="snake-scores mine-scores">
      <h2>Highscores</h2>
      {scores.length ? (
        <ol>
          {scores.map((row, index) => (
            <li key={row.name + row.score + row.date + index}>
              <span>{String(index + 1).padStart(2, "0")}. {row.name}</span>
              <strong>{row.score}</strong>
            </li>
          ))}
        </ol>
      ) : (
        <p>Nog geen scores.</p>
      )}
    </section>
  );
}

function windowTitle(id, lang) {
  const meta = WIN_META[id];
  return lang === "en" && meta.titleEn ? meta.titleEn : meta.title;
}

function taskTitle(id, lang) {
  const meta = WIN_META[id];
  return lang === "en" && meta.taskEn ? meta.taskEn : meta.task;
}

function Hero({ lang, partyDate, headline, headlineNl }) {
  const displayHeadline = lang === "nl" && headlineNl ? headlineNl : headline;
  const dateObj = new Date(partyDate);
  const valid = !isNaN(dateObj.getTime());
  const locale = lang === "nl" ? "nl-NL" : "en-GB";
  const dayName = valid ? dateObj.toLocaleDateString(locale, { weekday: "long" }) : "-";
  const dateStr = valid ? dateObj.toLocaleDateString(locale, { day: "numeric", month: "long" }) : "-";

  return (
    <div className="hero">
      //      <img
      //        className="hero-pictogram"
      //        src="Images/pictogram.png"
      //        alt={lang === "nl" ? "Verjaardagstaart met 27" : "Birthday cake with 27"}
      />
      <h1 aria-label={displayHeadline}>{displayHeadline}</h1>
      <p className="hero-subhead" data-comment-anchor="ea0342d3ad-p-107-9">{t("subhead", lang)}</p>

      <div className="party-meta">
        <div className="meta-card">
          <Icon name="calendar" />
          <span data-comment-anchor="a05d501640-span-125-13">{dayName} · {dateStr}</span>
        </div>
        <div className="meta-card">
          <Icon name="clock" />
          <span className="time-rows">
            <span className="time-row"><span className="time-tag">BBQ</span> 17:00</span>
            <span className="time-row"><span className="time-tag">Party</span> 19:00 → ∞</span>
          </span>
        </div>
        <div className="meta-card">
          <Icon name="pin" />
          <span>Putsebocht 89, 3073HE, Rotterdam</span>
        </div>
      </div>
    </div>
  );
}

function LangToggle({ lang, onChange }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button className={lang === "nl" ? "active" : ""} onClick={() => onChange("nl")}>NL</button>
      <button className={lang === "en" ? "active" : ""} onClick={() => onChange("en")}>EN</button>
    </div>
  );
}

function WinButton({ children, className = "", ...props }) {
  return <button className={"win-button " + className} {...props}>{children}</button>;
}

function WindowFrame({
  id,
  lang,
  title,
  children,
  className = "",
  position,
  zIndex,
  openWindows,
  setOpenWindows,
  minimizedWindows,
  setMinimizedWindows,
  maximizedWindows,
  setMaximizedWindows,
  setWindowPositions,
  bringToFront,
  openWindowsSequentially
}) {
  const open = openWindows[id];
  const minimized = minimizedWindows[id];
  const maximized = maximizedWindows[id];
  const frameRef = React.useRef(null);
  const [activeMenu, setActiveMenu] = React.useState(null);
  const [helpOpen, setHelpOpen] = React.useState(false);
  const helpContent = HELP_CONTENT[id]?.[lang] || HELP_CONTENT[id]?.en || {
    title: "Help",
    body: "Use the desktop icons, Start menu, or File menu to open windows."
  };

  React.useEffect(() => {
    if (!activeMenu) return;
    const closeMenu = () => setActiveMenu(null);
    window.addEventListener("pointerdown", closeMenu);
    window.addEventListener("keydown", closeMenu);
    return () => {
      window.removeEventListener("pointerdown", closeMenu);
      window.removeEventListener("keydown", closeMenu);
    };
  }, [activeMenu]);

  if (!open || minimized) return null;

  const runMenuAction = (action) => {
    setActiveMenu(null);
    action();
  };

  const resetPosition = () => {
    const positions = getResponsiveWindowPositions();
    setWindowPositions((prev) => ({ ...prev, [id]: positions[id] || { x: 8, y: 80 } }));
  };

  const copyTitle = () => {
    const text = title;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => { });
    }
  };

  const openHelp = (event) => {
    event.stopPropagation();
    setActiveMenu(null);
    setHelpOpen(true);
    bringToFront(id);
  };

  const startDrag = (event) => {
    if (maximized) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.preventDefault();
    bringToFront(id);

    const startX = event.clientX;
    const startY = event.clientY;
    const origin = position || { x: 0, y: 0 };

    const onMove = (moveEvent) => {
      const rect = frameRef.current?.getBoundingClientRect();
      const width = rect?.width || 320;
      const height = rect?.height || 240;
      const maxX = Math.max(0, window.innerWidth - Math.min(width, window.innerWidth));
      const maxY = Math.max(0, window.innerHeight - Math.min(height, window.innerHeight) - 42);
      setWindowPositions((prev) => ({
        ...prev,
        [id]: {
          x: clamp(origin.x + moveEvent.clientX - startX, 0, maxX),
          y: clamp(origin.y + moveEvent.clientY - startY, 0, maxY)
        }
      }));
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  const style = maximized ? { zIndex } : { left: position.x, top: position.y, zIndex };

  return (
    <div
      ref={frameRef}
      className={"win-window " + (maximized ? "maximized " : "") + className}
      style={style}
      onMouseDown={() => bringToFront(id)}
    >
      <div className="win-titlebar" onPointerDown={startDrag}>
        <span className="win-title">{title}</span>
        <div className="win-controls" onPointerDown={(e) => e.stopPropagation()}>
          <button className="win-minimize" aria-label={"Minimize " + title} onClick={() => setMinimizedWindows((prev) => ({ ...prev, [id]: true }))}>_</button>
          <button aria-label={(maximized ? "Restore " : "Fullscreen ") + title} onClick={() => setMaximizedWindows((prev) => ({ ...prev, [id]: !prev[id] }))}>
            {maximized ? "❐" : "□"}
          </button>
          <button aria-label={"Close " + title} onClick={() => setOpenWindows((prev) => ({ ...prev, [id]: false }))}>×</button>
        </div>
      </div>
      <div className="win-menubar" onPointerDown={(e) => e.stopPropagation()}>
        <div className="win-menu">
          <button
            className={activeMenu === "file" ? "active" : ""}
            onClick={(e) => {
              e.stopPropagation();
              setActiveMenu(activeMenu === "file" ? null : "file");
            }}
          >
            File
          </button>
          {activeMenu === "file" && (
            <div className="win-menu-dropdown">
              <button onClick={() => runMenuAction(() => openWindowsSequentially(DESKTOP_WIN_IDS))}>Open all windows</button>
              <button onClick={() => runMenuAction(() => setMinimizedWindows((prev) => ({ ...prev, [id]: true })))}>Minimize</button>
              <button onClick={() => runMenuAction(() => setMaximizedWindows((prev) => ({ ...prev, [id]: !prev[id] })))}>
                {maximized ? "Restore" : "Fullscreen"}
              </button>
              <span className="win-menu-separator" />
              <button onClick={() => runMenuAction(() => setOpenWindows((prev) => ({ ...prev, [id]: false })))}>Close</button>
            </div>
          )}
        </div>
        <div className="win-menu">
          <button
            className={activeMenu === "edit" ? "active" : ""}
            onClick={(e) => {
              e.stopPropagation();
              setActiveMenu(activeMenu === "edit" ? null : "edit");
            }}
          >
            Edit
          </button>
          {activeMenu === "edit" && (
            <div className="win-menu-dropdown">
              <button onClick={() => runMenuAction(() => bringToFront(id))}>Bring to front</button>
              <button onClick={() => runMenuAction(resetPosition)}>Reset position</button>
              <button onClick={() => runMenuAction(copyTitle)}>Copy window title</button>
            </div>
          )}
        </div>
        <div className="win-menu">
          <button onClick={openHelp}>Help</button>
        </div>
      </div>
      <div className="win-content">{children}</div>
      {helpOpen && (
        <div className="win-help-dialog" role="dialog" aria-labelledby={id + "-help-title"} onMouseDown={(e) => e.stopPropagation()}>
          <div className="win-help-titlebar">
            <span id={id + "-help-title"}>{helpContent.title}</span>
            <div className="win-controls">
              <button aria-label="Close help" onClick={() => setHelpOpen(false)}>×</button>
            </div>
          </div>
          <div className="win-help-body">
            <div className="win-help-icon" aria-hidden="true">?</div>
            <p><strong>{title}</strong><br />{helpContent.body}</p>
            <div className="win-help-actions">
              <WinButton onClick={() => setHelpOpen(false)}>OK</WinButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DesktopIcons({ lang, openWindow }) {
  return (
    <div className="desktop-icons">
      {DESKTOP_WIN_IDS.map((id) => (
        <button key={id} className="desktop-icon" onClick={() => openWindow(id)} onDoubleClick={() => openWindow(id)}>
          <WinDesktopIcon type={WIN_META[id].icon} />
          <span>{taskTitle(id, lang)}</span>
        </button>
      ))}
    </div>
  );
}

function StartMenu({ lang, openWindow }) {
  return (
    <div className="start-menu">
      <div className="start-rail">josOS</div>
      <div className="start-items">
        {DESKTOP_WIN_IDS.map((id) => (
          <button key={id} onClick={() => openWindow(id)}>
            <WinDesktopIcon type={WIN_META[id].icon} />
            <span>{windowTitle(id, lang)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Taskbar({
  lang,
  setLang,
  startOpen,
  setStartOpen,
  openWindow,
  openWindows,
  minimizedWindows,
  setMinimizedWindows,
  clock
}) {
  const visibleTasks = WIN_IDS.filter((id) => openWindows[id]);
  const time = clock.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="taskbar">
      <button className={"start-button " + (startOpen ? "start-active" : "")} onClick={() => setStartOpen((v) => !v)}>
        <span className="start-mark" aria-hidden="true" />
        <span>Start</span>
      </button>

      <div className="task-buttons">
        {visibleTasks.map((id) => (
          <button
            key={id}
            className={minimizedWindows[id] ? "" : "active"}
            onClick={() => {
              if (minimizedWindows[id]) openWindow(id);
              else setMinimizedWindows((prev) => ({ ...prev, [id]: true }));
            }}
          >
            {taskTitle(id, lang)}
          </button>
        ))}
      </div>

      <LangToggle lang={lang} onChange={setLang} />
      <div className="task-clock">{time}</div>
    </div>
  );
}

function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const lang = tw.lang;
  const [startOpen, setStartOpen] = React.useState(false);
  const [clock, setClock] = React.useState(new Date());
  const [openWindows, setOpenWindows] = React.useState(CLOSED_WINDOWS);
  const [minimizedWindows, setMinimizedWindows] = React.useState({});
  const [maximizedWindows, setMaximizedWindows] = React.useState(INITIAL_MAXIMIZED);
  const [windowPositions, setWindowPositions] = React.useState(() => getResponsiveWindowPositions());
  const [zOrder, setZOrder] = React.useState(INITIAL_Z);
  const [topZ, setTopZ] = React.useState(100);
  const [snakeScores, setSnakeScores] = React.useState([]);
  const [mineScores, setMineScores] = React.useState([]);

  React.useEffect(() => {
    const [w, g, a] = tw.palette || PALETTES[0];
    document.documentElement.style.setProperty("--wine", w);
    document.documentElement.style.setProperty("--gold", g);
    document.documentElement.style.setProperty("--alive", a);
  }, [tw.palette]);

  React.useEffect(() => {
    document.documentElement.lang = lang === "nl" ? "nl" : "en";
  }, [lang]);

  React.useEffect(() => {
    let active = true;
    fetch("/api/snake-scores", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("http " + res.status);
        return res.json();
      })
      .then((data) => {
        if (active) setSnakeScores(normalizeSnakeScores(data.scores));
      })
      .catch(() => {
        if (active) setSnakeScores([]);
      });
    return () => {
      active = false;
    };
  }, []);

  React.useEffect(() => {
    let active = true;
    fetch("/api/mine-scores", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("http " + res.status);
        return res.json();
      })
      .then((data) => {
        if (active) setMineScores(normalizeMineScores(data.scores));
      })
      .catch(() => {
        if (active) setMineScores([]);
      });
    return () => {
      active = false;
    };
  }, []);

  React.useEffect(() => {
    const id = setInterval(() => setClock(new Date()), 1000);
    const onResize = () => {
      setWindowPositions((prev) => {
        const fallback = getResponsiveWindowPositions();
        const next = { ...fallback, ...prev };
        for (const winId of WIN_IDS) {
          const pos = next[winId] || fallback[winId];
          next[winId] = {
            x: clamp(pos.x, 0, Math.max(0, window.innerWidth - 280)),
            y: clamp(pos.y, 0, Math.max(0, window.innerHeight - 110))
          };
        }
        return next;
      });
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const bringToFront = (id) => {
    setTopZ((prevTop) => {
      const nextTop = prevTop + 1;
      setZOrder((prev) => ({ ...prev, [id]: nextTop }));
      return nextTop;
    });
  };

  const openWindowsSequentially = React.useCallback((ids) => {
    ids.forEach((id, index) => {
      window.setTimeout(() => {
        setOpenWindows((prev) => ({ ...prev, [id]: true }));
        setMinimizedWindows((prev) => ({ ...prev, [id]: false }));
        if (OPEN_RESTORED[id]) {
          setMaximizedWindows((prev) => ({ ...prev, [id]: false }));
        }
        bringToFront(id);
      }, index * STAGGER_MS);
    });
  }, []);

  React.useEffect(() => {
    const startupIds = STARTUP_SEQUENCE.filter((id) => INITIAL_OPEN[id]);
    openWindowsSequentially(startupIds);
  }, [openWindowsSequentially]);

  const openWindow = (id) => {
    setOpenWindows((prev) => ({ ...prev, [id]: true }));
    setMinimizedWindows((prev) => ({ ...prev, [id]: false }));
    if (OPEN_RESTORED[id]) {
      setMaximizedWindows((prev) => ({ ...prev, [id]: false }));
    }
    if (window.innerWidth < 700) {
      setWindowPositions((prev) => ({
        ...prev,
        [id]: { x: 6, y: 162 }
      }));
    }
    bringToFront(id);
    setStartOpen(false);
  };

  const saveSnakeScore = async (entry) => {
    const res = await fetch("/api/snake-scores", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(entry)
    });
    if (!res.ok) throw new Error("http " + res.status);
    const data = await res.json();
    setSnakeScores(normalizeSnakeScores(data.scores));
  };

  const saveMineScore = async (entry) => {
    const res = await fetch("/api/mine-scores", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(entry)
    });
    if (!res.ok) throw new Error("http " + res.status);
    const data = await res.json();
    setMineScores(normalizeMineScores(data.scores));
  };

  const fireChaos = () => {
    const colors = ["#000080", "#c0c0c0", "#ffffff", "#808080", "#ff2d55", "#f7e94b"];
    for (let i = 0; i < 120; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.left = "50%";
      c.style.top = "15%";
      c.style.background = colors[i % colors.length];
      c.style.setProperty("--dx", rand(-window.innerWidth / 2, window.innerWidth / 2) + "px");
      c.style.setProperty("--dy", rand(-100, 700) + "px");
      c.style.setProperty("--rot", rand(-720, 720) + "deg");
      c.style.setProperty("--dur", rand(1.6, 3.2) + "s");
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 3400);
    }
  };

  const windowProps = {
    openWindows,
    setOpenWindows,
    minimizedWindows,
    setMinimizedWindows,
    maximizedWindows,
    setMaximizedWindows,
    setWindowPositions,
    bringToFront,
    openWindowsSequentially
  };
  const desktopHasVisibleWindow = WIN_IDS.some((id) => openWindows[id] && !minimizedWindows[id]);

  return (
    <>
      <div className={"desktop " + (desktopHasVisibleWindow ? "has-visible-window" : "desktop-exposed")}>
        <div className="desktop-pattern" aria-hidden="true" />
        <DesktopIcons lang={lang} openWindow={openWindow} />
        {tw.showClickFx && <WindowsClickSound chaos={tw.chaos} />}

        <WindowFrame lang={lang} id="invite" title={windowTitle("invite", lang)} className="win-invite" position={windowPositions.invite} zIndex={zOrder.invite || 20} {...windowProps}>
          <Hero lang={lang} partyDate={tw.partyDate} headline={tw.headline} headlineNl={tw.headlineNl} />
        </WindowFrame>

        <CountdownWidget lang={lang} target={tw.partyDate} />

        <WindowFrame lang={lang} id="setlist" title={windowTitle("setlist", lang)} className="win-setlist" position={windowPositions.setlist} zIndex={zOrder.setlist || 20} {...windowProps}>
          <WhatsHappening lang={lang} />
        </WindowFrame>

        <WindowFrame lang={lang} id="location" title={windowTitle("location", lang)} className="win-location" position={windowPositions.location} zIndex={zOrder.location || 20} {...windowProps}>
          <MapBlock lang={lang} />
        </WindowFrame>

        <WindowFrame lang={lang} id="door" title={windowTitle("door", lang)} className="win-door" position={windowPositions.door} zIndex={zOrder.door || 20} {...windowProps}>
          <DoorGuide lang={lang} />
        </WindowFrame>

        <WindowFrame lang={lang} id="after" title={windowTitle("after", lang)} className="win-after" position={windowPositions.after} zIndex={zOrder.after || 20} {...windowProps}>
          <Sleepover lang={lang} />
        </WindowFrame>

        <WindowFrame lang={lang} id="rsvp" title={windowTitle("rsvp", lang)} className="win-rsvp-window" position={windowPositions.rsvp} zIndex={zOrder.rsvp || 20} {...windowProps}>
          <RSVP lang={lang} />
        </WindowFrame>

        <WindowFrame lang={lang} id="about" title={windowTitle("about", lang)} className="win-about" position={windowPositions.about} zIndex={zOrder.about || 20} {...windowProps}>
          <Footer lang={lang} />
        </WindowFrame>

        <WindowFrame lang={lang} id="snake" title={windowTitle("snake", lang)} className="win-snake" position={windowPositions.snake} zIndex={zOrder.snake || 20} {...windowProps}>
          <SnakeGame scores={snakeScores} onSaveScore={saveSnakeScore} openScores={() => openWindow("snakeScores")} />
        </WindowFrame>

        <WindowFrame lang={lang} id="snakeScores" title={windowTitle("snakeScores", lang)} className="win-snake-scores" position={windowPositions.snakeScores} zIndex={zOrder.snakeScores || 20} {...windowProps}>
          <SnakeScores scores={snakeScores} />
        </WindowFrame>

        <WindowFrame lang={lang} id="mine" title={windowTitle("mine", lang)} className="win-mine" position={windowPositions.mine} zIndex={zOrder.mine || 20} {...windowProps}>
          <Minesweeper scores={mineScores} onSaveScore={saveMineScore} openScores={() => openWindow("mineScores")} />
        </WindowFrame>

        <WindowFrame lang={lang} id="mineScores" title={windowTitle("mineScores", lang)} className="win-mine-scores" position={windowPositions.mineScores} zIndex={zOrder.mineScores || 20} {...windowProps}>
          <MineScores scores={mineScores} />
        </WindowFrame>

        {startOpen && <StartMenu lang={lang} openWindow={openWindow} />}

        <Taskbar
          lang={lang}
          setLang={(v) => setTweak("lang", v)}
          startOpen={startOpen}
          setStartOpen={setStartOpen}
          openWindow={openWindow}
          openWindows={openWindows}
          minimizedWindows={minimizedWindows}
          setMinimizedWindows={setMinimizedWindows}
          clock={clock}
        />
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Language" />
        <TweakRadio
          label="Taal"
          value={lang}
          options={[{ value: "nl", label: "NL" }, { value: "en", label: "EN" }]}
          onChange={(v) => setTweak("lang", v)} />

        <TweakSection label="Party details" />
        <TweakText label="Headline (EN)" value={tw.headline} onChange={(v) => setTweak("headline", v)} />
        <TweakText label="Headline (NL)" value={tw.headlineNl || ""} onChange={(v) => setTweak("headlineNl", v)} />
        <TweakRow label="Date & time">
          <input
            className="twk-field"
            type="datetime-local"
            value={tw.partyDate}
            onChange={(e) => setTweak("partyDate", e.target.value)} />
        </TweakRow>

        <TweakSection label="Vibe" />
        <TweakSlider label="Noise" value={tw.chaos} min={0} max={2.5} step={0.1} onChange={(v) => setTweak("chaos", v)} />
        <TweakToggle label="Click sound" value={tw.showClickFx} onChange={(v) => setTweak("showClickFx", v)} />
        <TweakColor label="Palette" value={tw.palette} options={PALETTES} onChange={(v) => setTweak("palette", v)} />
        <TweakButton label="Louder" onClick={fireChaos} />
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
