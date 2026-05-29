// sections.jsx, page sections. Gig-poster tone. No emoji, no cute talk.

const T = {
  // hero
  subhead: {
    nl: "kom je het vieren",
    en: "Against all expectations, I'm still alive. Come celebrate."
  },
  scroll: { nl: "DETAILS HIERONDER", en: "DETAILS BELOW" },

  // countdown
  cdEyebrow: { nl: "Aftellen", en: "Counting down" },
  cdTitle: { nl: "Hoelang tot ik kan worden misbewezen", en: "How long until I can be disproven" },
  days: { nl: "dagen", en: "days" },
  hours: { nl: "uren", en: "hours" },
  mins: { nl: "minuten", en: "minutes" },
  secs: { nl: "seconden", en: "seconds" },
  itStarted: {
    nl: "HET IS ZOVER · STA IK NOG OVEREIND · KOM CONTROLEREN",
    en: "THE TIME HAS COME · AM I STILL UPRIGHT · COME CHECK"
  },

  // agenda (was cards)
  whEyebrow: { nl: "Agenda", en: "Agenda" },
  whTitle: { nl: "Wat is er te beleven?", en: "What's there to experience?" },
  whSub: {
    nl: "Geen draaiboek. Wel een ritme. Onderstaand de tracks van de avond, volgorde optioneel, intensiteit niet.",
    en: "No script. There's a rhythm. The tracks of the night below, order optional, intensity not."
  },

  cards: [
    {
      n: "01",
      title: { nl: "BBQ", en: "BBQ" },
      body: { nl: "Neem je eigen vlees mee.", en: "Bring your own meat." },
      tag: null,
      color: "dark"
    },
    {
      n: "02",
      title: { nl: "BYOB", en: "BYOB" },
      body: { nl: "Ik ben te arm om alle drank te betalen, dus neem zelf wat mee.", en: "I'm too poor to pay for all the drinks, so bring some." },
      tag: null,
      color: "gold"
    },
    {
      n: "03",
      title: { nl: "JAM", en: "JAM" },
      body: { nl: "Gitaar amp, bass amp, paar trommels aanwezig.", en: "Guitar amp, bass amp, a few drums available." },
      tag: null,
      color: "wine"
    },
    {
      n: "04",
      title: { nl: "OVERNACHTEN", en: "STAY OVER" },
      body: { nl: "Als je wilt blijven, neem iets om in te slapen. Of slaap niet.", en: "If you want to stay, bring something to sleep in. Or don't sleep." },
      tag: null,
      color: ""
    },
    {
      n: "05",
      title: { nl: "KUT SPELLETJES", en: "CRAP GAMES" },
      body: { nl: "Playstation, Racing Wheel, Poker en meer.", en: "Playstation, Racing Wheel, Poker and more." },
      tag: null,
      color: "wine"
    }],


  // map
  mapEyebrow: { nl: "Locatie", en: "Location" },
  mapTitle: { nl: "Waar het gebeurt", en: "Where it happens" },
  mapSub: { nl: "Putsebocht 89, Rotterdam-Zuid.", en: "Putsebocht 89, Rotterdam-Zuid." },
  tabLoc: { nl: "Locatie", en: "Location" },
  mapsDialogTitle: { nl: "Open locatie", en: "Open location" },
  mapsDialogBody: { nl: "Waarmee wil je de route openen?", en: "Which app should open the route?" },
  mapsGoogle: { nl: "Google Maps", en: "Google Maps" },
  mapsApple: { nl: "Apple Kaarten", en: "Apple Maps" },
  mapsCancel: { nl: "Annuleren", en: "Cancel" },
  keyTitle: { nl: "Legenda", en: "Legend" },
  keyPartyL: { nl: "De scene", en: "The scene" },
  keyPartyD: { nl: "Niet aanbellen, bel me gewoon.", en: "Don't ring the bell, just call me." },
  keyParkL: { nl: "Parkeren OK", en: "Parking OK" },
  keyParkD: { nl: "Betaald op straat tot 23:00. Daarna gratis. Lees de borden.", en: "Paid street parking until 11pm. Free after. Read the signs." },
  keyBikeL: { nl: "Fietsend", en: "Bike rack" },
  keyBikeD: { nl: "Genoeg plek binnen, veilig voor dieven.", en: "Plenty of room inside, safe from thieves." },
  byTrain: { nl: "NS naar Rotterdam Zuid (5 min lopen). Metro D/E naar Maashaven (8 min).", en: "NS to Rotterdam Zuid (5 min walk). Metro D/E to Maashaven (8 min)." },
  byCar: { nl: "Auto kan. Parkeren is sport. Reken op 10 min rondrijden.", en: "Car works. Parking is a sport. Budget 10 min of circling." },
  popupParty: { nl: "Hier woon ik. Bel aan of schreeuw.", en: "I live here. Ring or yell." },

  // door guide
  doorEyebrow: { nl: "De Deur", en: "The door" },
  doorTitle: { nl: "Hoe je binnenkomt", en: "How you get in" },
  doorSub: {
    nl: "Drie foto's, aftellen naar de juiste deur. En één deur waar je écht niet moet kloppen.",
    en: "Three photos, counting down to the right door. And one door where you should absolutely not knock."
  },
  doorNo: { nl: "NIET HIER", en: "NOT HERE" },

  // RSVP
  rEye: { nl: "Antwoord", en: "Respond" },
  rTitle: { nl: "Doe je mee?", en: "Are you in?" },
  rSub: {
    nl: "Geen druk. Elke niet-aanwezige brengt me statistisch dichter bij de club van 27. Geen druk dus.",
    en: "No pressure. Each non-attendee moves me statistically closer to the club. So, no pressure."
  },
  yes: { nl: "IK KOM", en: "I'M IN" },
  no: { nl: "ik haal het niet", en: "I won't make it" },
  yesResp: { nl: "Genoteerd, tot dan!", en: "Logged. Save your voice for the choruses." },
  noResp: { nl: "Genoteerd. Ik ben toch een beetje teleurgesteld :(", en: "Logged. Only a little bit dissapointing." },
  changeMind: { nl: "toch wel komen?", en: "changed your mind?" },
  namePh: { nl: "je naam", en: "your name" },
  send: { nl: "stuur", en: "send" },
  voteErr: { nl: "ging mis, probeer nog 's", en: "something broke, try again" },

  // after hours / sleepover renamed
  sEye: { nl: "Blijf je slapen?", en: "After hours" },
  sTitle: { nl: "Wie blijft, blijft", en: "Whoever stays, stays" },
  sSub: {
    nl: "Breng iets om in te slapen, of slaap niet.",
    en: "Bring something to sleep in, or don't sleep at all."
  },
  sBring: { nl: "Wat mee te nemen", en: "Bring" },
  sList: {
    nl: ["Slaapzak of dekens", "Matje, luchtbed of doorzettingsvermogen"],
    en: ["Sleeping bag or blankets", "Mat, air bed, or sheer willpower"]
  },
  sBreakfast: { nl: "Ontbijt: croissants en sterke koffie zodra iemand kan staan.", en: "Breakfast: croissants and strong coffee whenever someone can stand." },

  // footer
  fBig: { nl: "NOG VRAGEN?", en: "QUESTIONS?" },
  fTiny: { nl: "Vragen, app me. Geen vragen, ook prima. Kom gewoon.", en: "Questions, text me. No questions, also fine. Just come." }
};

