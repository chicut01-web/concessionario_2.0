"use client";
import { useState, useMemo, useRef, useEffect } from 'react';
import { Icon, Button, Pill, SectionLabel, Reveal, PlaceholderNote, FuelIcon } from './primitives.jsx';
import { CarSVG } from './car-svg.jsx';
import { CARS } from './data.jsx';




/* =====================================================
   CAR CARD — 3D tilt on hover
===================================================== */
export function CarCard({ car, onOpen }) {
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
export function Inventory() {
  const all = CARS;
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

export function Select({ label, value, onChange, options }) {
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

export function CarModal({ car, onClose }) {
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


