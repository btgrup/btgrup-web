'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Zap, Server, Globe, Shield, Sparkles } from 'lucide-react';
import { initialProducts } from '@/lib/initialData';

export default function PackagesSection() {
  const [tab, setTab] = useState<'Hosting' | 'Web Paketi'>('Hosting');

  const hostingPackages = initialProducts.filter(p => p.category === 'Hosting');
  const webPackages = initialProducts.filter(p => p.category === 'Web Paketi');

  const activePackages = tab === 'Hosting' ? hostingPackages : webPackages;

  return (
    <section className="py-20 bg-white" id="paketler">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık ve Tab Seçimi */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-600 font-bold text-xs uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            Kurumsal Çözüm & Paketler
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Paketlerimizi İnceleyin
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Firmanızın ölçeğine ve hedeflerine göre optimize edilmiş yüksek hızlı bulut hosting ve anahtar teslim kurumsal web paketleri.
          </p>

          {/* Tab Değiştirici */}
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 mt-8">
            <button
              onClick={() => setTab('Hosting')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                tab === 'Hosting'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Server className="w-4 h-4 text-brand-600" />
              <span>Bulut Hosting Paketleri</span>
            </button>

            <button
              onClick={() => setTab('Web Paketi')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                tab === 'Web Paketi'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe className="w-4 h-4 text-cyan-600" />
              <span>Hazır Web Tasarım Paketleri</span>
            </button>
          </div>
        </div>

        {/* Paket Kartları */}
        <div className={`grid grid-cols-1 ${activePackages.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8`}>
          {activePackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                pkg.featured
                  ? 'border-brand-500 shadow-2xl shadow-brand-500/10 ring-2 ring-brand-500/20'
                  : 'border-slate-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`px-4 py-1 text-xs font-bold rounded-full uppercase tracking-wider text-white shadow-md ${
                    pkg.featured ? 'bg-gradient-to-r from-brand-600 to-cyan-600' : 'bg-slate-800'
                  }`}>
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-500 text-xs sm:text-sm min-h-[40px] leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="flex items-center gap-2 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-xl border border-brand-200">
                    Özel Kurumsal Çözüm
                  </span>
                </div>

                {/* Özellik Maddeleri */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Paket Detayları:
                  </div>
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={`/teklif-al?paket=${encodeURIComponent(pkg.name)}`}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all ${
                    pkg.featured
                      ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-600/30'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>Detaylı Bilgi & Teklif İste</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
