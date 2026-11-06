import React from 'react';
import { SERVICES, COMPANY_INFO } from '../data/portfolioData';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Users, 
  Cpu, 
  Layers, 
  Cloud,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

interface Slide2ServicesProps {
  onNext?: () => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  'web-dev': <Globe className="w-3.5 h-3.5 text-blue-600" />,
  'mobile-dev': <Smartphone className="w-3.5 h-3.5 text-blue-600" />,
  'erp-crm': <Database className="w-3.5 h-3.5 text-blue-600" />,
  'crm-solutions': <Users className="w-3.5 h-3.5 text-blue-600" />,
  'ai-ml': <Cpu className="w-3.5 h-3.5 text-blue-600" />,
  'digital-trans': <Layers className="w-3.5 h-3.5 text-blue-600" />,
  'cloud-infra': <Cloud className="w-3.5 h-3.5 text-blue-600" />,
};

export const Slide2Services: React.FC<Slide2ServicesProps> = ({ onNext }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10 overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-50 text-slate-900 select-none">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 pb-3 gap-2 shrink-0">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-widest mb-1 font-bold">
            <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
            <span>CAPABILITIES · 7 DISCIPLINES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            One platform. Seven disciplines.
          </h2>
          <p className="text-xs text-slate-600">
            Every service is built to interoperate — strategy flows into design, design into engineering, engineering into intelligence.
          </p>
        </div>

        <div className="text-right hidden sm:block">
          <span className="text-xs font-mono text-slate-500">{COMPANY_INFO.brand} Technical Capabilities</span>
          <div className="text-[11px] text-slate-400">Full-Stack Digital Delivery</div>
        </div>
      </div>

      {/* Card Grid with Image Banners (Slide Version) */}
      <div className="relative z-10 my-auto py-2 grid grid-cols-2 lg:grid-cols-4 gap-3 max-h-[500px] overflow-y-auto pr-1">
        {SERVICES.map((srv) => (
          <div
            key={srv.id}
            className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            {/* Image Banner */}
            <div className="relative h-24 w-full overflow-hidden bg-slate-100">
              <img
                src={srv.imageUrl}
                alt={srv.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="absolute top-2 right-2 w-6 h-6 rounded-lg bg-white/95 backdrop-blur-xs border border-slate-200 shadow-xs flex items-center justify-center">
                {serviceIcons[srv.id]}
              </div>
            </div>

            {/* Content */}
            <div className="p-3 pt-1 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 font-medium block">
                  /{srv.number}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight leading-snug line-clamp-1">
                  {srv.title}
                </h3>
                <span className="text-[10px] font-semibold text-blue-600 block mb-1">
                  {srv.subtitle}
                </span>
                <p className="text-[10px] text-slate-600 line-clamp-2 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-blue-600 font-semibold">
                <span className="flex items-center gap-0.5">
                  <span>Open service</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
                <span className="text-slate-400 font-mono text-[9px]">{srv.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Footer */}
      <div className="relative z-10 pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
        <div>Slide 02 of 06 · NYAYAOS Engineering Disciplines</div>
        {onNext && (
          <button
            onClick={onNext}
            className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <span>Proceed to Digital Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
