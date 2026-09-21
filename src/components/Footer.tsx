import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import CookieSettingsButton from '@/components/CookieSettingsButton';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      {/* Ana Footer Bölümleri */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Sütun 1: Şirket Tanıtımı */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 bg-white/95 px-3.5 py-2 rounded-xl shadow-md group">
              <Image 
                src="/bt-logo.png" 
                alt="Btgrup Bilgi Teknolojileri" 
                width={150} 
                height={34} 
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 pr-6">
              Btgrup Bilgi Teknolojileri olarak, kurumsal firmalara ve bireysel kullanıcılara modern web tasarım, yüksek hızlı hosting altyapısı, garantili bilgisayar teknik servis hizmeti ve lisanslı bilişim ürünleri sağlamaktayız.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantili Teknik Servis & %99.9 Uptime Güvencesi</span>
            </div>
          </div>

          {/* Sütun 2: Hizmetlerimiz */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/hizmetler/web-tasarim" className="hover:text-brand-400 transition-colors flex items-center gap-1">
                  <span>Web Tasarım & Kodlama</span>
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/hosting-domain" className="hover:text-brand-400 transition-colors flex items-center gap-1">
                  <span>Domain & Cloud Hosting</span>
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/teknik-servis" className="hover:text-brand-400 transition-colors flex items-center gap-1">
                  <span>Bilgisayar Teknik Servis</span>
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/bilgisayar-yazilim" className="hover:text-brand-400 transition-colors flex items-center gap-1">
                  <span>Bilgisayar & Lisanslı Yazılım</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Sütun 3: Hızlı Bağlantılar */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/kurumsal" className="hover:text-brand-400 transition-colors">Kurumsal (Hakkımızda)</Link>
              </li>
              <li>
                <Link href="/teklif-al" className="hover:text-brand-400 transition-colors">Online Bilgi & Teklif</Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-brand-400 transition-colors">İletişim & Harita</Link>
              </li>
            </ul>
          </div>

          {/* Sütun 4: İletişim Bilgileri */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-1" />
                <span>Büyükkayacık Mah. 3. OSB 9 Nolu Sk. No:34/1 Selçuklu / KONYA</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="tel:+903322387078" className="hover:text-white transition-colors">0 (332) 238 70 78</a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-slate-400">
                <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <a href="tel:+903322387308" className="hover:text-white transition-colors">0 (332) 238 73 08 (Pbx)</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="mailto:info@btgrup.com" className="hover:text-white transition-colors">info@btgrup.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Telif Çubuğu */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} BtGrup Bilgi Teknolojileri LTD. ŞTİ. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/yasal/gizlilik" className="hover:text-slate-300 transition-colors">Gizlilik Politikası</Link>
            <Link href="/yasal/kullanim-sartlari" className="hover:text-slate-300 transition-colors">Kullanım Şartları</Link>
            <Link href="/yasal/kvkk" className="hover:text-slate-300 transition-colors">KVKK Aydınlatma Metni</Link>
            <Link href="/yasal/cerez-politikasi" className="hover:text-slate-300 transition-colors">Çerez Politikası</Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
