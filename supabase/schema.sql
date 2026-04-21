-- =====================================================
-- SECAR — Schema + Seed
-- Incolla questo file nell'editor SQL di Supabase
-- =====================================================

-- CARS
create table if not exists public.cars (
  id         integer primary key,
  brand      text    not null,
  model      text    not null,
  year       integer not null,
  km         integer not null,
  fuel       text    not null check (fuel in ('Benzina','Diesel','Ibrido','Elettrico')),
  trans      text    not null,
  price      integer not null,
  monthly    integer not null,
  badge      text    check (badge in ('Km 0','Certificata','Occasione')),
  color      text    not null,
  tone       text    not null,
  created_at timestamptz default now()
);

alter table public.cars enable row level security;

drop policy if exists "Cars are publicly readable" on public.cars;
create policy "Cars are publicly readable" on public.cars
  for select using (true);

-- Seed (12 veicoli)
insert into public.cars (id, brand, model, year, km, fuel, trans, price, monthly, badge, color, tone) values
(1,  'Volkswagen', 'Golf 1.5 TSI Life',          2023, 18500, 'Benzina',   'Manuale',    21900, 249, 'Km 0',       'Grigio Urano',   'slate'),
(2,  'Fiat',       '500e La Prima by Bocelli',    2024,  3200, 'Elettrico', 'Automatico', 24500, 279, 'Km 0',       'Celestial Blue', 'sky'),
(3,  'Audi',       'A3 Sportback 35 TDI',         2022, 42100, 'Diesel',    'S tronic',   27800, 319, 'Certificata','Bianco Ibis',    'zinc'),
(4,  'BMW',        'Serie 1 118d Msport',         2023, 28700, 'Diesel',    'Automatico', 31500, 359, 'Certificata','Nero Saphir',    'neutral'),
(5,  'Toyota',     'Yaris Hybrid Trend',          2023, 22400, 'Ibrido',    'Automatico', 19900, 229, 'Occasione',  'Rosso Scarlatto','rose'),
(6,  'Peugeot',    '208 GT Line PureTech',        2022, 35600, 'Benzina',   'Manuale',    16800, 189, null,         'Blu Vertigo',    'indigo'),
(7,  'Tesla',      'Model 3 Long Range',          2023, 24100, 'Elettrico', 'Automatico', 41900, 469, 'Certificata','Bianco Perla',   'stone'),
(8,  'Renault',    'Clio E-Tech Full Hybrid',     2024,  8900, 'Ibrido',    'Automatico', 18500, 209, 'Km 0',       'Blu Iron',       'blue'),
(9,  'Jeep',       'Compass 4xe Limited',         2022, 51200, 'Ibrido',    'Automatico', 28900, 329, null,         'Granite Crystal','stone'),
(10, 'Mercedes',   'Classe A 180d Premium',       2023, 31800, 'Diesel',    'Automatico', 33500, 379, 'Certificata','Grigio Montagna', 'zinc'),
(11, 'Citroen',    'C3 Aircross Shine',           2024,  1800, 'Benzina',   'Automatico', 22400, 259, 'Km 0',       'Bianco Natural', 'neutral'),
(12, 'Hyundai',    'Tucson 1.6 T-GDI Hybrid',    2023, 26700, 'Ibrido',    'Automatico', 29900, 339, 'Occasione',  'Teal Scuro',     'teal')
on conflict (id) do nothing;

-- CONTACTS
create table if not exists public.contacts (
  id         uuid        default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  nome       text        not null,
  email      text        not null,
  tel        text,
  msg        text        not null
);

alter table public.contacts enable row level security;

drop policy if exists "Contacts can be inserted by anyone" on public.contacts;
create policy "Contacts can be inserted by anyone" on public.contacts
  for insert with check (true);

-- VALUATIONS
create table if not exists public.valuations (
  id         uuid        default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  targa      text        not null,
  km         integer     not null,
  anno       integer     not null,
  email      text        not null
);

alter table public.valuations enable row level security;

drop policy if exists "Valuations can be inserted by anyone" on public.valuations;
create policy "Valuations can be inserted by anyone" on public.valuations
  for insert with check (true);
