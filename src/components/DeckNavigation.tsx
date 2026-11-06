import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  LayoutGrid, 
  Maximize, 
  Minimize, 
  Printer,
  Globe
} from 'lucide-react';

interface DeckNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
  isAutoplay: boolean;
  onToggleAutoplay: () => void;
  onOpenOverview: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onPrint: () => void;
  onSwitchToWebApp?: () => void;
  autoplayProgress?: number;
}

export const DeckNavigation: React.FC<DeckNavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onSelectSlide,
  isAutoplay,
  onToggleAutoplay,
  onOpenOverview,
  isFullscreen,
  onToggleFullscreen,
  onPrint,
  onSwitchToWebApp,
  autoplayProgress = 0,
}) => {
  return (
    <div className="relative z-40 px-4 py-3 bg-white/95 backdrop-blur-md border-t border-slate-200 flex items-center justify-between gap-4 select-none shadow-sm">
      {/* Left: Slide Number & Dots */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-800 font-bold bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
          <span className="text-blue-700">0{currentSlide}</span>
          <span className="text-slate-400">/</span>
          <span>0{totalSlides}</span>
        </div>

        {/* Slide Progress Dots */}
        <div className="hidden sm:flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, i) => {
            const slideNum = i + 1;
            const isActive = currentSlide === slideNum;
            return (
              <button
                key={slideNum}
                onClick={() => onSelectSlide(slideNum)}
                aria-label={`Jump to slide ${slideNum}`}
                className={`transition-all duration-200 rounded-full ${
                  isActive
                    ? 'w-6 h-2 bg-blue-600 shadow-xs shadow-blue-500/50'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Center: Slide Arrows & Autoplay */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          aria-label="Previous slide"
          className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          title="Previous slide (Left Arrow)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Autoplay button with progress bar */}
        <div className="relative">
          <button
            onClick={onToggleAutoplay}
            className={`p-2 rounded-lg border transition-colors flex items-center gap-1.5 text-xs font-semibold ${
              isAutoplay
                ? 'bg-blue-50 border-blue-300 text-blue-700'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
            }`}
            title={isAutoplay ? 'Pause auto-presentation' : 'Start auto-presentation (8s per slide)'}
          >
            {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span className="hidden md:inline text-[11px]">
              {isAutoplay ? 'Playing' : 'Auto Play'}
            </span>
          </button>
          {isAutoplay && (
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-100 ease-linear"
                style={{ width: `${autoplayProgress}%` }}
              />
            </div>
          )}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          aria-label="Next slide"
          className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          title="Next slide (Right Arrow or Space)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right: Overview, Web App View Toggle & Fullscreen */}
      <div className="flex items-center gap-2 text-xs">
        {onSwitchToWebApp && (
          <button
            onClick={onSwitchToWebApp}
            className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 transition-colors flex items-center gap-1.5 font-semibold"
            title="Switch back to Web Application View"
          >
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline text-[11px]">Web App View</span>
          </button>
        )}

        <button
          onClick={onOpenOverview}
          className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
          title="Slide Overview (Press O)"
        >
          <LayoutGrid className="w-4 h-4" />
          <span className="hidden lg:inline text-[11px]">Overview</span>
        </button>

        <button
          onClick={onPrint}
          className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
          title="Print / Save Deck as PDF"
        >
          <Printer className="w-4 h-4" />
          <span className="hidden lg:inline text-[11px]">Export</span>
        </button>

        <button
          onClick={onToggleFullscreen}
          className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Fullscreen Presentation (Press F)'}
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
