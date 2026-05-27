// app.jsx, root: hero + topbar + tweaks. Gig-poster tone. No emoji.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "nl",
  "chaos": 1,
  "showClickFx": true,
  "palette": ["#ff2d55", "#f7e94b", "#f7e94b"],
  "partyDate": "2026-06-19T19:00",
  "myName": "josso",
  "headline": "I haven't died yet",
  "headlineNl": "Ik ben nog niet dood"
} /*EDITMODE-END*/;

const PALETTES = [
["#ff2d55", "#f7e94b", "#f7e94b"], // punk red + highlighter yellow
["#ff5722", "#f7e94b", "#f7e94b"], // safety orange + yellow
["#000000", "#ff2d55", "#ff2d55"], // black ink + screamer red
["#1a73e8", "#f7e94b", "#f7e94b"], // ballpoint blue + yellow
["#ff2d55", "#7fffd4", "#7fffd4"]  // pink + mint risograph
];

/* ── Inline SVG icon set ─────────────────────────────────────────────── */
const Icon = ({ name, size = 20 }) => {
  const common = {
    width: size, height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  switch (name) {
    case 'calendar':
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="1" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>);

    case 'clock':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>);

    case 'pin':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>);

    case 'star':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 2l2.6 6.3 6.8.6-5.2 4.5 1.6 6.6L12 16.8 6.2 20l1.6-6.6L2.6 8.9l6.8-.6z" />
        </svg>);

    case 'down':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>);

    default:
      return null;
  }
};

/* ── Hero ───────────────────────────────────────────────────────────── */
function Hero({ lang, partyDate, headline, headlineNl }) {
  const displayHeadline = lang === 'nl' && headlineNl ? headlineNl : headline;
  const dateObj = new Date(partyDate);
  const valid = !isNaN(dateObj.getTime());
  const locale = lang === 'nl' ? 'nl-NL' : 'en-GB';
  const dayName = valid ? dateObj.toLocaleDateString(locale, { weekday: 'long' }) : '-';
  const dateStr = valid ? dateObj.toLocaleDateString(locale, { day: 'numeric', month: 'long' }) : '-';
  const timeStr = valid ? dateObj.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' }) : '-';

  const ringText = lang === 'nl' ?
  '✦ NOG IN LEVEN ✦ NOG IN LEVEN ✦ NOG IN LEVEN ✦ NOG IN LEVEN ✦' :
  '✦ STILL ALIVE ✦ STILL ALIVE ✦ STILL ALIVE ✦ STILL ALIVE ✦';

  const words = displayHeadline.trim().split(/\s+/);
  const colors = ['paper', 'wine', 'gold', 'paper'];

  return (
    <header className="hero">
      <BgEntities count={8} chaos={1} />
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <h1 aria-label={displayHeadline}>
          {words.map((w, i) => {
            const isLast = i === words.length - 1;
            if (isLast && words.length > 1) {
              return <span key={i} className="word yet">{(i > 0 ? '\u00A0' : '') + w}</span>;
            }
            return (
              <span key={i} className={`word ${colors[i % colors.length]}`}>
                {(i > 0 ? '\u00A0' : '') + w}
              </span>);

          })}
        </h1>

        <p className="hero-subhead" data-comment-anchor="ea0342d3ad-p-107-9">{t('subhead', lang)}</p>

        <div className="age-stamp" aria-label="27">
          <svg className="ring" viewBox="0 0 200 200" aria-hidden="true">
            <defs>
              <path id="circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
              <textPath href="#circle" startOffset="0">{ringText}</textPath>
            </text>
          </svg>
          <div className="num">27</div>
        </div>

        <div className="party-meta">
          <div className="meta-card" style={{ '--r': '-2deg' }}>
            <Icon name="calendar" />
            <span data-comment-anchor="a05d501640-span-125-13">{dayName} · {dateStr}</span>
          </div>
          <div className="meta-card" style={{ '--r': '2deg' }}>
            <Icon name="clock" />
            <span className="time-rows">
              <span className="time-row"><span className="time-tag">BBQ</span> 17:00</span>
              <span className="time-row"><span className="time-tag">Party</span> 19:00 → ∞</span>
            </span>
          </div>
          <div className="meta-card" style={{ '--r': '-1deg' }}>
            <Icon name="pin" />
            <span>Putsebocht 89, R'dam</span>
          </div>
        </div>

      </div>
    </header>);

}

