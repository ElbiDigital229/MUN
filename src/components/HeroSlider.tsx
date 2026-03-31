"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  subtitle?: string;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  backgroundImage: string;
}

interface HeroSliderProps {
  slides: Slide[];
  interval?: number;
}

export default function HeroSlider({
  slides,
  interval = 6000,
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [current, isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, slides.length, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [nextSlide, interval]);

  const slide = slides[current];
  const slideNumber = String(current + 1).padStart(2, "0");
  const totalSlides = String(slides.length).padStart(2, "0");

  return (
    <section className="relative w-full h-[92vh] min-h-[650px] overflow-hidden">
      {/* Background images - all loaded, only current visible */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          {slide.subtitle && (
            <p
              className={`text-white/80 text-sm tracking-[0.2em] uppercase font-light mb-4 transition-all duration-500 ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {slide.subtitle}
            </p>
          )}
          <h1
            className={`text-white text-4xl md:text-7xl lg:text-[90px] font-light uppercase tracking-[1.8px] leading-none mb-6 transition-all duration-500 delay-100 ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            {slide.title}
          </h1>
          <p
            className={`text-white/90 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-500 delay-200 ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            {slide.description}
          </p>
          <Link
            href={slide.ctaLink}
            className={`inline-block px-8 py-3.5 bg-cta text-primary text-base font-medium tracking-wide rounded hover:bg-cta-hover transition-all duration-500 delay-300 ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            {slide.cta}
          </Link>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 left-8 text-white/60 text-sm font-light tracking-wider">
        <span className="text-white text-lg font-medium">{slideNumber}</span>
        <span className="mx-1">/</span>
        <span>{totalSlides}</span>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-3 h-3 bg-white"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={() =>
          goToSlide((current - 1 + slides.length) % slides.length)
        }
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((current + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
