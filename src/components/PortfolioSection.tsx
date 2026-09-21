import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  industry: string;
  description: string;
  features: string[];
  image: string;
  results: string;
}

const projects: Project[] = [
  {
    title: 'ER-MAK Ağır Sanayi & Makine',
    category: 'Kurumsal Web & Ürün Kataloğu',
    industry: 'Konya Organize Sanayi Bölgesi',
    description: 'Ağır sanayi ve hidrolik pres üreticisi için çok dilli, teknik çizim ve CAD döküman indirme modüllü kurumsal web platformu.',
    features: ['Çok Dilli (TR / EN / AR / RU)', 'Teknik PDF & Şema İndirme', 'Mobil Uyumlu B2B Katalog'],
    image: '/images/portfolio/sanayi-makine.jpg',
    results: '+%140 Uluslararası İhracat Talebi Artışı',
  },
  {
    title: 'Piltar Tarım & Sulama Sistemleri',
    category: 'E-Katalog & Bayi Ağı Portalı',
    industry: 'Tarım Teknolojileri & İmalat',
    description: 'Modern sulama ve tarımsal otomasyon ürünleri için 1.500+ parça veritabanlı, hızlı arama motoruna sahip kurumsal portal.',
    features: ['Gelişmiş Filtreli Ürün Arama', 'Bayi Sipariş Talep Formu', 'Mobil Uyumlu Hızlı Arayüz'],
    image: '/images/portfolio/tarim-sulama.jpg',
    results: '0.8 sn Sayfa Yüklenme Hızı & %100 Uptime',
  },
  {
    title: 'Yılmaz Global Uluslararası Lojistik',
    category: 'Kurumsal Web & Sevkiyat Takip',
    industry: 'Taşımacılık & Antrepo Depolama',
    description: 'Avrupa ve Ortadoğu sevkiyatları için çok şubeli navlun teklif hesaplama ve rota takip entegrasyonlu modern web sitesi.',
    features: ['Online Navlun Teklif Alma', 'Kurumsal Filo Vitrini', 'WhatsApp & Harita Entegrasyonu'],
    image: '/images/portfolio/lojistik.jpg',
    results: 'Müşteri Dönüşüm Oranında %85 İyileşme',
  },
  {
    title: 'Konya Medikal Sağlık Teknolojileri',
    category: 'Medikal Ürün Tanıtımı & B2B Web',
    industry: 'Sağlık & Tıbbi Donanımlar',
    description: 'Hastane ve klinik donanımları tedarikçisi için W3C standartlarında, steril ve kurumsal tasarıma sahip tanıtım platformu.',
    features: ['CE & ISO Standartları Vitrini', 'Yetkili Distribütörlük Rozetleri', 'Hızlı Teklif & İletişim'],
    image: '/images/portfolio/medikal.jpg',
    results: 'Google Yerel Arama Sıralamasında İlk Sıra',
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="referanslar">
      {/* Arka plan süslemesi */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-brand-400 font-bold text-xs uppercase tracking-widest bg-brand-950 px-3.5 py-1.5 rounded-full border border-brand-800">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            Başarı Hikayelerimiz & Referanslarımız
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight">
            Konya Sanayisine ve Kurumlara Güç Veriyoruz
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            2000 yılından bugüne organize sanayi bölgelerindeki lider fabrikalardan, bölgenin saygın kurumlarına kadar hayata geçirdiğimiz yüksek standartlı projelerden bazıları.
          </p>
        </div>

        {/* Portföy Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-700/80 hover:border-brand-500/60 shadow-xl hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Tarayıcı Mockup Penceresi */}
              <div className="relative overflow-hidden bg-slate-950 border-b border-slate-700/80">
                {/* Browser bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-md border border-slate-800/80">
                    https://{project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.com
                  </div>
                  <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    Aktif
                  </div>
                </div>

                {/* Görsel */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Görsel üzerindeki etiketler */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-white bg-brand-600/90 backdrop-blur-md px-3 py-1 rounded-lg">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-medium text-slate-300 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700">
                      {project.industry}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bilgi Alanı */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Öne Çıkan Özellikler */}
                  <div className="mt-5 space-y-2">
                    {project.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alt Çıktı & Buton */}
                <div className="mt-6 pt-5 border-t border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs font-semibold text-emerald-400">
                    {project.results}
                  </div>
                  <Link
                    href="/teklif-al"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-700/80 hover:bg-brand-600 px-4 py-2 rounded-xl transition-colors self-start sm:self-auto"
                  >
                    <span>Benzer Proje Başlat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Alt Bilgi & CTA */}
        <div className="mt-16 text-center bg-slate-800/40 p-8 rounded-3xl border border-slate-800">
          <h4 className="text-lg font-bold text-white">
            Firmanız İçin de Standartlara Uygun, Prestijli Bir Web Sitesi Yapalım
          </h4>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            İster kurumsal tanıtım sitesi, ister kapsamlı katalog veya özel otomasyon platformu; 25 yıllık tecrübemizle yanınızdayız.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/teklif-al"
              className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm shadow-lg shadow-brand-500/25 transition-all"
            >
              Hemen Teklif İste
            </Link>
            <Link
              href="/hizmetler/web-tasarim"
              className="px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-sm transition-all"
            >
              Web Tasarım Standartlarımız
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
