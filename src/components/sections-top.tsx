
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Icon, Button, Pill, SectionLabel, Reveal } from './primitives';
import { CarSVG } from './car-svg';
import { BRANDS, STEPS } from './data';

/* =====================================================
   NAV
 ===================================================== */
interface NavProps {
  onOpenTweaks?: () => void;
}

export function Nav({ onOpenTweaks }: NavProps) {
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
          {onOpenTweaks && (
            <Button variant="ghost" onClick={onOpenTweaks} className="p-2">
              <Icon name="cog" className="w-4 h-4" />
            </Button>
          )}
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
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const bgY        = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const titleY     = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const titleOpac  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

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
              key="line-1"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              La tua prossima auto,
            </motion.span>
            <motion.span
              key="line-2"
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
export function BrandMarquee() {
  const brands = BRANDS;
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
export function Transparency() {
  const pillars: Array<{
    n: string;
    icon: any; // IconName from primitives
    title: string;
    desc: string;
    tags: string[];
  }> = [
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
              <a href="#" className="mt-6 text-[13px] font-medium text-brand-700 inline-flex items-center gap-1.5 opacity-80 hover:opacity-100">
                Approfondisci
                <Icon name="arrow" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" stroke={2} />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}
          className="mt-12 md:mt-16 relative overflow-hidden rounded-3xl bg-ink-900 text-white p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center">
          <div aria-hidden className="absolute -right-20 -bottom-20 w-[420px] h-[420px] rounded-full bg-brand-700/40 blur-3xl" />
          <div className="md:col-span-7 relative">
            <SectionLabel n="" className="text-accent-400 mb-3">
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
export function HowItWorks() {
  const steps = STEPS;
  const sectionRef = useRef<HTMLElement>(null);
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

        <div className="relative">
          <div className="absolute left-0 right-0 top-[60px] md:top-[72px] h-px bg-ink-200" />
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


