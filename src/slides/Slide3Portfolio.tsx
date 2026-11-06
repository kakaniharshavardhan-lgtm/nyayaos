import React, { useState } from 'react';
import { WEB_APPLICATIONS, MOBILE_APPLICATIONS } from '../data/portfolioData';
import { BrowserMockup } from '../components/BrowserMockup';
import { WebPlatformCard } from '../components/WebPlatformCard';
import { PhoneMockup } from '../components/PhoneMockup';
import { ProjectModal } from '../components/ProjectModal';
import { WebApplication, MobileApplication } from '../types/portfolio';
import { Globe, Smartphone, Layers, ArrowRight } from 'lucide-react';

interface Slide3PortfolioProps {
  onNext?: () => void;
}

type ViewMode = 'all-web' | 'mobile' | 'split-featured';

export const Slide3Portfolio: React.FC<Slide3PortfolioProps> = ({ onNext }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('all-web');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeWebApp, setActiveWebApp] = useState<WebApplication | null>(null);
  const [activeMobileApp, setActiveMobileApp] = useState<MobileApplication | null>(null);

  const categories = [
    'All',
    'Enterprise & Infrastructure',
    'Commerce & Lifestyle',
    'Media & AI',
    'Creative & Artisanal',
  ];

  const filteredWebApps = selectedCategory === 'All'
    ? WEB_APPLICATIONS
    : WEB_APPLICATIONS.filter((app) => app.category === selectedCategory);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-8 lg:p-10 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-slate-50 text-slate-900 select-none">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-50 pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Top Header & Mode Switchers */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between pb-3.5 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-5 h-0.5 bg-blue-600" />
            <span className="text-[11px] font-semibold tracking-wider text-blue-600 uppercase">PORTFOLIO</span>
            <span className="text-slate-300">/</span>
            <span className="text-[11px] text-slate-500 font-medium">Slide 03 · 13 Web Platforms & 3 Mobile Systems</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2.5">
            <span>Our Digital Portfolio</span>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-blue-700">
              16 Deliverables
            </span>
          </h2>
        </div>

        {/* Presentation Controls: Web / Mobile / Split */}
        <div className="flex items-center gap-2">
          <div className="flex items-center p-1 bg-slate-100 border border-slate-200 rounded-xl text-xs">
            <button
              onClick={() => setViewMode('all-web')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                viewMode === 'all-web'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Web Applications ({WEB_APPLICATIONS.length})</span>
            </button>

            <button
              onClick={() => setViewMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                viewMode === 'mobile'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Apps ({MOBILE_APPLICATIONS.length})</span>
            </button>

            <button
              onClick={() => setViewMode('split-featured')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                viewMode === 'split-featured'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Executive Dual View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Showcase Section */}
      <div className="relative z-10 flex-1 py-3 overflow-hidden flex flex-col justify-between">
        {/* VIEW MODE 1: ALL 13 WEB APPLICATIONS */}
        {viewMode === 'all-web' && (
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            {/* Filter categories & count */}
            <div className="flex items-center justify-between pb-2 gap-2">
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-2xs'
                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                {filteredWebApps.length} Deployed Platforms
              </span>
            </div>

            {/* Scrollable Grid of 13 Web Applications */}
            <div className="flex-1 overflow-y-auto pr-1 max-h-[500px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {filteredWebApps.map((app) => (
                  <WebPlatformCard
                    key={app.id}
                    app={app}
                    onSelect={(selected) => setActiveWebApp(selected)}
                  />
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Click any platform card to inspect architecture specifications</span>
              </div>
              <button
                onClick={() => setViewMode('mobile')}
                className="text-blue-600 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>View Mobile Applications next →</span>
              </button>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: 3 SMARTPHONE MOCKUPS */}
        {viewMode === 'mobile' && (
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-2">
              <span className="text-xs font-mono text-blue-700 font-bold tracking-wider uppercase">
                Native Mobile Applications
              </span>
              <p className="text-xs text-slate-600">
                Showcasing Eternal Radha, Priya’s Art, and SMU INFRA on high-fidelity smartphone hardware frames.
              </p>
            </div>

            {/* 3 Smartphone Mockups Grid */}
            <div className="flex-1 overflow-y-auto py-2 grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center max-w-5xl mx-auto w-full">
              {MOBILE_APPLICATIONS.map((app) => (
                <div key={app.id} className="w-full flex justify-center">
                  <PhoneMockup
                    app={app}
                    onSelect={(selected) => setActiveMobileApp(selected)}
                  />
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>All 3 mobile applications engineered for native iOS & Android</span>
              </div>
              <button
                onClick={() => setViewMode('all-web')}
                className="text-blue-600 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>← Back to Web Applications</span>
              </button>
            </div>
          </div>
        )}

        {/* VIEW MODE 3: EXECUTIVE DUAL VIEW */}
        {viewMode === 'split-featured' && (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch overflow-hidden">
            {/* Left: Web Applications Spotlight */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-2xl p-4 overflow-hidden shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Web Platforms ({WEB_APPLICATIONS.length} Total)
                  </h3>
                </div>
                <button
                  onClick={() => setViewMode('all-web')}
                  className="text-xs text-blue-600 hover:underline font-semibold"
                >
                  View All 13 Mockups →
                </button>
              </div>

              {/* Grid of featured web apps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto max-h-[440px] pr-1">
                {WEB_APPLICATIONS.slice(0, 6).map((app) => (
                  <div key={app.id} className="h-[200px]">
                    <BrowserMockup
                      app={app}
                      onSelect={(selected) => setActiveWebApp(selected)}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-2 text-[10px] text-slate-500 flex items-center justify-between">
                <span>Featured: smuinfra.in · dayflix.in · caricart.vercel.app · cortexa.fun · snazzl.shop</span>
                <span className="text-slate-700 font-mono font-medium">+7 more platforms</span>
              </div>
            </div>

            {/* Right: Mobile Applications Showcase */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-slate-200 rounded-2xl p-4 overflow-hidden shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Mobile Applications (3 Apps)
                  </h3>
                </div>
                <button
                  onClick={() => setViewMode('mobile')}
                  className="text-xs text-blue-600 hover:underline font-semibold"
                >
                  Inspect Full Screens →
                </button>
              </div>

              {/* 3 Mobile Cards */}
              <div className="space-y-2.5 overflow-y-auto max-h-[440px]">
                {MOBILE_APPLICATIONS.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => setActiveMobileApp(m)}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 cursor-pointer transition-all flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-blue-700 uppercase tracking-wider font-semibold">
                        {m.platform}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">{m.name}</h4>
                      <p className="text-[11px] text-slate-600 line-clamp-1">
                        {m.tagline}
                      </p>
                    </div>
                    <div
                      className="w-3 h-3 rounded-full shrink-0 ml-3"
                      style={{ backgroundColor: m.primaryColor }}
                    />
                  </div>
                ))}

                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-center">
                  <div className="text-xs font-bold text-blue-900 mb-1">
                    Native Smartphone Experience
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Precision hardware-accelerated interfaces with real-time sync and offline architectures.
                  </p>
                </div>
              </div>

              <div className="mt-2 text-[10px] text-slate-500 text-center font-medium">
                Eternal Radha · Priya’s Art · SMU INFRA
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Slide Footer */}
      <div className="relative z-10 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
        <div>Slide 03 of 06 · NYAYAOS Production Portfolio Showcase</div>
        {onNext && (
          <button
            onClick={onNext}
            className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <span>Proceed to Our Vision</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

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
