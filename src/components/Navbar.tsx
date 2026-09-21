'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Server, 
  Cpu, 
  Globe, 
  Wrench, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Üst Bilgi Çubuğu (Top Bar) */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <a href="tel:+903322387078" className="flex items-center gap-1.5 hover:text-brand-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>0 (332) 238 70 78</span>
            </a>
            <a href="mailto:info@btgrup.com" className="flex items-center gap-1.5 hover:text-brand-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-brand-400" />
              <span>info@btgrup.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Ana Navigasyon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group py-1">
            <div className="relative flex items-center">
              <Image 
                src="/bt-logo.png" 
                alt="Btgrup Bilgi Teknolojileri" 
                width={170} 
                height={38} 
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
              />
            </div>
            <span className="hidden sm:inline-block bg-brand-50 text-brand-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-brand-200 uppercase tracking-wider self-center">
              Bilgi Teknolojileri
            </span>
          </Link>

          {/* Masaüstü Menü */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link 
              href="/" 
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Ana Sayfa
            </Link>

            <Link 
              href="/kurumsal" 
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Kurumsal
            </Link>

            {/* Hizmetler Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <span>Hizmetlerimiz</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link 
                    href="/hizmetler/web-tasarim" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-50/70 transition-colors group"
                  >
                    <div className="p-2 bg-blue-100 text-brand-600 rounded-lg group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Web Tasarım & Kodlama</h4>
                      <p className="text-xs text-slate-500">Kurumsal site, e-ticaret ve özel yazılımlar</p>
                    </div>
                  </Link>

                  <Link 
                    href="/hizmetler/hosting-domain" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-50/70 transition-colors group"
                  >
                    <div className="p-2 bg-cyan-100 text-cyan-700 rounded-lg group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Domain & Cloud Hosting</h4>
                      <p className="text-xs text-slate-500">Alan adı tescil, SSD sunucu, kurumsal mail</p>
                    </div>
                  </Link>

                  <Link 
                    href="/hizmetler/teknik-servis" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-50/70 transition-colors group"
                  >
                    <div className="p-2 bg-amber-100 text-amber-700 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Bilgisayar Teknik Servis</h4>
                      <p className="text-xs text-slate-500">Donanım onarımı, bakım anlaşması, network</p>
                    </div>
                  </Link>

                  <Link 
                    href="/hizmetler/bilgisayar-yazilim" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-50/70 transition-colors group"
                  >
                    <div className="p-2 bg-purple-100 text-purple-700 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Bilgisayar & Lisanslı Yazılım</h4>
                      <p className="text-xs text-slate-500">Kurumsal donanım ve orijinal yazılım çözümleri</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/iletisim" 
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              İletişim
            </Link>
          </nav>

          {/* Aksiyon Butonları */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link 
              href="/teklif-al" 
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 shadow-md shadow-brand-600/25 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Online Teklif Al
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Menüyü aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü İçeriği */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <div className="space-y-1">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-100 rounded-lg"
            >
              Ana Sayfa
            </Link>

            <Link 
              href="/kurumsal" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-100 rounded-lg"
            >
              Kurumsal
            </Link>
            
            <div className="pt-2 pb-1 px-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Hizmetlerimiz</div>
            <Link 
              href="/hizmetler/web-tasarim" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg"
            >
              <Globe className="w-4 h-4 text-brand-600" />
              <span>Web Tasarım & Kodlama</span>
            </Link>
            <Link 
              href="/hizmetler/hosting-domain" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg"
            >
              <Server className="w-4 h-4 text-cyan-600" />
              <span>Domain & Cloud Hosting</span>
            </Link>
            <Link 
              href="/hizmetler/teknik-servis" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg"
            >
              <Wrench className="w-4 h-4 text-amber-600" />
              <span>Bilgisayar Teknik Servis</span>
            </Link>
            <Link 
              href="/hizmetler/bilgisayar-yazilim" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg"
            >
              <Cpu className="w-4 h-4 text-purple-600" />
              <span>Bilgisayar & Lisanslı Yazılım</span>
            </Link>

            <div className="pt-2 pb-1 px-3 text-xs font-bold text-slate-400 uppercase tracking-wider">İletişim & Lokasyon</div>
            <Link 
              href="/iletisim" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              İletişim & Lokasyon
            </Link>
          </div>

          <div className="pt-2">
            <Link 
              href="/teklif-al" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-3 bg-brand-600 text-white font-bold rounded-xl shadow-md"
            >
              Hemen Teklif Al
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
