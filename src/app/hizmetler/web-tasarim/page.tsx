import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FAQSection from '@/components/FAQSection';
import { 
  Globe, 
  Code2, 
  Rocket, 
  Search, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers,
  Phone,
  Check
} from 'lucide-react';

export const metadata = {
  title: 'Konya Web Tasarım ve Özel Yazılım Ajansı',
  description: 'Konya kurumsal web tasarım, Google SEO uyumlu mobil siteler, e-ticaret sistemleri, B2B bayi yazılımları ve kolay yönetilebilir Türkçe CMS çözümleri. 25 yıllık tecrübe.',
  keywords: 'konya web tasarım, konya web tasarım firmaları, konya web yazılım, konya e-ticaret, konya kurumsal web sitesi, konya seo, btgrup web tasarım',
  alternates: {
    canonical: 'https://www.btgrup.com/hizmetler/web-tasarim',
  },
  openGraph: {
    title: 'Konya Kurumsal Web Tasarım & Özel Yazılım | Btgrup',
    description: 'Google PageSpeed 90+ performans standartlarında kurumsal web siteleri ve e-ticaret sistemleri.',
    url: 'https://www.btgrup.com/hizmetler/web-tasarim',
    images: ['https://www.btgrup.com/images/services/web-design.jpg'],
  },
};

