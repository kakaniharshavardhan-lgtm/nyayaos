import React from 'react';
import { X, Layers } from 'lucide-react';

interface SlideThumbnailGridProps {
  currentSlide: number;
  totalSlides: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (index: number) => void;
}

const slideMetadata = [
  { index: 1, title: 'Company Cover', subtitle: 'NYAYAOS Brand Identity & Positioning' },
  { index: 2, title: 'Our Services', subtitle: '7 Specialized Enterprise Capabilities' },
  { index: 3, title: 'Our Digital Portfolio', subtitle: '13 Web Applications + 3 Mobile Apps' },
  { index: 4, title: 'Our Vision', subtitle: 'Strategic Horizon & Global Impact' },
  { index: 5, title: 'Our Mission', subtitle: '5 Operational Execution Pillars' },
  { index: 6, title: 'Closing Slide', subtitle: 'Executive Inquiries & Contact Coordinates' },
];

export const SlideThumbnailGrid: React.FC<SlideThumbnailGridProps> = ({
  currentSlide,
  isOpen,
  onClose,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold text-slate-900">
              Portfolio Slide Overview
            </h3>
            <span className="text-xs text-slate-500 font-mono">
              6 Executive Slides
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 6 Thumbnails Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-h-[70vh] overflow-y-auto pr-1">
          {slideMetadata.map((slide) => {
            const isActive = currentSlide === slide.index;
            return (
              <div
                key={slide.index}
                onClick={() => {
                  onSelectSlide(slide.index);
                  onClose();
                }}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-blue-50/80 border-blue-500 shadow-md shadow-blue-500/10'
                    : 'bg-slate-50 border-slate-200 hover:border-blue-300 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-blue-700">
                      SLIDE 0{slide.index}
                    </span>
                    {isActive && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-600 text-white font-medium">
                        CURRENT
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                    {slide.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {slide.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Jump to slide</span>
                  <span className="text-blue-600 font-semibold">0{slide.index} →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