/* ── Language toggle ────────────────────────────────────────────────── */
function LangToggle({ lang, onChange }) {
  const ref = React.useRef(null);
  const [thumbStyle, setThumbStyle] = React.useState({});
  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const btns = ref.current.querySelectorAll('button');
    const target = lang === 'nl' ? btns[0] : btns[1];
    if (!target) return;
    setThumbStyle({
      left: target.offsetLeft + 'px',
      width: target.offsetWidth + 'px'
    });
  }, [lang]);
  return (
    <div className="lang-toggle" ref={ref}>
      <div className="thumb" style={thumbStyle} />
      <button className={lang === 'nl' ? 'active' : ''} onClick={() => onChange('nl')}>NL</button>
      <button className={lang === 'en' ? 'active' : ''} onClick={() => onChange('en')}>EN</button>
    </div>);

}

/* ── App root ───────────────────────────────────────────────────────── */
function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const lang = tw.lang;

  React.useEffect(() => {
    const [w, g, a] = tw.palette || PALETTES[0];
    document.documentElement.style.setProperty('--wine', w);
    document.documentElement.style.setProperty('--gold', g);
    document.documentElement.style.setProperty('--alive', a);
  }, [tw.palette]);

  React.useEffect(() => {
    document.documentElement.lang = lang === 'nl' ? 'nl' : 'en';
  }, [lang]);

  const fireChaos = () => {
    const colors = ['#d4af37', '#8b1d2c', '#f0e4c7', '#c4202c', '#adff5c', '#e8c869', '#5c0e1c'];
    for (let i = 0; i < 120; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = '50%';
      c.style.top = '15%';
      c.style.background = colors[i % colors.length];
      c.style.setProperty('--dx', rand(-window.innerWidth / 2, window.innerWidth / 2) + 'px');
      c.style.setProperty('--dy', rand(-100, 700) + 'px');
      c.style.setProperty('--rot', rand(-720, 720) + 'deg');
      c.style.setProperty('--dur', rand(1.6, 3.2) + 's');
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 3400);
    }
    for (let i = 0; i < 18; i++) {
      const n = document.createElement('div');
      n.className = 'note-burst';
      n.textContent = pick(GLYPHS_PUNCH);
      n.style.left = window.innerWidth / 2 + 'px';
      n.style.top = window.innerHeight * 0.2 + 'px';
      n.style.color = pick(colors);
      n.style.setProperty('--dx', rand(-window.innerWidth / 2, window.innerWidth / 2) + 'px');
      n.style.setProperty('--rot', rand(-90, 90) + 'deg');
      document.body.appendChild(n);
      setTimeout(() => n.remove(), 1600);
    }
  };

  return (
    <>
      <div className="topbar">
        <LangToggle lang={lang} onChange={(v) => setTweak('lang', v)} />
      </div>

      <FloatingEntities chaos={tw.chaos} />
      {tw.showClickFx && <MusicNoteOnClick chaos={tw.chaos} />}

      <div className="page">
        <Hero lang={lang} partyDate={tw.partyDate} headline={tw.headline} headlineNl={tw.headlineNl} />
        <Countdown lang={lang} target={tw.partyDate} />
        <WhatsHappening lang={lang} />
        <MapBlock lang={lang} />
        <DoorGuide lang={lang} />
        <Sleepover lang={lang} />
        <RSVP lang={lang} />
        <Footer lang={lang} />
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Language" />
        <TweakRadio
          label="Taal"
          value={lang}
          options={[{ value: 'nl', label: 'NL' }, { value: 'en', label: 'EN' }]}
          onChange={(v) => setTweak('lang', v)} />
        

        <TweakSection label="Party details" />
        <TweakText
          label="Your name"
          value={tw.myName}
          onChange={(v) => setTweak('myName', v)} />
        
        <TweakText
          label="Headline (EN)"
          value={tw.headline}
          onChange={(v) => setTweak('headline', v)} />
        
        <TweakText
          label="Headline (NL)"
          value={tw.headlineNl || ''}
          onChange={(v) => setTweak('headlineNl', v)} />
        
        <TweakRow label="Date & time">
          <input
            className="twk-field"
            type="datetime-local"
            value={tw.partyDate}
            onChange={(e) => setTweak('partyDate', e.target.value)} />
          
        </TweakRow>

        <TweakSection label="Vibe" />
        <TweakSlider
          label="Noise"
          value={tw.chaos}
          min={0} max={2.5} step={0.1}
          onChange={(v) => setTweak('chaos', v)} />
        
        <TweakToggle
          label="Click sparks"
          value={tw.showClickFx}
          onChange={(v) => setTweak('showClickFx', v)} />
        
        <TweakColor
          label="Palette"
          value={tw.palette}
          options={PALETTES}
          onChange={(v) => setTweak('palette', v)} />
        
        <TweakButton label="✦ Louder" onClick={fireChaos} />
      </TweaksPanel>
    </>);

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);