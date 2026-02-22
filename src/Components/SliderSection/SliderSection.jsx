import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Doctor from '/src/assets/Doctor.webp';
import Doctor1 from '/src/assets/Doctor1.webp';
import Doctor2 from '/src/assets/Doctor2.webp';
import Doctor3 from '/src/assets/Doctor3.webp';
import Hospital from '/src/assets/Hospita10.avif';

const Carousel = () => {
  const slides = [
    { id: 1, url: Doctor, title: 'Heart Surgery', subtitle: 'Advanced Cardiac Care', badge: 'Specialized' },
    { id: 2, url: Doctor1, title: 'Expert Doctors', subtitle: 'World-Class Medical Team', badge: 'Professional' },
    { id: 3, url: Doctor2, title: 'Modern Equipment', subtitle: 'State-of-the-Art Technology', badge: 'Innovation' },
    { id: 4, url: Doctor3, title: '24/7 Emergency', subtitle: 'Always Here When You Need Us', badge: 'Available' },
    { id: 5, url: Hospital, title: 'Advanced Facilities', subtitle: 'Premium Healthcare Environment', badge: 'Comfort' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const SLIDE_DURATION = 6000;

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);
    clearInterval(progressIntervalRef.current);

    setProgress(0);

    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
    }, 50);

    intervalRef.current = setInterval(() => {
      handleNextSlide();
    }, SLIDE_DURATION);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
    clearInterval(progressIntervalRef.current);
  };

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => {
      setIsTransitioning(false);
      startAutoPlay();
    }, 1000); // Wait for transition to finish
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    stopAutoPlay();
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => {
      setIsTransitioning(false);
      startAutoPlay();
    }, 1000);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    stopAutoPlay();
    handleNextSlide();
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    stopAutoPlay();
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => {
      setIsTransitioning(false);
      startAutoPlay();
    }, 1000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []); // Re-run effect depends on nothing, but startAutoPlay captures state properly through prev

  const handleTouchStart = (e) => {
    stopAutoPlay();
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="w-full mx-auto relative group">
      <div className="relative w-full min-h-[500px] h-[60vh] lg:h-[85vh] overflow-hidden bg-slate-900 border-b-4 border-blue-500">

        {/* Slides */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
              >
                {/* Image with Ken Burns Effect */}
                <div className={`absolute inset-0 transition-transform duration-[10000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'}`}>
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Gradients for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-transparent to-transparent mix-blend-multiply" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl pt-20">
            {/* Badge */}
            <div className="overflow-hidden mb-4">
              <div
                className={`inline-block px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-300 text-sm font-bold tracking-widest uppercase transform transition-all duration-1000 delay-300 ${isTransitioning ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                  }`}
              >
                {slides[currentIndex].badge}
              </div>
            </div>

            {/* Title */}
            <div className="overflow-hidden mb-4">
              <h1
                className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight transform transition-all duration-1000 delay-100 ${isTransitioning ? 'translate-y-full opacity-0 skew-y-3' : 'translate-y-0 opacity-100 skew-y-0'
                  }`}
              >
                {slides[currentIndex].title.split(' ').map((word, i, arr) => (
                  <span key={i} className={i === arr.length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden mb-10">
              <p
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 font-light leading-relaxed transform transition-all duration-1000 delay-200 ${isTransitioning ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                  }`}
              >
                {slides[currentIndex].subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Side Controls (Arrows) */}
        <div className="absolute right-8 bottom-12 z-30 flex items-center gap-4">
          <div className="text-white/60 font-medium text-lg mr-4 hidden sm:block">
            <span className="text-white font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="mx-2">/</span>
            {String(slides.length).padStart(2, '0')}
          </div>

          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} strokeWidth={2} />
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600/80 hover:bg-blue-500 backdrop-blur-md border border-blue-400/50 text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:opacity-50 disabled:hover:scale-100"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} strokeWidth={2} />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="absolute left-8 md:left-16 lg:left-24 bottom-12 z-30 flex gap-3 items-center">
          {slides.map((_, index) => {
            const isActive = currentIndex === index;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className="group py-4 flex items-center justify-center focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`relative h-1.5 transition-all duration-500 ease-out rounded-full overflow-hidden ${isActive ? 'w-12 bg-white/20' : 'w-2 bg-white/40 group-hover:bg-white/70 group-hover:w-4'
                    }`}
                >
                  {isActive && (
                    <div
                      className="absolute top-0 left-0 bottom-0 bg-blue-500 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Touch Events Layer */}
        <div
          className="absolute inset-0 z-10 touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      </div>
    </div>
  );
};

export default Carousel;
