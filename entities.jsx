// entities.jsx, typographic decoration system (no emoji).
// Uses character glyphs as decoration: ✦ ✶ ✱ ✗ † ‡ ※ // ◆ ▲ ◯
// Two layers: ambient BgEntities behind sections, FloatingEntities across viewport.

const GLYPHS_DECOR = ["✦","✶","✷","✸","✹","✱","✺","✻","✽","※","†","‡","◆","◇","◯","▲","//","✗"];
const GLYPHS_PUNCH = ["✦","✶","✱","✗","†","◆","▲"];

function rand(a, b) { return a + Math.random() * (b - a); }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

/* ── Background glyphs (per-section ambient) ─────────────────────────── */
function BgEntities({ count = 8, chaos = 1, set }) {
  const glyphs = set || GLYPHS_DECOR;
  const items = React.useMemo(() => {
    const n = Math.round(count * chaos);
    return Array.from({ length: n }).map((_, i) => ({
      key: i,
      ch: pick(glyphs),
      x: rand(2, 98),
      y: rand(5, 95),
      size: rand(18, 44),
      rot: rand(-25, 25),
      delay: rand(0, 6),
      dur: rand(6, 11),
      dy: rand(-12, 12),
      dx: rand(-10, 10),
      hue: pick(['var(--wine)','var(--gold)','var(--ash)','var(--bone)']),
    }));
  }, [count, chaos, glyphs]);
  if (chaos === 0) return null;
  return (
    <div className="bg-entity-layer" aria-hidden="true">
      {items.map(e => (
        <span
          key={e.key}
          className="bg-entity"
          style={{
            left: `${e.x}%`,
            top: `${e.y}%`,
            fontSize: `${e.size}px`,
            color: e.hue,
            transform: `rotate(${e.rot}deg)`,
            animation: `bgDrift${e.key % 3} ${e.dur}s ease-in-out ${e.delay}s infinite alternate`,
            ['--dx']: `${e.dx}px`,
            ['--dy']: `${e.dy}px`,
          }}
        >{e.ch}</span>
      ))}
      <style>{`
        @keyframes bgDrift0 { to { transform: translate(var(--dx), var(--dy)) rotate(15deg); } }
        @keyframes bgDrift1 { to { transform: translate(var(--dx), var(--dy)) rotate(-20deg) scale(1.15); } }
        @keyframes bgDrift2 { to { transform: translate(var(--dx), var(--dy)) rotate(8deg) scale(.85); } }
      `}</style>
    </div>
  );
}

/* ── Foreground drifters, sparks rising ─────────────────────────────── */
function FloatingEntities({ chaos = 1 }) {
  const items = React.useMemo(() => {
    const n = Math.round(10 * chaos);
    return Array.from({ length: n }).map((_, i) => ({
      key: i,
      ch: pick(GLYPHS_PUNCH),
      x: rand(0, 100),
      size: rand(16, 30),
      delay: rand(-25, 0),
      dur: rand(22, 38),
      sway: rand(-40, 40),
      rot: rand(-30, 30),
      hue: pick(['#d4af37','#8b1d2c','#cdbd8e','#c4202c']),
      op: rand(0.25, 0.55),
    }));
  }, [chaos]);
  if (chaos === 0) return null;
  return (
    <div className="entity-layer" aria-hidden="true">
      {items.map(e => (
        <span
          key={e.key}
          className="entity"
          style={{
            left: `${e.x}%`,
            bottom: '-40px',
            fontSize: `${e.size}px`,
            color: e.hue,
            opacity: e.op,
            animation: `floatUp ${e.dur}s linear ${e.delay}s infinite`,
            ['--sway']: `${e.sway}px`,
            ['--rot']: `${e.rot}deg`,
          }}
        >{e.ch}</span>
      ))}
      <style>{`
        @keyframes floatUp {
          0%   { transform: translate(0, 0) rotate(0); }
          50%  { transform: translate(var(--sway), -55vh) rotate(calc(var(--rot) / 2)); }
          100% { transform: translate(0, -110vh) rotate(var(--rot)); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ── Click sparks, small typographic punches, no emoji ──────────────── */
function MusicNoteOnClick({ chaos = 1 }) {
  React.useEffect(() => {
    if (chaos === 0) return;
    const onClick = (e) => {
      if (e.target.closest('[data-omelette-chrome]')) return;
      if (e.target.closest('.leaflet-container')) return;

      // Single big spark glyph
      const spark = document.createElement('div');
      spark.className = 'note-burst';
      spark.textContent = pick(GLYPHS_PUNCH);
      spark.style.left = e.clientX + 'px';
      spark.style.top = e.clientY + 'px';
      spark.style.setProperty('--dx', (rand(-50, 50)) + 'px');
      spark.style.setProperty('--rot', (rand(-90, 90)) + 'deg');
      spark.style.color = pick(['#d4af37','#c4202c','#8b1d2c','#adff5c']);
      spark.style.fontSize = rand(22, 34) + 'px';
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 1400);

      // Spray of confetti rectangles in palette colors
      const colors = ['#d4af37','#8b1d2c','#f0e4c7','#c4202c','#5c0e1c'];
      const n = Math.round(6 * chaos);
      for (let i = 0; i < n; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = e.clientX + 'px';
        c.style.top = e.clientY + 'px';
        c.style.background = colors[i % colors.length];
        c.style.setProperty('--dx', rand(-120, 120) + 'px');
        c.style.setProperty('--dy', rand(-120, 30) + 'px');
        c.style.setProperty('--rot', rand(-360, 360) + 'deg');
        c.style.setProperty('--dur', rand(1.1, 1.8) + 's');
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 2000);
      }
    };
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [chaos]);
  return null;
}

// Mascot removed, no cursor follower. Kept as no-op shim so app.jsx doesn't crash on toggle.
function Mascot() { return null; }

Object.assign(window, {
  BgEntities, FloatingEntities, MusicNoteOnClick, Mascot,
  GLYPHS_DECOR, GLYPHS_PUNCH, pick, rand,
});
