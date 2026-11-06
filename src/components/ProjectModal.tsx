import React from 'react';
import { X, Globe, Smartphone, ShieldCheck, Layers } from 'lucide-react';
import { WebApplication, MobileApplication } from '../types/portfolio';

interface ProjectModalProps {
  webApp?: WebApplication | null;
  mobileApp?: MobileApplication | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  webApp,
  mobileApp,
  onClose,
}) => {
  if (!webApp && !mobileApp) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {webApp && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-xs text-blue-600 font-semibold tracking-wider uppercase">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 border border-blue-200">
                <Globe className="w-3.5 h-3.5" />
                Web Application
              </span>
              <span>·</span>
              <span className="text-slate-500">{webApp.category}</span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {webApp.name}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1">
                {webApp.tagline}
              </p>
            </div>

            {/* Browser Simulation Container */}
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-1 shadow-sm">
              <div className="flex items-center justify-between px-3 py-2 bg-slate-100 rounded-t-lg border-b border-slate-200 text-xs font-mono text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="px-3 py-0.5 rounded bg-white border border-slate-200 text-blue-600 font-semibold">
                  https://{webApp.domain}
                </div>
                <span className="text-[10px] text-slate-500 font-sans">SSL Verified</span>
              </div>
              {webApp.imageUrl ? (
                <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-900">
                  <img
                    src={webApp.imageUrl}
                    alt={webApp.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-600 text-white">
                        {webApp.previewDetails.statOrPill}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold">
                        {webApp.previewDetails.heroTitle}
                      </h3>
                      <p className="text-xs text-slate-300">
                        {webApp.previewDetails.heroSubtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20">
                  <div className="max-w-xl mx-auto text-center space-y-3 py-4">
                    <span className="text-xs uppercase tracking-widest text-blue-700 font-bold">
                      {webApp.previewDetails.statOrPill}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {webApp.previewDetails.heroTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {webApp.previewDetails.heroSubtitle}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Description & SLA Outcome */}
            {webApp.description && (
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                {webApp.description}
              </p>
            )}

            {/* Architecture Highlights & Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                System Specifications & Engineering
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {webApp.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      <span>Deliverable 0{i + 1}</span>
                    </div>
                    <p className="text-xs text-slate-600">{h}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips & SLA Indicator */}
            {webApp.techStack && (
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-semibold text-slate-700 mr-1">Core Tech Stack:</span>
                  {webApp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-800 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {webApp.slaMetric && (
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                    SLA: {webApp.slaMetric}
                  </span>
                )}
              </div>
            )}

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Production Domain: <strong className="text-slate-800 font-mono">{webApp.domain}</strong></span>
              <a
                href={webApp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 hover:underline"
              >
                <span>Visit Live Domain</span>
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {mobileApp && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-xs text-blue-600 font-semibold tracking-wider uppercase">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 border border-blue-200">
                <Smartphone className="w-3.5 h-3.5" />
                Mobile Application
              </span>
              <span>·</span>
              <span className="text-slate-500">{mobileApp.platform}</span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {mobileApp.name}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1">
                {mobileApp.tagline}
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {mobileApp.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mobileApp.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5"
                >
                  <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-xs text-slate-800 font-medium">{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Platform Target: <strong className="text-slate-800">{mobileApp.platform}</strong></span>
              <span className="text-slate-500">NYAYAOS Mobile Systems</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
