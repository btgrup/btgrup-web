'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Search, Trash2, Phone, Mail, MessageSquare, Check, Clock } from 'lucide-react';
import { QuoteRequest } from '@/lib/types';

export default function AdminTekliflerPage() {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('Tümü');
  const [search, setSearch] = useState('');

  const fetchQuotes = async () => {
    try {
      const res = await fetch('/api/quotes');
      const data = await res.json();
      if (Array.isArray(data)) setQuotes(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleStatusChange = async (id: string, status: QuoteRequest['status']) => {
    try {
      const res = await fetch('/api/quotes', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      });
      if (res.ok) {
        setQuotes(prev => prev.map(q => q.id === id ? { ...q, status } : q));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Bu talebi silmek istediğinizden emin misiniz?')) return;
    try {
      const res = await fetch(`/api/quotes?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setQuotes(prev => prev.filter(q => q.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredQuotes = quotes.filter(q => {
    const matchesFilter = filter === 'Tümü' ? true : q.status === filter;
    const s = search.toLowerCase();
    const matchesSearch = 
      q.fullName.toLowerCase().includes(s) ||
      q.phone.includes(s) ||
      q.category.toLowerCase().includes(s) ||
      (q.companyName && q.companyName.toLowerCase().includes(s));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Gelen Teklif & Servis Talepleri
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Web sitesi üzerinden iletilen fiyat teklifleri, proje danışmanlığı ve servis istekleri.
        </p>
      </div>

      {/* Arama ve Filtreler */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Müşteri Adı, Firma, Telefon veya Kategori Ara..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-brand-500"
          />
        </div>

        <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
          {['Tümü', 'Yeni', 'İncelendi', 'Teklif İletildi', 'Onaylandı', 'İptal'].map((st) => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filter === st
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Kart Listesi */}
      {loading ? (
        <div className="py-20 text-center text-slate-400 text-sm">Yükleniyor...</div>
      ) : filteredQuotes.length === 0 ? (
        <div className="bg-white rounded-2xl p-16 text-center text-slate-400 text-sm border border-slate-200">
          Kriterlere uygun müşteri talebi bulunamadı.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredQuotes.map((q) => (
            <div key={q.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-slate-900">{q.fullName}</h3>
                    {q.companyName && (
                      <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md font-medium">
                        {q.companyName}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Talep Tarihi: {q.createdAt}</div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-500">Durum:</span>
                  <select
                    value={q.status}
                    onChange={(e) => handleStatusChange(q.id, e.target.value as QuoteRequest['status'])}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg border focus:outline-none ${
                      q.status === 'Yeni'
                        ? 'bg-red-50 text-red-700 border-red-200'
                        : q.status === 'Onaylandı'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-blue-50 text-brand-700 border-blue-200'
                    }`}
                  >
                    <option value="Yeni">Yeni</option>
                    <option value="İncelendi">İncelendi</option>
                    <option value="Teklif İletildi">Teklif İletildi</option>
                    <option value="Onaylandı">Onaylandı</option>
                    <option value="İptal">İptal</option>
                  </select>
                </div>
              </div>

              {/* Detay & Kategori */}
              <div className="space-y-3">
                <div className="inline-block bg-brand-50 text-brand-700 text-xs font-bold px-2.5 py-1 rounded-md border border-brand-200">
                  {q.category}
                </div>
                <div className="bg-slate-50 p-4 rounded-xl text-slate-800 text-sm whitespace-pre-line leading-relaxed">
                  {q.details}
                </div>
              </div>

              {/* İletişim & Aksiyon Barı */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
                  <a href={`tel:${q.phone}`} className="flex items-center gap-1.5 hover:text-brand-600 bg-slate-100 px-3 py-1.5 rounded-lg">
                    <Phone className="w-3.5 h-3.5 text-brand-600" />
                    <span>{q.phone}</span>
                  </a>
                  {q.email && (
                    <a href={`mailto:${q.email}`} className="flex items-center gap-1.5 hover:text-brand-600 bg-slate-100 px-3 py-1.5 rounded-lg">
                      <Mail className="w-3.5 h-3.5 text-brand-600" />
                      <span>{q.email}</span>
                    </a>
                  )}
                  <a
                    href={`https://wa.me/90${q.phone.replace(/[^0-9]/g, '')}?text=Merhaba%20${encodeURIComponent(q.fullName)},%20Btgrup%20Bilgi%20Teknolojileri%20olarak%20web%20sitemizden%20gönderdiğiniz%20${encodeURIComponent(q.category)}%20talebini%20inceledik.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Mesajı Başlat</span>
                  </a>
                </div>

                <button
                  onClick={() => handleDelete(q.id)}
                  title="Talebi Sil"
                  className="text-slate-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-colors ml-auto"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
