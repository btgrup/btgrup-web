'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Giriş ekranında sidebar ve üst başlığı gizle
  if (pathname === '/admin/login') {
    return <div className="min-h-screen bg-slate-950 text-slate-100">{children}</div>;
  }

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      {/* Sol Menü */}
      <AdminSidebar />

      {/* Sağ Ana Alan */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader />
        <main className="flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
