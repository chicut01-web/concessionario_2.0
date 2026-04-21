
/* ===== src/data.jsx ===== */
/* global window */
// All data for the Secar prototype. Attached to window for cross-script access.

const CARS = [
  { id: 1,  brand: 'Volkswagen', model: 'Golf 1.5 TSI Life',        year: 2023, km: 18500, fuel: 'Benzina',  trans: 'Manuale',     price: 21900, monthly: 249, badge: 'Km 0',        color: 'Grigio Urano',  tone: 'slate'  },
  { id: 2,  brand: 'Fiat',       model: '500e La Prima by Bocelli', year: 2024, km: 3200,  fuel: 'Elettrico', trans: 'Automatico',  price: 24500, monthly: 279, badge: 'Km 0',        color: 'Celestial Blue', tone: 'sky'   },
  { id: 3,  brand: 'Audi',       model: 'A3 Sportback 35 TDI',      year: 2022, km: 42100, fuel: 'Diesel',   trans: 'S tronic',    price: 27800, monthly: 319, badge: 'Certificata',  color: 'Bianco Ibis',    tone: 'zinc'  },
  { id: 4,  brand: 'BMW',        model: 'Serie 1 118d Msport',      year: 2023, km: 28700, fuel: 'Diesel',   trans: 'Automatico',  price: 31500, monthly: 359, badge: 'Certificata',  color: 'Nero Saphir',    tone: 'neutral' },
  { id: 5,  brand: 'Toyota',     model: 'Yaris Hybrid Trend',       year: 2023, km: 22400, fuel: 'Ibrido',   trans: 'Automatico',  price: 19900, monthly: 229, badge: 'Occasione',    color: 'Rosso Scarlatto',tone: 'rose'  },
  { id: 6,  brand: 'Peugeot',    model: '208 GT Line PureTech',     year: 2022, km: 35600, fuel: 'Benzina',  trans: 'Manuale',     price: 16800, monthly: 189, badge: null,           color: 'Blu Vertigo',    tone: 'indigo'},
  { id: 7,  brand: 'Tesla',      model: 'Model 3 Long Range',       year: 2023, km: 24100, fuel: 'Elettrico', trans: 'Automatico', price: 41900, monthly: 469, badge: 'Certificata',  color: 'Bianco Perla',   tone: 'stone' },
  { id: 8,  brand: 'Renault',    model: 'Clio E-Tech Full Hybrid',  year: 2024, km: 8900,  fuel: 'Ibrido',   trans: 'Automatico',  price: 18500, monthly: 209, badge: 'Km 0',         color: 'Blu Iron',       tone: 'blue'  },
  { id: 9,  brand: 'Jeep',       model: 'Compass 4xe Limited',      year: 2022, km: 51200, fuel: 'Ibrido',   trans: 'Automatico',  price: 28900, monthly: 329, badge: null,           color: 'Granite Crystal',tone: 'stone' },
  { id: 10, brand: 'Mercedes',   model: 'Classe A 180d Premium',    year: 2023, km: 31800, fuel: 'Diesel',   trans: 'Automatico',  price: 33500, monthly: 379, badge: 'Certificata',  color: 'Grigio Montagna',tone: 'zinc'  },
  { id: 11, brand: 'Citroen',    model: 'C3 Aircross Shine',        year: 2024, km: 1800,  fuel: 'Benzina',  trans: 'Automatico',  price: 22400, monthly: 259, badge: 'Km 0',         color: 'Bianco Natural', tone: 'neutral'},
  { id: 12, brand: 'Hyundai',    model: 'Tucson 1.6 T-GDI Hybrid',  year: 2023, km: 26700, fuel: 'Ibrido',   trans: 'Automatico',  price: 29900, monthly: 339, badge: 'Occasione',    color: 'Teal Scuro',     tone: 'teal'  },
];

const BRANDS = ['Volkswagen','Fiat','Audi','BMW','Toyota','Peugeot','Tesla','Renault','Jeep','Mercedes','Citroen','Hyundai','Ford','Opel','Kia','Seat','Skoda','Dacia','Nissan','Mazda'];

const TESTIMONIALS = [
  { name: 'Marco D.',        city: 'Salerno',  stars: 5, text: 'Zero sorprese. I chilometri erano quelli dichiarati, la pratica chiusa in tre giorni. Servizio onesto come ormai se ne vedono pochi.' },
  { name: 'Giulia R.',       city: 'Battipaglia', stars: 5, text: 'Mi hanno proposto una rata che rientrava nel mio budget senza forzare la mano. Alla consegna l\u2019auto era come nuova, lavata e con il pieno.' },
  { name: 'Antonio P.',      city: 'Cava de\u2019 Tirreni', stars: 5, text: 'Venivo da un\u2019esperienza pessima con un\u2019altra concessionaria. Qui trasparenza totale: report ispezione scritto, garanzia reale, nessun costo nascosto.' },
  { name: 'Chiara M.',       city: 'Nocera',   stars: 5, text: 'Prima auto, tante paranoie. Mi hanno spiegato tutto con calma, senza trattarmi come se non capissi. Super consigliati.' },
  { name: 'Vincenzo L.',     city: 'Pontecagnano', stars: 4, text: 'Ho preso un\u2019ibrida km 0 a un prezzo che non ho trovato altrove nel Salernitano. La garanzia 12 mesi fa la differenza.' },
  { name: 'Fabiana C.',      city: 'Agropoli', stars: 5, text: 'Ritiro del mio usato valutato bene, senza le solite trattative estenuanti. Processo pulito dall\u2019inizio alla fine.' },
];

const FAQ = [
  { q: 'Cosa significa che i chilometri sono certificati?',
    a: 'Ogni auto passa attraverso un controllo documentale (libretto, tagliandi, storico assicurativo) e un test diagnostico OBD con report scritto che ti consegniamo insieme all\u2019auto. Se i km dichiarati non corrispondono, ti rimborsiamo l\u2019intero importo entro 14 giorni.' },
  { q: 'Come funziona la garanzia 12 mesi?',
    a: 'Copertura completa su motore, cambio, elettronica e impianto frenante per 12 mesi dalla data di consegna, senza massimale di chilometraggio. Estendibile a 24 o 36 mesi al momento dell\u2019acquisto.' },
  { q: 'Posso finanziare l\u2019auto anche senza busta paga?',
    a: 'S\u00ec. Lavoriamo con 6 istituti finanziari diversi, quindi possiamo costruire piani per lavoratori autonomi, stagionali e pensionati. La preventazione \u00e8 gratuita e non vincolante.' },
  { q: 'Ritirate il mio usato?',
    a: 'Sempre. Inserisci i dati nella sezione \u201cValuta il tuo usato\u201d e ricevi una valutazione indicativa in 24 ore. La valutazione finale avviene in sede con una prova su strada.' },
  { q: 'Posso fare un test drive prima di decidere?',
    a: 'Certo. Prenota un test drive dalla scheda della vettura o chiamandoci. Ti basta portare patente e documento d\u2019identit\u00e0.' },
  { q: 'Che differenza c\u2019\u00e8 tra km 0 e \u201cCertificata\u201d?',
    a: 'Le km 0 sono auto immatricolate dal concessionario e mai usate da un cliente privato. Le Certificate sono usate che hanno superato il nostro check a 140 punti. Entrambe escono con 12 mesi di garanzia.' },
];

const TEAM = [
  { name: 'Luca Sabbatino',  role: 'Fondatore & CEO',         years: 18, bio: 'Cresciuto tra motori, tagliandi e libretti di circolazione. Ha fondato Secar nel 2011.' },
  { name: 'Elena Ferrara',   role: 'Responsabile Vendite',    years: 11, bio: 'Si occupa del primo contatto e del match tra cliente e vettura. Non vende mai quello che non comprerebbe per s\u00e9.' },
  { name: 'Davide Esposito', role: 'Capo Officina',           years: 22, bio: 'Ogni auto passa dalle sue mani prima di arrivare in salone. \u00c8 la ragione per cui possiamo certificare i km.' },
  { name: 'Sara Conte',      role: 'Area Finanziamenti',      years: 7,  bio: 'Costruisce i piani finanziari su misura e ti spiega i numeri in chiaro, senza scorciatoie.' },
];

const STEPS = [
  { n: 1, t: 'Scegli l\u2019auto',     d: 'Esplora il nostro parco online, filtra per alimentazione o budget e prenota un test drive in pochi click.' },
  { n: 2, t: 'Prova e verifica',      d: 'Ti consegniamo il report dei 140 controlli, ti accompagniamo in strada, rispondiamo a ogni domanda.' },
  { n: 3, t: 'Porta a casa',          d: 'Finanziamento, permuta e passaggio di propriet\u00e0 li gestiamo noi. Tu ritiri l\u2019auto pronta, con il pieno.' },
];

window.SECAR = { CARS, BRANDS, TESTIMONIALS, FAQ, TEAM, STEPS };


/* ===== src/primitives.jsx ===== */
/* global React, window */
const { useState, useEffect, useRef, useMemo } = React;

