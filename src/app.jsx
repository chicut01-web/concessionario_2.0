import { Nav, Hero, BrandMarquee, Transparency, HowItWorks } from './sections-top.jsx';
import { Inventory } from './sections-inventory.jsx';
import { ValutaUsato, Testimonials, Team, FAQSection, Contatti, Footer } from './sections-bottom.jsx';
import { TweaksPanel } from './tweaks.jsx';

export default function App() {
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
