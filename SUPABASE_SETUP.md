# MONOLITH STUDIO — Supabase Database Integration Guide

## 🚀 Quick Connect in Under 3 Minutes

Follow these quick steps to hook up your PostgreSQL Supabase database to **MONOLITH STUDIO**.

### 1. Create a Supabase Project
1. Go to [https://supabase.com](https://supabase.com) and create a new project.
2. Select your preferred database region and set a strong database password.

### 2. Execute SQL Schemas
1. In your Supabase dashboard, click on **SQL Editor** in the left sidebar.
2. Click **New Query**, paste the contents of `supabase/schema.sql`, and click **Run**.
3. Create another query, paste `supabase/seed.sql`, and click **Run** to preload live demo architecture projects and BIM models.

### 3. Configure Environment Variables
Copy `.env.example` to `.env` in the root of your project:
```bash
cp .env.example .env
```

Fill in your project credentials from **Project Settings > API**:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Tables Included in this OS
- `architect_clients`: Directory of high-net-worth patrons, institutional developers, and family offices.
- `commissioned_projects`: Structural portfolio tracking typology, location, valuation, and construction phase.
- `bim_revisions`: Building Information Modeling repository supporting IFC 4.3, Revit RVT, and Rhino files with clash detection status.
- `project_milestones`: Financial escrow billing milestones, payment verification, and automated invoicing status.

### 5. Build and Deploy
```bash
npm install
npm run build
```
Deploy the generated `dist/` directory to Render, Vercel, Netlify, or Cloudflare Pages.
