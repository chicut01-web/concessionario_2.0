import { useState, useEffect } from 'react';
import { Icon } from './primitives.jsx';




/* EDITMODE-BEGIN intentionally attached to DEFAULTS object below */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "blu-profondo",
  "motionIntensity": 1,
  "fontPairing": "grotesk-inter",
  "accentHue": 220,
  "showGrid": true
}/*EDITMODE-END*/;

export function TweaksPanel() {
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

export function TweakField({ label, children }) {
  return (
    <div>
      <div className="text-[10.5px] font-mono uppercase tracking-[0.15em] text-ink-500 mb-2">{label}</div>
      {children}
    </div>
  );
}


