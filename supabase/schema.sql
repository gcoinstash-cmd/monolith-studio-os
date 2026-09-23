-- MONOLITH STUDIO — Supabase Production Schema (PostgreSQL)
-- Ghost Factory™ Verified Architecture with Row-Level Security (RLS)
-- High-Ticket Brutalist Architecture & BIM Project Portal OS

create table if not exists public.architect_clients (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  company text not null,
  email text unique not null,
  phone text,
  client_tier text check (client_tier in ('Institutional', 'Private Collector', 'Developer Guild')) default 'Institutional',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.commissioned_projects (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.architect_clients(id) on delete set null,
  project_code text unique not null,
  title text not null,
  location text not null,
  typology text check (typology in ('Brutalist Civic', 'Bespoke Residential', 'Cultural Pavilion', 'Commercial Tower', 'Sacred Structure')) default 'Brutalist Civic',
  total_valuation numeric(14, 2) not null,
  phase text check (phase in ('Schematic Design', 'Design Development', 'Construction Docs', 'Site Execution', 'Commissioned')) default 'Design Development',
  lead_architect text not null,
  gross_floor_area_sqm integer not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.bim_revisions (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.commissioned_projects(id) on delete cascade,
  model_name text not null,
  file_format text check (file_format in ('IFC 4.3', 'Revit RVT', 'Rhino 3DM', 'Navisworks NWD')) default 'IFC 4.3',
  file_size_mb numeric(6, 1) not null,
  revision_tag text not null,
  structural_engineer text not null,
  clash_detection_status text check (clash_detection_status in ('Clean (Zero Clashes)', 'Minor Clashes (Under Review)', 'Major Clashes Detected')) default 'Clean (Zero Clashes)',
  last_synced timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.project_milestones (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.commissioned_projects(id) on delete cascade,
  milestone_title text not null,
  invoice_ref text unique not null,
  amount numeric(12, 2) not null,
  due_date date not null,
  payment_status text check (payment_status in ('Draft', 'Billed', 'Escrow Funded', 'Settled')) default 'Billed',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.architect_clients enable row level security;
alter table public.commissioned_projects enable row level security;
alter table public.bim_revisions enable row level security;
alter table public.project_milestones enable row level security;

-- Policies (Public Demo Read / Authenticated Admin Write)
create policy "Allow public read access to projects" on public.commissioned_projects for select using (true);
create policy "Allow public read access to bim revisions" on public.bim_revisions for select using (true);
create policy "Allow public read access to milestones" on public.project_milestones for select using (true);
create policy "Allow public read access to client directory" on public.architect_clients for select using (true);
