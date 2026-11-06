import React from 'react';
import { Lock, ExternalLink, Globe } from 'lucide-react';
import { WebApplication } from '../types/portfolio';

interface BrowserMockupProps {
  app: WebApplication;
  interactive?: boolean;
  onSelect?: (app: WebApplication) => void;
  compact?: boolean;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({
  app,
  interactive = true,
  onSelect,
}) => {
  return (
    <div
      onClick={() => interactive && onSelect && onSelect(app)}
      className={`group relative rounded-xl overflow-hidden border border-slate-200/90 bg-white shadow-xs hover:border-blue-400 hover:shadow-lg transition-all duration-300 ${
        interactive ? 'cursor-pointer hover:-translate-y-0.5' : ''
      } flex flex-col h-full`}
    >
      {/* Compact Browser Chrome Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100/90 border-b border-slate-200/80 select-none shrink-0">
        {/* Window controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-rose-400" />
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
        </div>

        {/* Compact Address Bar */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] text-slate-700 mx-2 max-w-[200px] w-full truncate shadow-2xs">
          <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
          <span className="truncate font-mono tracking-tight text-slate-800 font-medium">
            {app.domain}
          </span>
        </div>

        <ExternalLink className="w-3 h-3 text-slate-400 opacity-60 group-hover:opacity-100 group-hover:text-blue-600 transition-opacity shrink-0" />
      </div>

      {/* Simulated Website Viewport */}
      <div className="relative flex-1 p-3 overflow-hidden flex flex-col justify-between bg-gradient-to-b from-white via-blue-50/20 to-slate-50 text-slate-900">
        {/* Top Mini Nav */}
        <div className="flex items-center justify-between pb-1.5 mb-1 border-b border-slate-200/60">
          <div className="flex items-center gap-1.5 min-w-0">
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: app.primaryColor }}
            />
            <span className="text-[11px] font-bold tracking-tight text-slate-900 uppercase truncate">
              {app.name}
            </span>
          </div>

          <span className="text-[9px] font-mono font-semibold px-1 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
            LIVE
          </span>
        </div>

        {/* Content Preview */}
        <div className="my-auto py-0.5">
          <div className="flex items-center gap-1 text-[9px] font-semibold tracking-wider uppercase mb-0.5 text-blue-700">
            <Globe className="w-2.5 h-2.5" />
            <span className="truncate">{app.previewDetails.statOrPill}</span>
          </div>

          <h4 className="text-xs font-bold tracking-tight line-clamp-1 leading-snug mb-0.5 text-slate-900">
            {app.previewDetails.heroTitle}
          </h4>

          <p className="text-[10px] line-clamp-1 leading-relaxed text-slate-500">
            {app.previewDetails.heroSubtitle}
          </p>

          {/* Graphical UI Blocks tailored to domain */}
          <div className="mt-2 grid grid-cols-3 gap-1">
            {app.highlights.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="p-1 rounded text-[9px] font-medium truncate border bg-white border-slate-200 text-slate-600 shadow-2xs text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Metadata bar */}
        <div className="pt-1.5 mt-1 border-t border-slate-200/70 flex items-center justify-between text-[10px] text-slate-500">
          <span className="font-mono text-blue-600 font-semibold">{app.domain}</span>
          <span className="text-slate-400 truncate ml-2">{app.category.split('&')[0]}</span>
        </div>
      </div>
    </div>
  );
};
