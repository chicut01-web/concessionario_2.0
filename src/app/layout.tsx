
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Secar — La tua prossima auto, semplificata.',
  description: 'Concessionario multimarca di auto usate e km 0 a Salerno. Chilometri certificati, garanzia 12 mesi, finanziamenti su misura.',
  keywords: 'concessionario salerno, auto usate salerno, auto km 0, vendita auto campania, secar dealership',
  authors: [{ name: 'Secar' }],
  openGraph: {
    title: 'Secar — La tua prossima auto, semplificata.',
    description: 'Auto usate e km 0 certificate a Salerno.',
    type: 'website',
    locale: 'it_IT',
  }
};

export const viewport: Viewport = {
  themeColor: '#0c0c11',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-brand-700/30">
        {children}
      </body>
    </html>
  );
}
