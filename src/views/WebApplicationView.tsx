import React, { useState } from 'react';
import { 
  COMPANY_INFO, 
  SERVICES, 
  WEB_APPLICATIONS, 
  MOBILE_APPLICATIONS, 
  VISION_PILLARS, 
  MISSION_PILLARS 
} from '../data/portfolioData';
import { BrowserMockup } from '../components/BrowserMockup';
import { WebPlatformCard } from '../components/WebPlatformCard';
import { PhoneMockup } from '../components/PhoneMockup';
import { ProjectModal } from '../components/ProjectModal';
import { ServicesSection } from '../components/ServicesSection';
import { ServiceDetailPage } from './ServiceDetailPage';
import { WebApplication, MobileApplication, ServiceItem } from '../types/portfolio';
import { 
  Globe, 
  Smartphone, 
  Code2, 
  Database, 
  Cpu, 
  RefreshCw, 
  Cloud, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
  Mail, 
  ShieldCheck, 
  Zap, 
  Layers, 
  HeartHandshake, 
  Compass, 
  Target,
  Presentation,
  Search,
  Copy,
  Check
} from 'lucide-react';

interface WebApplicationViewProps {
  onSwitchToDeck: () => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  'web-dev': <Globe className="w-5 h-5 text-blue-600" />,
  'mobile-dev': <Smartphone className="w-5 h-5 text-indigo-600" />,
  'custom-software': <Code2 className="w-5 h-5 text-sky-600" />,
  'erp-crm': <Database className="w-5 h-5 text-cyan-600" />,
  'ai-ml': <Cpu className="w-5 h-5 text-violet-600" />,
  'digital-trans': <RefreshCw className="w-5 h-5 text-emerald-600" />,
  'cloud-infra': <Cloud className="w-5 h-5 text-teal-600" />,
};

const missionIcons: Record<string, React.ReactNode> = {
  'm1': <Zap className="w-5 h-5 text-amber-500" />,
  'm2': <ShieldCheck className="w-5 h-5 text-blue-600" />,
  'm3': <Cpu className="w-5 h-5 text-indigo-600" />,
  'm4': <Layers className="w-5 h-5 text-sky-600" />,
  'm5': <HeartHandshake className="w-5 h-5 text-emerald-600" />,
};

const visionIcons: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-blue-600" />,
  Globe: <Globe className="w-6 h-6 text-sky-600" />,
  Zap: <Zap className="w-6 h-6 text-amber-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
};

