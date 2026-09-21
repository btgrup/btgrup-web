'use client';

import React, { useState, useEffect } from 'react';
import { Settings, Save, CheckCircle2, AlertCircle, Building2, Phone, Mail, MapPin, Lock, Key, ShieldCheck, BarChart3, Globe } from 'lucide-react';
import { CompanySettings } from '@/lib/types';
import { showSuccessToast, showErrorToast } from '@/lib/alerts';

export default function AdminAyarlarPage() {
  const [settings, setSettings] = useState<CompanySettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Şifre Değiştirme State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newUsername, setNewUsername] = useState('admin');
  const [newPassword, setNewPassword] = useState('');
  const [authSaving, setAuthSaving] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSettings() {
      try {
        const res = await fetch('/api/settings');
        const data = await res.json();
        setSettings(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadSettings();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;

    setSaving(true);
    setSuccess(false);
    setError(null);

    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });
      if (res.ok) {
        setSuccess(true);
        showSuccessToast('Firma ayarları başarıyla kaydedildi.');
        setTimeout(() => setSuccess(false), 4000);
      } else {
        throw new Error('Ayarlar kaydedilemedi');
      }
    } catch (err: any) {
      setError(err.message || 'Hata oluştu');
      showErrorToast(err.message || 'Ayarlar kaydedilirken hata oluştu');
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthSaving(true);
    setAuthSuccess(false);
    setAuthError(null);

    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newUsername, newPassword })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Şifre güncellenemedi');
      }

      setAuthSuccess(true);
      showSuccessToast('Yönetici şifresi başarıyla güncellendi.');
      setCurrentPassword('');
      setNewPassword('');
      setTimeout(() => setAuthSuccess(false), 4000);
    } catch (err: any) {
      setAuthError(err.message || 'Hata oluştu');
      showErrorToast(err.message || 'Şifre güncellenirken hata oluştu');
    } finally {
      setAuthSaving(false);
    }
  };

  if (loading || !settings) {
    return <div className="py-20 text-center text-slate-400 text-sm">Ayarlar yükleniyor...</div>;
  }

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Firma & Yönetim Ayarları
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Web sitesinde görüntülenen iletişim bilgilerini ve yönetici giriş şifrenizi yönetin.
        </p>
      </div>

      {success && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
          <span>Firma ayarları başarıyla kaydedildi ve tüm site genelinde güncellendi!</span>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* 1. Kurumsal Bilgiler Formu */}
      <form onSubmit={handleSave} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        
        {/* Temel Bilgiler */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Building2 className="w-4 h-4 text-brand-600" />
            <span>Kurumsal Kimlik</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Firma Unvanı</label>
              <input
                type="text"
                value={settings.companyName}
                onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Kurumsal Slogan</label>
              <input
                type="text"
                value={settings.slogan}
                onChange={(e) => setSettings({ ...settings, slogan: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Web Sitesi Başlığı (SEO Title)</label>
            <input
              type="text"
              value={settings.title}
              onChange={(e) => setSettings({ ...settings, title: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
            />
          </div>
        </div>

        {/* İletişim Kanalları */}
        <div className="space-y-4 pt-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>Telefon & WhatsApp Hatları</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Görünen Telefon</label>
              <input
                type="text"
                value={settings.phoneDisplay}
                onChange={(e) => setSettings({ ...settings, phoneDisplay: e.target.value })}
                placeholder="0 (332) 238 70 78"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">2. Telefon (Pbx)</label>
              <input
                type="text"
                value={settings.secondaryPhone || ''}
                onChange={(e) => setSettings({ ...settings, secondaryPhone: e.target.value })}
                placeholder="0 (332) 238 73 08"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Faks</label>
              <input
                type="text"
                value={settings.fax || ''}
                onChange={(e) => setSettings({ ...settings, fax: e.target.value })}
                placeholder="0 (332) 238 70 79"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp Numarası</label>
              <input
                type="text"
                value={settings.whatsapp}
                onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                placeholder="903322387078"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Kurumsal E-posta Adresi</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                placeholder="info@btgrup.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Kurumsal Domain (Alan Adı)</label>
              <input
                type="text"
                value={settings.domain || 'btgrup.com'}
                onChange={(e) => setSettings({ ...settings, domain: e.target.value })}
                placeholder="btgrup.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>
          </div>
        </div>

        {/* Adres & Çalışma Saatleri */}
        <div className="space-y-4 pt-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>Adres & Çalışma Saatleri</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Ofis & Servis Adresi</label>
              <input
                type="text"
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Şehir</label>
              <input
                type="text"
                value={settings.city}
                onChange={(e) => setSettings({ ...settings, city: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mesai Saatleri</label>
              <input
                type="text"
                value={settings.workingHours}
                onChange={(e) => setSettings({ ...settings, workingHours: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Teknik Destek Notu</label>
              <input
                type="text"
                value={settings.supportHours}
                onChange={(e) => setSettings({ ...settings, supportHours: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>
          </div>
        </div>

        {/* Web Analitik & Google Analytics 4 */}
        <div className="space-y-4 pt-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            <BarChart3 className="w-4 h-4 text-brand-600" />
            <span>Web Analitik & Google Analytics 4 (GA4)</span>
          </h3>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Google Analytics 4 Ölçüm Kimliği (Measurement ID)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={settings.googleAnalyticsId || ''}
                  onChange={(e) => setSettings({ ...settings, googleAnalyticsId: e.target.value })}
                  placeholder="G-XXXXXXXXXX"
                  className="w-full max-w-md px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-mono focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                />
                {settings.googleAnalyticsId && settings.googleAnalyticsId.startsWith('G-') && (
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1.5 rounded-lg font-bold flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Aktif
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Google Analytics konsolundan aldığınız <strong>G-</strong> ile başlayan ölçüm kimliğini buraya girdiğinizde, sitedeki tüm sayfa ziyaretleri ve etkinlikler otomatik olarak Google Analytics 4 hesabınıza aktarılır. Boş bırakırsanız yalnızca dahili istatistik motoru çalışır.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 text-sm"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Kaydediliyor...' : 'Firma Ayarlarını Kaydet'}</span>
          </button>
        </div>

      </form>

      {/* 2. Yönetici Güvenlik & Şifre Değiştirme */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
          <Lock className="w-4 h-4 text-brand-600" />
          <span>Yönetici Şifre & Kullanıcı Adı Değiştirme</span>
        </h3>

        {authSuccess && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
            <span>Giriş bilgileri başarıyla güncellendi!</span>
          </div>
        )}

        {authError && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{authError}</span>
          </div>
        )}

        <form onSubmit={handleChangePassword} className="space-y-4 max-w-xl">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mevcut Şifre *</label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Mevcut şifrenizi girin"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Yeni Kullanıcı Adı</label>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="admin"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Yeni Şifre *</label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Yeni şifrenizi belirleyin"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={authSaving}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs shadow-md transition-all flex items-center gap-2"
            >
              <Key className="w-4 h-4" />
              <span>{authSaving ? 'Güncelleniyor...' : 'Şifreyi Güncelle'}</span>
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
