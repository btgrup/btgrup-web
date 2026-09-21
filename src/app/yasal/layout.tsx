'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, FileText, Lock, Cookie, Scale, Phone, Mail, ChevronRight, Building2 } from 'lucide-react';

const legalLinks = [
  {
    href: '/yasal/kvkk',
    label: 'KVKK Aydınlatma Metni',
    icon: ShieldCheck,
    desc: 'Kişisel Verilerin Korunması',
  },
  {
    href: '/yasal/gizlilik',
    label: 'Gizlilik Politikası',
    icon: Lock,
    desc: 'Veri Güvenliği & Gizlilik',
  },
  {
    href: '/yasal/kullanim-sartlari',
    label: 'Kullanım Şartları',
    icon: Scale,
    desc: 'Site Kullanım & Hizmet Koşulları',
  },
  {
    href: '/yasal/cerez-politikasi',
    label: 'Çerez Politikası',
    icon: Cookie,
    desc: 'Çerez Tercihleri ve Yönetimi',
  },
];

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Yol Haritası (Breadcrumb) */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
          <Link href="/" className="hover:text-brand-600 transition-colors">Ana Sayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/yasal" className="hover:text-brand-600 transition-colors">Yasal Bildirimler</Link>
          {pathname !== '/yasal' && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 font-semibold">
                {legalLinks.find((l) => l.href === pathname)?.label || 'Belge'}
              </span>
            </>
          )}
        </nav>

        {/* Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5" />
            Yasal Mevzuat & Kurumsal Şeffaflık
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Yasal Bilgilendirme Merkezi
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            BtGrup Bilgi Teknolojileri LTD. ŞTİ. olarak 6698 sayılı KVKK ve ilgili tüm mevzuatlar çerçevesinde veri güvenliği, hizmet sözleşmeleri ve kullanıcı haklarına tam uyum sağlıyoruz.
          </p>
        </div>

        {/* Gezinme Sekmeleri (Pills) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {legalLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-start gap-3 p-4 rounded-2xl border transition-all ${
                  isActive
                    ? 'bg-white border-brand-500 shadow-md ring-2 ring-brand-500/20'
                    : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 text-slate-700 shadow-xs'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  isActive ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className={`text-xs font-bold truncate ${isActive ? 'text-brand-600' : 'text-slate-900'}`}>
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Ana İçerik */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-sm">
          {children}
        </div>

        {/* Alt İletişim / Yasal Destek Kutusu */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Building2 className="w-5 h-5 text-brand-400" />
              <span>Hukuki ve Yasal Başvurular İçin</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Veri sorumlusu başvurusu veya sözleşme koşulları hakkında sorularınız için bizimle iletişime geçebilirsiniz.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:info@btgrup.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@btgrup.com</span>
            </a>
            <a
              href="tel:+903322387078"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs font-bold transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-400" />
              <span>0 (332) 238 70 78</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
