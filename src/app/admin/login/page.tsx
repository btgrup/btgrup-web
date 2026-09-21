'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Cpu, Lock, User, Eye, EyeOff, AlertCircle, Loader2, ArrowLeft } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Kullanıcı adı veya şifre hatalı!');
      }

      // Giriş başarılı, doğrudan Genel Bakış (Dashboard) sayfasına yönlendir
      window.location.href = '/admin';
    } catch (err: any) {
      setError(err.message || 'Giriş yapılamadı.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-brand-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Arka plan parlama efektleri */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        
        {/* Üst Logo & Karşılama */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 group mb-4">
            <div className="bg-white/95 px-5 py-2.5 rounded-2xl shadow-xl shadow-brand-500/15 group-hover:scale-105 transition-transform flex items-center justify-center">
              <Image 
                src="/bt-logo.png" 
                alt="Btgrup Bilgi Teknolojileri" 
                width={160} 
                height={36} 
                className="h-8 w-auto object-contain"
                priority
              />
            </div>
          </Link>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Yönetici Girişi</h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Yönetim paneline erişmek için lütfen kimlik bilgilerinizi girin.
          </p>
        </div>

        {/* Giriş Kartı */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-7 sm:p-9 shadow-2xl backdrop-blur-xl">
          
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-950/70 border border-red-800/80 text-red-300 text-xs sm:text-sm flex items-center gap-2.5 animate-in fade-in">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Kullanıcı Adı
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Kullanıcı adınız"
                  className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500 text-sm font-medium transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Şifre
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500 text-sm font-medium transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-brand-600/25 transition-all flex items-center justify-center gap-2 text-sm mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Doğrulanıyor...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Güvenli Giriş Yap</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Ana Sayfaya Dön Linki */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Web Sitesi Ana Sayfasına Dön</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
