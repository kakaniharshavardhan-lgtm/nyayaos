import React, { useEffect } from 'react';
import { ServiceItem, WebApplication, MobileApplication } from '../types/portfolio';
import { 
  SERVICES, 
  COMPANY_INFO, 
  WEB_APPLICATIONS, 
  MOBILE_APPLICATIONS 
} from '../data/portfolioData';
import { BrowserMockup } from '../components/BrowserMockup';
import { PhoneMockup } from '../components/PhoneMockup';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Mail, 
  Globe, 
  Smartphone,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBack: () => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectWebApp?: (app: WebApplication) => void;
  onSelectMobileApp?: (app: MobileApplication) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onSelectService,
  onSelectWebApp,
  onSelectMobileApp,
}) => {
  // Scroll to top on load or service switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [service.id]);

  const currentIndex = SERVICES.findIndex((s) => s.id === service.id);
  const prevService = currentIndex > 0 ? SERVICES[currentIndex - 1] : SERVICES[SERVICES.length - 1];
  const nextService = currentIndex < SERVICES.length - 1 ? SERVICES[currentIndex + 1] : SERVICES[0];

  // Resolve related projects
  const relatedWebApps = WEB_APPLICATIONS.filter((app) => 
    service.relatedProjectIds?.includes(app.id)
  );
  const relatedMobileApps = MOBILE_APPLICATIONS.filter((app) => 
    service.relatedProjectIds?.includes(app.id)
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Back button & Breadcrumb */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-blue-600" />
              <span>Back to Services</span>
            </button>

            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span>{COMPANY_INFO.brand}</span>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="text-slate-900 font-semibold">{service.title}</span>
            </div>
          </div>

          {/* Service Index & Next/Prev Controls */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 font-mono text-xs text-blue-700 font-bold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
              <span>/{service.number}</span>
              <span className="text-slate-400 font-normal">of 07</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => onSelectService(prevService)}
                className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors"
                title={`Previous: ${prevService.title}`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectService(nextService)}
                className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors"
                title={`Next: ${nextService.title}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <a
              href="#contact"
              className="hidden md:inline-flex px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-2xs"
            >
              Inquire
            </a>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 pb-24">
        {/* HERO BANNER SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-slate-50 border-b border-slate-200 py-12 sm:py-16">
          <div className="absolute inset-0 bg-tech-grid-light opacity-40 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Headline & Metadata */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    PRACTICE /{service.number}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {service.badge}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{service.slaOutcome}</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                  {service.title}
                </h1>

                <p className="text-lg sm:text-xl font-semibold text-blue-600">
                  {service.subtitle}
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  {service.description}
                </p>

                {/* Quick Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="#case-studies"
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-600/20 flex items-center gap-2"
                  >
                    <span>View Deployed Deliverables</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#architecture"
                    className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-all shadow-2xs"
                  >
                    Architecture & Lifecycle
                  </a>
                </div>
              </div>

              {/* Right Column: High-Res Photography Banner with Floating Spec Badge */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white group">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-blue-700 font-bold uppercase tracking-wider block">
                        Enterprise Standard
                      </span>
                      <strong className="text-xs font-bold text-slate-900">
                        {service.title}
                      </strong>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {service.slaOutcome}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: STRATEGIC OVERVIEW & ARCHITECTURAL PHILOSOPHY */}
        <section id="architecture" className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Detailed Prose */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-widest font-bold mb-2">
                    <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
                    <span>01 · Architectural Philosophy</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    Why Enterprises Choose This Practice
                  </h2>
                </div>

                {service.deepOverview && (
                  <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                    {service.deepOverview.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {/* Technical Execution Workflow (3 Phases) */}
                <div className="pt-8 mt-8 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-600" />
                    <span>End-to-End Delivery Lifecycle</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {service.workflow.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[11px] font-mono font-bold text-blue-700 block mb-1">
                            {step.phase}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">
                            {step.title}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar: Business Impact Highlights */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 rounded-3xl bg-gradient-to-b from-blue-50/70 to-indigo-50/40 border border-blue-100 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-700 font-bold uppercase mb-4">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>Measurable Commercial Impact</span>
                  </div>

                  <ul className="space-y-3">
                    {service.businessImpact?.map((impact, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-blue-200/60 text-xs text-slate-500">
                    Engineered according to strict enterprise compliance and zero-downtime standards.
                  </div>
                </div>

                {/* Technology Stack Box */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs">
                  <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500 mb-3">
                    Production Tooling & Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: KEY DELIVERABLES & TECHNICAL CAPABILITIES */}
        {service.keyFeatures && (
          <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-12">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-widest font-bold mb-2">
                  <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
                  <span>02 · Deep Technical Specifications</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Key Capabilities & Deliverables
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Concrete engineering milestones delivered with enterprise verification.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-base font-bold text-slate-900 tracking-tight">
                          {feat.title}
                        </h3>
                        {feat.metric && (
                          <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                            {feat.metric}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-blue-600 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Specification</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3: DEPLOYED PORTFOLIO CASE STUDIES */}
        <section id="case-studies" className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-widest font-bold mb-2">
                  <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
                  <span>03 · Production Evidence</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Deployed Deliverables Built With This Service
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Inspect genuine production platforms engineered by NYAYAOS incorporating this discipline.
                </p>
              </div>

              <button
                onClick={onBack}
                className="text-xs text-blue-600 font-semibold hover:underline flex items-center gap-1 self-start md:self-end"
              >
                <span>View All 16 Portfolio Deliverables →</span>
              </button>
            </div>

            {/* Related Web Applications */}
            {relatedWebApps.length > 0 && (
              <div className="mb-10">
                <h3 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span>Web Platforms ({relatedWebApps.length})</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {relatedWebApps.map((app) => (
                    <div key={app.id} className="h-[240px]">
                      <BrowserMockup
                        app={app}
                        onSelect={(selected) => onSelectWebApp && onSelectWebApp(selected)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Mobile Applications */}
            {relatedMobileApps.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-indigo-600" />
                  <span>Native Mobile Applications ({relatedMobileApps.length})</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                  {relatedMobileApps.map((app) => (
                    <div key={app.id} className="w-full">
                      <PhoneMockup
                        app={app}
                        onSelect={(selected) => onSelectMobileApp && onSelectMobileApp(selected)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 4: NEXT & PREVIOUS PRACTICE EXPLORATION */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => onSelectService(prevService)}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all text-left group flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-slate-400 font-medium block mb-1">
                    ← Previous Practice /{prevService.number}
                  </span>
                  <strong className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors block">
                    {prevService.title}
                  </strong>
                  <span className="text-xs text-slate-500">{prevService.subtitle}</span>
                </div>
              </button>

              <button
                onClick={() => onSelectService(nextService)}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all text-right group flex items-center justify-between sm:flex-row-reverse"
              >
                <div>
                  <span className="text-xs font-mono text-slate-400 font-medium block mb-1">
                    Next Practice /{nextService.number} →
                  </span>
                  <strong className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors block">
                    {nextService.title}
                  </strong>
                  <span className="text-xs text-slate-500">{nextService.subtitle}</span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5: INQUIRE & DIRECT CONTACT */}
        <section id="contact" className="py-16 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-xs font-mono tracking-widest text-blue-700 uppercase font-bold mb-2">
              Ready to Engineer This Solution?
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Partner with NYAYAOS on {service.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Speak directly with our senior software architects to review specifications, architecture diagrams, and commercial timelines.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${COMPANY_INFO.email}?subject=Inquiry regarding ${service.title}`}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-md shadow-blue-600/20 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Inquiry to {COMPANY_INFO.email}</span>
              </a>

              <button
                onClick={onBack}
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors"
              >
                Return to Overview
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {COMPANY_INFO.brand}. {service.title} Practice Dossier.
          </div>
          <button onClick={onBack} className="text-blue-600 hover:underline font-semibold">
            ← Back to Main Portfolio
          </button>
        </div>
      </footer>
    </div>
  );
};
