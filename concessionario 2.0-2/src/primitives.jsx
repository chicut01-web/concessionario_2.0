/* global React, window */
const { useRef, useEffect, useState } = React;

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
