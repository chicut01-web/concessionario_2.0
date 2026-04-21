/* global window */
// All data for the Secar prototype. Attached to window for cross-script access.

const CARS = [
  { id: 1,  brand: 'Volkswagen', model: 'Golf 1.5 TSI Life',        year: 2023, km: 18500, fuel: 'Benzina',  trans: 'Manuale',     price: 21900, monthly: 249, badge: 'Km 0',        color: 'Grigio Urano',  tone: 'slate'  },
  { id: 2,  brand: 'Fiat',       model: '500e La Prima by Bocelli', year: 2024, km: 3200,  fuel: 'Elettrico', trans: 'Automatico',  price: 24500, monthly: 279, badge: 'Km 0',        color: 'Celestial Blue', tone: 'sky'   },
  { id: 3,  brand: 'Audi',       model: 'A3 Sportback 35 TDI',      year: 2022, km: 42100, fuel: 'Diesel',   trans: 'S tronic',    price: 27800, monthly: 319, badge: 'Certificata',  color: 'Bianco Ibis',    tone: 'zinc'  },
  { id: 4,  brand: 'BMW',        model: 'Serie 1 118d Msport',      year: 2023, km: 28700, fuel: 'Diesel',   trans: 'Automatico',  price: 31500, monthly: 359, badge: 'Certificata',  color: 'Nero Saphir',    tone: 'neutral' },
  { id: 5,  brand: 'Toyota',     model: 'Yaris Hybrid Trend',       year: 2023, km: 22400, fuel: 'Ibrido',   trans: 'Automatico',  price: 19900, monthly: 229, badge: 'Occasione',    color: 'Rosso Scarlatto',tone: 'rose'  },
  { id: 6,  brand: 'Peugeot',    model: '208 GT Line PureTech',     year: 2022, km: 35600, fuel: 'Benzina',  trans: 'Manuale',     price: 16800, monthly: 189, badge: null,           color: 'Blu Vertigo',    tone: 'indigo'},
  { id: 7,  brand: 'Tesla',      model: 'Model 3 Long Range',       year: 2023, km: 24100, fuel: 'Elettrico', trans: 'Automatico', price: 41900, monthly: 469, badge: 'Certificata',  color: 'Bianco Perla',   tone: 'stone' },
  { id: 8,  brand: 'Renault',    model: 'Clio E-Tech Full Hybrid',  year: 2024, km: 8900,  fuel: 'Ibrido',   trans: 'Automatico',  price: 18500, monthly: 209, badge: 'Km 0',         color: 'Blu Iron',       tone: 'blue'  },
  { id: 9,  brand: 'Jeep',       model: 'Compass 4xe Limited',      year: 2022, km: 51200, fuel: 'Ibrido',   trans: 'Automatico',  price: 28900, monthly: 329, badge: null,           color: 'Granite Crystal',tone: 'stone' },
  { id: 10, brand: 'Mercedes',   model: 'Classe A 180d Premium',    year: 2023, km: 31800, fuel: 'Diesel',   trans: 'Automatico',  price: 33500, monthly: 379, badge: 'Certificata',  color: 'Grigio Montagna',tone: 'zinc'  },
  { id: 11, brand: 'Citroen',    model: 'C3 Aircross Shine',        year: 2024, km: 1800,  fuel: 'Benzina',  trans: 'Automatico',  price: 22400, monthly: 259, badge: 'Km 0',         color: 'Bianco Natural', tone: 'neutral'},
  { id: 12, brand: 'Hyundai',    model: 'Tucson 1.6 T-GDI Hybrid',  year: 2023, km: 26700, fuel: 'Ibrido',   trans: 'Automatico',  price: 29900, monthly: 339, badge: 'Occasione',    color: 'Teal Scuro',     tone: 'teal'  },
];

const BRANDS = ['Volkswagen','Fiat','Audi','BMW','Toyota','Peugeot','Tesla','Renault','Jeep','Mercedes','Citroen','Hyundai','Ford','Opel','Kia','Seat','Skoda','Dacia','Nissan','Mazda'];

