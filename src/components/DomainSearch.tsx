'use client';

import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, Globe, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface DomainResult {
  domain: string;
  tld: string;
  available: boolean;
  popular: boolean;
  tag?: string;
}

interface DomainSearchProps {
  variant?: 'light' | 'dark';
}

export default function DomainSearch({ variant = 'light' }: DomainSearchProps) {
  const [domainInput, setDomainInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<DomainResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isDark = variant === 'dark';

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/domain-check?domain=${encodeURIComponent(domainInput.trim())}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Alan adı sorgulanırken hata oluştu.');
        setResults(null);
      } else {
        setResults(data.results);
      }
    } catch (err) {
      setError('Bağlantı hatası oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={isDark ? "py-4 bg-transparent text-white" : "py-16 bg-white border-y border-slate-200"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            isDark
              ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60'
              : 'bg-cyan-50 text-cyan-700'
          }`}>
            <Globe className="w-3.5 h-3.5" />
            <span>Alan Adı & Tescil Servisi</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Hayalinizdeki Alan Adını Hemen Sorgulayın
          </h2>
          <p className={`mt-2 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            .com, .com.tr, .net ve popüler tüm uzantılarda markanızı tescilleyin, kurumsal e-posta ve bulut hosting ile hemen yayına başlayın.
          </p>
        </div>

        {/* Arama Formu */}
        <div className="max-w-3xl mx-auto">
          <form 
            onSubmit={handleSearch} 
            className={`relative flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl border-2 transition-all ${
              isDark
                ? 'bg-slate-900/90 border-slate-700/80 focus-within:border-cyan-400 shadow-2xl backdrop-blur-xl'
                : 'bg-slate-50 border-slate-200 focus-within:border-brand-500 shadow-lg shadow-slate-200/50'
            }`}
          >
            <div className="flex items-center flex-1 w-full pl-3">
              <Globe className={`w-5 h-5 mr-2 shrink-0 ${isDark ? 'text-cyan-400' : 'text-slate-400'}`} />
              <input
                type="text"
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
                placeholder="Örnek: sirketim, teknoloji, projem (.com yazmadan da deneyebilirsiniz)"
                className={`w-full py-3 bg-transparent text-base focus:outline-none ${
                  isDark
                    ? 'text-white placeholder:text-slate-400'
                    : 'text-slate-800 placeholder:text-slate-400'
                }`}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full sm:w-auto px-8 py-3.5 font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 shrink-0 text-white ${
                isDark
                  ? 'bg-gradient-to-r from-brand-500 to-cyan-600 hover:from-brand-600 hover:to-cyan-700 disabled:opacity-50'
                  : 'bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sorgulanıyor...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Sorgula</span>
                </>
              )}
            </button>
          </form>

          {/* Popüler Uzantı Rozetleri */}
          <div className={`flex flex-wrap items-center justify-center gap-2.5 mt-4 text-xs font-semibold ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            <span className={isDark ? "bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/80" : "bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200"}>.com (Global)</span>
            <span className={isDark ? "bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/80" : "bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200"}>.com.tr (Türkiye)</span>
            <span className={isDark ? "bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/80" : "bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200"}>.net (Ağ & Teknoloji)</span>
            <span className={isDark ? "bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/80" : "bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200"}>.org (Kurumsal)</span>
            <span className={isDark ? "bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/80" : "bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200"}>.io (Bilişim)</span>
          </div>

          {/* Hata Mesajı */}
          {error && (
            <div className="mt-6 p-4 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-sm text-center">
              {error}
            </div>
          )}

          {/* Sorgu Sonuçları */}
          {results && (
            <div className={`mt-8 rounded-2xl p-5 shadow-2xl border animate-in fade-in duration-200 ${
              isDark 
                ? 'bg-slate-900/95 border-slate-700/80 text-white backdrop-blur-xl' 
                : 'bg-white border-slate-200 text-slate-900'
            }`}>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Sorgulama Sonuçları:
              </h3>
              <div className={`divide-y ${isDark ? 'divide-slate-800' : 'divide-slate-100'}`}>
                {results.map((item) => (
                  <div key={item.domain} className="py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {item.available ? (
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                      ) : (
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          isDark ? 'bg-slate-800 text-slate-500' : 'bg-slate-100 text-slate-400'
                        }`}>
                          <XCircle className="w-5 h-5" />
                        </div>
                      )}
                      <div>
                        <div className={`font-bold text-base flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          <span>{item.domain}</span>
                          {item.popular && (
                            <span className="bg-brand-500/20 text-brand-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-brand-500/30">
                              Popüler
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className={`text-xs font-semibold ${item.available ? 'text-emerald-400' : 'text-slate-400'}`}>
                            {item.available ? 'Boşta / Hemen Tescil Edilebilir' : 'Kayıtlı / Dolu'}
                          </span>
                          {item.tag && (
                            <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                              isDark ? 'text-slate-400 bg-slate-800' : 'text-slate-400 bg-slate-100'
                            }`}>
                              {item.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                      {item.available ? (
                        <Link
                          href={`/teklif-al?domain=${encodeURIComponent(item.domain)}`}
                          className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5"
                        >
                          <span>Tescil & Bilgi Al</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : (
                        <span className={`px-3.5 py-1.5 text-xs font-medium rounded-lg ${
                          isDark ? 'bg-slate-800/80 text-slate-500 border border-slate-800' : 'bg-slate-100 text-slate-400'
                        }`}>
                          Kullanımda
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
