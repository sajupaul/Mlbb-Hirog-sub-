'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { BANNERS } from '../lib/data';

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % BANNERS.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const diff = touchStart - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) {
            diff > 0
              ? setCurrent((c) => (c + 1) % BANNERS.length)
              : setCurrent((c) => (c - 1 + BANNERS.length) % BANNERS.length);
          }
        }}
      >
        {BANNERS.map((banner) => (
          <div
            key={banner.id}
            className="w-full flex-shrink-0 relative aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/8]"
          >
            {/* Background Image */}
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} opacity-80`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center px-6 md:px-16">
              <div className="max-w-lg">
                <h2 className="text-2xl md:text-5xl font-[family-name:var(--font-heading)] font-extrabold text-white mb-2 md:mb-4 leading-tight drop-shadow-lg">
                  {banner.title}
                </h2>
                <p className="text-sm md:text-xl text-white/80 mb-4 md:mb-6 drop-shadow">
                  {banner.subtitle}
                </p>
                <Link
                  href={banner.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-3 rounded-xl text-sm md:text-base font-semibold text-white bg-white/15 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all shadow-lg"
                >
                  {banner.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-purple-400' : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