export const WebApplicationView: React.FC<WebApplicationViewProps> = ({ onSwitchToDeck }) => {
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ServiceItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'mobile'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeWebApp, setActiveWebApp] = useState<WebApplication | null>(null);
  const [activeMobileApp, setActiveMobileApp] = useState<MobileApplication | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const categories = [
    'All',
    'Enterprise & Infrastructure',
    'Commerce & Lifestyle',
    'Media & AI',
    'Creative & Artisanal',
  ];

  // Filtering Web Apps
  const filteredWebApps = WEB_APPLICATIONS.filter((app) => {
    const matchesCat = selectedCategory === 'All' || app.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Filtering Mobile Apps
  const filteredMobileApps = MOBILE_APPLICATIONS.filter((app) => {
    const matchesSearch = searchQuery === '' ||
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Full-page service detail view when a service is opened
  if (selectedServiceForDetail) {
    return (
      <>
        <ServiceDetailPage
          service={selectedServiceForDetail}
          onBack={() => setSelectedServiceForDetail(null)}
          onSelectService={(s) => setSelectedServiceForDetail(s)}
          onSelectWebApp={(w) => setActiveWebApp(w)}
          onSelectMobileApp={(m) => setActiveMobileApp(m)}
        />
        <ProjectModal
          webApp={activeWebApp}
          mobileApp={activeMobileApp}
          onClose={() => {
            setActiveWebApp(null);
            setActiveMobileApp(null);
          }}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Bar Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Brand Wordmark & Logo */}
          <a href="#hero" className="flex items-center gap-3 shrink-0">
            <img
              src={COMPANY_INFO.logoPath}
              alt="NYAYAOS Logo"
              className="h-8 sm:h-9 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap">
              {COMPANY_INFO.brand}
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors whitespace-nowrap">
              Services
            </a>
            <a href="#portfolio" className="hover:text-blue-600 transition-colors whitespace-nowrap">
              Portfolio
            </a>
            <a href="#vision" className="hover:text-blue-600 transition-colors whitespace-nowrap">
              Vision & Mission
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors whitespace-nowrap">
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onSwitchToDeck}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50/80 text-blue-700 hover:bg-blue-100 text-xs font-semibold transition-colors"
              title="Open the 6-slide presentation deck"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Presentation Mode</span>
              <span className="sm:hidden">Deck</span>
            </button>

            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-xs shadow-blue-600/20 whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-b from-white via-blue-50/50 to-slate-50 border-b border-slate-200"
        >
          {/* Background Ambient Lighting */}
          <div className="absolute inset-0 bg-tech-grid-light opacity-60 pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 text-xs sm:text-sm font-bold tracking-widest text-blue-700 uppercase font-mono mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Technology & Digital Solutions · {COMPANY_INFO.website}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] max-w-4xl mx-auto">
              One Intelligence.{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Infinite Possibilities.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
              {COMPANY_INFO.subheading}
            </p>

            {/* Hero CTA Button Bar */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#portfolio"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/25 flex items-center gap-2"
              >
                <span>Explore Digital Portfolio (16 Apps)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm transition-all shadow-2xs"
              >
                Our 7 Core Services
              </a>

              <button
                onClick={onSwitchToDeck}
                className="px-5 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <Presentation className="w-4 h-4" />
                <span>6-Slide Deck Mode</span>
              </button>
            </div>

            {/* Strategic Metrics Bar */}
            <div className="mt-16 pt-10 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              <div className="p-4 rounded-xl bg-white/70 border border-slate-200 shadow-2xs">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-mono">13</span>
                <span className="block text-xs font-bold text-slate-900 mt-1">Web Applications</span>
                <span className="text-[11px] text-slate-500">Production web platforms</span>
              </div>
              <div className="p-4 rounded-xl bg-white/70 border border-slate-200 shadow-2xs">
                <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 font-mono">3</span>
                <span className="block text-xs font-bold text-slate-900 mt-1">Mobile Applications</span>
                <span className="text-[11px] text-slate-500">Native iOS & Android systems</span>
              </div>
              <div className="p-4 rounded-xl bg-white/70 border border-slate-200 shadow-2xs">
                <span className="text-2xl sm:text-3xl font-extrabold text-sky-600 font-mono">7</span>
                <span className="block text-xs font-bold text-slate-900 mt-1">Core Capabilities</span>
                <span className="text-[11px] text-slate-500">From AI to cloud infrastructure</span>
              </div>
              <div className="p-4 rounded-xl bg-white/70 border border-slate-200 shadow-2xs">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-mono">100%</span>
                <span className="block text-xs font-bold text-slate-900 mt-1">Enterprise Ready</span>
                <span className="text-[11px] text-slate-500">Reliable & scalable delivery</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <ServicesSection onOpenService={(srv) => setSelectedServiceForDetail(srv)} />

        {/* DIGITAL PORTFOLIO SECTION (THE MOST IMPORTANT SECTION) */}
        <section id="portfolio" className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header & Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-0.5 bg-blue-600" />
                  <span className="text-[11px] font-semibold tracking-wider text-blue-600 uppercase">PORTFOLIO</span>
                  <span className="text-slate-300">/</span>
                  <span className="text-[11px] text-slate-500 font-medium">13 Web Platforms · 3 Mobile Systems</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Our Digital Portfolio
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
                  Client deliverables engineered by NYAYAOS. Click any mockup to inspect full architecture and stack details.
                </p>
              </div>

              {/* View Switchers: All / Web / Mobile */}
              <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg shadow-2xs self-start md:self-end">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'all'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All (16)
                </button>
                <button
                  onClick={() => setActiveTab('web')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'web'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Web ({WEB_APPLICATIONS.length})
                </button>
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'mobile'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Mobile ({MOBILE_APPLICATIONS.length})
                </button>
              </div>
            </div>

            {/* Filter Bar: Category Tabs & Search Bar */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2 bg-white border border-slate-200 rounded-xl shadow-2xs">
              {/* Category Pills */}
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full sm:w-64 shrink-0">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search project or domain..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-2.5 py-1 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
                />
              </div>
            </div>

            {/* SECTION 1: WEB APPLICATIONS GALLERY */}
            {(activeTab === 'all' || activeTab === 'web') && (
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <h3 className="text-sm font-bold text-slate-900">
                      Web Applications ({filteredWebApps.length})
                    </h3>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Production Client Deployments
                  </span>
                </div>

                {filteredWebApps.length === 0 ? (
                  <div className="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
                    No web applications matched your search query.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredWebApps.map((app) => (
                      <WebPlatformCard
                        key={app.id}
                        app={app}
                        onSelect={(selected) => setActiveWebApp(selected)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* SECTION 2: MOBILE APPLICATIONS SHOWCASE */}
            {(activeTab === 'all' || activeTab === 'mobile') && (
              <div>
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-indigo-600" />
                    <h3 className="text-sm font-bold text-slate-900">
                      Mobile Applications ({filteredMobileApps.length} Native Systems)
                    </h3>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">
                    High-Fidelity Smartphone Frames
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start justify-items-center max-w-5xl mx-auto">
                  {filteredMobileApps.map((app) => (
                    <div key={app.id} className="w-full">
                      <PhoneMockup
                        app={app}
                        onSelect={(selected) => setActiveMobileApp(selected)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* VISION & MISSION SECTION */}
        <section id="vision" className="py-20 sm:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* OUR VISION */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-widest font-bold mb-2">
                <Compass className="w-4 h-4" />
                <span>Our Strategic Direction</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                Our Vision
              </h2>

              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-50/60 via-indigo-50/40 to-white border border-blue-100 shadow-sm mb-10">
                <div className="text-xs font-mono tracking-widest text-blue-700 font-bold uppercase mb-3">
                  The North Star Statement
                </div>
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug">
                  “To become a trusted technology partner for businesses worldwide by making advanced digital solutions{' '}
                  <span className="text-blue-600 underline decoration-blue-300 underline-offset-8">accessible</span>,{' '}
                  <span className="text-indigo-600 underline decoration-indigo-300 underline-offset-8">intelligent</span>, and{' '}
                  <span className="text-sky-600 underline decoration-sky-300 underline-offset-8">impactful</span>.”
                </blockquote>
              </div>

              {/* 4 Vision Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {VISION_PILLARS.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 w-fit mb-3 shadow-2xs">
                        {visionIcons[pillar.iconName]}
                      </div>
                      <h4 className="text-base font-bold text-slate-900 tracking-tight">
                        {pillar.title}
                      </h4>
                      <span className="text-xs text-blue-600 font-semibold block mt-0.5 mb-2">
                        {pillar.lead}
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-200 text-[10px] font-mono text-slate-400">
                      Strategic Horizon 0{idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* OUR MISSION */}
            <div className="pt-12 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-widest font-bold mb-2">
                <Target className="w-4 h-4" />
                <span>Our Engineering Mandate</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                Our Mission
              </h2>

              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 mb-10">
                <span className="text-xs font-mono tracking-widest text-blue-700 font-bold uppercase block mb-2">
                  The Core Directive
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  “To engineer reliable, scalable, and intelligent digital solutions that solve real business challenges.”
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  Every line of code, infrastructure configuration, and interface workflow is held accountable to this engineering mandate.
                </p>
              </div>

              {/* 5 Mission Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {MISSION_PILLARS.map((pillar) => (
                  <div
                    key={pillar.id}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-blue-700">
                          {pillar.number}
                        </span>
                        <div className="p-1.5 rounded-lg bg-blue-50">
                          {missionIcons[pillar.id]}
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
                        {pillar.title}
                      </h4>

                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {pillar.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-500 leading-tight">
                      {pillar.engineeringFocus}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING & CONTACT SECTION */}
        <section id="contact" className="py-20 sm:py-24 bg-gradient-to-b from-white via-blue-50/50 to-indigo-50/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 text-xs font-mono tracking-widest text-blue-700 uppercase font-bold mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>{COMPANY_INFO.brand} · {COMPANY_INFO.website}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Let’s Build Something{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Intelligent Together.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
              {COMPANY_INFO.tagline}
            </p>

            {/* Coordinates Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
              {/* Website Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-blue-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-blue-700 font-bold mb-1">
                    <Globe className="w-4 h-4" />
                    <span>Official Web Address</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 font-mono mt-1">
                    {COMPANY_INFO.website}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Explore our ecosystem & client deliverables.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-xs text-blue-600 font-semibold flex items-center gap-1">
                    <span>Verified Production URL</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-blue-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2 text-xs text-sky-700 font-bold">
                      <Mail className="w-4 h-4" />
                      <span>Official Email</span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 rounded text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-mono truncate mt-1">
                    {COMPANY_INFO.email}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct executive inquiries & partnerships.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-xs text-blue-600 font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Send Confidential Message</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">{COMPANY_INFO.brand}</span>
            <span>·</span>
            <span>{COMPANY_INFO.tagline}</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-slate-800 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-slate-800 transition-colors">Portfolio</a>
            <a href="#vision" className="hover:text-slate-800 transition-colors">Vision</a>
            <button onClick={onSwitchToDeck} className="text-blue-600 hover:underline font-semibold">
              Presentation Deck
            </button>
          </div>

          <div>
            © 2026 {COMPANY_INFO.brand}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Project Inspector Modal */}
      <ProjectModal
        webApp={activeWebApp}
        mobileApp={activeMobileApp}
        onClose={() => {
          setActiveWebApp(null);
          setActiveMobileApp(null);
        }}
      />
    </div>
  );
};
