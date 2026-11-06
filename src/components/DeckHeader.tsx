import React from 'react';
import { COMPANY_INFO } from '../data/portfolioData';
import { Globe } from 'lucide-react';

interface DeckHeaderProps {
  currentSlide: number;
  slideTitle: string;
  onSwitchToWebApp?: () => void;
}

export const DeckHeader: React.FC<DeckHeaderProps> = ({
  currentSlide,
  slideTitle,
  onSwitchToWebApp,
}) => {
  return (
    <header className="no-print h-14 px-6 bg-white/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between gap-8 select-none z-30 shrink-0 shadow-2xs">
      {/* Zone 1: Brand wordmark & emblem */}
      <div className="flex items-center gap-3 shrink-0">
        <img
          src={COMPANY_INFO.logoPath}
          alt="NYAYAOS"
          className="h-7 w-auto object-contain bg-white rounded p-0.5"
          referrerPolicy="no-referrer"
        />
        <span className="text-base font-extrabold tracking-tight text-slate-900 whitespace-nowrap">
          {COMPANY_INFO.brand}
        </span>
      </div>

      {/* Zone 2: Slide title indicator */}
      <div className="hidden md:flex items-center gap-3 text-xs text-slate-500 shrink-0">
        <span className="font-mono text-blue-700 font-bold">
          SLIDE 0{currentSlide}
        </span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-semibold whitespace-nowrap">
          {slideTitle}
        </span>
      </div>

      {/* Zone 3: Official Website and Mode Switch */}
      <div className="flex items-center gap-3 text-xs text-slate-500 shrink-0">
        {onSwitchToWebApp && (
          <button
            onClick={onSwitchToWebApp}
            className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
          >
            ← Return to Web App
          </button>
        )}
        <div className="hidden sm:flex items-center gap-1.5 font-mono text-slate-700">
          <Globe className="w-3.5 h-3.5 text-blue-600" />
          <span>{COMPANY_INFO.website}</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-semibold">
          Presentation Mode
        </span>
      </div>
    </header>
  );
};