// Small helper: reveal on scroll with IntersectionObserver (fallback if framer motion busy)
function useReveal(opts = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setShown(true); io.unobserve(e.target); }
      });
    }, { threshold: opts.threshold ?? 0.15, rootMargin: opts.rootMargin ?? '0px 0px -60px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

// Reveal wrapper using IO + CSS transitions (simpler, robust)
function Reveal({ as: Tag = 'div', delay = 0, y = 24, className = '', children, ...rest }) {
  const [ref, shown] = useReveal();
  const style = {
    transition: `opacity 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 800ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
    opacity: shown ? 1 : 0,
    transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
    willChange: 'opacity, transform',
  };
  return <Tag ref={ref} style={style} className={className} {...rest}>{children}</Tag>;
}

function SectionLabel({ n, children, className = '' }) {
  return (
    <div className={`flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-ink-500 ${className}`}>
      <span className="inline-block w-8 h-px bg-ink-300" />
      <span>{n}</span>
      <span>·</span>
      <span>{children}</span>
    </div>
  );
}

function Pill({ children, tone = 'ink', className = '' }) {
  const tones = {
    ink:    'bg-ink-100 text-ink-700 border-ink-200',
    brand:  'bg-brand-50 text-brand-700 border-brand-100',
    accent: 'bg-accent-300/20 text-brand-800 border-accent-300/40',
    green:  'bg-emerald-50 text-emerald-800 border-emerald-200',
    amber:  'bg-amber-50 text-amber-800 border-amber-200',
  };
  return <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium ${tones[tone]} ${className}`}>{children}</span>;
}

function Button({ variant = 'primary', className = '', children, ...rest }) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-full select-none';
  const variants = {
    primary:   'bg-brand-700 text-white hover:bg-brand-800 px-5 py-3 shadow-sm hover:shadow-md',
    dark:      'bg-ink-900 text-white hover:bg-ink-800 px-5 py-3',
    outline:   'border border-ink-200 hover:border-ink-400 text-ink-900 px-5 py-3 hover:bg-ink-50',
    ghost:     'text-ink-700 hover:bg-ink-100 px-4 py-2',
    accent:    'bg-accent-400 text-ink-900 hover:bg-accent-300 px-5 py-3',
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...rest}>{children}</button>;
}

// Iconography — minimal line icons
const Icon = ({ name, className = 'w-5 h-5', stroke = 1.6 }) => {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    check:    <><path {...common} d="M4 12l5 5L20 6"/></>,
    shield:   <><path {...common} d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/></>,
    gauge:    <><circle cx="12" cy="12" r="9" {...common}/><path {...common} d="M12 12l4-3"/><path {...common} d="M8 14a4 4 0 018 0"/></>,
    euro:     <><path {...common} d="M18 8a6 6 0 100 8"/><path {...common} d="M4 10h10M4 14h10"/></>,
    arrow:    <><path {...common} d="M5 12h14M13 6l6 6-6 6"/></>,
    arrowDn:  <><path {...common} d="M12 5v14M6 13l6 6 6-6"/></>,
    spark:    <><path {...common} d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3"/></>,
    search:   <><circle cx="11" cy="11" r="7" {...common}/><path {...common} d="M20 20l-3-3"/></>,
    phone:    <><path {...common} d="M4 4h4l2 5-2 1a12 12 0 006 6l1-2 5 2v4a2 2 0 01-2 2A18 18 0 014 6a2 2 0 012-2z"/></>,
    mail:     <><rect x="3" y="5" width="18" height="14" rx="2" {...common}/><path {...common} d="M3 7l9 6 9-6"/></>,
    pin:      <><path {...common} d="M12 22s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5" {...common}/></>,
    star:     <><path {...common} d="M12 3l2.9 6 6.6.6-5 4.5 1.5 6.4L12 17.8 5.9 20.5 7.5 14l-5-4.5 6.6-.6z"/></>,
    plus:     <><path {...common} d="M12 5v14M5 12h14"/></>,
    minus:    <><path {...common} d="M5 12h14"/></>,
    x:        <><path {...common} d="M6 6l12 12M18 6L6 18"/></>,
    menu:     <><path {...common} d="M4 7h16M4 12h16M4 17h16"/></>,
    tag:      <><path {...common} d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="7.5" r="1.5" {...common}/></>,
    bolt:     <><path {...common} d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></>,
    leaf:     <><path {...common} d="M4 20c0-9 8-16 16-16 0 10-7 17-16 16z"/><path {...common} d="M4 20L14 10"/></>,
    droplet:  <><path {...common} d="M12 3s7 7 7 12a7 7 0 01-14 0c0-5 7-12 7-12z"/></>,
    cog:      <><circle cx="12" cy="12" r="3" {...common}/><path {...common} d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.08A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.08A1.65 1.65 0 004.6 9 1.65 1.65 0 004.27 7.18l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6h0a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.08a1.65 1.65 0 001 1.51h0a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9v0a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.08a1.65 1.65 0 00-1.51 1z"/></>,
    filter:   <><path {...common} d="M3 5h18M6 12h12M10 19h4"/></>,
  };
  return <svg viewBox="0 0 24 24" className={className}>{paths[name]}</svg>;
}

// Small monospace label for placeholders
function PlaceholderNote({ children }) {
  return <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">{children}</span>;
}

// Fuel icon mapping
function FuelIcon({ fuel, className = 'w-3.5 h-3.5' }) {
  const map = { 'Elettrico': 'bolt', 'Ibrido': 'leaf', 'Benzina': 'droplet', 'Diesel': 'droplet' };
  return <Icon name={map[fuel] || 'droplet'} className={className} stroke={1.8} />;
}

Object.assign(window, { Reveal, SectionLabel, Pill, Button, Icon, PlaceholderNote, FuelIcon, useReveal });


/* ===== src/car-svg.jsx ===== */
/* global React, window */

// Clean, stylized side-view car SVG. Placeholder for real 3D render.
// Designed to be legible at any size, no logos/branded shapes.
function CarSVG({ className = '', tone = 'brand', shadow = true }) {
  const bodyFill = tone === 'brand' ? 'url(#carBodyBrand)' : 'url(#carBodyInk)';
  const roofFill = tone === 'brand' ? 'oklch(0.22 0.10 255)' : 'oklch(0.20 0.05 255)';
  const glassFill = 'oklch(0.88 0.04 220 / 0.85)';
  const trim = tone === 'brand' ? 'oklch(0.68 0.12 220)' : 'oklch(0.55 0.08 255)';

  return (
    <svg viewBox="0 0 800 280" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="carBodyBrand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.42 0.16 255)" />
          <stop offset="0.55" stopColor="oklch(0.32 0.14 255)" />
          <stop offset="1" stopColor="oklch(0.20 0.10 255)" />
        </linearGradient>
        <linearGradient id="carBodyInk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.32 0.03 255)" />
          <stop offset="1" stopColor="oklch(0.16 0.03 255)" />
        </linearGradient>
        <linearGradient id="glassHighlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.96 0.02 220)" stopOpacity="0.7" />
          <stop offset="1" stopColor="oklch(0.70 0.08 220)" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="wheelGrad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="oklch(0.28 0.02 255)" />
          <stop offset="0.7" stopColor="oklch(0.16 0.02 255)" />
          <stop offset="1" stopColor="oklch(0.10 0.01 255)" />
        </radialGradient>
        <radialGradient id="rimGrad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="oklch(0.85 0.01 255)" />
          <stop offset="1" stopColor="oklch(0.55 0.02 255)" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      {shadow && (
        <ellipse cx="400" cy="250" rx="320" ry="14" fill="oklch(0.14 0.04 255 / 0.22)" filter="blur(4px)" />
      )}

      {/* Lower body — main curve */}
      <path
        d="M 70 200
           Q 70 175, 95 165
           L 175 150
           Q 215 110, 290 100
           L 480 96
           Q 540 96, 580 130
           L 645 155
           L 715 165
           Q 740 170, 740 195
           L 740 215
           Q 740 225, 730 225
           L 85 225
           Q 70 225, 70 215 Z"
        fill={bodyFill}
      />

      {/* Roof / cabin */}
      <path
        d="M 215 112
           Q 250 65, 315 62
           L 455 62
           Q 510 62, 550 100
           L 560 118
           L 215 118 Z"
        fill={roofFill}
      />

      {/* Windows */}
      <path
        d="M 240 108
           Q 265 76, 315 74
           L 380 74
           L 380 108 Z"
        fill={glassFill}
      />
      <path
        d="M 390 74
           L 450 74
           Q 500 74, 535 105
           L 540 108
           L 390 108 Z"
        fill={glassFill}
      />
      <path
        d="M 240 108
           Q 265 76, 315 74
           L 380 74
           L 380 90
           Q 305 92, 270 108 Z"
        fill="url(#glassHighlight)"
        opacity="0.5"
      />

      {/* Window pillar */}
      <rect x="382" y="74" width="6" height="34" fill={roofFill} />

      {/* Body highlight stripe */}
      <path
        d="M 105 175 L 720 175"
        stroke={trim}
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <path
        d="M 120 195 L 710 195"
        stroke="oklch(1 0 0 / 0.18)"
        strokeWidth="1"
      />

      {/* Door handles */}
      <rect x="305" y="163" width="26" height="4" rx="2" fill="oklch(1 0 0 / 0.35)" />
      <rect x="440" y="163" width="26" height="4" rx="2" fill="oklch(1 0 0 / 0.35)" />
      {/* Door split */}
      <path d="M 378 118 L 378 210" stroke="oklch(0 0 0 / 0.25)" strokeWidth="1" />

      {/* Headlight */}
      <path
        d="M 720 175 Q 735 178, 738 190 L 735 200 L 715 200 Z"
        fill="oklch(0.95 0.06 90 / 0.95)"
      />
      <circle cx="725" cy="188" r="3" fill="oklch(1 0 0)" />

      {/* Taillight */}
      <path
        d="M 80 175 L 110 175 L 110 195 L 82 195 Q 76 195, 76 188 Z"
        fill="oklch(0.55 0.20 25 / 0.9)"
      />

      {/* Grille hint */}
      <path d="M 690 210 L 720 210" stroke="oklch(0 0 0 / 0.35)" strokeWidth="2" />

      {/* Wheel arches */}
      <circle cx="200" cy="225" r="48" fill="oklch(0.10 0.04 255)" />
      <circle cx="600" cy="225" r="48" fill="oklch(0.10 0.04 255)" />

      {/* Wheels */}
      <g>
        <circle cx="200" cy="225" r="40" fill="url(#wheelGrad)" />
        <circle cx="200" cy="225" r="24" fill="url(#rimGrad)" />
        <circle cx="200" cy="225" r="6" fill="oklch(0.30 0.02 255)" />
        {/* Spokes */}
        {[0,60,120,180,240,300].map(a => (
          <rect key={a} x="198" y="205" width="4" height="20" fill="oklch(0.72 0.01 255)"
                transform={`rotate(${a} 200 225)`} />
        ))}
      </g>
      <g>
        <circle cx="600" cy="225" r="40" fill="url(#wheelGrad)" />
        <circle cx="600" cy="225" r="24" fill="url(#rimGrad)" />
        <circle cx="600" cy="225" r="6" fill="oklch(0.30 0.02 255)" />
        {[0,60,120,180,240,300].map(a => (
          <rect key={a} x="598" y="205" width="4" height="20" fill="oklch(0.72 0.01 255)"
                transform={`rotate(${a} 600 225)`} />
        ))}
      </g>

      {/* Light bloom accent (only when brand tone) */}
      {tone === 'brand' && (
        <circle cx="725" cy="188" r="18" fill="oklch(0.95 0.06 90)" opacity="0.18" />
      )}
    </svg>
  );
}

