'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import DomainSearch from '@/components/DomainSearch';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Globe, 
  Wrench, 
  Laptop, 
  ChevronLeft, 
  ChevronRight,
  Sparkles 
} from 'lucide-react';

const serviceSlides = [
  {
    id: 'web-tasarim',
    title: 'Kurumsal Web Tasarım & SEO',
    subtitle: 'Dünya standartlarında modern arayüzler, mobil uyum ve arama motoru optimizasyonu.',
    tag: 'Web & Dijital Çözümler',
    image: '/images/services/web-design.jpg',
    href: '/hizmetler/web-tasarim',
    path: 'btgrup.com / web-tasarim',
    statusBadge: 'SEO & Mobil Uyumlu',
    statusColor: 'text-brand-400',
    floatingLeft: {
      icon: Globe,
      text: 'Modern UI/UX & Responsive',
    },
    floatingRight: 'PageSpeed 95+',
    badgeColor: 'text-brand-400',
  },
  {
    id: 'hosting-domain',
    title: 'Yüksek Hızlı Kurumsal Sunucu & Web Mimarisi',
    subtitle: 'NVMe SSD disk altyapısı, kurumsal e-posta, SSL ve profesyonel bulut mimarisi.',
    tag: 'NVMe Cloud Infrastructure',
    image: '/images/services/server-hosting.jpg',
    href: '/hizmetler/hosting-domain',
    path: 'btgrup.com / enterprise-cloud',
    statusBadge: '99.98% Uptime',
    statusColor: 'text-emerald-400',
    floatingLeft: {
      icon: ShieldCheck,
      text: 'SSL & DDoS Korumalı',
    },
    floatingRight: '14 ms Latency',
    badgeColor: 'text-cyan-400',
  },
  {
    id: 'teknik-servis',
    title: 'Garantili Bilgisayar Teknik Servisi',
    subtitle: 'Hızlı arıza tespiti, orijinal donanım onarımı ve kurumsal periyodik IT bakım anlaşması.',
    tag: 'Donanım & Sistem Bakımı',
    image: '/images/services/technical-service.jpg',
    href: '/hizmetler/teknik-servis',
    path: 'btgrup.com / teknik-servis',
    statusBadge: 'Garantili Onarım',
    statusColor: 'text-amber-400',
    floatingLeft: {
      icon: Wrench,
      text: 'Hızlı Müdahale & Destek',
    },
    floatingRight: 'Orijinal Parça',
    badgeColor: 'text-amber-400',
  },
  {
    id: 'bilgisayar-yazilim',
    title: 'Orijinal Donanım & Yazılım Tedariği',
    subtitle: 'Logo Yazılım, ETA, ESET, Sophos lisanslama ve kurumsal iş istasyonu/PC satışı.',
    tag: 'Yetkili Satış & Lisanslama',
    image: '/images/services/hardware-sales.jpg',
    href: '/hizmetler/bilgisayar-yazilim',
    path: 'btgrup.com / donanim-yazilim',
    statusBadge: 'Yetkili Bayi',
    statusColor: 'text-purple-400',
    floatingLeft: {
      icon: Laptop,
      text: 'Resmi Lisans Güvencesi',
    },
    floatingRight: 'Kurumsal Tedarik',
    badgeColor: 'text-purple-400',
  },
];

