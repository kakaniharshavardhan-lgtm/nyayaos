import React from 'react';
import { ArrowUpRight, Lock, Globe } from 'lucide-react';
import { WebApplication } from '../types/portfolio';

interface WebPlatformCardProps {
  app: WebApplication;
  onSelect?: (app: WebApplication) => void;
}

export const WebPlatformCard: React.FC<WebPlatformCardProps> = ({ app, onSelect }) => {
  return (
    <div
      onClick={() => onSelect && onSelect(app)}
      className="group rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-blue-400 hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col cursor-pointer"
    >
      {/* 1. Simple, Clean Browser Top Chrome */}
      <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border-b border-slate-200 select-none">
        {/* Subtle Window Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-rose-400/80 transition-colors" />
          <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-amber-400/80 transition-colors" />
          <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-emerald-400/80 transition-colors" />
        </div>

        {/* Quiet URL Bar */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-white border border-slate-200 rounded text-[11px] font-mono text-slate-600 max-w-[220px] truncate shadow-2xs">
          <Lock className="w-2.5 h-2.5 text-slate-400 shrink-0" />
          <span className="truncate">{app.domain}</span>
        </div>

        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>

      {/* 2. Website-Specific Thematic Viewport Image */}
      <div className="relative h-44 overflow-hidden bg-slate-100 border-b border-slate-100">
        {app.imageUrl ? (
          <>
            <img
              src={app.imageUrl}
              alt={app.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Top pill badge */}
            <div className="absolute top-2.5 left-2.5 z-10">
              <span className="px-2 py-0.5 rounded-md bg-slate-950/70 backdrop-blur-xs text-[10px] font-mono text-white font-semibold tracking-wide border border-white/10 shadow-xs">
                /{app.number || '01'} · {app.category.split('&')[0].trim()}
              </span>
            </div>

            {/* Bottom title gradient scrim */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-3 pointer-events-none">
              <span className="text-xs font-semibold text-white tracking-tight truncate drop-shadow-xs">
                {app.previewDetails.heroTitle}
              </span>
            </div>
          </>
        ) : (
          <div
            className="w-full h-full p-4 flex flex-col justify-between"
            style={{
              background: `linear-gradient(135deg, ${app.primaryColor}15 0%, ${app.accentColor}10 100%)`,
            }}
          >
            <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-slate-500">
              /{app.number || '01'} · {app.category.split('&')[0].trim()}
            </span>
            <h4 className="text-sm font-bold tracking-tight text-slate-900 line-clamp-1">
              {app.previewDetails.heroTitle}
            </h4>
          </div>
        )}
      </div>

      {/* 3. Simple, Professional Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between bg-white space-y-3">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {app.name}
            </h3>
            <span className="text-[11px] font-mono text-slate-400 truncate">
              {app.domain}
            </span>
          </div>

          <p className="text-xs text-blue-600 font-medium mt-0.5">
            {app.tagline}
          </p>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mt-1.5">
            {app.description || app.previewDetails.heroSubtitle}
          </p>
        </div>

        {/* Tech Stack & Action Link */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1 overflow-hidden">
            {(app.techStack || ['React', 'Next.js']).slice(0, 2).map((tech, i) => (
              <span
                key={i}
                className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="text-xs font-semibold text-blue-600 group-hover:underline flex items-center gap-0.5 shrink-0 ml-2">
            <span>View details</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};
