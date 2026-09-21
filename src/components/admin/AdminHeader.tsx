'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { User, LogOut, Menu } from 'lucide-react';

interface AdminHeaderProps {
  onMenuClick?: () => void;
}

export default function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-20 shadow-xs">
      <div className="flex items-center gap-3">
        {/* Mobil Menü Butonu */}
        <button
          type="button"
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
          aria-label="Menüyü Aç"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-700">Yönetim Paneli Aktif</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Kullanıcı Profili */}
        <div className="flex items-center gap-2.5 pl-2 sm:pl-4 border-l border-slate-200">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs">
            <User className="w-4 h-4" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold text-slate-900 leading-tight">Yönetici</div>
            <div className="text-[10px] text-slate-500">Btgrup IT Admin</div>
          </div>
        </div>

        {/* Çıkış Yap Butonu */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors ml-1 sm:ml-2"
          title="Oturumu Kapat"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Çıkış Yap</span>
        </button>
      </div>
    </header>
  );
}
