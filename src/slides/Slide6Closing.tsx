import React from 'react';
import { COMPANY_INFO } from '../data/portfolioData';
import { Globe, Mail, RotateCcw } from 'lucide-react';

interface Slide6ClosingProps {
  onRestart?: () => void;
}

export const Slide6Closing: React.FC<Slide6ClosingProps> = ({ onRestart }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30 text-slate-900 select-none">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Top Metadata */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3">
          <div className="h-7 px-2.5 bg-blue-50 border border-blue-200 rounded flex items-center justify-center">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-700">
              SLIDE 06 · CONCLUSION
            </span>
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Executive Partnership Dialogue
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-600 font-mono">
          <Globe className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-slate-800 font-medium">{COMPANY_INFO.website}</span>
        </div>
      </div>

      {/* Main Closing Call to Action & Brand */}
      <div className="relative z-10 my-auto py-8 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 text-xs font-mono tracking-widest text-blue-700 uppercase font-bold mb-4 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span>{COMPANY_INFO.brand} · {COMPANY_INFO.website}</span>
        </div>

        {/* Primary Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Let’s Build Something{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
            Intelligent Together.
          </span>
        </h2>

        {/* Tagline */}
        <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium tracking-tight">
          {COMPANY_INFO.tagline}
        </p>

        {/* Contact Coordinates Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
          {/* Website Card */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-xs text-blue-700 font-bold mb-1">
              <Globe className="w-4 h-4" />
              <span>Official Website</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-900 font-mono">
              {COMPANY_INFO.website}
            </div>
            <span className="text-[11px] text-slate-500 block mt-1">
              Explore platforms & corporate capabilities
            </span>
          </div>

          {/* Email Card */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-xs text-sky-700 font-bold mb-1">
              <Mail className="w-4 h-4" />
              <span>Direct Inquiries</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-900 font-mono truncate">
              {COMPANY_INFO.email}
            </div>
            <span className="text-[11px] text-slate-500 block mt-1">
              Confidential enterprise partnership requests
            </span>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="relative z-10 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
        <div>
          <span>© 2026 {COMPANY_INFO.brand} · All Rights Reserved</span>
        </div>

        {onRestart && (
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            <RotateCcw className="w-3 h-3 text-blue-600" />
            <span>Replay Portfolio Deck</span>
          </button>
        )}
      </div>
    </div>
  );
};