const serviceTabs = [
  {
    id: 'web-tasarim',
    title: 'Web Tasarım',
    desc: 'SEO & Standartlar',
    href: '/hizmetler/web-tasarim',
    icon: Globe,
    activeTheme: 'border-brand-500 bg-slate-800/90 text-brand-400 ring-1 ring-brand-500/40',
  },
  {
    id: 'hosting-domain',
    title: 'Cloud Hosting',
    desc: 'NVMe SSD & Mail',
    href: '/hizmetler/hosting-domain',
    icon: Server,
    activeTheme: 'border-cyan-500 bg-slate-800/90 text-cyan-400 ring-1 ring-cyan-500/40',
  },
  {
    id: 'teknik-servis',
    title: 'Teknik Servis',
    desc: 'Donanım Onarımı',
    href: '/hizmetler/teknik-servis',
    icon: Wrench,
    activeTheme: 'border-amber-500 bg-slate-800/90 text-amber-400 ring-1 ring-amber-500/40',
  },
  {
    id: 'bilgisayar-yazilim',
    title: 'PC & Lisans',
    desc: 'Orijinal Satış',
    href: '/hizmetler/bilgisayar-yazilim',
    icon: Laptop,
    activeTheme: 'border-purple-500 bg-slate-800/90 text-purple-400 ring-1 ring-purple-500/40',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % serviceSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + serviceSlides.length) % serviceSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Arka Plan Işık Efektleri */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sol Kolon - Başlık ve Tanıtım */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-900/60 border border-brand-500/30 text-brand-300 text-xs font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              2000'den Bugüne Çeyrek Asırlık Bilişim Güvencesi
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Bilişimde 25+ Yıllık Güven <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-300 to-emerald-400">
                Kesintisiz Çözüm Ortaklığı
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              2000 yılından bugüne çok sayıda kurumsal firmaya sunduğumuz güven ve iş disipliniyle; modern web tasarım, cloud hosting, garantili bilgisayar teknik servisi ve orijinal donanım/lisans tedariğini optimum maliyetle tek çatı altında sunuyoruz.
            </p>

            {/* Hızlı Özellik Maddeleri */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300 font-medium max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Güven Odaklı Hizmet Modeli</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Optimum Maliyet & Süre</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dünya Standartlarında Web</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Profesyonel IT Desteği</span>
              </div>
            </div>

            {/* Butonlar */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link 
                href="/teklif-al" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-base shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Hemen Teklif Al</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link 
                href="/#hizmetler" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-base transition-all hover:-translate-y-0.5"
              >
                <span>Hizmetlerimizi İnceleyin</span>
              </Link>
            </div>
          </div>

          {/* Sağ Kolon - 4 Hizmet Slider'ı & Mockup Penceresi */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg">
              
              {/* Arkadaki renkli ışıma */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000"></div>

              {/* Ana Pencere Mockup */}
              <div className="relative bg-slate-900/90 rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Pencere Başlık Barı */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-[11px] font-mono text-slate-400 ml-2 transition-all duration-300">
                      {serviceSlides[currentSlide].path}
                    </span>
                  </div>
                  <div className={`flex items-center gap-1.5 text-[11px] font-bold ${serviceSlides[currentSlide].statusColor} transition-colors duration-300`}>
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                    <span>{serviceSlides[currentSlide].statusBadge}</span>
                  </div>
                </div>

                {/* 4 Hizmet Slider Alanı */}
                <div 
                  className="relative h-64 sm:h-72 w-full overflow-hidden group select-none"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {/* Slaytlar */}
                  {serviceSlides.map((slide, index) => {
                    const isActive = currentSlide === index;
                    const FloatingIcon = slide.floatingLeft.icon;

                    return (
                      <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                      >
                        {/* Resim */}
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className={`w-full h-full object-cover object-center transition-transform duration-1000 ${
                            isActive ? 'scale-100' : 'scale-105'
                          }`}
                        />

                        {/* Karartma Gradyanı */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/30"></div>

                        {/* Üst Yüzen Rozetler */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                          <div className="bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/80 flex items-center gap-2 shadow-lg">
                            <FloatingIcon className={`w-4 h-4 ${slide.badgeColor}`} />
                            <span className="text-xs font-bold text-white">{slide.floatingLeft.text}</span>
                          </div>
                          <div className="bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/80 text-xs font-bold text-cyan-300 shadow-lg">
                            {slide.floatingRight}
                          </div>
                        </div>

                        {/* Alt Metin Alanı */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-xs font-mono text-cyan-300 mb-1 flex items-center gap-1.5 font-medium">
                            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{slide.tag}</span>
                          </div>
                          <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug drop-shadow">
                            {slide.title}
                          </h3>
                          <p className="text-xs text-slate-300 line-clamp-1 mt-1 font-normal">
                            {slide.subtitle}
                          </p>

                          <div className="mt-3 flex items-center justify-between">
                            <Link
                              href={slide.href}
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-md hover:gap-2"
                            >
                              <span>Hizmeti İncele</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>

                            {/* Slayt Numaratörü */}
                            <span className="text-[11px] font-mono text-slate-400 bg-slate-950/60 px-2 py-0.5 rounded border border-slate-800">
                              0{index + 1} / 0{serviceSlides.length}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Önceki / Sonraki Kontroller */}
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Önceki Hizmet"
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-brand-600 text-white flex items-center justify-center border border-slate-700/80 backdrop-blur-md transition-all opacity-80 hover:opacity-100 hover:scale-105 shadow-lg"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Sonraki Hizmet"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-brand-600 text-white flex items-center justify-center border border-slate-700/80 backdrop-blur-md transition-all opacity-80 hover:opacity-100 hover:scale-105 shadow-lg"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                </div>

                {/* Alt 4 Hizmet Butonları (Sekme & Yönlendirme) */}
                <div className="p-3 sm:p-4 bg-slate-950/90 grid grid-cols-2 gap-2.5">
                  {serviceTabs.map((tab, i) => {
                    const Icon = tab.icon;
                    const isActive = currentSlide === i;

                    return (
                      <div
                        key={tab.id}
                        onClick={() => setCurrentSlide(i)}
                        className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer select-none ${
                          isActive
                            ? `${tab.activeTheme} shadow-md`
                            : 'bg-slate-900/80 hover:bg-slate-800/80 border-slate-800 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <Icon className={`w-4 h-4 shrink-0 transition-colors ${isActive ? 'text-current' : 'text-slate-400'}`} />
                          <div className="text-left overflow-hidden">
                            <div className={`text-xs font-bold truncate transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>
                              {tab.title}
                            </div>
                            <div className="text-[10px] text-slate-400 truncate">{tab.desc}</div>
                          </div>
                        </div>

                        <Link
                          href={tab.href}
                          onClick={(e) => e.stopPropagation()}
                          title={`${tab.title} sayfasına git`}
                          className={`shrink-0 ml-1 p-1 rounded-md transition-colors ${
                            isActive ? 'text-white hover:bg-white/10' : 'text-slate-500 hover:text-white'
                          }`}
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    );
                  })}
                </div>

              </div>


            </div>
          </div>

        </div>

        {/* Alan Adı & Tescil Servisi (Koyu Alan) */}
        <div className="mt-14 pt-10 border-t border-slate-800/80">
          <DomainSearch variant="dark" />
        </div>

        {/* Sayaçlar / İstatistikler Barı */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-400">25+ Yıl</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">2000'den Beri Kesintisiz</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">Yüzlerce</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Kurumsal Müşteri</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">%100</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Müşteri Sadakati</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">Optimum</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Maliyet & Zaman Disiplini</div>
          </div>
        </div>

      </div>
    </section>
  );
}
