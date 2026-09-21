'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  Phone, 
  Mail, 
  Building2, 
  Settings,
  Globe,
  Server,
  Wrench,
  Cpu,
  BarChart3,
  Users,
  Eye,
  TrendingUp
} from 'lucide-react';
import { QuoteRequest, CompanySettings } from '@/lib/types';
import { AnalyticsSummary } from '@/lib/analyticsTypes';
import { getPageTitleByPath } from '@/lib/analyticsUtils';
import { formatQuoteDate } from '@/lib/dateUtils';

export default function AdminDashboardPage() {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [settings, setSettings] = useState<CompanySettings | null>(null);
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [resQ, resS, resA] = await Promise.all([
          fetch('/api/quotes', { cache: 'no-store' }),
          fetch('/api/settings', { cache: 'no-store' }),
          fetch('/api/analytics?period=7d', { cache: 'no-store' }),
        ]);
        const dataQ = await resQ.json();
        const dataS = await resS.json();
        const dataA = await resA.json();
        if (Array.isArray(dataQ)) setQuotes(dataQ);
        if (dataS) setSettings(dataS);
        if (dataA) setAnalytics(dataA);
      } catch (err) {
        console.error("Veri yüklenemedi", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const pendingQuotes = quotes.filter(q => q.status === 'Yeni');
  const completedQuotes = quotes.filter(q => q.status === 'Onaylandı' || q.status === 'Teklif İletildi');

  const services = [
    { name: 'Web Tasarım & Kodlama', icon: Globe, count: quotes.filter(q => q.category === 'Web Tasarım & Yazılım').length },
    { name: 'Domain & Cloud Hosting', icon: Server, count: quotes.filter(q => q.category === 'Domain & Hosting').length },
    { name: 'Bilgisayar Teknik Servis', icon: Wrench, count: quotes.filter(q => q.category === 'Teknik Servis & Ağ Çözümleri').length },
    { name: 'Bilgisayar & Lisanslı Yazılım', icon: Cpu, count: quotes.filter(q => q.category.includes('Bilgisayar') || q.category.includes('Yazılım')).length },
  ];

  return (
    <div className="space-y-8">
      {/* Üst Karşılama */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Genel Bakış (Dashboard)
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Btgrup Bilgi Teknolojileri yönetim konsolu, gelen talepler ve sistem istatistikleri.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/istatistikler"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-bold rounded-xl border border-slate-200 shadow-xs transition-all"
          >
            <BarChart3 className="w-4 h-4 text-brand-600" />
            <span>Ziyaretçi Analitiği</span>
          </Link>
          <Link
            href="/admin/teklifler"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold rounded-xl shadow-xs transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Tüm Talepleri İncele</span>
          </Link>
        </div>
      </div>

      {/* 4 Özet İstatistik Kartı */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Toplam Gelen Talep</span>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">{quotes.length}</div>
          <div className="text-xs text-slate-500 font-semibold mt-1">
            Web sitesinden iletilen formlar
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Yeni / Bekleyen</span>
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">{pendingQuotes.length}</div>
          <div className="text-xs text-red-600 font-semibold mt-1">
            Geri dönüş bekleyen müşteri
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bugünkü Ziyaretçi</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">
            {analytics ? analytics.todayVisitors : '...'}
          </div>
          <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" />
            <span>{analytics ? `${analytics.todayViews} sayfa gösterimi` : 'Yükleniyor'}</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Haftalık Ziyaretçi</span>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">
            {analytics ? analytics.last7DaysVisitors : '...'}
          </div>
          <div className="text-xs text-purple-600 font-semibold mt-1 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Son 7 gün tekil kullanıcı</span>
          </div>
        </div>
      </div>

      {/* Haftalık Ziyaretçi ve Trafik Özeti Paneli */}
      {analytics && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-brand-600" />
                <span>Haftalık Ziyaretçi Akışı & Popüler Sayfalar</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Son 7 günde web sitesini ziyaret eden kullanıcılar ve en çok incelenen hizmetler
              </p>
            </div>
            <Link
              href="/admin/istatistikler"
              className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 self-start sm:self-auto bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-lg transition-colors"
            >
              <span>Detaylı İstatistik Raporu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Sol: 7 Günlük Mini Bar Grafik */}
            <div className="lg:col-span-7 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-1">
                <span>Günlük Gösterim (Mavi) ve Ziyaretçi (Yeşil)</span>
                <span>Son 7 Gün</span>
              </div>
              <div className="h-32 flex items-end gap-2 sm:gap-3 bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                {analytics.chartData.slice(-7).map((item, idx) => {
                  const maxVal = Math.max(...analytics.chartData.slice(-7).map(d => Math.max(d.views, d.visitors)), 1);
                  const viewH = Math.max(10, Math.round((item.views / maxVal) * 100));
                  const visH = Math.max(8, Math.round((item.visitors / maxVal) * 100));
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                      <div className="absolute -top-9 z-10 hidden group-hover:flex bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow whitespace-nowrap">
                        {item.views} gör. / {item.visitors} ziy.
                      </div>
                      <div className="w-full flex items-end justify-center gap-1 max-w-[28px] h-[80%]">
                        <div style={{ height: `${viewH}%` }} className="w-1/2 bg-brand-500 rounded-t-sm" />
                        <div style={{ height: `${visH}%` }} className="w-1/2 bg-emerald-400 rounded-t-sm" />
                      </div>
                      <span className="text-[10px] font-medium text-slate-500 mt-1 truncate">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sağ: En Popüler 3 Sayfa */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                En Çok Ziyaret Edilen Sayfalar
              </span>
              <div className="space-y-2">
                {analytics.topPages.length === 0 ? (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center text-xs text-slate-400">
                    Henüz ziyaret verisi kaydedilmedi.
                  </div>
                ) : (
                  analytics.topPages.slice(0, 3).map((page, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div className="min-w-0 pr-2">
                        <div className="font-bold text-slate-800 truncate">{getPageTitleByPath(page.name)}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{page.name}</div>
                      </div>
                      <span className="shrink-0 font-bold bg-white px-2 py-1 rounded-lg border border-slate-200 text-slate-700">
                        {page.count} gösterim
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* İki Kolon: Son Gelen Talepler & Hizmet İstatistikleri */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sol Kolon: Son Gelen Müşteri Talepleri */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Son Gelen Hizmet & Teklif Talepleri</h3>
              <p className="text-xs text-slate-500 mt-0.5">Ziyaretçilerin web formundan gönderdiği son mesajlar</p>
            </div>
            <Link href="/admin/teklifler" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
              <span>Tümünü Gör</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {loading ? (
            <div className="py-12 text-center text-slate-400 text-sm">Yükleniyor...</div>
          ) : quotes.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">Henüz gelen talep bulunmuyor.</div>
          ) : (
            <div className="divide-y divide-slate-100">
              {quotes.slice(0, 6).map((q) => (
                <div key={q.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">{q.fullName}</span>
                      {q.companyName && (
                        <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                          {q.companyName}
                        </span>
                      )}
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        q.status === 'Yeni' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {q.status}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-brand-600">{q.category}</div>
                    <p className="text-xs text-slate-500 line-clamp-1">{q.details}</p>
                    <div className="text-[10px] text-slate-400">{formatQuoteDate(q.createdAt, q.id)}</div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={`https://wa.me/90${q.phone.replace(/[^0-9]/g, '')}?text=Merhaba%20${encodeURIComponent(q.fullName)},%20Btgrup%20Bilgi%20Teknolojileri%20olarak%20talebini%20aldık.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp Mesajı"
                      className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors border border-emerald-200"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${q.phone}`}
                      title="Telefonla Ara"
                      className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sağ Kolon: Hizmet Dalları & Hızlı İletişim Bilgisi */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-base">Hizmet Talebi Dağılımı</h3>
            <div className="space-y-3">
              {services.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div key={svc.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white text-brand-600 flex items-center justify-center shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800">{svc.name}</span>
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700">
                      {svc.count} talep
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {settings && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-base">Firma İletişim Hattı</h3>
                <Link href="/admin/ayarlar" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
                  <Settings className="w-3.5 h-3.5" />
                  <span>Düzenle</span>
                </Link>
              </div>

              <div className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span>{settings.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span>{settings.email}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                  <span>{settings.address}, {settings.city}</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
