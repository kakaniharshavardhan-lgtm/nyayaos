import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types/portfolio';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Users, 
  Cpu, 
  Layers, 
  Cloud,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  X
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenService?: (service: ServiceItem) => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  'web-dev': <Globe className="w-4 h-4 text-blue-600" />,
  'mobile-dev': <Smartphone className="w-4 h-4 text-blue-600" />,
  'erp-crm': <Database className="w-4 h-4 text-blue-600" />,
  'crm-solutions': <Users className="w-4 h-4 text-blue-600" />,
  'ai-ml': <Cpu className="w-4 h-4 text-blue-600" />,
  'digital-trans': <Layers className="w-4 h-4 text-blue-600" />,
  'cloud-infra': <Cloud className="w-4 h-4 text-blue-600" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleOpen = (srv: ServiceItem) => {
    if (onOpenService) {
      onOpenService(srv);
    } else {
      setActiveModalService(srv);
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background Subtle Column Grid */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-30 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          {/* Top Blue Accent Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-600 rounded-full" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600">
              CAPABILITIES
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            One platform. Seven disciplines.
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every service is built to interoperate — strategy flows into design, design into engineering, engineering into intelligence. Explore each discipline below.
          </p>
        </div>

        {/* 3-Column Card Grid (Direct match to reference design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => handleOpen(srv)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col"
            >
              {/* Top Banner Image with Soft Bottom Scrim */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={srv.imageUrl}
                  alt={srv.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle bottom fade into white card body */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent pointer-events-none" />

                {/* Floating Top-Right Icon Badge */}
                <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md flex items-center justify-center">
                  {serviceIcons[srv.id]}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-3 flex-1 flex flex-col justify-between">
                <div>
                  {/* Editorial Index Number */}
                  <span className="text-[11px] font-mono text-slate-400 font-medium block mb-1">
                    /{srv.number}
                  </span>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                    {srv.title}
                  </h3>

                  {/* Subtitle / Tagline in Blue */}
                  <div className="text-xs sm:text-sm font-semibold text-blue-600 mt-1 mb-2.5">
                    {srv.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {srv.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span
                    className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Open service</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>

                  <span className="text-[10px] font-mono font-medium text-slate-400">
                    {srv.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fallback Modal if onOpenService is not passed */}
      {!onOpenService && activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-900 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-blue-600">
                /{activeModalService.number}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500 font-medium">
                {activeModalService.badge}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              {activeModalService.title}
            </h3>
            <p className="text-sm font-semibold text-blue-600 mt-0.5 mb-3">
              {activeModalService.subtitle}
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeModalService.description}
            </p>

            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-between text-xs mb-6">
              <span className="text-slate-600 font-medium">Verified Performance Standard:</span>
              <span className="font-mono font-bold text-blue-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {activeModalService.slaOutcome}
              </span>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">NYAYAOS Enterprise Practice</span>
              <a
                href="#portfolio"
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                Explore Deliverables in Portfolio
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
