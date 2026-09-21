import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Server, 
  Globe, 
  ShieldCheck, 
  Mail, 
  Database, 
  Zap, 
  ArrowRight,
  Sparkles,
  Layers,
  Phone,
  Check,
  CheckCircle2
} from 'lucide-react';
import DomainSearch from '@/components/DomainSearch';
import FAQSection from '@/components/FAQSection';

export const metadata = {
  title: 'Konya Domain Tescili ve NVMe SSD Bulut Hosting',
  description: 'Konya kurumsal web hosting, yeni nesil NVMe SSD bulut sunucular, alan adı tescili ve antispam kurumsal e-posta altyapısı. %99.9 uptime güvencesi ve 7/24 teknik destek.',
  keywords: 'konya hosting, konya bulut sunucu, konya domain tescil, konya kurumsal mail, konya ssd hosting, btgrup hosting',
  alternates: {
    canonical: 'https://www.btgrup.com/hizmetler/hosting-domain',
  },
  openGraph: {
    title: 'Konya Bulut Sunucu & Domain Tescil | Btgrup',
    description: 'Yüksek hızlı NVMe SSD diskler ve kurumsal antispam e-posta altyapısı.',
    url: 'https://www.btgrup.com/hizmetler/hosting-domain',
    images: ['https://www.btgrup.com/images/services/server-hosting.jpg'],
  },
};

