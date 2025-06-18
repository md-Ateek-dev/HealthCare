import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Doctor from '/src/assets/Doctor.webp';
import Doctor1 from '/src/assets/Doctor1.webp';
import Doctor2 from '/src/assets/Doctor2.webp';
import Doctor3 from '/src/assets/Doctor3.webp';
import Hospital from '/src/assets/Hospita10.avif';

const Carousel = () => {
  const slides = [
    { id: 1, url: Doctor, title: 'Heart Surgery', subtitle: 'Advanced Cardiac Care' },
    { id: 2, url: Doctor1, title: 'Expert Doctors', subtitle: 'World-Class Medical Team' },
    { id: 3, url: Doctor2, title: 'Modern Equipment', subtitle: 'State-of-the-Art Technology' },
    { id: 4, url: Doctor3, title: '24/7 Emergency', subtitle: 'Always Here When You Need Us' },
    { id: 5, url: Hospital, title: 'Advanced Facilities', subtitle: 'Premium Healthcare Environment' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const intervalRef = useRef(null);

  const clearAutoPlay = () => intervalRef.current && clearInterval(intervalRef.current);

  const startAutoPlay = () => {
    clearAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  useEffect(() => {
    startAutoPlay();
    return clearAutoPlay;
  }, []);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
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
    <div className="w-full mx-auto">
      <div className="relative w-full h-96 overflow-hidden bg-black">

        {/* Slides */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-105 pointer-events-none'
              }`}
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center max-w-4xl px-6">
            <div
              className={`transform transition-all duration-1000 ${
                isTransitioning
                  ? 'translate-y-10 opacity-0'
                  : 'translate-y-0 opacity-100'
              }`}
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-none tracking-tight">
                {slides[currentIndex].title}
              </h1>
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white/90 font-light mb-8 leading-relaxed">
                {slides[currentIndex].subtitle}
              </p>

              <div className="flex justify-center mb-8">
                <div className="px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full border border-white/30">
                  <span className="text-white/90 text-lg font-medium">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-2xl disabled:opacity-50 z-30"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-2xl disabled:opacity-50 z-30"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-6 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`relative group transition-all duration-300 ${
                currentIndex === index ? 'scale-125' : 'hover:scale-110'
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-white shadow-lg'
                    : 'bg-white/40 group-hover:bg-white/70'
                }`}
              />
              {currentIndex === index && (
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-white/30 animate-ping" />
              )}
            </button>
          ))}
        </div>

        {/* Progress Bar
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
          />
        </div> */}

        {/* Touch Events */}
        <div
          className="absolute inset-0 z-10"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      </div>
    </div>
  );
};

export default Carousel;
