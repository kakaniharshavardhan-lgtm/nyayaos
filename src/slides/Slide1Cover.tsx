import React from 'react';
import { COMPANY_INFO } from '../data/portfolioData';
import { Globe, ArrowRight } from 'lucide-react';

interface Slide1CoverProps {
  onNext?: () => void;
}

export const Slide1Cover: React.FC<Slide1CoverProps> = ({ onNext }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-14 lg:p-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/40 text-slate-900 select-none">
      {/* Background Architectural Mesh & Blue Lighting */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Top Metadata */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-200 pb-5">
        <div className="flex items-center gap-3">
          <div className="h-8 px-2.5 bg-blue-50 border border-blue-200 rounded-md flex items-center justify-center">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-700">
              CORPORATE PORTFOLIO
            </span>
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Official Presentation · 2026 Edition
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-600 font-mono">
          <Globe className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-slate-800 font-medium">{COMPANY_INFO.website}</span>
        </div>
      </div>

      {/* Main Centerpiece / Brand Hero */}
      <div className="relative z-10 my-auto py-8 max-w-5xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold tracking-widest text-blue-700 uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Technology & Digital Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            {COMPANY_INFO.brand}
          </h2>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] max-w-4xl">
          One Intelligence.{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
            Infinite Possibilities.
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl">
          {COMPANY_INFO.subheading}
        </p>

        {/* Architectural Highlights Bar */}
        <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-500 block mb-1">Architecture</span>
            <strong className="text-slate-900 font-semibold text-sm">Enterprise Cloud & AI</strong>
          </div>
          <div>
            <span className="text-slate-500 block mb-1">Production Scale</span>
            <strong className="text-slate-900 font-semibold text-sm">Web & Mobile Ecosystems</strong>
          </div>
          <div>
            <span className="text-slate-500 block mb-1">Engineering Rigor</span>
            <strong className="text-slate-900 font-semibold text-sm">High-Availability SLA</strong>
          </div>
          <div>
            <span className="text-slate-500 block mb-1">Global Reach</span>
            <strong className="text-slate-900 font-semibold text-sm">Pan-Industry Deployment</strong>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="relative z-10 pt-5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span>NYAYAOS Strategic Portfolio Overview</span>
        </div>

        {onNext && (
          <button
            onClick={onNext}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs transition-colors shadow-md shadow-blue-600/20"
          >
            <span>Proceed to Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
