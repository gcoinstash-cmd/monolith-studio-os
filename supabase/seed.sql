-- MONOLITH STUDIO — Seed Data for Architecture & BIM OS
-- Preloaded with brutalist commission projects and BIM models

insert into public.architect_clients (id, client_name, company, email, phone, client_tier)
values
  ('a1111111-1111-1111-1111-111111111111', 'Helena Vance', 'Vance Holding AG', 'vance@vanceag.ch', '+41 22 819 9200', 'Institutional'),
  ('a2222222-2222-2222-2222-222222222222', 'Kaelen Thorne', 'Nordic Alpine Sanctuaries', 'k.thorne@nordicsanctuary.is', '+354 555 4892', 'Developer Guild'),
  ('a3333333-3333-3333-3333-333333333333', 'Darius Sterling', 'Private Family Office', 'darius@sterlingpatrimoine.mc', '+377 98 98 00 11', 'Private Collector')
on conflict (id) do nothing;

insert into public.commissioned_projects (id, client_id, project_code, title, location, typology, total_valuation, phase, lead_architect, gross_floor_area_sqm)
values
  ('b1111111-1111-1111-1111-111111111111', 'a1111111-1111-1111-1111-111111111111', 'MN-701', 'The Obsidian Monolith', 'Engadin Valley, Switzerland', 'Cultural Pavilion', 14500000.00, 'Site Execution', 'K. Aris Thorne', 4200),
  ('b2222222-2222-2222-2222-222222222222', 'a2222222-2222-2222-2222-222222222222', 'MN-804', 'Kallio Cantilever Villa', 'Reykjavik Coastal Bluffs', 'Bespoke Residential', 8900000.00, 'Design Development', 'S. Linus Ward', 1850),
  ('b3333333-3333-3333-3333-333333333333', 'a3333333-3333-3333-3333-333333333333', 'MN-912', 'Atelier Brut Archive & Vault', 'Kyoto Highlands, Japan', 'Brutalist Civic', 22000000.00, 'Construction Docs', 'K. Aris Thorne', 6800)
on conflict (id) do nothing;

insert into public.bim_revisions (id, project_id, model_name, file_format, file_size_mb, revision_tag, structural_engineer, clash_detection_status)
values
  ('c1111111-1111-1111-1111-111111111111', 'b1111111-1111-1111-1111-111111111111', 'Obsidian_Structural_LOD400', 'IFC 4.3', 348.5, 'REV-04.12', 'Arup Zurich', 'Clean (Zero Clashes)'),
  ('c2222222-2222-2222-2222-222222222222', 'b1111111-1111-1111-1111-111111111111', 'Obsidian_HVAC_ThermalMass', 'Revit RVT', 194.2, 'REV-03.88', 'Buro Happold', 'Clean (Zero Clashes)'),
  ('c3333333-3333-3333-3333-333333333333', 'b2222222-2222-2222-2222-222222222222', 'Kallio_Cantilever_TensionPost', 'Rhino 3DM', 512.0, 'REV-02.04', 'Thor Engineering', 'Minor Clashes (Under Review)'),
  ('c4444444-4444-4444-4444-444444444444', 'b3333333-3333-3333-3333-333333333333', 'Kyoto_Vault_EarthquakeSeismic', 'Navisworks NWD', 418.9, 'REV-05.00', 'Takenaka Civil', 'Clean (Zero Clashes)')
on conflict (id) do nothing;

insert into public.project_milestones (id, project_id, milestone_title, invoice_ref, amount, due_date, payment_status)
values
  ('d1111111-1111-1111-1111-111111111111', 'b1111111-1111-1111-1111-111111111111', 'Foundations & Subgrade Concrete Pour', 'INV-MN-701-03', 1850000.00, '2026-10-15', 'Escrow Funded'),
  ('d2222222-2222-2222-2222-222222222222', 'b1111111-1111-1111-1111-111111111111', 'Upper Cantilever Formwork Signoff', 'INV-MN-701-04', 2200000.00, '2026-12-01', 'Billed'),
  ('d3333333-3333-3333-3333-333333333333', 'b2222222-2222-2222-2222-222222222222', 'Geotechnical Seismic Bedrock Anchor', 'INV-MN-804-01', 940000.00, '2026-09-30', 'Settled')
on conflict (id) do nothing;
