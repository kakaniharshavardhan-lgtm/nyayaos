import React from 'react';
import { VISION_PILLARS, COMPANY_INFO } from '../data/portfolioData';
import { Globe, Cpu, Zap, ShieldCheck, ArrowRight, Compass } from 'lucide-react';

interface Slide4VisionProps {
  onNext?: () => void;
}

const pillarIcons: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-blue-600" />,
  Globe: <Globe className="w-6 h-6 text-sky-600" />,
  Zap: <Zap className="w-6 h-6 text-amber-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
};

export const Slide4Vision: React.FC<Slide4VisionProps> = ({ onNext }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-50 text-slate-900 select-none">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-widest mb-1 font-bold">
            <Compass className="w-3.5 h-3.5" />
            <span>Slide 04 · Strategic Horizon</span>
            <span>·</span>
            <span>Long-Term Purpose</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Our Vision
          </h2>
        </div>

        <div className="text-right hidden sm:block">
          <span className="text-xs font-mono text-slate-500">{COMPANY_INFO.brand} Global Strategy</span>
          <div className="text-[11px] text-slate-400">2026–2030 Horizon</div>
        </div>
      </div>

      {/* Main Vision Centerpiece */}
      <div className="relative z-10 my-auto py-6 max-w-5xl mx-auto w-full">
        {/* Core Vision Statement in Large Refined Typography */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-blue-900/5 relative overflow-hidden mb-8">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl" />

          <div className="text-xs font-mono tracking-widest text-blue-700 font-bold uppercase mb-3">
            The North Star
          </div>

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug">
            “To become a trusted technology partner for businesses worldwide by making advanced digital solutions{' '}
            <span className="text-blue-600 underline decoration-blue-300 underline-offset-8">accessible</span>,{' '}
            <span className="text-indigo-600 underline decoration-indigo-300 underline-offset-8">intelligent</span>, and{' '}
            <span className="text-sky-600 underline decoration-sky-300 underline-offset-8">impactful</span>.”
          </blockquote>

          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>NYAYAOS Global Vision Statement</span>
            <span className="text-slate-800 font-mono font-medium">One Intelligence. Infinite Possibilities.</span>
          </div>
        </div>

        {/* 4 Pillars of the Vision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VISION_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-blue-50 w-fit mb-3">
                  {pillarIcons[pillar.iconName]}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {pillar.title}
                </h3>
                <span className="text-xs text-blue-600 font-semibold block mt-0.5 mb-2">
                  {pillar.lead}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                Pillar 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Footer */}
      <div className="relative z-10 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
        <div>Slide 04 of 06 · Inspiring Global Digital Transformation</div>
        {onNext && (
          <button
            onClick={onNext}
            className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <span>Proceed to Our Mission</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