window.CarSVG = CarSVG;


/* ===== src/sections-top.jsx ===== */
/* global React, window */
// (dedup) const { useState, useEffect, useRef } = React;
const FM = window.Motion || window.FramerMotion || {};
const { motion, useScroll, useTransform, useSpring } = FM;

/* =====================================================
   NAV
===================================================== */
function Nav({ onOpenTweaks }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#parco',       label: 'Parco auto' },
    { href: '#come-funziona', label: 'Come funziona' },
    { href: '#valuta',      label: 'Valuta il tuo usato' },
    { href: '#team',        label: 'Team' },
    { href: '#contatti',    label: 'Contatti' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-ink-200/70' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 h-16 md:h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative w-8 h-8 rounded-lg bg-brand-700 grid place-items-center text-white font-display font-bold">
            s
            <span className="absolute -right-0.5 -top-0.5 w-2 h-2 rounded-full bg-accent-400 ring-2 ring-paper" />
          </span>
          <span className="font-display font-semibold text-[17px] tracking-tight text-ink-900">secar<span className="text-brand-600">.</span></span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-[13.5px] text-ink-700">
          {links.map(l => (
            <a key={l.href} href={l.href} className="link-underline hover:text-ink-900">{l.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="tel:+39089000000" className="text-[13px] text-ink-700 hover:text-ink-900 flex items-center gap-1.5 mr-2">
            <Icon name="phone" className="w-4 h-4" /> 089 000 000
          </a>
          <Button variant="outline" className="text-sm py-2.5">Test drive</Button>
          <Button variant="dark" className="text-sm py-2.5">Sfoglia il parco</Button>
        </div>

        <button className="lg:hidden text-ink-900 p-2" onClick={() => setMobileOpen(v => !v)} aria-label="menu">
          <Icon name={mobileOpen ? 'x' : 'menu'} className="w-6 h-6" />
        </button>
      </div>

      {/* mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${mobileOpen ? 'max-h-[420px]' : 'max-h-0'}`}>
        <div className="bg-paper border-t border-ink-200 px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="py-2 text-ink-800 border-b border-ink-100">{l.label}</a>
          ))}
          <div className="flex gap-2 pt-2">
            <Button variant="outline" className="flex-1 text-sm py-2.5">Test drive</Button>
            <Button variant="dark" className="flex-1 text-sm py-2.5">Parco auto</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* =====================================================
   HERO — scroll-driven car + entry animation
===================================================== */
function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  // Car moves horizontally and rotates subtly as user scrolls
  const carX       = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const carRotate  = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const carScale   = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const bgY        = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const titleY     = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const titleOpac  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const smoothX    = useSpring(carX,      { stiffness: 80, damping: 20 });
  const smoothRot  = useSpring(carRotate, { stiffness: 80, damping: 20 });
  const smoothScale= useSpring(carScale,  { stiffness: 80, damping: 20 });

  return (
    <section ref={sectionRef} id="top" className="relative min-h-[100svh] pt-24 md:pt-28 pb-20 overflow-hidden">
      {/* soft bg */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 grid-paper opacity-60" />
        <div className="absolute -top-48 -right-48 w-[720px] h-[720px] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-[520px] h-[520px] rounded-full bg-accent-300/30 blur-3xl" />
      </motion.div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <Pill tone="brand">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Aperto oggi · 9:00 – 19:30
          </Pill>
          <Pill tone="ink"><Icon name="pin" className="w-3 h-3" /> Salerno · SS18</Pill>
          <Pill tone="accent"><Icon name="star" className="w-3 h-3" /> 4.9 / 5 su 312 recensioni</Pill>
        </motion.div>

        <motion.div style={{ y: titleY, opacity: titleOpac }}>
          <h1 className="font-display font-semibold text-ink-900 leading-[1.02] tracking-tight text-[44px] sm:text-[64px] md:text-[84px] lg:text-[104px]">
            <motion.span
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              La tua prossima auto,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
              className="block text-brand-700 italic font-medium"
            >
              semplificata.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-[560px] text-ink-600 text-[17px] md:text-[19px] leading-relaxed"
          >
            Usate e km 0 multimarca a Salerno. Chilometri certificati, 12 mesi di garanzia reale
            e finanziamenti su misura — senza sorprese, senza fretta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button variant="dark" className="text-[15px]">
              Sfoglia il parco auto
              <Icon name="arrow" className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="text-[15px]">
              Prenota un test drive
            </Button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl"
          >
            {[
              { k: '140', u: 'controlli', s: 'per ogni vettura' },
              { k: '12',  u: 'mesi',      s: 'di garanzia inclusa' },
              { k: '6',   u: 'istituti',  s: 'finanziari partner' },
              { k: '14y', u: '',          s: 'di attività in Campania' },
            ].map((x, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-[40px] md:text-[48px] font-semibold text-ink-900 leading-none">{x.k}</span>
                  {x.u && <span className="text-ink-500 text-sm">{x.u}</span>}
                </div>
                <div className="mt-2 text-[13px] text-ink-600">{x.s}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating car — scroll-driven */}
      <motion.div
        style={{
          x: smoothX,
          rotate: smoothRot,
          scale: smoothScale,
        }}
        initial={{ x: '40%', opacity: 0 }}
        animate={{ x: '0%', opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
        className="pointer-events-none absolute right-[-12%] sm:right-[-8%] md:right-[-4%] lg:right-[-2%] bottom-[2%] md:bottom-[6%] w-[680px] sm:w-[780px] md:w-[900px] lg:w-[1060px] z-10 car-shadow"
      >
        <CarSVG className="w-full h-auto" tone="brand" />
        {/* motion lines */}
        <svg className="absolute -left-6 top-[52%] w-56 h-20 pointer-events-none opacity-60" viewBox="0 0 200 60">
          <g stroke="oklch(0.45 0.16 255 / 0.4)" strokeWidth="2" strokeLinecap="round">
            <line x1="0" y1="10" x2="70" y2="10" />
            <line x1="20" y1="28" x2="110" y2="28" />
            <line x1="0" y1="46" x2="60" y2="46" />
          </g>
        </svg>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-2 text-ink-500 text-[11px] font-mono uppercase tracking-[0.25em]"
      >
        scrolla
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <Icon name="arrowDn" className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* =====================================================
   BRAND MARQUEE — logos as monospace wordmarks (placeholder)
===================================================== */
function BrandMarquee() {
  const brands = window.SECAR.BRANDS;
  const row = [...brands, ...brands];
  return (
    <section aria-label="Marche trattate" className="border-y border-ink-200 bg-paper py-6 overflow-hidden">
      <div className="flex gap-12 marquee-track whitespace-nowrap">
        {row.map((b, i) => (
          <div key={i} className="flex items-center gap-12 text-ink-500 shrink-0">
            <span className="font-display text-[18px] tracking-tight">{b}</span>
            <span className="w-1 h-1 rounded-full bg-ink-300" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   TRANSPARENCY — 3 pillar cards appearing on scroll
===================================================== */
function Transparency() {
  const pillars = [
    {
      n: '01',
      icon: 'gauge',
      title: 'Chilometri certificati',
      desc: 'Verifica documentale, diagnostica OBD e report scritto consegnato con ogni auto. Se i km non corrispondono, rimborso totale entro 14 giorni.',
      tags: ['Report 140 punti', 'Storico documentale', 'Garanzia rimborso'],
    },
    {
      n: '02',
      icon: 'shield',
      title: 'Garanzia 12 mesi',
      desc: 'Copertura motore, cambio, elettronica e impianto frenante. Nessun massimale di chilometraggio, estendibile fino a 36 mesi.',
      tags: ['No massimale km', 'Officina autorizzata', 'Estensione 24/36 mesi'],
    },
    {
      n: '03',
      icon: 'euro',
      title: 'Finanziamenti su misura',
      desc: 'Sei istituti finanziari, piani per autonomi e stagionali, permuta e anticipo flessibile. Preventazione gratuita e non vincolante.',
      tags: ['6 istituti partner', 'Permuta valutata', 'Nessuna penale'],
    },
  ];
  return (
    <section id="trasparenza" className="relative py-24 md:py-36 bg-paper">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14 md:mb-20">
          <div className="md:col-span-7">
            <SectionLabel n="01">Trasparenza</SectionLabel>
            <h2 className="mt-5 font-display text-[36px] sm:text-[48px] md:text-[64px] leading-[1.04] tracking-tight font-semibold text-ink-900 text-balance">
              Tre promesse che ti mettiamo <span className="text-brand-700">per iscritto</span>.
            </h2>
          </div>
          <div className="md:col-span-5 md:pb-3">
            <p className="text-ink-600 text-[16px] leading-relaxed">
              Comprare un&rsquo;auto usata è una decisione importante. Noi la vogliamo rendere
              facile riducendo l&rsquo;unica cosa che spaventa davvero: il dubbio.
              Ogni vettura esce dal nostro salone con un dossier che puoi verificare.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {pillars.map((p, i) => (
            <Reveal key={i} delay={i * 100}
              className="group relative bg-white rounded-3xl border border-ink-200 p-7 md:p-8 flex flex-col hover:border-brand-300 hover:shadow-[0_20px_40px_-20px_oklch(0.32_0.14_255/0.3)] transition-all">
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] text-ink-400">{p.n}</span>
                <div className="w-11 h-11 rounded-xl bg-brand-50 grid place-items-center text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                  <Icon name={p.icon} className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display text-[22px] md:text-[24px] font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-3 text-[14.5px] text-ink-600 leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-7 flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <span key={t} className="text-[11.5px] px-2.5 py-1 rounded-full bg-ink-50 text-ink-700 border border-ink-100">{t}</span>
                ))}
              </div>
              {/* hover reveal link */}
              <a href="#" className="mt-6 text-[13px] font-medium text-brand-700 inline-flex items-center gap-1.5 opacity-80 hover:opacity-100">
                Approfondisci
                <Icon name="arrow" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" stroke={2} />
              </a>
            </Reveal>
          ))}
        </div>

        {/* secondary row: ispezione callout */}
        <Reveal delay={250}
          className="mt-12 md:mt-16 relative overflow-hidden rounded-3xl bg-ink-900 text-white p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center">
          <div aria-hidden className="absolute -right-20 -bottom-20 w-[420px] h-[420px] rounded-full bg-brand-700/40 blur-3xl" />
          <div className="md:col-span-7 relative">
            <SectionLabel n="" className="text-accent-300 !text-accent-400 mb-3">
              <span className="text-accent-300">Il report 140 punti</span>
            </SectionLabel>
            <h3 className="font-display text-[30px] md:text-[40px] leading-[1.08] font-semibold text-white">
              Guarda dentro l&rsquo;auto <span className="text-accent-300 italic font-medium">prima</span> di comprarla.
            </h3>
            <p className="mt-5 text-ink-200 text-[15px] max-w-[520px]">
              Ti consegniamo un PDF dettagliato con stato meccanico, carrozzeria, elettronica e
              interni. Foto, misurazioni e note dell&rsquo;officina: puoi leggerlo con calma a casa,
              e se vuoi ti accompagniamo voce per voce.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="accent" className="text-[14px]">Vedi un report di esempio</Button>
              <Button className="bg-white/10 text-white hover:bg-white/20 text-[14px]">Come controlliamo le auto</Button>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl stripes-brand border border-white/10 p-5 flex flex-col justify-between text-white/70">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase">report_140.pdf</span>
                <span className="font-mono text-[10px] tracking-[0.2em]">v2.4</span>
              </div>
              <div>
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase mb-2">placeholder</div>
                <div className="text-white font-display text-[22px] leading-tight">Mock PDF preview</div>
                <div className="text-white/50 text-[12px] mt-1">(sostituisci con screenshot reale del report ispezione)</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =====================================================
   HOW IT WORKS — 3 steps, scroll-anchored car
===================================================== */
function HowItWorks() {
  const steps = window.SECAR.STEPS;
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const x     = useTransform(scrollYProgress, [0, 1], ['-20%', '120%']);
  const rot   = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -2]);
  const xSm   = useSpring(x,   { stiffness: 60, damping: 18 });
  const rotSm = useSpring(rot, { stiffness: 60, damping: 18 });

  return (
    <section id="come-funziona" ref={sectionRef} className="relative py-24 md:py-36 bg-gradient-to-b from-paper to-brand-50/40 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <SectionLabel n="02">Come funziona</SectionLabel>
          <h2 className="mt-5 font-display text-[36px] sm:text-[48px] md:text-[64px] leading-[1.04] tracking-tight font-semibold text-ink-900 text-balance">
            Dal primo click al volante, <span className="text-brand-700">in tre passi</span>.
          </h2>
          <p className="mt-6 text-ink-600 text-[16px] leading-relaxed max-w-xl">
            Abbiamo tagliato tutto quello che rallenta un acquisto e tenuto solo quello che ti fa sentire sicuro.
          </p>
        </div>

        {/* Track with car */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-[60px] md:top-[72px] h-px bg-ink-200" />
          {/* Dashed road segments under */}
          <div className="absolute left-0 right-0 top-[64px] md:top-[76px] h-[2px] flex gap-2 opacity-30 overflow-hidden">
            {Array.from({ length: 40 }).map((_, i) => <div key={i} className="w-8 h-[2px] bg-ink-400 shrink-0" />)}
          </div>

          <motion.div
            style={{ x: xSm, rotate: rotSm }}
            className="absolute top-0 left-0 w-40 md:w-56 car-shadow"
          >
            <CarSVG className="w-full h-auto" tone="ink" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 pt-[140px] md:pt-[180px]">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}
                className="bg-white rounded-3xl border border-ink-200 p-7 relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-9 h-9 rounded-full bg-brand-700 text-white font-display font-semibold grid place-items-center text-[15px]">{s.n}</span>
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-500">step {s.n}</span>
                </div>
                <h3 className="font-display text-[22px] md:text-[24px] font-semibold text-ink-900">{s.t}</h3>
                <p className="mt-3 text-[14.5px] text-ink-600 leading-relaxed">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, BrandMarquee, Transparency, HowItWorks });


/* ===== src/sections-inventory.jsx ===== */
/* global React, window */
// (dedup) const { useState, useMemo, useRef, useEffect } = React;

/* =====================================================
   CAR CARD — 3D tilt on hover
===================================================== */
function CarCard({ car, onOpen }) {
  const ref = useRef(null);
  const [tx, setTx] = useState({ rx: 0, ry: 0, mx: 50, my: 50 });

  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * 8;   // rotateX
    const ry = (px - 0.5) * 10;  // rotateY
    setTx({ rx, ry, mx: px * 100, my: py * 100 });
  };
  const onLeave = () => setTx({ rx: 0, ry: 0, mx: 50, my: 50 });

  // subtle per-card tone tinting of stripes placeholder
  const swatches = {
    slate: ['oklch(0.68 0.02 255)', 'oklch(0.58 0.02 255)'],
    sky:   ['oklch(0.75 0.08 220)', 'oklch(0.62 0.10 220)'],
    zinc:  ['oklch(0.88 0.005 255)','oklch(0.78 0.005 255)'],
    neutral:['oklch(0.14 0.01 255)','oklch(0.22 0.01 255)'],
    rose:  ['oklch(0.65 0.18 25)', 'oklch(0.52 0.18 25)'],
    indigo:['oklch(0.38 0.14 260)','oklch(0.28 0.12 260)'],
    stone: ['oklch(0.92 0.005 90)', 'oklch(0.82 0.005 90)'],
    blue:  ['oklch(0.42 0.14 240)','oklch(0.32 0.12 240)'],
    teal:  ['oklch(0.45 0.09 190)','oklch(0.35 0.08 190)'],
  };
  const sw = swatches[car.tone] || swatches.slate;

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onOpen(car)}
      className="group cursor-pointer"
      style={{ perspective: 1200 }}
    >
      <div
        className="tilt-card relative bg-white rounded-2xl border border-ink-200 overflow-hidden hover:border-brand-300 transition-colors"
        style={{
          transform: `rotateX(${tx.rx}deg) rotateY(${tx.ry}deg)`,
        }}
      >
        {/* media */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* stylized gradient "paint" background = proxy for car color */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${sw[0]} 0%, ${sw[1]} 100%)` }}
          />
          {/* sheen that follows cursor */}
          <div
            className="absolute inset-0 opacity-70 transition-opacity group-hover:opacity-100 mix-blend-overlay"
            style={{
              background: `radial-gradient(circle at ${tx.mx}% ${tx.my}%, oklch(1 0 0 / 0.35), transparent 55%)`,
            }}
          />
          {/* stripes placeholder */}
          <div className="absolute inset-0 stripes opacity-[0.08]" />

          {/* car silhouette */}
          <div
            className="absolute inset-0 grid place-items-center transition-transform duration-500 group-hover:scale-[1.06]"
            style={{ transform: `translateZ(40px) translateY(8%)` }}
          >
            <CarSVG className="w-[78%] h-auto" tone={car.tone === 'neutral' ? 'ink' : 'brand'} shadow={false} />
          </div>

          {/* badge */}
          {car.badge && (
            <div className="absolute top-3 left-3">
              <Pill tone={car.badge === 'Km 0' ? 'brand' : car.badge === 'Certificata' ? 'accent' : 'amber'}>
                {car.badge === 'Km 0' && <Icon name="spark" className="w-3 h-3" />}
                {car.badge === 'Certificata' && <Icon name="shield" className="w-3 h-3" />}
                {car.badge === 'Occasione' && <Icon name="tag" className="w-3 h-3" />}
                {car.badge}
              </Pill>
            </div>
          )}

          {/* fav */}
          <button
            onClick={(e) => { e.stopPropagation(); }}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur grid place-items-center text-ink-600 hover:text-brand-700 transition"
            aria-label="salva"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 000-7.8z" />
            </svg>
          </button>

          {/* color chip note */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur px-2 py-1 rounded-full border border-white/60">
            <span className="w-2.5 h-2.5 rounded-full border border-black/10" style={{ background: sw[1] }} />
            <span className="text-[10.5px] font-mono uppercase tracking-[0.1em] text-ink-700">{car.color}</span>
          </div>
        </div>

        {/* body */}
        <div className="p-4 md:p-5">
          <div className="flex items-baseline justify-between gap-3">
            <div className="min-w-0">
              <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-ink-500">{car.brand}</div>
              <h3 className="font-display text-[17px] md:text-[18px] font-semibold text-ink-900 truncate mt-0.5">{car.model}</h3>
            </div>
            <div className="text-right shrink-0">
              <div className="font-display text-[20px] md:text-[22px] font-semibold text-ink-900 leading-none">
                € {car.price.toLocaleString('it-IT')}
              </div>
              <div className="text-[11px] text-ink-500 mt-1">o € {car.monthly}/mese</div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-ink-100 grid grid-cols-3 gap-2 text-[12px] text-ink-600">
            <div className="flex items-center gap-1.5">
              <Icon name="gauge" className="w-3.5 h-3.5 text-ink-400" stroke={1.8} />
              {(car.km / 1000).toFixed(1)}k km
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-ink-400 font-mono text-[11px]">&apos;{String(car.year).slice(2)}</span>
              <span>{car.year}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FuelIcon fuel={car.fuel} className="w-3.5 h-3.5 text-ink-400" />
              {car.fuel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   INVENTORY — filters + grid + modal
===================================================== */
function Inventory() {
  const all = window.SECAR.CARS;
  const [brand, setBrand] = useState('Tutte');
  const [fuel, setFuel]   = useState('Tutti');
  const [price, setPrice] = useState(50000);
  const [sort, setSort]   = useState('rel');
  const [open, setOpen]   = useState(null);

  const brands = ['Tutte', ...Array.from(new Set(all.map(c => c.brand)))];
  const fuels  = ['Tutti', 'Benzina', 'Diesel', 'Ibrido', 'Elettrico'];

  const filtered = useMemo(() => {
    let arr = all.filter(c =>
      (brand === 'Tutte' || c.brand === brand) &&
      (fuel  === 'Tutti' || c.fuel  === fuel)  &&
      c.price <= price
    );
    if (sort === 'priceAsc')  arr = [...arr].sort((a,b) => a.price - b.price);
    if (sort === 'priceDesc') arr = [...arr].sort((a,b) => b.price - a.price);
    if (sort === 'kmAsc')     arr = [...arr].sort((a,b) => a.km - b.km);
    if (sort === 'yearDesc')  arr = [...arr].sort((a,b) => b.year - a.year);
    return arr;
  }, [all, brand, fuel, price, sort]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', !!open);
  }, [open]);

  return (
    <section id="parco" className="relative py-24 md:py-36 bg-paper">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <SectionLabel n="03">Il parco auto</SectionLabel>
            <h2 className="mt-5 font-display text-[36px] sm:text-[48px] md:text-[64px] leading-[1.04] tracking-tight font-semibold text-ink-900">
              12 vetture, <span className="text-brand-700">zero compromessi</span>.
            </h2>
          </div>
          <p className="text-ink-600 max-w-md text-[15px] leading-relaxed md:pb-3">
            Tutte disponibili presso la sede di Salerno. Le proposte cambiano ogni settimana:
            se non trovi quello che cerchi, dicci cosa vuoi e la troviamo per te.
          </p>
        </div>

        {/* Filter bar */}
        <div className="sticky top-16 md:top-[72px] z-20 -mx-6 md:mx-0 mb-8 md:mb-10">
          <div className="px-6 md:px-0">
            <div className="bg-white rounded-2xl border border-ink-200 shadow-sm p-3 md:p-4 flex flex-wrap items-center gap-2 md:gap-3">
              <div className="hidden md:flex items-center gap-1.5 text-[12px] text-ink-500 pl-2 pr-3 border-r border-ink-200">
                <Icon name="filter" className="w-4 h-4" /> FILTRI
              </div>

              <Select label="Marca" value={brand} onChange={setBrand} options={brands} />
              <Select label="Alimentazione" value={fuel}  onChange={setFuel}  options={fuels} />

              <div className="flex items-center gap-2.5 px-3 py-2 rounded-full bg-ink-50 min-w-[200px] flex-1 md:flex-initial md:w-[240px]">
                <span className="text-[11.5px] font-mono uppercase tracking-[0.12em] text-ink-500">max</span>
                <input type="range" min="10000" max="50000" step="500" value={price}
                  onChange={(e) => setPrice(parseInt(e.target.value))}
                  className="flex-1 accent-brand-700" />
                <span className="text-[12.5px] font-medium text-ink-800 tabular-nums min-w-[56px] text-right">€{(price/1000).toFixed(0)}k</span>
              </div>

              <div className="ml-auto flex items-center gap-2">
                <Select label="Ordina" value={sort} onChange={setSort}
                  options={[['rel','Rilevanza'],['priceAsc','Prezzo ↑'],['priceDesc','Prezzo ↓'],['kmAsc','Km ↑'],['yearDesc','Più recenti']]}
                />
                <span className="hidden sm:inline text-[12px] text-ink-500 font-mono">{filtered.length} auto</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <div className="inline-flex items-center gap-2 text-ink-500 text-[14px]">
              <Icon name="search" /> Nessuna auto con questi filtri
            </div>
            <button className="mt-3 text-brand-700 text-[13px] underline" onClick={() => { setBrand('Tutte'); setFuel('Tutti'); setPrice(50000); }}>
              Azzera filtri
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {filtered.map((c, i) => (
              <Reveal key={c.id} delay={(i % 4) * 80}>
                <CarCard car={c} onOpen={setOpen} />
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 bg-ink-50 rounded-2xl border border-ink-200 p-6 md:p-8">
          <div>
            <div className="font-display text-[20px] md:text-[22px] font-semibold text-ink-900">Non vedi quello che cerchi?</div>
            <div className="text-ink-600 text-[14px] mt-1">Inviaci i tuoi criteri: la troviamo noi, in media in 18 giorni.</div>
          </div>
          <Button variant="dark">
            Richiesta personalizzata <Icon name="arrow" className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Modal */}
      {open && <CarModal car={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function Select({ label, value, onChange, options }) {
  const list = options.map(o => Array.isArray(o) ? o : [o, o]);
  return (
    <label className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full bg-ink-50 hover:bg-ink-100 transition text-[13px] text-ink-800 cursor-pointer">
      <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-ink-500">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="bg-transparent outline-none text-[13px] pr-4 cursor-pointer">
        {list.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>
    </label>
  );
}

function CarModal({ car, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6">
      <div className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm animate-[fadeIn_250ms_ease]" onClick={onClose} />
      <div className="relative bg-paper w-full md:max-w-[900px] rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] overflow-y-auto">
        <div className="relative aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-brand-100 to-ink-50 overflow-hidden">
          <div className="absolute inset-0 grid-paper opacity-50" />
          <div className="absolute inset-0 grid place-items-center">
            <CarSVG className="w-[85%] h-auto" tone="brand" />
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur grid place-items-center text-ink-800 hover:bg-white">
            <Icon name="x" className="w-4 h-4" />
          </button>
          <div className="absolute top-4 left-4 flex gap-2">
            {car.badge && <Pill tone={car.badge === 'Km 0' ? 'brand' : 'accent'}>{car.badge}</Pill>}
            <Pill tone="ink">Salerno · Pronta consegna</Pill>
          </div>
        </div>
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div>
              <div className="text-[12px] font-mono tracking-[0.18em] uppercase text-ink-500">{car.brand}</div>
              <h3 className="font-display text-[28px] md:text-[36px] font-semibold text-ink-900 mt-1">{car.model}</h3>
              <div className="text-ink-600 text-[14px] mt-2">{car.color} · {car.trans}</div>
            </div>
            <div className="md:text-right">
              <div className="font-display text-[32px] md:text-[40px] font-semibold text-ink-900 leading-none">€ {car.price.toLocaleString('it-IT')}</div>
              <div className="text-ink-500 text-[13px] mt-2">Finanziabile da € {car.monthly}/mese</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { l: 'Anno',          v: car.year },
              { l: 'Km',            v: car.km.toLocaleString('it-IT') },
              { l: 'Alimentazione', v: car.fuel },
              { l: 'Cambio',        v: car.trans },
            ].map(x => (
              <div key={x.l} className="bg-white border border-ink-200 rounded-xl p-4">
                <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-ink-500">{x.l}</div>
                <div className="text-ink-900 font-display text-[18px] mt-1">{x.v}</div>
              </div>
            ))}
          </div>

          <div className="bg-brand-700 text-white rounded-2xl p-5 md:p-6 grid md:grid-cols-3 gap-5 items-center">
            <div className="md:col-span-2">
              <div className="font-display text-[20px] font-semibold">Include 12 mesi di garanzia + report 140 punti</div>
              <div className="text-white/80 text-[13px] mt-1">Passaggio di proprietà e pieno al ritiro inclusi.</div>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              <Button variant="accent" className="text-[14px]">Test drive</Button>
              <Button className="bg-white text-brand-800 hover:bg-ink-50 text-[14px]">Chiama</Button>
            </div>
          </div>

          <div className="mt-8 text-[14px] text-ink-600 leading-relaxed">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">Descrizione</div>
            <p>
              Vettura singolo proprietario, tagliandi regolari presso rete ufficiale, interni
              impeccabili. Accessori principali: climatizzatore automatico, sensori di parcheggio,
              cruise control adattivo e navigatore integrato. Disponibile per prova su strada
              con prenotazione dallo showroom di Salerno.
            </p>
            <PlaceholderNote>placeholder — sostituire con descrizione reale</PlaceholderNote>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Inventory, CarCard, CarModal });


/* ===== src/sections-bottom.jsx ===== */
/* global React, window */
// (dedup) const { useState } = React;

/* =====================================================
   VALUTA IL TUO USATO
===================================================== */
function ValutaUsato() {
  const [form, setForm] = useState({ targa: '', km: '', anno: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setForm(s => ({ ...s, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.targa && form.km && form.anno) setSubmitted(true);
  };

  return (
    <section id="valuta" className="relative py-24 md:py-36 bg-ink-900 text-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.12]"
           style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, oklch(0.74 0.10 255) 0, transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.72 0.11 220) 0, transparent 40%)' }} />
      <div aria-hidden className="absolute inset-0 grid-paper opacity-[0.08]" />

      <div className="max-w-[1320px] mx-auto px-6 md:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <SectionLabel n="04" className="!text-accent-300">Valuta il tuo usato</SectionLabel>
            <h2 className="mt-5 font-display text-[36px] sm:text-[48px] md:text-[60px] leading-[1.04] tracking-tight font-semibold text-balance">
              La tua vecchia auto <span className="text-accent-300 italic font-medium">vale</span> la prossima.
            </h2>
            <p className="mt-6 text-ink-200 text-[16px] leading-relaxed max-w-lg">
              Inserisci tre dati e ti inviamo una stima in 24 ore. Nessun obbligo di acquisto,
              nessun numero a cui richiamarti tutti i giorni.
            </p>

            <div className="mt-8 space-y-3 text-[14px] text-ink-200">
              {['Stima gratuita via email o WhatsApp', 'Ritiro in sede o a domicilio (Campania)', 'Compensazione diretta sull\u2019acquisto'].map(x => (
                <div key={x} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-accent-300/20 grid place-items-center text-accent-300 shrink-0">
                    <Icon name="check" className="w-3 h-3" stroke={2.4} />
                  </span>
                  {x}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white text-ink-900 rounded-3xl p-6 md:p-8">
              {!submitted ? (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-display text-[20px] font-semibold">Richiedi la tua stima</div>
                    <PlaceholderNote>step 1 di 2</PlaceholderNote>
                  </div>
                  <Field label="Targa" ph="AB 123 CD" value={form.targa} onChange={set('targa')} />
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Km percorsi" ph="es. 85.000" value={form.km} onChange={set('km')} />
                    <Field label="Anno immatr." ph="es. 2019" value={form.anno} onChange={set('anno')} />
                  </div>
                  <Button variant="dark" className="w-full mt-2">
                    Ottieni stima gratuita <Icon name="arrow" className="w-4 h-4" />
                  </Button>
                  <p className="text-[11.5px] text-ink-500 leading-relaxed">
                    Inviando accetti la privacy policy. Ti ricontatteremo solo per questa stima.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 grid place-items-center mx-auto">
                    <Icon name="check" className="w-6 h-6" stroke={2.4} />
                  </div>
                  <div className="mt-5 font-display text-[24px] font-semibold">Richiesta ricevuta</div>
                  <div className="text-ink-600 text-[14px] mt-2 max-w-sm mx-auto">
                    Entro 24 ore riceverai una valutazione indicativa via email,
                    con una forchetta di mercato aggiornata.
                  </div>
                  <button className="mt-6 text-brand-700 text-[13px] underline" onClick={() => { setSubmitted(false); setForm({ targa: '', km: '', anno: '' }); }}>
                    Invia un&rsquo;altra valutazione
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ph, value, onChange, type = 'text' }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-mono uppercase tracking-[0.15em] text-ink-500 mb-1.5">{label}</span>
      <input
        type={type} value={value} onChange={onChange} placeholder={ph}
        className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-200 outline-none transition text-[15px]"
      />
    </label>
  );
}

/* =====================================================
   TESTIMONIALS
===================================================== */
function Testimonials() {
  const items = window.SECAR.TESTIMONIALS;
  return (
    <section className="py-24 md:py-36 bg-paper">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel n="05">Recensioni</SectionLabel>
            <h2 className="mt-5 font-display text-[36px] sm:text-[48px] md:text-[56px] leading-[1.04] tracking-tight font-semibold text-ink-900">
              Chi ha già <span className="text-brand-700">firmato</span> con noi.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="flex -space-x-2">
              {[0,1,2,3].map(i => (
                <div key={i} className="w-9 h-9 rounded-full stripes border-2 border-paper" />
              ))}
            </div>
            <div className="text-[13px] text-ink-600">
              <div className="flex gap-0.5 text-amber-500">
                {[0,1,2,3,4].map(i => <Icon key={i} name="star" className="w-3.5 h-3.5" />)}
              </div>
              <div className="mt-0.5">4.9 su 312 recensioni verificate</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 100}
              className="bg-white rounded-2xl border border-ink-200 p-6 md:p-7 flex flex-col hover:border-brand-300 transition">
              <div className="flex gap-0.5 text-amber-500 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => <Icon key={j} name="star" className="w-4 h-4" />)}
              </div>
              <p className="text-ink-800 text-[15px] leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-ink-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-700 grid place-items-center font-display font-semibold text-[14px]">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-[13.5px] font-medium text-ink-900">{t.name}</div>
                  <div className="text-[12px] text-ink-500">{t.city}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   TEAM
===================================================== */
function Team() {
  const team = window.SECAR.TEAM;
  return (
    <section id="team" className="py-24 md:py-36 bg-gradient-to-b from-paper to-brand-50/30">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <SectionLabel n="06">Il team</SectionLabel>
            <h2 className="mt-5 font-display text-[36px] sm:text-[48px] md:text-[56px] leading-[1.04] tracking-tight font-semibold text-ink-900">
              Dal 2011, con le <span className="text-brand-700">stesse persone</span>.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-4">
            <p className="text-ink-600 text-[16px] leading-relaxed max-w-xl">
              Siamo in quattro, e se compri un&rsquo;auto da Secar parli con tutti noi almeno una
              volta. Nessun call center, nessun venditore di passaggio: chi ti consiglia oggi
              è la stessa persona che ti richiama tra due anni per il tagliando.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}
              className="bg-white rounded-2xl border border-ink-200 overflow-hidden group">
              <div className="aspect-[4/5] stripes relative">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="font-display text-[72px] text-ink-300">
                    {p.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute bottom-3 left-3">
                  <PlaceholderNote>foto ritratto</PlaceholderNote>
                </div>
              </div>
              <div className="p-5">
                <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-700">{p.role}</div>
                <div className="font-display text-[18px] font-semibold text-ink-900 mt-1">{p.name}</div>
                <div className="text-[13px] text-ink-600 mt-2 leading-relaxed">{p.bio}</div>
                <div className="mt-4 pt-3 border-t border-ink-100 text-[12px] text-ink-500 font-mono">
                  {p.years} anni in Secar
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   FAQ
===================================================== */
function FAQSection() {
  const faq = window.SECAR.FAQ;
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 md:py-36 bg-paper">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <SectionLabel n="07">Domande frequenti</SectionLabel>
            <h2 className="mt-5 font-display text-[36px] sm:text-[44px] md:text-[52px] leading-[1.04] tracking-tight font-semibold text-ink-900">
              Rispondiamo <span className="text-brand-700">per iscritto</span>.
            </h2>
            <p className="mt-5 text-ink-600 text-[15px] leading-relaxed max-w-sm">
              Se non trovi quello che cerchi, scrivici: ti rispondiamo entro la giornata lavorativa.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="divide-y divide-ink-200 border-y border-ink-200">
              {faq.map((f, i) => {
                const open = openIdx === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setOpenIdx(open ? -1 : i)}
                      className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                    >
                      <span className={`font-display text-[17px] md:text-[18px] font-medium transition ${open ? 'text-brand-700' : 'text-ink-900 group-hover:text-brand-700'}`}>
                        {f.q}
                      </span>
                      <span className={`shrink-0 w-8 h-8 rounded-full border border-ink-200 grid place-items-center transition ${open ? 'bg-brand-700 border-brand-700 text-white rotate-180' : 'text-ink-600'}`}>
                        <Icon name={open ? 'minus' : 'plus'} className="w-3.5 h-3.5" stroke={2} />
                      </span>
                    </button>
                    <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ${open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="pb-6 text-ink-600 text-[14.5px] leading-relaxed max-w-xl">{f.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   CONTATTI + MAPPA
===================================================== */
function Contatti() {
  const [form, setForm] = useState({ nome: '', email: '', tel: '', msg: '' });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState({});

  const set = (k) => (e) => {
    setForm(s => ({ ...s, [k]: e.target.value }));
    setErr(e2 => ({ ...e2, [k]: undefined }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!form.nome.trim()) errors.nome = 'Inserisci il tuo nome';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errors.email = 'Email non valida';
    if (!form.msg.trim()) errors.msg = 'Scrivi il tuo messaggio';
    setErr(errors);
    if (Object.keys(errors).length === 0) setSent(true);
  };

  return (
    <section id="contatti" className="py-24 md:py-36 bg-paper">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-14">
          <SectionLabel n="08">Contatti</SectionLabel>
          <h2 className="mt-5 font-display text-[36px] sm:text-[48px] md:text-[60px] leading-[1.04] tracking-tight font-semibold text-ink-900 text-balance">
            Passa a trovarci, <span className="text-brand-700">il caffè è offerto</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Info column */}
          <div className="lg:col-span-4 space-y-4">
            <InfoCard icon="pin" label="Showroom"
              title="Via Irno 142 · Salerno"
              sub="84135 Salerno (SA) · SS18" />
            <InfoCard icon="phone" label="Telefono"
              title="089 000 000"
              sub="Lun–Ven · 9:00 – 19:30 · Sab · 9:00 – 13:00" />
            <InfoCard icon="mail" label="Email"
              title="ciao@secar.it"
              sub="Rispondiamo entro la giornata lavorativa" />
          </div>

          {/* Form */}
          <div className="lg:col-span-4 bg-white border border-ink-200 rounded-3xl p-6 md:p-8">
            {!sent ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="font-display text-[20px] font-semibold text-ink-900 mb-1">Scrivici due righe</div>
                <div>
                  <Field label="Nome e cognome" ph="Come ti chiami?" value={form.nome} onChange={set('nome')} />
                  {err.nome && <div className="mt-1 text-[11.5px] text-rose-600">{err.nome}</div>}
                </div>
                <div>
                  <Field label="Email" ph="tu@email.it" value={form.email} onChange={set('email')} type="email" />
                  {err.email && <div className="mt-1 text-[11.5px] text-rose-600">{err.email}</div>}
                </div>
                <Field label="Telefono (opz.)" ph="+39 " value={form.tel} onChange={set('tel')} />
                <label className="block">
                  <span className="block text-[11px] font-mono uppercase tracking-[0.15em] text-ink-500 mb-1.5">Messaggio</span>
                  <textarea
                    value={form.msg} onChange={set('msg')} placeholder="Cosa stai cercando?"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-200 outline-none transition text-[15px] resize-none"
                  />
                  {err.msg && <div className="mt-1 text-[11.5px] text-rose-600">{err.msg}</div>}
                </label>
                <Button variant="dark" className="w-full">
                  Invia messaggio <Icon name="arrow" className="w-4 h-4" />
                </Button>
              </form>
            ) : (
              <div className="py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 grid place-items-center mx-auto">
                  <Icon name="check" className="w-6 h-6" stroke={2.4} />
                </div>
                <div className="mt-5 font-display text-[22px] font-semibold text-ink-900">Grazie, {form.nome.split(' ')[0]}.</div>
                <div className="text-ink-600 text-[14px] mt-2">Ti ricontattiamo entro la giornata lavorativa.</div>
              </div>
            )}
          </div>

          {/* Map */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden border border-ink-200 min-h-[360px] lg:min-h-0 bg-gradient-to-br from-brand-50 to-paper">
            <MapMock />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 border border-ink-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-700 text-white grid place-items-center shrink-0">
                <Icon name="pin" className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[13.5px] font-medium text-ink-900 truncate">Secar Salerno</div>
                <div className="text-[12px] text-ink-500 truncate">Via Irno 142 · 84135 Salerno</div>
              </div>
              <a href="#" className="text-[12px] text-brand-700 font-medium hover:underline whitespace-nowrap">Indicazioni</a>
            </div>
            <div className="absolute top-3 left-3">
              <PlaceholderNote>mappa interattiva</PlaceholderNote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, title, sub }) {
  return (
    <div className="bg-white border border-ink-200 rounded-2xl p-5 flex gap-4 items-start hover:border-brand-300 transition">
      <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 grid place-items-center shrink-0">
        <Icon name={icon} className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-ink-500">{label}</div>
        <div className="font-display text-[17px] font-semibold text-ink-900 mt-0.5">{title}</div>
        <div className="text-[13px] text-ink-600 mt-1 leading-relaxed">{sub}</div>
      </div>
    </div>
  );
}

function MapMock() {
  // Stylized fake map of Salerno area — placeholder for a real embedded map
  return (
    <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="mapgrid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="oklch(0.90 0.008 255)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill="oklch(0.98 0.004 255)" />
      <rect width="400" height="500" fill="url(#mapgrid)" />
      {/* sea */}
      <path d="M 0 360 L 400 330 L 400 500 L 0 500 Z" fill="oklch(0.88 0.06 220 / 0.5)" />
      {/* streets */}
      <g stroke="oklch(0.80 0.01 255)" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M 10 120 L 400 140" />
        <path d="M 20 220 L 390 200" />
        <path d="M 200 0 L 210 500" />
        <path d="M 120 20 L 140 500" />
        <path d="M 300 10 L 290 400" />
        <path d="M 0 300 L 390 280" />
      </g>
      <g stroke="oklch(0.65 0.14 255)" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M 60 50 L 350 180 L 210 380" />
      </g>
      {/* blocks */}
      <g fill="oklch(0.96 0.005 255)" stroke="oklch(0.88 0.008 255)">
        <rect x="40"  y="60"  width="50" height="40" rx="3" />
        <rect x="100" y="50"  width="70" height="50" rx="3" />
        <rect x="240" y="70"  width="60" height="40" rx="3" />
        <rect x="40"  y="160" width="60" height="40" rx="3" />
        <rect x="140" y="160" width="50" height="30" rx="3" />
        <rect x="220" y="240" width="50" height="35" rx="3" />
        <rect x="40"  y="250" width="70" height="40" rx="3" />
        <rect x="310" y="220" width="50" height="40" rx="3" />
      </g>
      {/* pin */}
      <g transform="translate(220 230)">
        <circle r="24" fill="oklch(0.32 0.14 255 / 0.18)">
          <animate attributeName="r" values="20;32;20" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle r="12" fill="oklch(0.32 0.14 255)" />
        <circle r="4" fill="white" />
      </g>
    </svg>
  );
}

/* =====================================================
   FOOTER
===================================================== */
function Footer() {
  const cols = [
    { h: 'Secar', links: ['Parco auto', 'Come funziona', 'Valuta il tuo usato', 'Team', 'Contatti'] },
    { h: 'Servizi', links: ['Garanzia 12 mesi', 'Finanziamenti', 'Permuta', 'Report 140 punti', 'Officina'] },
    { h: 'Info', links: ['Privacy policy', 'Cookie policy', 'Termini', 'Reclami', 'Trasparenza'] },
  ];
  return (
    <footer className="bg-ink-900 text-ink-200 pt-20 pb-10">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="relative w-9 h-9 rounded-lg bg-white text-brand-800 grid place-items-center font-display font-bold">
                s
                <span className="absolute -right-0.5 -top-0.5 w-2 h-2 rounded-full bg-accent-400 ring-2 ring-ink-900" />
              </span>
              <span className="font-display font-semibold text-[22px] tracking-tight text-white">secar<span className="text-accent-300">.</span></span>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-300 max-w-md">
              Concessionario multimarca di auto usate e km 0 a Salerno. Dal 2011 vendiamo auto
              con le stesse regole: trasparenza sui km, garanzia reale, nessun costo nascosto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="accent" className="text-[13.5px]">Prenota un test drive</Button>
              <Button className="bg-white/10 text-white hover:bg-white/20 text-[13.5px]">Scrivici</Button>
            </div>
          </div>

          {cols.map(c => (
            <div key={c.h} className="lg:col-span-2">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink-400 mb-4">{c.h}</div>
              <ul className="space-y-2.5">
                {c.links.map(l => <li key={l}><a href="#" className="text-[14px] hover:text-white transition">{l}</a></li>)}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink-400 mb-4">Social</div>
            <div className="flex lg:flex-col gap-2">
              {['IG','FB','YT'].map(s => (
                <a key={s} href="#" className="w-9 h-9 rounded-full border border-white/20 grid place-items-center text-[11px] font-mono hover:bg-white/10 transition">{s}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[12px] text-ink-400">
          <div>© 2026 Secar S.r.l. · P.IVA 0000000000 · Via Irno 142, Salerno</div>
          <div className="font-mono uppercase tracking-[0.15em]">prototipo hi-fi · concessionario 2.0</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { ValutaUsato, Testimonials, Team, FAQSection, Contatti, Footer });


/* ===== src/tweaks.jsx ===== */
/* global React, window */
// (dedup) const { useState, useEffect } = React;

/* EDITMODE-BEGIN intentionally attached to DEFAULTS object below */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "blu-profondo",
  "motionIntensity": 1,
  "fontPairing": "grotesk-inter",
  "accentHue": 220,
  "showGrid": true
}/*EDITMODE-END*/;

function TweaksPanel() {
  const [active, setActive] = useState(false);
  const [state, setState]   = useState(TWEAK_DEFAULTS);

  // Apply state to DOM as CSS variables + classes
  useEffect(() => {
    const root = document.documentElement;

    // palette
    const palettes = {
      'blu-profondo': { brand: '255', accent: 220 },
      'verde-salvia': { brand: 155, accent: 175 },
      'blu-notte':    { brand: 270, accent: 200 },
      'verde-scuro':  { brand: 140, accent: 80  },
    };
    const pal = palettes[state.palette] || palettes['blu-profondo'];
    const hue = typeof pal.brand === 'string' ? pal.brand : pal.brand;
    // override brand and accent via custom properties (Tailwind CDN won't rebuild,
    // so we inject a <style> with the relevant vars + class overrides)
    let overrideStyle = document.getElementById('__secar-overrides');
    if (!overrideStyle) {
      overrideStyle = document.createElement('style');
      overrideStyle.id = '__secar-overrides';
      document.head.appendChild(overrideStyle);
    }
    const ah = state.accentHue;
    overrideStyle.textContent = `
      .bg-brand-50  { background-color: oklch(0.97 0.02 ${hue}) !important; }
      .bg-brand-100 { background-color: oklch(0.93 0.05 ${hue}) !important; }
      .bg-brand-300 { background-color: oklch(0.74 0.10 ${hue}) !important; }
      .bg-brand-500 { background-color: oklch(0.45 0.16 ${hue}) !important; }
      .bg-brand-700 { background-color: oklch(0.32 0.14 ${hue}) !important; }
      .bg-brand-800 { background-color: oklch(0.24 0.11 ${hue}) !important; }
      .text-brand-600 { color: oklch(0.38 0.16 ${hue}) !important; }
      .text-brand-700 { color: oklch(0.32 0.14 ${hue}) !important; }
      .text-brand-800 { color: oklch(0.24 0.11 ${hue}) !important; }
      .border-brand-300 { border-color: oklch(0.74 0.10 ${hue}) !important; }
      .border-brand-400 { border-color: oklch(0.58 0.14 ${hue}) !important; }
      .ring-brand-200 { --tw-ring-color: oklch(0.86 0.08 ${hue}) !important; }
      .accent-brand-700 { accent-color: oklch(0.32 0.14 ${hue}); }
      .hover\\:bg-brand-800:hover { background-color: oklch(0.24 0.11 ${hue}) !important; }
      .hover\\:border-brand-300:hover { border-color: oklch(0.74 0.10 ${hue}) !important; }
      .hover\\:text-brand-700:hover { color: oklch(0.32 0.14 ${hue}) !important; }
      .hover\\:bg-brand-700:hover { background-color: oklch(0.32 0.14 ${hue}) !important; }

      .bg-accent-300 { background-color: oklch(0.82 0.09 ${ah}) !important; }
      .bg-accent-400 { background-color: oklch(0.75 0.11 ${ah}) !important; }
      .text-accent-300 { color: oklch(0.82 0.09 ${ah}) !important; }
      .text-accent-400 { color: oklch(0.75 0.11 ${ah}) !important; }
      .hover\\:bg-accent-300:hover { background-color: oklch(0.82 0.09 ${ah}) !important; }
    `;

    // font pairing
    const pairings = {
      'grotesk-inter': { disp: 'Space Grotesk, sans-serif',   body: 'Inter, sans-serif' },
      'inter-inter':   { disp: 'Inter, sans-serif',           body: 'Inter, sans-serif' },
      'serif-inter':   { disp: '"Instrument Serif", serif',   body: 'Inter, sans-serif' },
    };
    const pp = pairings[state.fontPairing] || pairings['grotesk-inter'];
    // ensure optional fonts loaded
    if (state.fontPairing === 'serif-inter' && !document.getElementById('__secar-serif')) {
      const l = document.createElement('link');
      l.id = '__secar-serif';
      l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap';
      document.head.appendChild(l);
    }
    let fontStyle = document.getElementById('__secar-fonts');
    if (!fontStyle) { fontStyle = document.createElement('style'); fontStyle.id = '__secar-fonts'; document.head.appendChild(fontStyle); }
    fontStyle.textContent = `
      .font-display { font-family: ${pp.disp} !important; }
      body { font-family: ${pp.body} !important; }
    `;

    // motion intensity as CSS variable (future use) + data attr
    root.style.setProperty('--motion-scale', String(state.motionIntensity));
    root.dataset.motion = String(state.motionIntensity);

    // grid paper toggle
    let gridStyle = document.getElementById('__secar-grid');
    if (!gridStyle) { gridStyle = document.createElement('style'); gridStyle.id = '__secar-grid'; document.head.appendChild(gridStyle); }
    gridStyle.textContent = state.showGrid ? '' : `.grid-paper { background-image: none !important; }`;
  }, [state]);

  // edit mode host protocol
  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setActive(true);
      else if (d.type === '__deactivate_edit_mode') setActive(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const update = (k, v) => {
    setState(s => ({ ...s, [k]: v }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  if (!active) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[320px] bg-white rounded-2xl border border-ink-200 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-ink-900 text-white">
        <div className="flex items-center gap-2">
          <Icon name="cog" className="w-4 h-4" />
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase">Tweaks</span>
        </div>
        <button onClick={() => setActive(false)} className="text-white/70 hover:text-white">
          <Icon name="x" className="w-4 h-4" />
        </button>
      </div>
      <div className="p-4 space-y-5 max-h-[70vh] overflow-y-auto">
        <TweakField label="Palette">
          <div className="grid grid-cols-2 gap-1.5">
            {[
              ['blu-profondo', 'Blu profondo', 'oklch(0.32 0.14 255)'],
              ['verde-salvia', 'Verde salvia', 'oklch(0.42 0.10 155)'],
              ['blu-notte',    'Blu notte',    'oklch(0.32 0.14 270)'],
              ['verde-scuro',  'Verde scuro',  'oklch(0.32 0.12 140)'],
            ].map(([id, label, sw]) => (
              <button key={id} onClick={() => update('palette', id)}
                className={`flex items-center gap-2 px-2.5 py-2 rounded-lg border text-[12px] transition ${
                  state.palette === id ? 'border-ink-900 bg-ink-50' : 'border-ink-200 hover:border-ink-400'
                }`}>
                <span className="w-3.5 h-3.5 rounded-full" style={{ background: sw }} />
                {label}
              </button>
            ))}
          </div>
        </TweakField>

        <TweakField label={`Accent hue · ${state.accentHue}°`}>
          <input type="range" min="0" max="360" step="1" value={state.accentHue}
            onChange={(e) => update('accentHue', parseInt(e.target.value))}
            className="w-full accent-brand-700"
            style={{ background: 'linear-gradient(to right, oklch(0.8 0.12 0), oklch(0.8 0.12 60), oklch(0.8 0.12 120), oklch(0.8 0.12 180), oklch(0.8 0.12 240), oklch(0.8 0.12 300), oklch(0.8 0.12 360))', borderRadius: 99, height: 6 }}
          />
        </TweakField>

        <TweakField label={`Intensità animazioni · ${state.motionIntensity.toFixed(1)}x`}>
          <input type="range" min="0" max="1.6" step="0.1" value={state.motionIntensity}
            onChange={(e) => update('motionIntensity', parseFloat(e.target.value))}
            className="w-full accent-brand-700" />
        </TweakField>

        <TweakField label="Font pairing">
          <div className="space-y-1.5">
            {[
              ['grotesk-inter', 'Space Grotesk + Inter (default)'],
              ['inter-inter',   'Solo Inter (sobrio)'],
              ['serif-inter',   'Instrument Serif + Inter (editoriale)'],
            ].map(([id, label]) => (
              <button key={id} onClick={() => update('fontPairing', id)}
                className={`w-full text-left px-3 py-2 rounded-lg border text-[12px] transition ${
                  state.fontPairing === id ? 'border-ink-900 bg-ink-50' : 'border-ink-200 hover:border-ink-400'
                }`}>
                {label}
              </button>
            ))}
          </div>
        </TweakField>

        <TweakField label="Griglia di sfondo">
          <button onClick={() => update('showGrid', !state.showGrid)}
            className={`w-full px-3 py-2 rounded-lg border text-[12px] transition ${
              state.showGrid ? 'bg-ink-900 text-white border-ink-900' : 'border-ink-200 hover:border-ink-400'
            }`}>
            {state.showGrid ? 'Visibile' : 'Nascosta'}
          </button>
        </TweakField>
      </div>
    </div>
  );
}

function TweakField({ label, children }) {
  return (
    <div>
      <div className="text-[10.5px] font-mono uppercase tracking-[0.15em] text-ink-500 mb-2">{label}</div>
      {children}
    </div>
  );
}

window.TweaksPanel = TweaksPanel;


/* ===== src/app.jsx ===== */
/* global React, ReactDOM, window */

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <BrandMarquee />
      <Transparency />
      <HowItWorks />
      <Inventory />
      <ValutaUsato />
      <Testimonials />
      <Team />
      <FAQSection />
      <Contatti />
      <Footer />
      <TweaksPanel />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

