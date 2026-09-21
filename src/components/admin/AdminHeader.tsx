'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { User, LogOut } from 'lucide-react';

export default function AdminHeader() {
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
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30 shadow-xs">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs font-bold text-slate-700">Yönetim Paneli Aktif</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Kullanıcı Profili */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
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
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors ml-2"
          title="Oturumu Kapat"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Çıkış Yap</span>
        </button>
      </div>
    </header>
  );
}
