import React from 'react';
import { Wifi, Battery, Signal, Sparkles } from 'lucide-react';
import { MobileApplication } from '../types/portfolio';

interface PhoneMockupProps {
  app: MobileApplication;
  interactive?: boolean;
  onSelect?: (app: MobileApplication) => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  app,
  interactive = true,
  onSelect,
}) => {
  return (
    <div
      onClick={() => interactive && onSelect && onSelect(app)}
      className={`group relative mx-auto w-full max-w-[280px] sm:max-w-[300px] transition-all duration-300 ${
        interactive ? 'cursor-pointer hover:-translate-y-2' : ''
      }`}
    >
      {/* Smartphone hardware outer bezel - Titanium Silver & Blue Sheen */}
      <div className="relative rounded-[44px] p-2.5 bg-gradient-to-b from-slate-200 via-slate-300 to-blue-200 border-2 border-slate-300 shadow-xl shadow-blue-900/10">
        {/* Hardware side button accents */}
        <div className="absolute -left-[2px] top-24 w-[2px] h-8 bg-slate-400 rounded-l" />
        <div className="absolute -left-[2px] top-36 w-[2px] h-10 bg-slate-400 rounded-l" />
        <div className="absolute -right-[2px] top-28 w-[2px] h-12 bg-slate-400 rounded-r" />

        {/* Screen Bezel */}
        <div className="relative rounded-[36px] overflow-hidden bg-white text-slate-900 flex flex-col h-[520px] sm:h-[540px] border border-slate-200 shadow-inner">
          {/* Dynamic Island / Notch */}
          <div className="pt-3 px-6 flex items-center justify-between text-[11px] text-slate-700 font-medium select-none z-20 bg-slate-50 border-b border-slate-100">
            <span>9:41</span>
            
            {/* Dynamic island pill */}
            <div className="w-20 h-4 bg-slate-900 rounded-full flex items-center justify-end px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            </div>

            <div className="flex items-center gap-1.5">
              <Signal className="w-2.5 h-2.5 text-slate-700" />
              <Wifi className="w-2.5 h-2.5 text-slate-700" />
              <Battery className="w-3.5 h-3.5 text-slate-700" />
            </div>
          </div>

          {/* App Header Bar */}
          <div className="px-4 py-3 flex items-center justify-between border-b border-slate-100 bg-white">
            <div>
              <span className="text-[10px] tracking-wider uppercase font-bold text-blue-600">
                {app.screenBadge}
              </span>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                {app.interfaceMockup.headerTitle}
              </h3>
            </div>
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: app.primaryColor }}
            />
          </div>

          {/* App Screen Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-gradient-to-b from-blue-50/30 via-white to-slate-50">
            {/* Hero Card */}
            <div
              className="p-3.5 rounded-2xl relative overflow-hidden border border-blue-100 shadow-xs"
              style={{
                background: `linear-gradient(135deg, ${app.primaryColor}15 0%, #ffffff 100%)`,
              }}
            >
              <div
                className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full blur-2xl opacity-20"
                style={{ backgroundColor: app.primaryColor }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-1 text-[10px] text-blue-600 font-semibold mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Featured Release</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug mb-1">
                  {app.interfaceMockup.heroText}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                  {app.interfaceMockup.subText}
                </p>

                <div
                  className="w-full py-1.5 px-3 rounded-lg text-center text-[11px] font-semibold text-white shadow-xs"
                  style={{ backgroundColor: app.primaryColor }}
                >
                  {app.interfaceMockup.primaryActionText}
                </div>
              </div>
            </div>

            {/* Metrics or Filter Row */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
              {app.interfaceMockup.metricsOrPills.map((pill, idx) => (
                <div
                  key={idx}
                  className="px-2.5 py-1 rounded-full text-[10px] bg-white border border-slate-200 text-slate-700 whitespace-nowrap shadow-2xs font-medium"
                >
                  {pill}
                </div>
              ))}
            </div>

            {/* Feed / Content list */}
            <div className="space-y-2">
              <div className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                Activity & Modules
              </div>
              {app.interfaceMockup.contentBlocks.map((block, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-200 transition-colors shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[11px] font-semibold text-slate-800">
                      {block.title}
                    </span>
                    {block.tag && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200 font-medium">
                        {block.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-500 leading-snug">
                    {block.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* App Bottom Navigation / Home indicator */}
          <div className="p-2 border-t border-slate-200/80 bg-white flex flex-col items-center gap-1.5">
            <div className="flex items-center justify-around w-full text-[10px] text-slate-500 py-1 font-medium">
              <span className="text-blue-600 font-semibold">Home</span>
              <span>Catalog</span>
              <span>Vault</span>
              <span>Settings</span>
            </div>
            {/* iOS home bar */}
            <div className="w-28 h-1 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>

      {/* Device Label under phone */}
      <div className="mt-3 text-center">
        <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {app.name}
        </h4>
        <p className="text-xs text-slate-500">{app.platform}</p>
      </div>
    </div>
  );
};
