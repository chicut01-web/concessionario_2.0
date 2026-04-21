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
