'use client';

import React from 'react';
import { Sliders, Cookie } from 'lucide-react';

interface CookieSettingsButtonProps {
  variant?: 'link' | 'card' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export default function CookieSettingsButton({
  variant = 'link',
  className = '',
  children,
}: CookieSettingsButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('openCookieSettings'));
    }
  };

  if (variant === 'card') {
    return (
      <div className={`p-5 rounded-2xl bg-brand-50/80 border border-brand-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Çerez Tercihlerinizi Yönetin</h4>
            <p className="text-xs text-slate-600">Tercihlerinizi dilediğiniz an inceleyebilir ve güncelleyebilirsiniz.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Tercihleri Düzenle</span>
        </button>
      </div>
    );
  }

  if (variant === 'outline') {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:border-slate-400 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all ${className}`}
      >
        <Sliders className="w-3.5 h-3.5 text-slate-500" />
        <span>{children || 'Çerez Ayarları'}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`hover:text-slate-300 transition-colors text-xs inline-flex items-center gap-1 ${className}`}
    >
      <Sliders className="w-3 h-3 inline-block" />
      <span>{children || 'Çerez Ayarları'}</span>
    </button>
  );
}
