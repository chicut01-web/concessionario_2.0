import { Nav, Hero, BrandMarquee, Transparency, HowItWorks } from '../components/sections-top.jsx';
import { Inventory } from '../components/sections-inventory.jsx';
import { ValutaUsato, Testimonials, Team, FAQSection, Contatti, Footer } from '../components/sections-bottom.jsx';
import { TweaksPanel } from '../components/tweaks.jsx';

export default function Home() {
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
