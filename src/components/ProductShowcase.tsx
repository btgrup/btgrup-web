'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Laptop, Cpu, ShieldCheck, Key, Check, ArrowRight, Sparkles } from 'lucide-react';
import { initialProducts } from '@/lib/initialData';

export default function ProductShowcase() {
  const [filter, setFilter] = useState<'Tümü' | 'Bilgisayar' | 'Yazılım & Lisans'>('Tümü');

  const hardwareAndSoftware = initialProducts.filter(
    p => p.category === 'Bilgisayar' || p.category === 'Yazılım & Lisans' || p.category === 'Donanım'
  );

  const filtered = filter === 'Tümü'
    ? hardwareAndSoftware
    : hardwareAndSoftware.filter(p => p.category === filter);

  const getProductImage = (id: string) => {
    if (id === 'p-hw-1') return '/images/products/workstation-pc.jpg';
    if (id === 'p-hw-2') return '/images/products/thinkpad.jpg';
    return null;
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="urunler">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-brand-600 font-bold text-xs uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
              Donanım & Yazılım Mağazası
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Bilgisayar & Orijinal Lisans Satışı
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Kurumsal ofis sistemleri, profesyonel laptoplar ve yasal işletim sistemi/antivirüs lisansları.
            </p>
          </div>

          {/* Filtre Butonları */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
            {(['Tümü', 'Bilgisayar', 'Yazılım & Lisans'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  filter === cat
                    ? 'bg-slate-900 text-white shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Ürün Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => {
            const isSoftware = product.category === 'Yazılım & Lisans';
            const productImage = getProductImage(product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Görsel Alanı */}
                  {productImage ? (
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={productImage}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-bold text-white uppercase tracking-wider bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                          {product.category}
                        </span>
                      </div>
                      {product.badge && (
                        <div className="absolute top-3 right-3">
                          <span className="text-xs font-bold text-brand-300 bg-brand-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-brand-500/40">
                            {product.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Yazılım için özel tasarım banner */
                    <div className="h-28 bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 p-4 flex items-center justify-between border-b border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center border border-brand-500/30">
                          {product.name.includes('ESET') ? (
                            <ShieldCheck className="w-6 h-6 text-emerald-400" />
                          ) : (
                            <Key className="w-6 h-6 text-brand-400" />
                          )}
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-brand-300 uppercase tracking-wider">
                            {product.category}
                          </span>
                          <div className="text-xs font-semibold text-white">
                            {product.name.includes('ESET') ? 'Siber Güvenlik' : 'Orijinal Ticari Lisans'}
                          </div>
                        </div>
                      </div>
                      {product.badge && (
                        <span className="text-[11px] font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-800 px-2.5 py-1 rounded-md">
                          {product.badge}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 min-h-[40px]">
                      {product.description}
                    </p>

                    {/* Özellikler */}
                    <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                      {product.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400">Tedarik Durumu:</div>
                    <div className="text-xs font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Distribütör Garantili</span>
                    </div>
                  </div>

                  <Link
                    href={`/teklif-al?urun=${encodeURIComponent(product.name)}`}
                    className="px-4 py-2.5 bg-slate-900 hover:bg-brand-600 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Fiyat & Teklif İste</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
