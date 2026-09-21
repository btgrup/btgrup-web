'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  Users, 
  Eye, 
  TrendingUp, 
  Laptop, 
  Smartphone, 
  Tablet, 
  Compass, 
  Globe, 
  Clock, 
  RefreshCw, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Trash2,
  Activity
} from 'lucide-react';
import { AnalyticsSummary } from '@/lib/analyticsTypes';
import { getPageTitleByPath } from '@/lib/analyticsUtils';
import { CompanySettings } from '@/lib/types';
import { confirmDelete, showSuccessToast, showErrorToast } from '@/lib/alerts';

export default function AdminIstatistiklerPage() {
  const [period, setPeriod] = useState<'7d' | '30d' | 'all'>('7d');
  const [data, setData] = useState<AnalyticsSummary | null>(null);
  const [settings, setSettings] = useState<CompanySettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [testing, setTesting] = useState(false);

  const fetchData = async (selectedPeriod: '7d' | '30d' | 'all', isManual = false) => {
    if (isManual) setRefreshing(true);
    try {
      let resData = await fetch(`/api/traffic?period=${selectedPeriod}`, { cache: 'no-store' }).catch(() => null);
      if (!resData || !resData.ok) {
        resData = await fetch(`/api/analytics?period=${selectedPeriod}`, { cache: 'no-store' });
      }
      const resSettings = await fetch('/api/settings', { cache: 'no-store' });
      const json = await resData.json();
      const settingsJson = await resSettings.json();
      setData(json);
      setSettings(settingsJson);
    } catch (err) {
      console.error('İstatistik verisi alınamadı:', err);
    } finally {
      setLoading(false);
      if (isManual) setRefreshing(false);
    }
  };

  const handleTestVisit = async () => {
    setTesting(true);
    try {
      const res = await fetch('/api/traffic/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path: '/hizmetler/web-tasarim',
          referrer: 'Admin Panel Testi',
          visitorId: 'test_admin_' + Date.now().toString(36)
        })
      });
      if (res.ok) {
        await fetchData(period, true);
        showSuccessToast('Test ziyareti başarıyla kaydedildi! Sayfa ve grafik güncellendi.');
      } else {
        showErrorToast('Test isteği başarısız oldu.');
      }
    } catch {
      showErrorToast('Sunucu bağlantı hatası oluştu.');
    } finally {
      setTesting(false);
    }
  };

  const handleReset = async () => {
    const isConfirmed = await confirmDelete({
      title: 'İstatistikleri Sıfırlamak İstiyor Musunuz?',
      text: 'Tüm sayfa gösterimleri, tekil ziyaretçi sayıları ve canlı akış verileri kalıcı olarak sıfırlanacaktır.',
      confirmButtonText: 'Evet, Sıfırla'
    });

    if (!isConfirmed) return;

    setResetting(true);
    try {
      let res = await fetch('/api/traffic', { method: 'DELETE' }).catch(() => null);
      if (!res || !res.ok) {
        res = await fetch('/api/analytics', { method: 'DELETE' });
      }
      if (res && res.ok) {
        await fetchData(period, true);
        showSuccessToast('Ziyaretçi istatistikleri başarıyla sıfırlandı.');
      } else {
        showErrorToast('İstatistikler sıfırlanırken bir hata oluştu.');
      }
    } catch {
      showErrorToast('Sunucu bağlantı hatası oluştu.');
    } finally {
      setResetting(false);
    }
  };

  useEffect(() => {
    fetchData(period);
  }, [period]);

  const maxChartValue = data?.chartData?.length
    ? Math.max(...data.chartData.map(d => Math.max(d.views, d.visitors)), 10)
    : 50;

  return (
    <div className="space-y-8">
      {/* Üst Başlık & Aksiyonlar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 px-2.5 py-0.5 rounded-md">
              Ziyaretçi Analitiği
            </span>
            <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              KVKK & Gizlilik Uyumlu
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ziyaretçi & Trafik İstatistikleri
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Btgrup web sitesinin tekil ziyaretçi sayıları, sayfa görüntülemeleri, kaynaklar ve cihaz dağılımı.
          </p>
        </div>

        {/* Filtre ve Yenile */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="bg-slate-200/80 p-1 rounded-xl flex items-center text-xs font-bold text-slate-600">
            <button
              onClick={() => setPeriod('7d')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                period === '7d' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
              }`}
            >
              Son 7 Gün
            </button>
            <button
              onClick={() => setPeriod('30d')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                period === '30d' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
              }`}
            >
              Son 30 Gün
            </button>
            <button
              onClick={() => setPeriod('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                period === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
              }`}
            >
              Tümü
            </button>
          </div>

          <button
            onClick={() => fetchData(period, true)}
            disabled={refreshing}
            title="Verileri Yenile"
            className="p-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl transition-colors shadow-xs"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin text-brand-600' : ''}`} />
          </button>

          <button
            onClick={handleTestVisit}
            disabled={testing || refreshing}
            title="Sistemin çalıştığını doğrulamak için anlık test ziyareti kaydeder"
            className="flex items-center gap-1.5 px-3 py-2 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-700 rounded-xl transition-colors shadow-xs text-xs font-bold disabled:opacity-50"
          >
            <Activity className={`w-3.5 h-3.5 ${testing ? 'animate-spin text-emerald-600' : ''}`} />
            <span>{testing ? 'Test Ediliyor...' : 'Canlı Test Et'}</span>
          </button>

          <button
            onClick={handleReset}
            disabled={resetting || refreshing}
            title="Tüm İstatistikleri Sıfırla"
            className="flex items-center gap-1.5 px-3 py-2 bg-white border border-red-200 hover:bg-red-50 text-red-600 rounded-xl transition-colors shadow-xs text-xs font-bold disabled:opacity-50"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{resetting ? 'Sıfırlanıyor...' : 'Sıfırla'}</span>
          </button>
        </div>
      </div>

      {loading || !data ? (
        <div className="py-24 text-center text-slate-400 text-sm flex flex-col items-center justify-center gap-3">
          <RefreshCw className="w-6 h-6 animate-spin text-brand-600" />
          <span>İstatistikler yükleniyor...</span>
        </div>
      ) : (
        <>
          {/* 4 Özet Kart */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Toplam Sayfa Görüntüleme */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Sayfa Görüntüleme ({period === '7d' ? '7 Gün' : period === '30d' ? '30 Gün' : 'Tümü'})
                </span>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-black text-slate-900">{data.totalViews.toLocaleString('tr-TR')}</div>
              <div className="text-xs text-slate-500 font-semibold mt-1 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-brand-600" />
                <span>Toplam açılan sayfa sayısı</span>
              </div>
            </div>

            {/* 2. Tekil Ziyaretçi */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Tekil Ziyaretçi ({period === '7d' ? '7 Gün' : period === '30d' ? '30 Gün' : 'Tümü'})
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-black text-slate-900">{data.totalVisitors.toLocaleString('tr-TR')}</div>
              <div className="text-xs text-emerald-600 font-semibold mt-1">
                Farklı cihaz ve tarayıcılar
              </div>
            </div>

            {/* 3. Bugünün Trafiği */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bugünün Trafiği</span>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900">{data.todayVisitors}</span>
                <span className="text-xs font-bold text-slate-500">ziyaretçi</span>
                <span className="text-slate-300 font-light">|</span>
                <span className="text-lg font-bold text-purple-600">{data.todayViews}</span>
                <span className="text-xs font-medium text-slate-400">gösterim</span>
              </div>
              <div className="text-xs text-purple-600 font-semibold mt-1">
                Dün: {data.yesterdayVisitors} ziyaretçi / {data.yesterdayViews} gösterim
              </div>
            </div>

            {/* 4. Ortalama Günlük Ziyaret */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ortalama Ziyaret</span>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-black text-slate-900">
                {Math.round(data.totalVisitors / (data.chartData.length || 1))}
              </div>
              <div className="text-xs text-amber-600 font-semibold mt-1">
                Günlük ortalama ziyaretçi
              </div>
            </div>
          </div>

          {/* Günlük Ziyaret & Gösterim Grafiği */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Günlük Ziyaret & Sayfa Gösterim Trendi</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Seçilen dönem boyunca gün bazında gerçekleşen tekil ziyaretçi ve sayfa görüntüleme akışı
                </p>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 text-xs font-bold">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-brand-600"></span>
                  <span className="text-slate-700">Sayfa Görüntüleme</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-emerald-500"></span>
                  <span className="text-slate-700">Tekil Ziyaretçi</span>
                </div>
              </div>
            </div>

            {/* Bar Grafik Alanı */}
            <div className="h-64 flex items-end gap-2 sm:gap-4 pt-6 border-b border-slate-100 px-2">
              {data.chartData.map((item, idx) => {
                const viewHeight = Math.max(8, Math.round((item.views / maxChartValue) * 100));
                const visitorHeight = Math.max(6, Math.round((item.visitors / maxChartValue) * 100));

                return (
                  <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                    {/* Tooltip */}
                    <div className="absolute -top-12 z-20 hidden group-hover:flex flex-col items-center pointer-events-none transition-all">
                      <div className="bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                        <div className="text-slate-300 text-[10px]">{item.date}</div>
                        <div>{item.views} Görüntüleme • {item.visitors} Ziyaretçi</div>
                      </div>
                      <div className="w-2 h-2 bg-slate-900 rotate-45 -mt-1"></div>
                    </div>

                    {/* Çift Bar */}
                    <div className="w-full flex items-end justify-center gap-1 max-w-[40px] h-[80%]">
                      {/* Views Bar */}
                      <div
                        style={{ height: `${viewHeight}%` }}
                        className="w-1/2 bg-brand-500 hover:bg-brand-600 rounded-t-md transition-all cursor-pointer"
                      />
                      {/* Visitors Bar */}
                      <div
                        style={{ height: `${visitorHeight}%` }}
                        className="w-1/2 bg-emerald-400 hover:bg-emerald-500 rounded-t-md transition-all cursor-pointer"
                      />
                    </div>

                    {/* Tarih Etiketi */}
                    <span className="text-[10px] font-semibold text-slate-500 mt-2 truncate w-full text-center">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* İki Kolon: En Çok Ziyaret Edilen Sayfalar & Trafik Kaynakları */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* En Popüler Sayfalar */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div>
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <Globe className="w-4 h-4 text-brand-600" />
                    <span>En Çok Ziyaret Edilen Sayfalar</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Ziyaretçilerin en çok incelediği sayfalar ve hizmetler</p>
                </div>
                <span className="text-xs font-bold text-slate-500">Görüntüleme</span>
              </div>

              <div className="space-y-3.5">
                {data.topPages.length === 0 ? (
                  <div className="py-8 text-center text-xs text-slate-400">Henüz sayfa ziyareti kaydedilmedi.</div>
                ) : (
                  data.topPages.map((item, idx) => {
                    const title = getPageTitleByPath(item.name);
                    return (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2 min-w-0 pr-2">
                            <span className="w-5 text-slate-400 font-bold">{idx + 1}.</span>
                            <span className="font-bold text-slate-800 truncate">{title}</span>
                            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">({item.name})</span>
                          </div>
                          <div className="flex items-center gap-2 shrink-0 font-bold">
                            <span className="text-slate-900">{item.count}</span>
                            <span className="text-[10px] text-slate-400 font-medium">%{item.percentage}</span>
                          </div>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-brand-500 rounded-full transition-all duration-500"
                            style={{ width: `${Math.max(5, item.percentage)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Trafik Kaynakları (Referrers) */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div>
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <Compass className="w-4 h-4 text-purple-600" />
                    <span>Trafik Kaynakları (Referrers)</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Ziyaretçilerin siteye nereden ulaştığı</p>
                </div>
                <span className="text-xs font-bold text-slate-500">Oran</span>
              </div>

              <div className="space-y-3.5">
                {data.topReferrers.length === 0 ? (
                  <div className="py-8 text-center text-xs text-slate-400">Henüz trafik kaynağı kaydedilmedi.</div>
                ) : (
                  data.topReferrers.map((ref, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800 truncate">{ref.name}</span>
                        <div className="flex items-center gap-2 shrink-0 font-bold">
                          <span className="text-slate-900">{ref.count}</span>
                          <span className="text-[10px] text-purple-600 font-bold bg-purple-50 px-1.5 py-0.5 rounded">
                            %{ref.percentage}
                          </span>
                        </div>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-500 rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(5, ref.percentage)}%` }}
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Cihaz ve Tarayıcı Dağılımı */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Cihaz Dağılımı */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 pb-2 border-b border-slate-100">
                <Laptop className="w-4 h-4 text-emerald-600" />
                <span>Cihaz Dağılımı</span>
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {data.devices.length === 0 ? (
                  <div className="py-8 text-center text-xs text-slate-400 col-span-3">Henüz cihaz verisi bulunmuyor.</div>
                ) : (
                  data.devices.map((d, idx) => {
                    const Icon = d.name === 'Mobil' ? Smartphone : d.name === 'Tablet' ? Tablet : Laptop;
                    return (
                      <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center space-y-1">
                        <div className="w-8 h-8 mx-auto rounded-lg bg-white text-slate-700 flex items-center justify-center shadow-2xs">
                          <Icon className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="text-xs font-bold text-slate-800">{d.name}</div>
                        <div className="text-lg font-black text-slate-900">%{d.percentage}</div>
                        <div className="text-[11px] text-slate-400 font-medium">{d.count} hit</div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Tarayıcı Dağılımı */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 pb-2 border-b border-slate-100">
                <Globe className="w-4 h-4 text-amber-600" />
                <span>Tarayıcı Dağılımı</span>
              </h3>

              <div className="space-y-2.5">
                {data.browsers.length === 0 ? (
                  <div className="py-8 text-center text-xs text-slate-400">Henüz tarayıcı verisi bulunmuyor.</div>
                ) : (
                  data.browsers.map((b, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-800">{b.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 font-semibold">{b.count} ziyaret</span>
                        <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                          %{b.percentage}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Son Canlı Ziyaret Akışı */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Son Canlı Ziyaret Akışı</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Sitede gerçekleşen son gezinmeler ve kaynaklar</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 font-semibold">Son {data.recentVisits.length} ziyaret</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider">
                    <th className="py-2.5 px-3">Zaman</th>
                    <th className="py-2.5 px-3">Ziyaret Edilen Sayfa</th>
                    <th className="py-2.5 px-3">Kaynak (Referrer)</th>
                    <th className="py-2.5 px-3">Cihaz / Sistem</th>
                    <th className="py-2.5 px-3">Tarayıcı</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {data.recentVisits.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-10 text-center text-slate-400 text-xs">
                        Henüz canlı ziyaret akışı bulunmuyor. Yeni ziyaretçiler geldikçe burada anlık olarak listelenecektir.
                      </td>
                    </tr>
                  ) : (
                    data.recentVisits.slice(0, 15).map((visit) => (
                      <tr key={visit.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-3 whitespace-nowrap text-slate-500 font-medium">
                          {visit.timeAgo}
                        </td>
                        <td className="py-3 px-3 font-bold text-slate-900">
                          {getPageTitleByPath(visit.path)}
                          <span className="block text-[10px] font-normal text-slate-400">{visit.path}</span>
                        </td>
                        <td className="py-3 px-3 text-slate-600 font-medium">
                          {visit.referrer}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-[11px]">
                            {visit.device} ({visit.os})
                          </span>
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap text-slate-600 font-medium">
                          {visit.browser}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Google Analytics 4 Durum & Entegrasyon Kartı */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded">
                  Hibrit Analitik Modeli
                </span>
                {settings?.googleAnalyticsId ? (
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    GA4 Aktif ({settings.googleAnalyticsId})
                  </span>
                ) : (
                  <span className="text-xs font-bold text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded">
                    GA4 Henüz Eklenmedi
                  </span>
                )}
              </div>
              <h4 className="text-lg font-bold text-white">Google Analytics 4 (GA4) Entegrasyonu</h4>
              <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
                {settings?.googleAnalyticsId
                  ? 'Siteniz hem dahili istatistik motoruyla admin panelinizde kayıt tutuyor hem de verileri Google Analytics 4 hesabınıza iletiyor.'
                  : 'İsteğe bağlı olarak Google Analytics 4 ölçüm kodunuzu ekleyerek Google arama konsolu ve reklam dönüşümlerini detaylıca izleyebilirsiniz.'}
              </p>
            </div>

            <Link
              href="/admin/ayarlar"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold rounded-xl transition-all shrink-0 shadow-sm"
            >
              <span>{settings?.googleAnalyticsId ? 'GA4 Ayarını Yönet' : 'GA4 Kimliği Ekle'}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
