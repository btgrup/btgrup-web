'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  BarChart3,
  Settings, 
  ExternalLink,
  Cpu,
  LogOut
} from 'lucide-react';

export default function AdminSidebar() {
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

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 min-h-screen flex flex-col justify-between border-r border-slate-800">
      <div>
        {/* Logo */}
        <div className="p-5 border-b border-slate-800">
          <Link href="/admin" className="flex flex-col gap-2">
            <div className="bg-white/95 px-3 py-2 rounded-xl flex items-center justify-center shadow-sm">
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
        </div>

        {/* Menü */}
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
    </aside>
  );
}
