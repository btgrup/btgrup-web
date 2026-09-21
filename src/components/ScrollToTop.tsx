'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 300px'den fazla kaydırıldığında butonu göster
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Yukarı Çık"
      title="Yukarı Çık"
      className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-2xl bg-gradient-to-tr from-brand-700 via-brand-600 to-brand-500 hover:from-brand-600 hover:to-brand-400 text-white shadow-lg shadow-brand-600/30 hover:shadow-xl hover:shadow-brand-600/40 border border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 group ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-4 pointer-events-none scale-75'
      }`}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-1" />
    </button>
  );
}
