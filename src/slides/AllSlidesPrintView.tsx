import React from 'react';
import { Slide1Cover } from './Slide1Cover';
import { Slide2Services } from './Slide2Services';
import { Slide3Portfolio } from './Slide3Portfolio';
import { Slide4Vision } from './Slide4Vision';
import { Slide5Mission } from './Slide5Mission';
import { Slide6Closing } from './Slide6Closing';

interface AllSlidesPrintViewProps {
  onClose: () => void;
}

export const AllSlidesPrintView: React.FC<AllSlidesPrintViewProps> = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 p-4 sm:p-8 space-y-8">
      {/* Print Control Toolbar */}
      <div className="no-print sticky top-4 z-50 flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-xl max-w-4xl mx-auto">
        <div>
          <h3 className="text-base font-bold text-slate-900">Corporate Deck Export View</h3>
          <p className="text-xs text-slate-600">All 6 slides rendered in white & blue presentation sequence for review or PDF export.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md transition-colors"
          >
            Print / Save as PDF
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            Return
          </button>
        </div>
      </div>

      {/* 6 Slides Stacked with 16:9 Aspect Ratio Containers */}
      <div className="space-y-12 max-w-6xl mx-auto">
        {/* Slide 1 */}
        <div className="print-page aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          <Slide1Cover />
        </div>

        {/* Slide 2 */}
        <div className="print-page aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          <Slide2Services />
        </div>

        {/* Slide 3 */}
        <div className="print-page aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          <Slide3Portfolio />
        </div>

        {/* Slide 4 */}
        <div className="print-page aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          <Slide4Vision />
        </div>

        {/* Slide 5 */}
        <div className="print-page aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          <Slide5Mission />
        </div>

        {/* Slide 6 */}
        <div className="print-page aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          <Slide6Closing />
        </div>
      </div>
    </div>
  );
};
