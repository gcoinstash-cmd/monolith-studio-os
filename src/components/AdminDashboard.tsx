import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  Users, 
  Calendar, 
  ShieldCheck, 
  FileText, 
  DollarSign, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  ArrowRight,
  LogOut,
  Sliders,
  Box,
  Check,
  Compass
} from 'lucide-react';

export interface BIMProject {
  id: string;
  projectName: string;
  clientName: string;
  typology: 'Brutalist Pavilion' | 'Civic Monolith' | 'Private Villa' | 'Museum Archive';
  sqft: string;
  stage: 'Concept Modeling' | 'BIM LOD 350' | 'Structural Review' | 'Construction Hand-off';
  contractValue: string;
  leadArchitect: string;
  status: 'Active' | 'Review Required' | 'Approved';
  lastRevision: string;
}

interface AdminDashboardProps {
  onExit: () => void;
}

export function AdminDashboard({ onExit }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'projects' | 'blueprints' | 'contracts'>('projects');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const [projects, setProjects] = useState<BIMProject[]>([
    {
      id: 'MNL-001',
      projectName: 'The Obsidian Pavilion',
      clientName: 'Katsura Cultural Trust',
      typology: 'Civic Monolith',
      sqft: '24,500 sqft',
      stage: 'BIM LOD 350',
      contractValue: '$185,000',
      leadArchitect: 'Elena Rostova, AIA',
      status: 'Active',
      lastRevision: 'LOD_350_Rev4.ifc'
    },
    {
      id: 'MNL-002',
      projectName: 'Brutalist Clifftop Cantilever Villa',
      clientName: 'Sovereign Capital Holdings',
      typology: 'Private Villa',
      sqft: '12,800 sqft',
      stage: 'Structural Review',
      contractValue: '$240,000',
      leadArchitect: 'Marcus Vance, RIBA',
      status: 'Review Required',
      lastRevision: 'Cantilever_Shear_v2.dwg'
    },
    {
      id: 'MNL-003',
      projectName: 'Kyoto Concrete Museum Archive',
      clientName: 'Prefectural Heritage Commission',
      typology: 'Museum Archive',
      sqft: '38,000 sqft',
      stage: 'Construction Hand-off',
      contractValue: '$320,000',
      leadArchitect: 'Kenzo Tange Studio Assoc.',
      status: 'Approved',
      lastRevision: 'Final_BOD_Spec_Set.pdf'
    }
  ]);

  const handleUpdateStatus = (id: string, newStatus: BIMProject['status']) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
  };

  const filteredProjects = projects.filter(p => {
    if (statusFilter === 'All') return true;
    return p.status === statusFilter;
  });

  return (
    <div className="min-h-screen bg-[#0E0E10] text-stone-100 font-sans">
      {/* Top Bar */}
      <header className="border-b border-stone-800 bg-[#141416] px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-[#C5A85C] text-black rounded-lg">
            <Building2 size={20} />
          </div>
          <div>
            <h1 className="font-mono text-base font-bold tracking-widest text-white uppercase">
              MONOLITH STUDIO • PRINCIPAL BLUEPRINT ROOM
            </h1>
            <p className="text-xs font-semibold tracking-wider font-mono text-stone-400 uppercase tracking-widest">
              Brutalist Architecture &amp; BIM Project Portal • v1.0.0
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-xs font-mono text-stone-300 bg-stone-900 border border-stone-800 px-3 py-1.5 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>BIM Cloud Sync: ACTIVE</span>
          </div>

          <button
            onClick={onExit}
            className="flex items-center space-x-2 px-5 py-3 min-h-[44px] bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 rounded-lg text-base font-semibold min-h-[44px] font-mono transition-all cursor-pointer"
          >
            <LogOut size={14} />
            <span>Return to Studio Portal</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* KPI Telemetry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#141416] border border-stone-800 p-5 rounded-xl">
            <div className="flex items-center justify-between text-stone-400 text-xs font-mono mb-2">
              <span>ACTIVE ARCHITECTURAL PIPELINE</span>
              <DollarSign size={14} className="text-[#C5A85C]" />
            </div>
            <p className="font-mono text-2xl font-bold text-white">$745,000</p>
            <p className="text-xs font-semibold text-emerald-400 font-mono mt-1">+24.5% vs prior quarter</p>
          </div>

          <div className="bg-[#141416] border border-stone-800 p-5 rounded-xl">
            <div className="flex items-center justify-between text-stone-400 text-xs font-mono mb-2">
              <span>GROSS MANAGED VOLUME</span>
              <Box size={14} className="text-[#C5A85C]" />
            </div>
            <p className="font-mono text-2xl font-bold text-white">75,300 sqft</p>
            <p className="text-xs font-semibold text-stone-400 font-mono mt-1">3 Monolithic Pavilions</p>
          </div>

          <div className="bg-[#141416] border border-stone-800 p-5 rounded-xl">
            <div className="flex items-center justify-between text-stone-400 text-xs font-mono mb-2">
              <span>BIM REVISION CYCLES</span>
              <Layers size={14} className="text-[#C5A85C]" />
            </div>
            <p className="font-mono text-2xl font-bold text-white">LOD 350 / 400</p>
            <p className="text-xs font-semibold text-amber-400 font-mono mt-1">1 Revision Staged for Review</p>
          </div>

          <div className="bg-[#141416] border border-stone-800 p-5 rounded-xl">
            <div className="flex items-center justify-between text-stone-400 text-xs font-mono mb-2">
              <span>PRINCIPAL ARCHITECTS</span>
              <Compass size={14} className="text-[#C5A85C]" />
            </div>
            <p className="font-mono text-2xl font-bold text-white">4 Certified AIA</p>
            <p className="text-xs font-semibold text-stone-400 font-mono mt-1">Lead: Elena Rostova, AIA</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 border-b border-stone-800 pb-3">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-[#C5A85C] text-black font-bold'
                : 'text-stone-400 hover:text-white hover:bg-stone-900'
            }`}
          >
            Commissioned Works ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('blueprints')}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'blueprints'
                ? 'bg-[#C5A85C] text-black font-bold'
                : 'text-stone-400 hover:text-white hover:bg-stone-900'
            }`}
          >
            BIM Model Repository (IFC / Revit)
          </button>
          <button
            onClick={() => setActiveTab('contracts')}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'contracts'
                ? 'bg-[#C5A85C] text-black font-bold'
                : 'text-stone-400 hover:text-white hover:bg-stone-900'
            }`}
          >
            Retainers &amp; Milestone Billing
          </button>
        </div>

        {/* Tab 1: Commissioned Works */}
        {activeTab === 'projects' && (
          <div className="bg-[#141416] border border-stone-800 rounded-xl p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-white font-bold">Commissioned Project Roster</h3>
                <p className="text-xs text-stone-400 font-mono">BIM revisions, structural sign-offs, and client hand-off stages.</p>
              </div>

              {/* Status Filter */}
              <div className="flex items-center space-x-2">
                {['All', 'Active', 'Review Required', 'Approved'].map(status => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                      statusFilter === status
                        ? 'bg-stone-800 text-white font-semibold border border-stone-700'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Cards */}
            <div className="space-y-3">
              {filteredProjects.map(p => (
                <div
                  key={p.id}
                  className="bg-[#0E0E10] border border-stone-800 p-5 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-base font-bold text-white">{p.projectName}</span>
                      <span className="text-xs font-semibold tracking-wider font-mono px-2 py-0.5 rounded bg-[#C5A85C]/10 text-[#C5A85C] border border-[#C5A85C]/30 font-semibold">
                        {p.typology}
                      </span>
                      <span className="text-xs font-mono text-stone-500">#{p.id}</span>
                    </div>
                    <p className="text-xs text-stone-300 font-mono">
                      Client: <span className="text-white font-semibold">{p.clientName}</span> • Area: <span className="text-stone-400">{p.sqft}</span>
                    </p>
                    <p className="text-xs font-semibold text-stone-400 font-mono">
                      📐 Stage: <span className="text-[#C5A85C]">{p.stage}</span> • Lead: {p.leadArchitect} • Value: {p.contractValue}
                    </p>
                    <p className="text-xs font-semibold text-stone-500 font-mono">
                      File: <code>{p.lastRevision}</code>
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    {p.status !== 'Approved' && (
                      <button
                        onClick={() => handleUpdateStatus(p.id, 'Approved')}
                        className="px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-600/30 text-xs font-mono rounded-lg transition-all cursor-pointer"
                      >
                        Sign-off BIM
                      </button>
                    )}
                    {p.status !== 'Review Required' && (
                      <button
                        onClick={() => handleUpdateStatus(p.id, 'Review Required')}
                        className="px-3 py-1.5 bg-amber-600/20 hover:bg-amber-600/40 text-amber-300 border border-amber-600/30 text-xs font-mono rounded-lg transition-all cursor-pointer"
                      >
                        Request Review
                      </button>
                    )}
                    <span className={`px-3 py-1.5 text-xs font-mono rounded-lg uppercase tracking-wider font-bold ${
                      p.status === 'Approved'
                        ? 'bg-emerald-500 text-black'
                        : p.status === 'Review Required'
                        ? 'bg-amber-500 text-black'
                        : 'bg-stone-800 text-stone-300'
                    }`}>
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: BIM Blueprints */}
        {activeTab === 'blueprints' && (
          <div className="bg-[#141416] border border-stone-800 rounded-xl p-6 space-y-4">
            <h3 className="font-mono text-sm uppercase tracking-widest text-white font-bold">BIM Revision &amp; IFC Archive</h3>
            <p className="text-xs text-stone-400 font-mono">Certified engineering exports and 3D IFC structural sets.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#0E0E10] border border-stone-800 p-4 rounded-xl space-y-2">
                <span className="font-mono text-xs font-bold text-white block">MNL_001_Obsidian_LOD350.ifc</span>
                <span className="text-xs font-semibold text-stone-400 font-mono block">Size: 184 MB • Coordinated with MEP</span>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold tracking-wider font-mono rounded inline-block">Zero Clashes Detected</span>
              </div>
              <div className="bg-[#0E0E10] border border-stone-800 p-4 rounded-xl space-y-2">
                <span className="font-mono text-xs font-bold text-white block">MNL_002_Cantilever_Shear.dwg</span>
                <span className="text-xs font-semibold text-stone-400 font-mono block">Size: 42 MB • Post-tensioned Concrete</span>
                <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold tracking-wider font-mono rounded inline-block">PE Review Pending</span>
              </div>
              <div className="bg-[#0E0E10] border border-stone-800 p-4 rounded-xl space-y-2">
                <span className="font-mono text-xs font-bold text-white block">MNL_003_Kyoto_Archive_Set.pdf</span>
                <span className="text-xs font-semibold text-stone-400 font-mono block">Size: 95 MB • 100% Construction Docs</span>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold tracking-wider font-mono rounded inline-block">Archived &amp; Stamped</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Retainers & Billing */}
        {activeTab === 'contracts' && (
          <div className="bg-[#141416] border border-stone-800 rounded-xl p-6 space-y-4">
            <h3 className="font-mono text-sm uppercase tracking-widest text-white font-bold">Client Retainers &amp; Milestone Billing</h3>
            <p className="text-xs text-stone-400 font-mono">Payment telemetry, escrow milestones, and architectural retainers.</p>
            <div className="space-y-3 pt-2">
              <div className="bg-[#0E0E10] border border-stone-800 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="font-mono text-sm font-bold text-white">The Obsidian Pavilion — Milestone 3 (BIM LOD 350)</h4>
                  <p className="text-xs text-stone-400 font-mono">Invoice #INV-2026-08 • $55,500 due upon structural sign-off</p>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold rounded">Wire Received</span>
              </div>
              <div className="bg-[#0E0E10] border border-stone-800 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="font-mono text-sm font-bold text-white">Brutalist Clifftop Cantilever — Milestone 2 (Schematics)</h4>
                  <p className="text-xs text-stone-400 font-mono">Invoice #INV-2026-11 • $72,000 due upon geotechnical clearance</p>
                </div>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold rounded">Escrow Pending</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
