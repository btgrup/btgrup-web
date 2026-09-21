'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  Settings, 
  ExternalLink, 
  LogOut,
  X
} from 'lucide-react';

interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AdminSidebar({ isOpen = false, onClose }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: 'Genel Bakış (Dashboard)', href: '/admin', icon: LayoutDashboard },
    { name: 'Ziyaretçi İstatistikleri', href: '/admin/istatistikler', icon: BarChart3 },
    { name: 'Gelen Teklif & Talepler', href: '/admin/teklifler', icon: FileText },
    { name: 'Firma & Site Ayarları', href: '/admin/ayarlar', icon: Settings },
  ];

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  };

  // Sayfa değiştiğinde mobil menüyü otomatik kapat
  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [pathname]);

  const sidebarContent = (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Logo & Başlık */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <Link href="/admin" className="flex flex-col gap-2 flex-1" onClick={onClose}>
            <div className="bg-white/95 px-3 py-2 rounded-xl flex items-center justify-center shadow-xs">
              <Image 
                src="/bt-logo.png" 
                alt="Btgrup" 
                width={130} 
                height={28} 
                className="h-7 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] text-slate-400 font-medium">Kurumsal Sistem</span>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider bg-amber-400/10 px-2 py-0.5 rounded">Admin</span>
            </div>
          </Link>

          {/* Mobilde Kapatma Butonu */}
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors ml-2"
              aria-label="Menüyü Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Menü Öğeleri */}
        <nav className="p-4 space-y-1.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-3 py-2">
            Yönetim Menüsü
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Alt Aksiyonlar */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-brand-400" />
            <span>Web Sitesini Gör</span>
          </span>
          <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">Sekme</span>
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-red-400 hover:text-white hover:bg-red-950/40 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Güvenli Çıkış Yap</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. Masaüstü Sabit Sidebar (lg ve üzeri) */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-64 z-30 bg-slate-900 text-slate-300 border-r border-slate-800">
        {sidebarContent}
      </aside>

      {/* 2. Mobil / Tablet Drawer (< lg) */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sliding Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] bg-slate-900 text-slate-300 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
