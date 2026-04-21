
"use client";
import React, { useState } from 'react';
import { Icon, Button, SectionLabel, Reveal, PlaceholderNote } from './primitives';
import { TESTIMONIALS, TEAM, FAQ } from './data';

/* =====================================================
   VALUTA IL TUO USATO
 ===================================================== */
export function ValutaUsato() {
  const [form, setForm] = useState({ targa: '', km: '', anno: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setForm(s => ({ ...s, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.targa || !form.km || !form.anno || !form.email) return;
    setLoading(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/valuta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targa: form.targa, km: parseInt(form.km), anno: parseInt(form.anno), email: form.email }),
      });
      if (res.ok) setSubmitted(true);
      else setSubmitError("Errore nell'invio. Riprova.");
    } catch {
      setSubmitError('Errore di rete. Riprova.');
    } finally {
      setLoading(false);
    }
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
                  <Field label="La tua email" ph="tu@email.it" value={form.email} onChange={set('email')} type="email" />
                  {submitError && <p className="text-[11.5px] text-rose-600">{submitError}</p>}
                  <Button variant="dark" className="w-full mt-2" disabled={loading}>
                    {loading ? 'Invio in corso…' : <><span>Ottieni stima gratuita</span><Icon name="arrow" className="w-4 h-4" /></>}
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
                  <button className="mt-6 text-brand-700 text-[13px] underline" onClick={() => { setSubmitted(false); setForm({ targa: '', km: '', anno: '', email: '' }); }}>
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

interface FieldProps {
  label: string;
  ph: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function Field({ label, ph, value, onChange, type = 'text' }: FieldProps) {
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
export function Testimonials() {
  const items = TESTIMONIALS;
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
                {[0,1,2,3,4].map(i => <Icon key={i} name="star" className="w-3.5 h-3.5" stroke={1} />)}
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
export function Team() {
  const team = TEAM;
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
export function FAQSection() {
  const faq = FAQ;
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
export function Contatti() {
  const [form, setForm] = useState({ nome: '', email: '', tel: '', msg: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<Record<string, string | undefined>>({});

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(s => ({ ...s, [k]: e.target.value }));
    setErr(e2 => ({ ...e2, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!form.nome.trim()) errors.nome = 'Inserisci il tuo nome';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errors.email = 'Email non valida';
    if (!form.msg.trim()) errors.msg = 'Scrivi il tuo messaggio';
    setErr(errors);
    if (Object.keys(errors).length > 0) return;
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
      else setErr({ msg: "Errore nell'invio. Riprova." });
    } catch {
      setErr({ msg: 'Errore di rete. Riprova.' });
    } finally {
      setLoading(false);
    }
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
                <Button variant="dark" className="w-full" disabled={loading}>
                  {loading ? 'Invio in corso…' : <><span>Invia messaggio</span><Icon name="arrow" className="w-4 h-4" /></>}
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

interface InfoCardProps {
  icon: any;
  label: string;
  title: string;
  sub: string;
}

export function InfoCard({ icon, label, title, sub }: InfoCardProps) {
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

export function MapMock() {
  return (
    <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="mapgrid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="oklch(0.90 0.008 255)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill="oklch(0.98 0.004 255)" />
      <rect width="400" height="500" fill="url(#mapgrid)" />
      <path d="M 0 360 L 400 330 L 400 500 L 0 500 Z" fill="oklch(0.88 0.06 220 / 0.5)" />
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
export function Footer() {
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
