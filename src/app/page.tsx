
import React from "react";
import { Nav, Hero, BrandMarquee, Transparency, HowItWorks } from '../components/sections-top';
import { Inventory } from '../components/sections-inventory';
import { ValutaUsato, Testimonials, Team, FAQSection, Contatti, Footer } from '../components/sections-bottom';
import { TweaksPanel } from '../components/tweaks';

export default function Home() {
  return (
    <main className="relative bg-paper text-ink-900 min-h-screen">
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
    </main>
  );
}
