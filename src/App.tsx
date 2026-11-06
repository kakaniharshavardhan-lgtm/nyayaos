import React, { useState, useEffect, useRef, useCallback } from 'react';
import { WebApplicationView } from './views/WebApplicationView';
import { Slide1Cover } from './slides/Slide1Cover';
import { Slide2Services } from './slides/Slide2Services';
import { Slide3Portfolio } from './slides/Slide3Portfolio';
import { Slide4Vision } from './slides/Slide4Vision';
import { Slide5Mission } from './slides/Slide5Mission';
import { Slide6Closing } from './slides/Slide6Closing';
import { AllSlidesPrintView } from './slides/AllSlidesPrintView';
import { DeckHeader } from './components/DeckHeader';
import { DeckNavigation } from './components/DeckNavigation';
import { SlideThumbnailGrid } from './components/SlideThumbnailGrid';

const TOTAL_SLIDES = 6;
const SLIDE_DURATION_MS = 9000;

const slideTitles = [
  'Company Cover',
  'Our Services',
  'Our Digital Portfolio',
  'Our Vision',
  'Our Mission',
  'Closing & Partnership',
];

export default function App() {
  // Mode: 'web-app' (default) or 'presentation-deck'
  const [appMode, setAppMode] = useState<'web-app' | 'presentation-deck'>('web-app');
  
  // Deck presentation state
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(false);
  const [autoplayProgress, setAutoplayProgress] = useState<number>(0);
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isPrintMode, setIsPrintMode] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const progressIntervalRef = useRef<number | null>(null);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < TOTAL_SLIDES ? prev + 1 : 1));
    setAutoplayProgress(0);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : prev));
    setAutoplayProgress(0);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 1 && index <= TOTAL_SLIDES) {
      setCurrentSlide(index);
      setAutoplayProgress(0);
    }
  }, []);

  // Keyboard navigation when in presentation deck mode
  useEffect(() => {
    if (appMode !== 'presentation-deck') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ': // Spacebar
          e.preventDefault();
          goToNextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          goToPrevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(1);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(TOTAL_SLIDES);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'o':
        case 'O':
          e.preventDefault();
          setIsOverviewOpen((prev) => !prev);
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          setIsPrintMode((prev) => !prev);
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
          e.preventDefault();
          goToSlide(parseInt(e.key, 10));
          break;
        case 'Escape':
          setIsOverviewOpen(false);
          setIsPrintMode(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [appMode, goToNextSlide, goToPrevSlide, goToSlide]);

  // Autoplay loop when in deck mode
  useEffect(() => {
    if (appMode !== 'presentation-deck' || !isAutoplay) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setAutoplayProgress(0);
      return;
    }

    const intervalStep = 100;
    const increment = (intervalStep / SLIDE_DURATION_MS) * 100;

    progressIntervalRef.current = window.setInterval(() => {
      setAutoplayProgress((prev) => {
        if (prev >= 100) {
          goToNextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, intervalStep);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [appMode, isAutoplay, goToNextSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (isPrintMode) {
    return <AllSlidesPrintView onClose={() => setIsPrintMode(false)} />;
  }

  // 1. Web Application View (Default)
  if (appMode === 'web-app') {
    return (
      <WebApplicationView
        onSwitchToDeck={() => {
          setAppMode('presentation-deck');
          setCurrentSlide(1);
        }}
      />
    );
  }

  // 2. Presentation Deck Mode (6 Slides in White & Blue)
  return (
    <div
      ref={containerRef}
      className="flex flex-col h-screen w-screen overflow-hidden bg-slate-100 text-slate-900"
    >
      {/* Top Header Bar */}
      <DeckHeader
        currentSlide={currentSlide}
        slideTitle={slideTitles[currentSlide - 1]}
        onSwitchToWebApp={() => setAppMode('web-app')}
      />

      {/* Main Slide Presentation Stage */}
      <main className="flex-1 relative overflow-hidden flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-slate-100">
        {/* Aspect Ratio 16:9 Presentation Canvas Container */}
        <div className="w-full h-full max-w-[1700px] max-h-[960px] aspect-video relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white flex flex-col">
          {currentSlide === 1 && <Slide1Cover onNext={goToNextSlide} />}
          {currentSlide === 2 && <Slide2Services onNext={goToNextSlide} />}
          {currentSlide === 3 && <Slide3Portfolio onNext={goToNextSlide} />}
          {currentSlide === 4 && <Slide4Vision onNext={goToNextSlide} />}
          {currentSlide === 5 && <Slide5Mission onNext={goToNextSlide} />}
          {currentSlide === 6 && <Slide6Closing onRestart={() => goToSlide(1)} />}
        </div>
      </main>

      {/* Presentation Deck Stepper & Controls */}
      <DeckNavigation
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onPrev={goToPrevSlide}
        onNext={goToNextSlide}
        onSelectSlide={goToSlide}
        isAutoplay={isAutoplay}
        onToggleAutoplay={() => setIsAutoplay((prev) => !prev)}
        onOpenOverview={() => setIsOverviewOpen(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onPrint={() => setIsPrintMode(true)}
        onSwitchToWebApp={() => setAppMode('web-app')}
        autoplayProgress={autoplayProgress}
      />

      {/* Slide Thumbnails Drawer Modal */}
      <SlideThumbnailGrid
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        onSelectSlide={goToSlide}
      />
    </div>
  );
}
