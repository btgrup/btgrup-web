'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { ServiceCategory } from '@/lib/types';

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get('kategori') as ServiceCategory) || 'Web Tasarım & Yazılım';
  const initialPackage = searchParams.get('paket') || '';
  const initialDomain = searchParams.get('domain') || '';
  const initialProduct = searchParams.get('urun') || '';

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [category, setCategory] = useState<ServiceCategory>(initialCategory);
  const [details, setDetails] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let prefill = '';
    if (initialPackage) prefill += `Seçilen Paket: ${initialPackage}\n`;
    if (initialDomain) prefill += `Sorgulanan Alan Adı: ${initialDomain}\n`;
    if (initialProduct) prefill += `İlgilenilen Ürün/Donanım: ${initialProduct}\n`;
    if (prefill && !details) {
      setDetails(prefill);
    }
  }, [initialPackage, initialDomain, initialProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !details) {
      setError('Lütfen Ad Soyad, Telefon ve Talep Detayı alanlarını doldurun.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          companyName,
          category,
          details
        })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Talep gönderilirken hata oluştu.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Bağlantı hatası oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl text-center space-y-5">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Talebiniz Başarıyla Alındı!</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Sayın <strong>{fullName}</strong>, teklif ve servis talebiniz uzman teknik ekibimize ulaştı. <strong>En kısa sürede</strong> belirttiğiniz telefon numarası üzerinden sizinle iletişime geçeceğiz.
        </p>
        <div className="pt-4">
          <button
            onClick={() => {
              setSubmitted(false);
              setDetails('');
            }}
            className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            Yeni Bir Talep Gönder
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          Online Teklif & Servis Formu
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
          Hemen Bilgi & Teklif Alın
        </h1>
        <p className="text-slate-600 text-sm mt-2">
          İhtiyacınızı belirtin, Btgrup uzmanları size en uygun ve ekonomik çözümü projelendirsin.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Ad Soyad <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Örn: Ahmet Yılmaz"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Telefon Numarası <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Örn: 0532 000 00 00"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              E-posta Adresi
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Örn: ahmet@sirketiniz.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Firma / Kurum Adı (Opsiyonel)
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Örn: Yılmaz Lojistik A.Ş."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            İlgilenilen Hizmet Alanı <span className="text-red-500">*</span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as ServiceCategory)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white text-sm"
          >
            <option value="Web Tasarım & Yazılım">Web Tasarım & Özel Yazılım / E-Ticaret</option>
            <option value="Domain & Hosting">Domain Tescil, Hosting & Bulut Sunucu</option>
            <option value="Teknik Servis & Ağ Çözümleri">Bilgisayar Teknik Servis & Network / Bakım</option>
            <option value="Bilgisayar & Donanım Satışı">Bilgisayar & OEM Parça Satışı</option>
            <option value="Yazılım & Lisans Satışı">Orijinal Windows, Office & Antivirüs Lisansı</option>
            <option value="Diğer">Diğer Kurumsal Çözümler</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Talep ve İhtiyaç Detayı <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Lütfen ihtiyacınızı, arıza şikayetinizi veya istediğiniz web sitesi/ürün detaylarını kısaca açıklayın..."
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-bold rounded-xl shadow-lg shadow-brand-600/25 transition-all flex items-center justify-center gap-2 text-base"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Talebiniz Gönderiliyor...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Talebi İlet (Ücretsiz Teklif)</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default function TeklifAlPage() {
  return (
    <div className="py-16 bg-slate-50 min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center py-20 text-slate-500">Yükleniyor...</div>}>
          <QuoteFormContent />
        </Suspense>
      </div>
    </div>
  );
}