const t = (k, lang) => T[k] ? T[k][lang] ?? T[k].en ?? T[k] : k;

/* ─────────────────────────────────────────────────────────────────────
   Countdown
   ───────────────────────────────────────────────────────────────────── */
function Countdown({ lang, target }) {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const ms = Math.max(0, new Date(target).getTime() - now);
  const dd = Math.floor(ms / 86400000);
  const hh = Math.floor(ms % 86400000 / 3600000);
  const mm = Math.floor(ms % 3600000 / 60000);
  const ss = Math.floor(ms % 60000 / 1000);
  const isLive = ms === 0;

  const cells = [
    { n: dd, l: t('days', lang), r: '-2deg' },
    { n: hh, l: t('hours', lang), r: '1.5deg' },
    { n: mm, l: t('mins', lang), r: '-1.5deg' },
    { n: ss, l: t('secs', lang), r: '2deg' }];


  return (
    <section className="bit" style={{ position: 'relative' }}>
      <BgEntities count={5} chaos={1} />
      {isLive ?
        <div className="typed" style={{
          textAlign: 'center',
          fontSize: 'clamp(20px, 3.4vw, 32px)',
          color: 'var(--alive)',
          padding: 24,
          position: 'relative',
          zIndex: 1,
          maxWidth: 760,
          margin: '0 auto',
          border: '2px dashed var(--alive)',
          borderRadius: 4,
          letterSpacing: '.08em'
        }}>
          {t('itStarted', lang)}
        </div> :

        <div className="countdown" style={{ position: 'relative', zIndex: 1 }}>
          {cells.map((c, i) =>
            <div key={i + '-' + c.n} className="cd-cell" style={{ '--r': c.r }}>
              <span className="n">{String(c.n).padStart(2, '0')}</span>
              <span className="l">{c.l}</span>
            </div>
          )}
        </div>
      }
    </section>);

}

