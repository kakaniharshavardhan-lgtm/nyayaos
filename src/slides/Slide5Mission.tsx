import React from 'react';
import { MISSION_PILLARS, COMPANY_INFO } from '../data/portfolioData';
import { Target, ArrowRight, ShieldCheck, Zap, Layers, Cpu, HeartHandshake } from 'lucide-react';

interface Slide5MissionProps {
  onNext?: () => void;
}

const missionIcons: Record<string, React.ReactNode> = {
  'm1': <Zap className="w-5 h-5 text-amber-500" />,
  'm2': <ShieldCheck className="w-5 h-5 text-blue-600" />,
  'm3': <Cpu className="w-5 h-5 text-indigo-600" />,
  'm4': <Layers className="w-5 h-5 text-sky-600" />,
  'm5': <HeartHandshake className="w-5 h-5 text-emerald-600" />,
};

export const Slide5Mission: React.FC<Slide5MissionProps> = ({ onNext }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-50 text-slate-900 select-none">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-50 pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-widest mb-1 font-bold">
            <Target className="w-3.5 h-3.5" />
            <span>Slide 05 · Engineering Mandate</span>
            <span>·</span>
            <span>Operational Commitments</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Our Mission
          </h2>
        </div>

        <div className="text-right hidden sm:block">
          <span className="text-xs font-mono text-slate-500">{COMPANY_INFO.brand} Execution Discipline</span>
          <div className="text-[11px] text-slate-400">5 Foundational Pillars</div>
        </div>
      </div>

      {/* Main Mission Centerpiece */}
      <div className="relative z-10 my-auto py-4 max-w-5xl mx-auto w-full">
        {/* Core Mission Statement */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-blue-900/5 mb-6">
          <span className="text-xs font-mono tracking-widest text-blue-700 uppercase font-bold block mb-2">
            The Core Directive
          </span>
          <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            “To engineer reliable, scalable, and intelligent digital solutions that solve real business challenges.”
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Every line of code, infrastructure configuration, and interface workflow is held accountable to this engineering mandate.
          </p>
        </div>

        {/* 5 Mission Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {MISSION_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
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

                <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                  {pillar.summary}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-100 text-[10px] text-slate-500 leading-tight">
                {pillar.engineeringFocus}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Footer */}
      <div className="relative z-10 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
        <div>Slide 05 of 06 · Engineering Grounded in Commercial Reality</div>
        {onNext && (
          <button
            onClick={onNext}
            className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <span>Proceed to Closing Slide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
