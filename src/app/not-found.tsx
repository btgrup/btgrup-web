import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 font-black text-2xl flex items-center justify-center mx-auto border border-brand-100">
          404
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900">Sayfa Bulunamadı</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Aradığınız sayfa taşınmış, silinmiş veya adı değiştirilmiş olabilir.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm transition-all shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Ana Sayfaya Dön</span>
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>İletişim</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