/* ─────────────────────────────────────────────────────────────────────
   Countdown desktop widget (bottom-right, always visible)
   ───────────────────────────────────────────────────────────────────── */
function CountdownWidget({ lang, target }) {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const ms = Math.max(0, new Date(target).getTime() - now);
  const dd = Math.floor(ms / 86400000);
  const hh = Math.floor(ms % 86400000 / 3600000);
  const mm = Math.floor(ms % 3600000 / 60000);
  const ss = Math.floor(ms % 60000 / 1000);
  const isLive = ms === 0;

  const cells = [
    { n: dd, l: t('days', lang) },
    { n: hh, l: t('hours', lang) },
    { n: mm, l: t('mins', lang) },
    { n: ss, l: t('secs', lang) }
  ];

  return (
    <div className="countdown-widget" role="complementary" aria-label={t('doorTitle', lang)}>
      <div className="countdown-widget-title">
        <span className="countdown-widget-dot" aria-hidden="true" />
        {lang === 'nl' ? 'Aftellen' : 'Counting down'}
      </div>
      {isLive ? (
        <div className="countdown-widget-live">{t('itStarted', lang)}</div>
      ) : (
        <div className="countdown-widget-cells">
          {cells.map((c, i) => (
            <div key={i} className="countdown-widget-cell">
              <span className="n">{String(c.n).padStart(2, '0')}</span>
              <span className="l">{c.l}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Setlist (was "What's happening")
   ───────────────────────────────────────────────────────────────────── */
function WhatsHappening({ lang }) {
  return (
    <section className="bit" style={{ position: 'relative' }}>
      <BgEntities count={5} chaos={1} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-eyebrow">{t('whEyebrow', lang)}</span>
        <h2 className="section-title" data-comment-anchor="aa2b153790-h2-309-9">
          {t('whTitle', lang)} <span className="squig">/</span>
        </h2>

        <div className="cards">
          {T.cards.map((c, i) =>
            <div
              key={i}
              className={"card " + c.color}
              style={{ '--r': `${(i % 2 === 0 ? -1 : 1) * (1 + i % 3 * 0.6)}deg` }}>

              <h3>{c.title[lang]}</h3>
              {c.body && c.body[lang] && <p>{c.body[lang]}</p>}
              {c.tag && <span className="tag">{c.tag[lang]}</span>}
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ─────────────────────────────────────────────────────────────────────
   Marquee
   ───────────────────────────────────────────────────────────────────── */
function Marquee({ lang }) {
  const words = lang === 'nl' ?
    ["27 EN STIL HIER", "FEESTJE", "BYOB", "JAMSESSIE", "BLIJF", "PUTSEBOCHT 89", "ZATERDAG", "19:00"] :
    ["27 AND STILL HERE", "PARTY", "BYOB", "JAM", "AFTER HOURS", "PUTSEBOCHT 89", "SATURDAY", "7PM"];
  const all = [...words, ...words, ...words, ...words];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-inner">
        {all.map((w, i) =>
          <React.Fragment key={i}>
            <span>{w}</span>
            <span className="dot" />
          </React.Fragment>
        )}
      </div>
    </div>);

}

/* ─────────────────────────────────────────────────────────────────────
   Map
   ───────────────────────────────────────────────────────────────────── */
const PARTY_COORDS = [51.8947778, 4.4976827];
const PARKING_SPOTS = [
  { coords: [51.89150, 4.50100], type: 'ok', labelNl: 'Putsebocht (oost)', labelEn: 'Putsebocht (east)', noteNl: 'Betaald tot 23:00. Daarna gratis.', noteEn: 'Paid until 11pm. Free after.' },
  { coords: [51.89050, 4.50150], type: 'ok', labelNl: 'Riederlaan', labelEn: 'Riederlaan', noteNl: 'Brede straat, vaak plek.', noteEn: 'Wide street, usually room.' },
  { coords: [51.89200, 4.50220], type: 'ok', labelNl: 'Mijnsherenlaan', labelEn: 'Mijnsherenlaan', noteNl: '3 min lopen. Prima.', noteEn: '3 min walk. Fine.' },
  { coords: [51.89060, 4.49930], type: 'bad', labelNl: 'Inrit buurman', labelEn: "Neighbour's drive", noteNl: 'Nee. Echt nee. Helemaal nee.', noteEn: 'No. Really no. Absolutely no.' },
  { coords: [51.89160, 4.49980], type: 'bad', labelNl: 'Bushalte', labelEn: 'Bus stop', noteNl: 'Bus is groot. Auto kleiner. Doe niet.', noteEn: 'Bus is large. Car smaller. Do not.' },
  { coords: [51.89090, 4.50190], type: 'bike', labelNl: 'Fietsend', labelEn: 'Bike rack', noteNl: 'Slot mee. Rotterdam.', noteEn: 'Bring a lock. Rotterdam.' }];


/* ─────────────────────────────────────────────────────────────────────
   DoorGuide, count down 3 → 2 → 1 to the right door, then "not here"
   ───────────────────────────────────────────────────────────────────── */
function DoorGuide({ lang }) {
  const rootRef = React.useRef(null);
  const scrollRef = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' && window.matchMedia('(max-width: 700px)').matches
  );

  React.useEffect(() => {
    if (!rootRef.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      }),
      { threshold: 0.15 }
    );
    io.observe(rootRef.current);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 700px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler);
    };
  }, []);

  React.useEffect(() => {
    if (!isMobile) return;
    const el = scrollRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let pointerId = null;
    let moved = false;

    const onDown = (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      isDown = true;
      moved = false;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      pointerId = e.pointerId;
      el.classList.add('dragging');
    };
    const onMove = (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = startScroll - dx;
    };
    const onUp = (e) => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove('dragging');
      if (moved && e.pointerType === 'mouse') {
        try { el.setPointerCapture && el.releasePointerCapture(pointerId); } catch (_) { }
      }
      pointerId = null;
    };

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);
    el.addEventListener('pointerleave', onUp);
    return () => {
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointercancel', onUp);
      el.removeEventListener('pointerleave', onUp);
    };
  }, [isMobile]);

  const steps = [
    { src: 'Images/3.jpg', step: '3', r: '-3deg' },
    { src: 'Images/2.jpg', step: '2', r: '2deg' },
    { src: 'Images/1.jpg', step: '1', r: '-1.5deg' },
    { src: 'Images/nee.jpg', step: '×', r: '3deg', forbidden: true }
  ];

  const validSteps = steps.filter((s) => !s.forbidden);
  const trackSteps = isMobile ? validSteps : [...validSteps, ...validSteps];

  return (
    <section
      ref={rootRef}
      className={"bit door-guide" + (inView ? " in" : "")}
      style={{ position: 'relative' }}>
      <BgEntities count={4} chaos={1} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-eyebrow">{t('doorEyebrow', lang)}</span>
        <h2 className="section-title">{t('doorTitle', lang)}</h2>

        <div
          ref={scrollRef}
          className={"door-strip door-strip-scroll" + (isMobile ? " door-strip-drag" : "")}>
          <div className="door-track" aria-hidden="false">
            {trackSteps.map((s, i) => (
              <figure
                key={i}
                className="door-card"
                style={{ '--r': s.r, '--d': '0ms' }}>
                <div className="door-photo">
                  <img src={s.src} alt={'step ' + s.step} loading="lazy" />
                  <span className="door-step" aria-hidden="true">{s.step}</span>
                </div>
              </figure>
            ))}
          </div>
        </div>

        <div className="door-strip door-strip-forbidden">
          {steps.filter(s => s.forbidden).map((s, i) => (
            <figure
              key={i}
              className="door-card forbidden"
              style={{ '--r': s.r, '--d': (i * 140) + 'ms' }}>
              <div className="door-photo">
                <img src={s.src} alt={t('doorNo', lang)} loading="lazy" />
                <svg className="door-x" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
                  <line x1="8" y1="8" x2="92" y2="92" />
                  <line x1="92" y1="8" x2="8" y2="92" />
                </svg>
                <div className="door-stamp typed">{t('doorNo', lang)}</div>
                <span className="door-step" aria-hidden="true">{s.step}</span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapBlock({ lang }) {
  const [tab, setTab] = React.useState('loc');
  const [mapsDialogOpen, setMapsDialogOpen] = React.useState(false);
  const mapRef = React.useRef(null);
  const elRef = React.useRef(null);
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Putsebocht+89,+Rotterdam';
  const appleMapsUrl = 'https://maps.apple.com/?q=Putsebocht%2089%2C%20Rotterdam';

  const openMapsUrl = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setMapsDialogOpen(false);
  };

  React.useEffect(() => {
    if (!elRef.current || mapRef.current) return;
    const L = window.L;
    const map = L.map(elRef.current, {
      center: PARTY_COORDS,
      zoom: 16,
      scrollWheelZoom: false,
      zoomControl: true
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OSM',
      maxZoom: 19
    }).addTo(map);

    const partyIcon = L.divIcon({
      className: '',
      html: `<button class="party-pin" type="button" aria-label="Open in Maps"><svg viewBox="0 0 40 56" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 0C9 0 0 9 0 20c0 13 16 30 19.2 33.4a1.1 1.1 0 0 0 1.6 0C24 50 40 33 40 20 40 9 31 0 20 0z" fill="#ff1a2a" stroke="#ffe5e5" stroke-width="2"/>
        <circle cx="20" cy="20" r="7" fill="#1a070a"/>
      </svg></button>`,
      iconSize: [40, 56],
      iconAnchor: [20, 54]
    });
    const partyMarker = L.marker(PARTY_COORDS, { icon: partyIcon }).addTo(map);

    const parkingLayer = L.layerGroup();
    PARKING_SPOTS.forEach((p) => {
      const ico = p.type === 'bad' ? '✕' : p.type === 'bike' ? 'B' : 'P';
      const cls = p.type === 'bad' ? 'parking-pin bad' : p.type === 'bike' ? 'parking-pin bike' : 'parking-pin';
      const m = L.marker(p.coords, {
        icon: L.divIcon({
          className: '',
          html: `<div class="${cls}">${ico}</div>`,
          iconSize: [44, 44],
          iconAnchor: [22, 22]
        })
      });
      m.bindPopup(
        `<strong>${lang === 'nl' ? p.labelNl : p.labelEn}</strong>${lang === 'nl' ? p.noteNl : p.noteEn}`
      );
      parkingLayer.addLayer(m);
    });

    mapRef.current = { map, partyMarker, parkingLayer, L };
    const openMapsDialog = (e) => {
      if (!e.target.closest('.party-pin')) return;
      e.preventDefault();
      setMapsDialogOpen(true);
    };
    elRef.current.addEventListener('click', openMapsDialog);
    setTimeout(() => map.invalidateSize(), 200);

    return () => {
      if (elRef.current) elRef.current.removeEventListener('click', openMapsDialog);
      map.remove();
      mapRef.current = null;
    };
  }, []);

  React.useEffect(() => {
    if (!mapRef.current) return;
    const { map, parkingLayer } = mapRef.current;
    if (tab === 'park') {
      parkingLayer.addTo(map);
      map.setView(PARTY_COORDS, 17, { animate: true });
    } else {
      parkingLayer.remove();
      map.setView(PARTY_COORDS, 16, { animate: true });
    }
  }, [tab]);

  React.useEffect(() => {
    if (!mapRef.current) return;
    const { parkingLayer } = mapRef.current;
    let i = 0;
    parkingLayer.eachLayer((m) => {
      const p = PARKING_SPOTS[i++];
      m.setPopupContent(
        `<strong>${lang === 'nl' ? p.labelNl : p.labelEn}</strong>${lang === 'nl' ? p.noteNl : p.noteEn}`
      );
    });
  }, [lang]);

  return (
    <section className="bit" style={{ position: 'relative' }}>
      <BgEntities count={4} chaos={1} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-eyebrow">{t('mapEyebrow', lang)}</span>
        <h2 className="section-title">
          {t('mapTitle', lang)}
        </h2>
        <p className="section-sub">{t('mapSub', lang)}</p>

        <div className="map-tabs">
          <button
            className={"map-tab" + (tab === 'loc' ? " active" : "")}
            onClick={() => {
              setTab('loc');
              setMapsDialogOpen(true);
            }}>
            {t('tabLoc', lang)}
          </button>
        </div>

        {mapsDialogOpen && (
          <div className="win-help-dialog map-open-dialog" role="dialog" aria-modal="true" aria-labelledby="maps-dialog-title">
            <div className="win-help-titlebar">
              <span id="maps-dialog-title">{t('mapsDialogTitle', lang)}</span>
              <div className="win-controls">
                <button aria-label={t('mapsCancel', lang)} onClick={() => setMapsDialogOpen(false)}>×</button>
              </div>
            </div>
            <div className="win-help-body">
              <div className="win-help-icon" aria-hidden="true">?</div>
              <p>{t('mapsDialogBody', lang)}</p>
              <div className="win-help-actions map-choice-actions">
                <button className="win-button" onClick={() => openMapsUrl(googleMapsUrl)}>{t('mapsGoogle', lang)}</button>
                <button className="win-button" onClick={() => openMapsUrl(appleMapsUrl)}>{t('mapsApple', lang)}</button>
                <button className="win-button" onClick={() => setMapsDialogOpen(false)}>{t('mapsCancel', lang)}</button>
              </div>
            </div>
          </div>
        )}

        <div className="map-wrap">
          <div className="map-frame">
            <div ref={elRef} style={{ height: '100%' }} />
          </div>

          <div className="map-key">
            <h3>{t('keyTitle', lang)}</h3>
            <div className="key-row">
              <div className="key-dot" style={{ '--c': 'var(--wine)', color: 'var(--paper)' }}>×</div>
              <div><b>{t('keyPartyL', lang)}</b><div>{t('keyPartyD', lang)}</div></div>
            </div>
            <div className="key-row">
              <div className="key-dot" style={{ '--c': 'var(--gold)' }}>P</div>
              <div><b>{t('keyParkL', lang)}</b><div>{t('keyParkD', lang)}</div></div>
            </div>
            <div className="key-row">
              <div className="key-dot" style={{ '--c': 'var(--bone)' }}>B</div>
              <div><b>{t('keyBikeL', lang)}</b><div>{t('keyBikeD', lang)}</div></div>
            </div>
            <hr style={{ border: 0, borderTop: '1px dashed var(--ink)', opacity: .3, margin: '6px 0' }} />
            <div style={{ fontSize: 13, lineHeight: 1.5 }}><b className="typed" style={{ letterSpacing: '.12em' }}>NS · METRO ·</b> {t('byTrain', lang)}</div>
            <div style={{ fontSize: 13, lineHeight: 1.5 }}><b className="typed" style={{ letterSpacing: '.12em' }}>AUTO ·</b> {t('byCar', lang)}</div>
          </div>
        </div>
      </div>
    </section>);

}

/* ─────────────────────────────────────────────────────────────────────
   RSVP
   ───────────────────────────────────────────────────────────────────── */
function RSVP({ lang }) {
  // phase: 'idle' | 'naming' | 'submitting' | 'done' | 'error'
  const storageKey = 'feest-2026-rsvp';
  const [phase, setPhase] = React.useState('idle');
  const [answer, setAnswer] = React.useState(null);
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState(null);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (phase === 'naming' && inputRef.current) inputRef.current.focus();
  }, [phase]);

  React.useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(storageKey) || 'null');
      if (!saved || (saved.answer !== 'yes' && saved.answer !== 'no')) return;
      setAnswer(saved.answer);
      setName(saved.name || '');
      setPhase('done');
    } catch (err) {
      // Ignore corrupt or unavailable local storage; the RSVP still works normally.
    }
  }, []);

  const rememberVote = (vote) => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(vote));
    } catch (err) {
      // Voting should not depend on local storage availability.
    }
  };

  const burst = (e, color) => {
    const palette = color === 'no' ?
      ['#5c0e1c', '#7d7567', '#14100a', '#8b1d2c'] :
      ['#d4af37', '#8b1d2c', '#f0e4c7', '#c4202c', '#adff5c', '#e8c869'];
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const n = color === 'no' ? 18 : 70;
    for (let i = 0; i < n; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = cx + 'px';
      c.style.top = cy + 'px';
      c.style.background = palette[i % palette.length];
      c.style.setProperty('--dx', rand(-400, 400) + 'px');
      c.style.setProperty('--dy', rand(-400, 50) + 'px');
      c.style.setProperty('--rot', rand(-720, 720) + 'deg');
      c.style.setProperty('--dur', rand(1.2, 2.4) + 's');
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 2500);
    }
  };

  const postVote = async (body) => {
    const res = await fetch('/api/vote', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error('http ' + res.status);
    return res.json();
  };

  const onYes = (e) => {
    burst(e, 'yes');
    setAnswer('yes');
    setError(null);
    setPhase('naming');
  };

  const onNo = async (e) => {
    burst(e, 'no');
    setAnswer('no');
    setError(null);
    setPhase('submitting');
    try {
      await postVote({ answer: 'no' });
      rememberVote({ answer: 'no' });
      setPhase('done');
    } catch (err) {
      setError(err);
      setPhase('error');
    }
  };

  const submitName = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    setPhase('submitting');
    try {
      await postVote({ answer: 'yes', name: trimmed });
      rememberVote({ answer: 'yes', name: trimmed });
      setPhase('done');
    } catch (err) {
      setError(err);
      setPhase('error');
    }
  };

  return (
    <section className="bit rsvp" style={{ position: 'relative' }}>
      <BgEntities count={4} chaos={1} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title" style={{ margin: '0 auto 10px' }}>
          {t('rTitle', lang)}
        </h2>
        <p className="section-sub" style={{ margin: '0 auto 28px' }}>{t('rSub', lang)}</p>

        <div className="rsvp-buttons">
          {phase === 'idle' && (
            <>
              <button className="rsvp-btn" onClick={onYes}>✓ {t('yes', lang)}</button>
              <button className="rsvp-btn no" onClick={onNo}>{t('no', lang)}</button>
            </>
          )}

          {(phase === 'naming' || phase === 'submitting' || phase === 'error') && answer === 'yes' && (
            <form className="rsvp-name-form" onSubmit={submitName}>
              <input
                ref={inputRef}
                className="rsvp-name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('namePh', lang)}
                maxLength={40}
                autoComplete="off"
                disabled={phase === 'submitting'}
              />
              <button
                type="submit"
                className="rsvp-btn rsvp-send"
                disabled={phase === 'submitting' || !name.trim()}
                aria-label={t('send', lang)}>✓</button>
            </form>
          )}
        </div>

        {phase === 'done' && (
          <div key={answer} className="rsvp-result">
            {answer === 'yes' ? t('yesResp', lang) : t('noResp', lang)}
            {answer === 'no' && (
              <div style={{ marginTop: 14 }}>
                <button
                  className="rsvp-btn"
                  onClick={(e) => {
                    burst(e, 'yes');
                    setAnswer('yes');
                    setName('');
                    setError(null);
                    setPhase('naming');
                  }}>
                  {t('changeMind', lang)}
                </button>
              </div>
            )}
          </div>
        )}

        {phase === 'error' && (
          <div className="rsvp-result" style={{ color: '#c4202c' }}>
            {t('voteErr', lang)}
          </div>
        )}
      </div>
    </section>);

}