const TESTIMONIALS = [
  { name: 'Marco D.',        city: 'Salerno',  stars: 5, text: 'Zero sorprese. I chilometri erano quelli dichiarati, la pratica chiusa in tre giorni. Servizio onesto come ormai se ne vedono pochi.' },
  { name: 'Giulia R.',       city: 'Battipaglia', stars: 5, text: 'Mi hanno proposto una rata che rientrava nel mio budget senza forzare la mano. Alla consegna l\u2019auto era come nuova, lavata e con il pieno.' },
  { name: 'Antonio P.',      city: 'Cava de\u2019 Tirreni', stars: 5, text: 'Venivo da un\u2019esperienza pessima con un\u2019altra concessionaria. Qui trasparenza totale: report ispezione scritto, garanzia reale, nessun costo nascosto.' },
  { name: 'Chiara M.',       city: 'Nocera',   stars: 5, text: 'Prima auto, tante paranoie. Mi hanno spiegato tutto con calma, senza trattarmi come se non capissi. Super consigliati.' },
  { name: 'Vincenzo L.',     city: 'Pontecagnano', stars: 4, text: 'Ho preso un\u2019ibrida km 0 a un prezzo che non ho trovato altrove nel Salernitano. La garanzia 12 mesi fa la differenza.' },
  { name: 'Fabiana C.',      city: 'Agropoli', stars: 5, text: 'Ritiro del mio usato valutato bene, senza le solite trattative estenuanti. Processo pulito dall\u2019inizio alla fine.' },
];

const FAQ = [
  { q: 'Cosa significa che i chilometri sono certificati?',
    a: 'Ogni auto passa attraverso un controllo documentale (libretto, tagliandi, storico assicurativo) e un test diagnostico OBD con report scritto che ti consegniamo insieme all\u2019auto. Se i km dichiarati non corrispondono, ti rimborsiamo l\u2019intero importo entro 14 giorni.' },
  { q: 'Come funziona la garanzia 12 mesi?',
    a: 'Copertura completa su motore, cambio, elettronica e impianto frenante per 12 mesi dalla data di consegna, senza massimale di chilometraggio. Estendibile a 24 o 36 mesi al momento dell\u2019acquisto.' },
  { q: 'Posso finanziare l\u2019auto anche senza busta paga?',
    a: 'S\u00ec. Lavoriamo con 6 istituti finanziari diversi, quindi possiamo costruire piani per lavoratori autonomi, stagionali e pensionati. La preventazione \u00e8 gratuita e non vincolante.' },
  { q: 'Ritirate il mio usato?',
    a: 'Sempre. Inserisci i dati nella sezione \u201cValuta il tuo usato\u201d e ricevi una valutazione indicativa in 24 ore. La valutazione finale avviene in sede con una prova su strada.' },
  { q: 'Posso fare un test drive prima di decidere?',
    a: 'Certo. Prenota un test drive dalla scheda della vettura o chiamandoci. Ti basta portare patente e documento d\u2019identit\u00e0.' },
  { q: 'Che differenza c\u2019\u00e8 tra km 0 e \u201cCertificata\u201d?',
    a: 'Le km 0 sono auto immatricolate dal concessionario e mai usate da un cliente privato. Le Certificate sono usate che hanno superato il nostro check a 140 punti. Entrambe escono con 12 mesi di garanzia.' },
];

const TEAM = [
  { name: 'Luca Sabbatino',  role: 'Fondatore & CEO',         years: 18, bio: 'Cresciuto tra motori, tagliandi e libretti di circolazione. Ha fondato Secar nel 2011.' },
  { name: 'Elena Ferrara',   role: 'Responsabile Vendite',    years: 11, bio: 'Si occupa del primo contatto e del match tra cliente e vettura. Non vende mai quello che non comprerebbe per s\u00e9.' },
  { name: 'Davide Esposito', role: 'Capo Officina',           years: 22, bio: 'Ogni auto passa dalle sue mani prima di arrivare in salone. \u00c8 la ragione per cui possiamo certificare i km.' },
  { name: 'Sara Conte',      role: 'Area Finanziamenti',      years: 7,  bio: 'Costruisce i piani finanziari su misura e ti spiega i numeri in chiaro, senza scorciatoie.' },
];

const STEPS = [
  { n: 1, t: 'Scegli l\u2019auto',     d: 'Esplora il nostro parco online, filtra per alimentazione o budget e prenota un test drive in pochi click.' },
  { n: 2, t: 'Prova e verifica',      d: 'Ti consegniamo il report dei 140 controlli, ti accompagniamo in strada, rispondiamo a ogni domanda.' },
  { n: 3, t: 'Porta a casa',          d: 'Finanziamento, permuta e passaggio di propriet\u00e0 li gestiamo noi. Tu ritiri l\u2019auto pronta, con il pieno.' },
];

window.SECAR = { CARS, BRANDS, TESTIMONIALS, FAQ, TEAM, STEPS };