export default function HostingDomainPage() {
  const hostingFeatures = [
    {
      title: 'NVMe SSD Disk Altyapısı',
      desc: 'Geleneksel disklere göre 10 kata kadar daha yüksek okuma/yazma hızı ve anında açılan web sayfaları.',
      icon: Zap
    },
    {
      title: 'Kurumsal E-posta & Anti-Spam',
      desc: 'Şirket uzantılı (adiniz@sirketiniz.com) e-postalar, spam ve kara liste korumalı temiz IP blokları.',
      icon: Mail
    },
    {
      title: 'Ücretsiz SSL & DDoS Koruması',
      desc: 'Siteniz için otomatik yenilenen 256-bit SSL şifreleme ve gelişmiş siber saldırı engelleme kalkanı.',
      icon: ShieldCheck
    },
    {
      title: 'Günlük Otomatik Yedekleme',
      desc: 'Tüm web siteniz ve veritabanlarınız harici sunucularda her gün güvenle yedeklenir.',
      icon: Database
    }
  ];

  const scopeList = [
    'Resmi Domain (Alan Adı) Tescili (.com, .com.tr, .net vb.)',
    'Yüksek Hızlı Kurumsal NVMe SSD Bulut Sunucular',
    'Gelişmiş Antispam Korumalı Kurumsal E-posta Hesapları',
    'Ücretsiz SSL Güvenlik Sertifikası Kurulumu',
    'Otomatik Günlük ve Haftalık Bulut Yedekleme',
    'Eski Sunucudan Ücretsiz ve Kesintisiz Veri Taşıma'
  ];

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            NVMe SSD & Spam Korumalı Kurumsal Mail
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Domain & Cloud Barındırma (Hosting)
          </h1>
          <p className="mt-3 text-lg font-semibold text-cyan-700">
            Optimum Maliyet, Yüksek Hız ve %99.9 Uptime Güvencesi
          </p>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Şirketinizin web sitesi ve kurumsal e-postaları için yüksek hızlı yeni nesil NVMe SSD altyapısı sunuyoruz. Verisign ve Google DNS entegrasyonlu resmi alan adı tescil motorumuzla markanızı güvenceye alın.
          </p>
        </div>

        {/* Alan Adı Sorgulama Modülü */}
        <div className="mb-16">
          <DomainSearch />
        </div>

        {/* Veri Merkezi & Sunucu Görsel Vitrini */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 mb-16 group">
          <div className="relative h-64 sm:h-96 w-full bg-slate-950">
            <Image
              src="/images/services/server-hosting.jpg"
              alt="Btgrup Yüksek Hızlı NVMe Cloud Datacenter"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-lg bg-cyan-600 text-white font-bold text-xs uppercase tracking-wider mb-2">
                  Enterprise Tier-3 Veri Merkezi
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                  Yedekli Hat, Anti-DDoS ve NVMe SSD Disk Performansı
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white text-xs font-semibold shrink-0">
                %99.98 Uptime & Profesyonel İzleme
              </div>
            </div>
          </div>
        </div>

        {/* Kapsam ve Özellikler Kartı (Hizmet Alanları sayfasından aktarılan modül) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-200 inline-flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Altyapı Güvencesi
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Kurumsal Kesintisizlik ve Güçlü Donanım
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Tüm sunucularımız Türkiye lokasyonlu Tier-3 veri merkezlerinde, yedekli fiber internet hatları ve kurumsal donanımlarla barındırılmaktadır. E-postalarınız asla spama düşmez, web siteniz milisaniyeler içinde açılır.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 font-medium">
                <span className="flex items-center gap-1.5 text-cyan-800 bg-cyan-50 px-3 py-1 rounded-lg">
                  ✓ %99.9 SLA Garantisi
                </span>
                <span className="flex items-center gap-1.5 text-cyan-800 bg-cyan-50 px-3 py-1 rounded-lg">
                  ✓ Profesyonel Proaktif İzleme
                </span>
                <span className="flex items-center gap-1.5 text-cyan-800 bg-cyan-50 px-3 py-1 rounded-lg">
                  ✓ Ücretsiz Sıfır Kesinti Taşıma
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>Hosting ve Domain Kapsamı</span>
              </h3>
              <ul className="space-y-3">
                {scopeList.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Ana Avantaj */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {hostingFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Sıkça Sorulan Sorular (FAQ & Schema) */}
        <FAQSection
          themeColor="cyan"
          badge="Merak Edilenler"
          title="Domain ve Hosting Hakkında Sıkça Sorulan Sorular"
          subtitle="Kurumsal bulut hosting, alan adı tescili, e-posta güvenliği ve sunucu altyapımızla ilgili sıkça sorulan sorular."
          items={[
            {
              question: 'Mevcut web sitemi ve maillerimi Btgrup\'a nasıl taşırım?',
              answer: 'Farklı bir barındırma sağlayıcısında bulunan web sitenizi, veritabanlarınızı ve şirket e-postalarınızı hiçbir veri ve kesinti kaybı olmadan Btgrup NVMe bulut sunucularına tamamen ÜCRETSİZ taşıyoruz. Alan adı DNS yönlendirmesinden e-posta hesaplarının kurulmasına kadar tüm teknik süreci uzman ekibimiz yönetir.',
            },
            {
              question: 'Kurumsal e-postalarım spam veya istenmeyen kutusuna düşer mi?',
              answer: 'Hayır. Btgrup kurumsal e-posta altyapısı; temiz IP havuzları, SPF, DKIM ve DMARC kimlik doğrulama kayıtlarıyla tam uyumludur. Gelişmiş antispam ve antivirüs filtrelerimiz sayesinde gönderdiğiniz ve aldığınız kurumsal e-postalar güvenle gelen kutusuna (Inbox) ulaşır.',
            },
            {
              question: 'Alan adı (Domain) tescili kimin adına yapılır?',
              answer: 'Tescil edilen tüm .com, .net, .org veya .com.tr alan adları doğrudan sizin veya firmanızın resmi kimlik ve unvan bilgileriyle tescil edilir. Alan adının tam mülkiyeti, transfer ve DNS yönetim yetkisi tamamen size aittir.',
            },
            {
              question: 'Verilerim ne sıklıkla yedekleniyor ve güvenliği nasıl sağlanıyor?',
              answer: 'Bulut sunucularımızda günlük ve haftalık periyotlarla otomatik imaj ve veritabanı yedeklemesi yapılmaktadır. Olası bir veri kaybı veya kullanıcı hatası durumunda sitenizi hızla geçmiş bir tarihe geri yükleyebiliyoruz. Ayrıca sunucularımız kurumsal güvenlik duvarı ve DDoS saldırı kalkanı ile korunmaktadır.',
            },
            {
              question: 'NVMe SSD hosting kullanmanın web siteme ne gibi faydaları vardır?',
              answer: 'NVMe SSD sürücüler, geleneksel SATA SSD ve mekanik disklere göre 10 kata kadar daha yüksek okuma/yazma hızı ve ultra düşük gecikme süresi sunar. Bu sayede web siteniz anında açılır, ziyaretçi kayıpları engellenir ve Google Sayfa Deneyimi (Core Web Vitals) metriklerinde yüksek puan alarak SEO sıralamanız güçlenir.',
            },
          ]}
        />

        {/* CTA */}
        <div className="bg-gradient-to-r from-cyan-900 via-slate-900 to-brand-950 text-white rounded-3xl p-10 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold">Mevcut Sitenizi Ücretsiz Taşıyoruz!</h3>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Başka bir firmadaki web sitenizi ve kurumsal e-postalarınızı kesinti yaşamadan Btgrup bulut sunucularına ücretsiz taşıyalım.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/teklif-al?kategori=Domain & Hosting"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl shadow-md transition-all hover:scale-105"
            >
              <span>Hosting & Bulut Çözümleri İçin Bilgi Al</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+903322387078"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>0 (332) 238 70 78</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
