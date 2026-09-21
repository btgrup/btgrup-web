import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, Server, Wrench, Laptop, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Web Tasarım & Kodlama',
      desc: 'Standartlara uygun, kolay gezilebilen, mobil uyumlu ve arama motorlarında pazar kazandıran modern web siteleri ve özel yazılımlar.',
      icon: Globe,
      color: 'blue',
      link: '/hizmetler/web-tasarim',
      image: '/images/services/web-design.jpg',
      badge: 'W3C Standartları',
      items: [
        'W3C & SEO Standartlarında Tasarım',
        'Kurumsal & Kolay Yönetilebilir Web',
        'E-Ticaret & Sanal Pos Altyapısı',
        'Özel B2B & İşletme Panelleri'
      ]
    },
    {
      title: 'Domain & Cloud Hosting',
      desc: 'Optimum maliyet ve yüksek uptime garantisiyle kurumsal firmalar için yüksek hızlı NVMe SSD sunucular ve spam korumalı e-posta.',
      icon: Server,
      color: 'cyan',
      link: '/hizmetler/hosting-domain',
      image: '/images/services/server-hosting.jpg',
      badge: '%99.98 Uptime',
      items: [
        'Resmi Domain Tescili (.com, .tr)',
        'Yüksek Performanslı Bulut Hosting',
        'Spam Korumalı Kurumsal E-posta',
        'Otomatik Günlük & Haftalık Yedekleme'
      ]
    },
    {
      title: 'Bilgisayar Teknik Servis',
      desc: 'Donanım ve sistem arızalarını uzman ekibimizle hızla tespit eder; kurumsal bakım anlaşmaları ve garantili onarımla iş kaybını önleriz.',
      icon: Wrench,
      color: 'amber',
      link: '/hizmetler/teknik-servis',
      image: '/images/services/technical-service.jpg',
      badge: 'Garantili Onarım',
      items: [
        'Anakart, Ekran Kartı & BGA Onarımı',
        'Termal Bakım & Sistem Optimizasyonu',
        'Kurumsal Yıllık Bakım Anlaşması',
        'Orijinal Parça & Garantili İşçilik'
      ]
    },
    {
      title: 'Bilgisayar & Lisans Satışı',
      desc: 'İşletmenizin kurumsal değişimine uygun iş istasyonları, OEM donanımlar ve %100 orijinal lisanslı yazılım çözümleri.',
      icon: Laptop,
      color: 'purple',
      link: '/hizmetler/bilgisayar-yazilim',
      image: '/images/services/hardware-sales.jpg',
      badge: 'Resmi Distribütör',
      items: [
        'Kurumsal Ofis & İş İstasyonu PC',
        'Lenovo, Asus, Dell Laptop Tedariği',
        'Orijinal Windows 11 & Office 365',
        'ESET & Kurumsal Antivirüs Lisansları'
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="hizmetler">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold text-xs uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            Kapsamlı Bilişim Çözümleri
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            İhtiyacınıza Uygun Kurumsal Hizmetler
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Btgrup Bilgi Teknolojileri olarak yazılımdan donanıma, hostingden teknik desteğe kadar uçtan uca tüm teknolojinizi tek çatı altında güvenle yönetiyoruz.
          </p>
        </div>

        {/* 4 Hizmet Kartı Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div 
                key={svc.title}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-brand-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Kart Üst Görseli */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                    
                    {/* Görsel Üzerindeki Rozet */}
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-brand-300 border border-brand-500/30">
                        {svc.badge}
                      </span>
                    </div>
                  </div>

                  {/* Beyaz Kart Üzerinde Yükselen İkon */}
                  <div className="relative px-6 -mt-7 z-20">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <div className="p-6 pt-3">
                    <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-brand-600 transition-colors">
                      {svc.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {svc.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      {svc.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={svc.link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 group-hover:text-brand-700 transition-colors"
                  >
                    <span>Detaylı Bilgi & İncele</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
