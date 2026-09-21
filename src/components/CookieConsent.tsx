'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, Check, Settings2, X, ChevronDown, ChevronUp } from 'lucide-react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'btgrup_cookie_consent_v1';

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  // Çerez tercihleri state'i
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // Kullanıcı daha önce seçim yapmadıysa 800ms sonra yumuşakça göster
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 800);
        return () => clearTimeout(timer);
      } else {
        const parsed: CookiePreferences = JSON.parse(saved);
        setAnalytics(parsed.analytics ?? true);
        setMarketing(parsed.marketing ?? false);
      }
    } catch {
      setIsVisible(true);
    }

    // Harici olarak (örneğin footer veya çerez politikası sayfasından) ayarları açma dinleyicisi
    const handleOpenSettings = () => {
      setShowCustomize(true);
      setIsVisible(true);
    };

    window.addEventListener('openCookieSettings', handleOpenSettings);
    return () => {
      window.removeEventListener('openCookieSettings', handleOpenSettings);
    };
  }, []);

  const savePreferences = (prefs: { necessary: boolean; analytics: boolean; marketing: boolean }) => {
    const data: CookiePreferences = {
      ...prefs,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Cookie preferences could not be saved', e);
    }
    setIsVisible(false);
    setShowCustomize(false);
  };

  const handleAcceptAll = () => {
    setAnalytics(true);
    setMarketing(true);
    savePreferences({ necessary: true, analytics: true, marketing: true });
  };

  const handleAcceptNecessary = () => {
    setAnalytics(false);
    setMarketing(false);
    savePreferences({ necessary: true, analytics: false, marketing: false });
  };

  const handleSaveCustom = () => {
    savePreferences({ necessary: true, analytics, marketing });
  };

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Çerez ve Gizlilik Bildirimi"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 max-w-xl animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xl p-5 sm:p-6 text-slate-900 ring-1 ring-slate-900/5">
        
        {/* Üst Başlık & İkon */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                Çerez ve KVKK Tercihleriniz
              </h4>
              <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                6698 Sayılı KVKK Uyumlu
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAcceptNecessary}
            aria-label="Kapat ve yalnızca zorunluları kabul et"
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Açıklama Metni */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          Btgrup olarak web sitemizde güvenliğinizi sağlamak, kullanıcı deneyiminizi geliştirmek ve hizmetlerimizi optimize etmek amacıyla çerezler (cookies) kullanıyoruz.{' '}
          <Link
            href="/yasal/cerez-politikasi"
            className="text-brand-600 hover:text-brand-700 underline font-semibold transition-colors"
          >
            Çerez Politikası
          </Link>{' '}
          ve{' '}
          <Link
            href="/yasal/kvkk"
            className="text-brand-600 hover:text-brand-700 underline font-semibold transition-colors"
          >
            KVKK Metnimizi
          </Link>{' '}
          inceleyebilirsiniz.
        </p>

        {/* Özelleştirme Alanı (Expandable) */}
        {showCustomize && (
          <div className="mb-4 pt-3 border-t border-slate-100 space-y-3">
            {/* 1. Zorunlu Çerezler */}
            <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="text-xs">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span>Zorunlu Çerezler</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-semibold">
                    Her Zaman Aktif
                  </span>
                </div>
                <p className="text-slate-500 mt-0.5 text-[11px] leading-snug">
                  Sitenin temel fonksiyonları, oturum güvenliği ve form akışlarının çalışması için zorunludur.
                </p>
              </div>
              <input
                type="checkbox"
                checked={true}
                disabled={true}
                className="mt-1 h-4 w-4 rounded text-brand-600 border-slate-300 cursor-not-allowed opacity-75"
              />
            </div>

            {/* 2. Analitik & İstatistik Çerezleri */}
            <label className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 cursor-pointer hover:bg-slate-100/70 transition-colors">
              <div className="text-xs">
                <div className="font-bold text-slate-900">Analitik & Performans Çerezleri</div>
                <p className="text-slate-500 mt-0.5 text-[11px] leading-snug">
                  Ziyaretçi sayılarını ve sayfa gezinme kalitesini anonim olarak ölçerek siteyi geliştirmemizi sağlar.
                </p>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 h-4 w-4 rounded text-brand-600 border-slate-300 focus:ring-brand-500 cursor-pointer"
              />
            </label>

            {/* 3. Pazarlama & Hedefleme Çerezleri */}
            <label className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 cursor-pointer hover:bg-slate-100/70 transition-colors">
              <div className="text-xs">
                <div className="font-bold text-slate-900">Pazarlama & Sosyal Medya Çerezleri</div>
                <p className="text-slate-500 mt-0.5 text-[11px] leading-snug">
                  İlgi alanlarınıza uygun bilişim çözümleri ve kampanyalar sunabilmek için kullanılır.
                </p>
              </div>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-1 h-4 w-4 rounded text-brand-600 border-slate-300 focus:ring-brand-500 cursor-pointer"
              />
            </label>
          </div>
        )}

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => setShowCustomize(!showCustomize)}
            className="inline-flex items-center justify-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium py-2 px-1 transition-colors"
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span>{showCustomize ? 'Tercihleri Gizle' : 'Tercihleri Özelleştir'}</span>
            {showCustomize ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          <div className="flex flex-col-reverse sm:flex-row items-center gap-2">
            {showCustomize ? (
              <button
                type="button"
                onClick={handleSaveCustom}
                className="w-full sm:w-auto px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
              >
                Seçimleri Kaydet
              </button>
            ) : (
              <button
                type="button"
                onClick={handleAcceptNecessary}
                className="w-full sm:w-auto px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors text-center"
              >
                Yalnızca Zorunlular
              </button>
            )}

            <button
              type="button"
              onClick={handleAcceptAll}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all hover:scale-[1.02]"
            >
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tümünü Kabul Et</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