export default function WebTasarimPage() {
  const features = [
    {
      title: 'Mobil & Tablet %100 Uyumlu',
      desc: 'Tüm ekran boyutlarına kusursuz uyum sağlayan responsive modern arayüzler.',
      icon: Smartphone
    },
    {
      title: 'Google & SEO Optimizasyonu',
      desc: 'Arama motorlarında üst sıralara çıkmanız için temiz kod yapısı ve meta optimizasyonu.',
      icon: Search
    },
    {
      title: 'Kolay Yönetim Paneli (CMS)',
      desc: 'Kodlama bilgisine gerek duymadan resim, yazı, ürün ve blog ekleyebileceğiniz Türkçe yönetim paneli.',
      icon: Code2
    },
    {
      title: 'Yüksek Hız & Güvenlik',
      desc: 'Google PageSpeed standartlarında 90+ performans skoru ve SSL güvenlik sertifikası.',
      icon: Rocket
    }
  ];

  const scopeList = [
    'Kurumsal Web Tasarım ve Firma Tanıtım Siteleri',
    'E-Ticaret Sistemleri ve Güvenli Sanal Pos Entegrasyonu',
    'Özel B2B Bayi ve Müşteri Sipariş Panelleri',
    'Türkçe, Kolay Yönetilebilir İçerik Yönetim Sistemi (CMS)',
    'Mobil & Tablet Uyumlu (Responsive) Tasarım',
    'Google PageSpeed 90+ Performans Optimizasyonu'
  ];

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Bölümü */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-brand-600" />
            Google SEO & Mobil %100 Uyumlu
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Web Tasarım & Özel Yazılım Geliştirme
          </h1>
          <p className="mt-3 text-lg font-semibold text-brand-600">
            Standartlara Uygun, Hızlı ve Kazandıran Web Siteleri
          </p>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            İşletmenizi dijital dünyada öne çıkaran, Google ve W3C uluslararası standartlarına tam uyumlu, modern, yüksek hızlı ve kolay yönetilebilir kurumsal web siteleri ve özel B2B yazılımlar geliştiriyoruz.
          </p>
        </div>

        {/* Görsel Vitrini / Mockup */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 mb-16 group">
          <div className="relative h-64 sm:h-96 w-full bg-slate-950">
            <Image
              src="/images/services/web-design.jpg"
              alt="Konya Web Tasarım ve Özel Yazılım"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-lg bg-brand-500 text-white font-bold text-xs uppercase tracking-wider mb-2">
                  Yeni Nesil Web Mimarisi
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                  Mobil Uyumlu, Google Uyumlu ve Dönüşüm Odaklı
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white text-xs font-semibold shrink-0">
                W3C Standartları & PageSpeed 90+
              </div>
            </div>
          </div>
        </div>

        {/* Kapsam ve Özellikler Kartı (Hizmet Alanları sayfasından aktarılan modül) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200 inline-flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Hizmet Kapsamı
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                İşletmenize Özel Anahtar Teslim Web Çözümleri
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Her sektörün dinamikleri farklıdır. Firmanızın kurumsal kimliğini, sunduğu hizmetleri veya ürün gamını en doğru hedef kitleye ulaştıracak dijital vitrinleri en güncel web teknolojileri ile inşa ediyoruz.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 font-medium">
                <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-lg">
                  ✓ %100 Özgün Kodlama
                </span>
                <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-lg">
                  ✓ SEO Dostu Altyapı
                </span>
                <span className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-lg">
                  ✓ Kesintisiz Teknik Destek
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Kapsam ve Avantajlar</span>
              </h3>
              <ul className="space-y-3">
                {scopeList.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Temel Avantaj */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Süreç / Nasıl Çalışıyoruz */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">Web Projesi Geliştirme Sürecimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-3xl font-black text-brand-600">01</span>
              <h4 className="font-bold text-slate-900 mt-2 mb-1">Analiz & Planlama</h4>
              <p className="text-xs text-slate-500">Sektörünüzü, rakiplerinizi ve hedeflerinizi dinleyip yol haritası çıkarıyoruz.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-3xl font-black text-brand-600">02</span>
              <h4 className="font-bold text-slate-900 mt-2 mb-1">Tasarım & UI/UX</h4>
              <p className="text-xs text-slate-500">Modern ve mobil uyumlu önizleme tasarımını onayınıza sunuyoruz.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-3xl font-black text-brand-600">03</span>
              <h4 className="font-bold text-slate-900 mt-2 mb-1">Kodlama & Panel</h4>
              <p className="text-xs text-slate-500">Güçlü altyapı ve kolay admin paneliyle sitenizi fonksiyonel hale getiriyoruz.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-3xl font-black text-brand-600">04</span>
              <h4 className="font-bold text-slate-900 mt-2 mb-1">Yayın & Destek</h4>
              <p className="text-xs text-slate-500">Testleri tamamlayıp domain & hostinge yüklüyor, eğitimini veriyoruz.</p>
            </div>
          </div>
        </div>

        {/* Sıkça Sorulan Sorular (FAQ & Schema) */}
        <FAQSection
          themeColor="blue"
          badge="Merak Edilenler"
          title="Web Tasarım Hakkında Sıkça Sorulan Sorular"
          subtitle="Kurumsal web tasarım, SEO optimizasyonu ve yönetim süreçlerimiz hakkında sık sorulan soruların yanıtları."
          items={[
            {
              question: 'Web tasarım sürecimiz ne kadar sürer ve nasıl işler?',
              answer: 'Projenin kapsamına ve özel yazılım gereksinimlerine bağlı olarak kurumsal web siteleri ortalama 7 ila 15 iş günü içerisinde tamamlanmaktadır. Süreç; sektör analizi, arayüz tasarımı, mobil uyumluluk kodlaması, içerik yerleşimi ve test aşamalarından geçerek anahtar teslim olarak canlıya alınır.',
            },
            {
              question: 'Tasarladığınız web siteleri mobil ve tablet cihazlarla tam uyumlu mu?',
              answer: 'Evet, hazırladığımız tüm web siteleri %100 responsive (duyarlı) mimaride kodlanır. Akıllı telefonlar, tabletler, dizüstü ve geniş masaüstü ekranlarda kusursuz görüntülenir, hızlı açılır ve dokunmatik ekranlara uyumlu gezinme sunar.',
            },
            {
              question: 'Web sitem Google aramalarında ne zaman üst sıralarda çıkar (SEO)?',
              answer: 'Kodladığımız web siteleri W3C standartlarında, temiz HTML5/React kod yapısıyla ve Google SEO yönergelerine tam uyumlu olarak teslim edilir. Site haritası (sitemap) ve arama motoru kayıtları yapıldıktan sonra siteniz hızla indekslenir ve hedef anahtar kelimelerde organik sıralama yükselişi başlar.',
            },
            {
              question: 'Web sitemi sonradan kendim güncelleyebilir miyim?',
              answer: 'Kesinlikle. Web sitenizi kolayca yönetebilmeniz için kullanımı pratik, güvenli ve Türkçe bir yönetim paneli entegre ediyoruz. Sayfa metinlerinizi, ürünlerinizi, duyurularınızı ve iletişim bilgilerinizi hiçbir teknik kodlama bilgisine ihtiyaç duymadan güncelleyebilirsiniz.',
            },
            {
              question: 'Web tasarım sonrasında teknik destek sağlıyor musunuz?',
              answer: 'Evet. Web siteniz yayına girdikten sonra yıllık sunucu, SSL sertifikası, düzenli yedekleme ve teknik destek hizmetlerimizle yanınızda oluyoruz. Olası soru ve güncelleme taleplerinizde doğrudan uzman teknik ekibimize ulaşabilirsiniz.',
            },
          ]}
        />

        {/* CTA */}
        <div className="bg-brand-600 text-white rounded-3xl p-10 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold">Projenizi Birlikte Hayata Geçirelim</h3>
          <p className="text-brand-100 max-w-xl mx-auto text-sm sm:text-base">
            Web siteniz için ücretsiz analiz ve kurumsal proje teklifi almak için formu doldurun veya uzman ekibimizle doğrudan iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/teklif-al?kategori=Web Tasarım"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-700 font-bold rounded-xl hover:bg-slate-100 shadow-md transition-all hover:scale-105"
            >
              <span>Web Sitesi Teklifi Al</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+903322387078"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-brand-200" />
              <span>0 (332) 238 70 78</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