/* ─────────────────────────────────────────────────────────────────────
   After Hours (was Sleepover)
   ───────────────────────────────────────────────────────────────────── */
function Sleepover({ lang }) {
  const stars = React.useMemo(
    () => Array.from({ length: 24 }).map(() => ({
      ch: pick(["✦", "✶", "✱", "✷", "✺", "★", "◆"]),
      x: rand(0, 100),
      y: rand(0, 100),
      delay: rand(0, 2),
      size: rand(11, 22)
    })),
    []
  );

  return (
    <section className="bit" style={{ position: 'relative' }}>
      <div className="sleepover">
        <div className="stars" aria-hidden="true">
          {stars.map((s, i) =>
            <span key={i} style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              fontSize: `${s.size}px`,
              animationDelay: `${s.delay}s`
            }}>{s.ch}</span>
          )}
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
          <span className="section-eyebrow">{t('sEye', lang)}</span>
          <p className="section-sub" style={{ color: 'var(--bone)' }}>{t('sSub', lang)}</p>
          <div className="sleepover-list">
            <h3>{t('sBring', lang)}</h3>
            <ul>
              {t('sList', lang).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}

/* ─────────────────────────────────────────────────────────────────────
   Footer
   ───────────────────────────────────────────────────────────────────── */
function Footer({ lang }) {
  return (
    <footer className="footer">
      <div className="footer-divider" aria-hidden="true">✦ &nbsp; ✦ &nbsp; ✦ &nbsp; ✦ &nbsp; ✦</div>
      <div className="big">{t('fBig', lang)}</div>
      <div className="tiny">{t('fTiny', lang)}</div>
    </footer>);

}

Object.assign(window, {
  T, t, Countdown, CountdownWidget, WhatsHappening, Marquee, MapBlock, DoorGuide, RSVP, Sleepover, Footer,
  PARTY_COORDS, PARKING_SPOTS
});
