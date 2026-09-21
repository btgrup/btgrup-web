import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Wrench, 
  Laptop, 
  ShieldCheck, 
  Cpu, 
  HardDrive, 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  Phone,
  Sparkles,
  Layers,
  Check
} from 'lucide-react';
import FAQSection from '@/components/FAQSection';

export const metadata = {
  title: 'Konya Bilgisayar Teknik Servis ve Bakım | Btgrup',
  description: 'Konya garantili bilgisayar tamiri, laptop ve notebook onarımı, anakart ve BGA çip seviyesinde müdahale, kurumsal periyodik IT bakım anlaşmaları.',
  keywords: 'konya teknik servis, konya bilgisayar tamiri, konya laptop tamiri, konya bilgisayar servisi, konya bga çip tamiri, konya kurumsal bakım anlaşması',
  alternates: {
    canonical: 'https://btgrup.com/hizmetler/teknik-servis',
  },
};

export default function TeknikServisPage() {
  const serviceItems = [
    {
      title: 'Laptop & Notebook Onarımı',
      desc: 'Kırık ekran değişimi, klavye, menteşe onarımı, sıvı teması temizliği ve şarj soketi tamiri.',
      icon: Laptop
    },
    {
      title: 'Anakart & BGA Çip Onarımı',
      desc: 'Açılmayan cihazlarda mikroskop ve profesyonel BGA istasyonuyla anakart devre ve chipset onarımı.',
      icon: Cpu
    },
    {
      title: 'Veri Kurtarma & SSD Yükseltme',
      desc: 'Bozuk veya silinmiş hard disklerden veri kurtarma, eski sistemleri NVMe SSD ile 10 kat hızlandırma.',
      icon: HardDrive
    },
    {
      title: 'Ağ & Kurumsal Network Kurulumu',
      desc: 'Ofis içi kablolama, router, switch, access point konfigürasyonu ve güvenlik duvarı (Firewall) kurulumu.',
      icon: Network
    }
  ];

  const scopeList = [
    'Anakart, Ekran Kartı & BGA Çip Seviyesinde Onarım',
    'Termal Bakım, Fan Temizliği & Soğutma Optimizasyonu',
    'Kurumsal Yıllık ve 6 Aylık IT Bakım Anlaşmaları',
    'Ekran (Panel), Klavye, Batarya & Menteşe Değişimi',
    'NVMe SSD ve RAM Yükseltme ile Hızlandırma',
    'Veri Kurtarma & Güvenli Disk Yedekleme Çözümleri'
  ];

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-amber-600" />
            Hızlı Teşhis & Garantili Onarım
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Bilgisayar Teknik Servis & Bakım
          </h1>
          <p className="mt-3 text-lg font-semibold text-amber-700">
            Garantili Donanım Onarımı ve Kurumsal Bakım Anlaşmaları
          </p>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Masaüstü bilgisayarlar, kurumsal notebooklar ve sunucular için uzman teknik ekibimizle hızlı ve garantili arıza onarımı gerçekleştiriyoruz. Kurumsal firmalar için iş kaybını sıfıra indiren periyodik bakım anlaşmaları sunuyoruz.
          </p>
        </div>

        {/* Görsel Vitrini */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 mb-16 group">
          <div className="relative h-64 sm:h-96 w-full bg-slate-950">
            <Image
              src="/images/services/technical-service.jpg"
              alt="Btgrup Profesyonel Bilgisayar Teknik Servis ve Donanım Onarımı"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-lg bg-amber-500 text-white font-bold text-xs uppercase tracking-wider mb-2">
                  Laboratuvar Ortamında Onarım
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                  BGA Çip & Anakart Seviyesinde Garantili Müdahale
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white text-xs font-semibold shrink-0">
                Orijinal Yedek Parça & Test Raporu
              </div>
            </div>
          </div>
        </div>

        {/* Kapsam ve Özellikler Kartı */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 inline-flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Teknik Servis Yaklaşımımız
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Yerinde Servis & Hızlı Arıza Onarımı
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Deneyimli teknik ekibimiz ve test cihazlarımızla arızaları doğru tespit ediyor; yerinde müdahale veya atölye onarımıyla işletmenizin iş akışını kesintiye uğratmadan garantili çözümler sunuyoruz.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 font-medium">
                <span className="flex items-center gap-1.5 text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg">
                  ✓ Hızlı Yerinde Müdahale
                </span>
                <span className="flex items-center gap-1.5 text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg">
                  ✓ Orijinal Yedek Parça
                </span>
                <span className="flex items-center gap-1.5 text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg">
                  ✓ Garantili İşçilik & Parça
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Teknik Servis Kapsamı</span>
              </h3>
              <ul className="space-y-3">
                {scopeList.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Servis Alanı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Kurumsal Bakım Anlaşması Kutusu */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                Şirketlere Özel Çözüm
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Yıllık Kurumsal IT Bakım & Destek Anlaşması
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Şirketinizdeki tüm bilgisayar, yazıcı, sunucu ve ağ sistemlerinin periyodik bakımlarını üstleniyoruz. Arıza anında öncelikli yerinde servis ve profesyonel uzaktan destek ile işlerinizin aksamasını önlüyoruz.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Aylık Düzenli Periyodik Bakım</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Sınırsız Uzak Masaüstü Desteği</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Öncelikli Yerinde Servis Hizmeti</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Veri Yedekleme & Güvenlik Denetimi</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-4 text-center lg:text-right">
              <Link
                href="/teklif-al?kategori=Teknik Servis"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-2xl shadow-lg transition-all"
              >
                <span>Bakım Anlaşması Teklifi Al</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Sıkça Sorulan Sorular (FAQ & Schema) */}
        <FAQSection
          themeColor="amber"
          badge="Merak Edilenler"
          title="Teknik Servis Hakkında Sıkça Sorulan Sorular"
          subtitle="Bilgisayar onarımı, parça değişimi, veri kurtarma ve kurumsal bakım anlaşmaları hakkında sıkça sorulan sorular."
          items={[
            {
              question: 'Arıza tespit ücreti alıyor musunuz?',
              answer: 'Servisimize getirdiğiniz masaüstü ve dizüstü bilgisayarlarınız için arıza tespitini ÜCRETSİZ olarak yapıyoruz. Cihazınız detaylı test cihazlarımızla incelenir, arızanın kaynağı ve onarım maliyeti belirlenerek tarafınıza onay için bilgi verilir. Onaylamadığınız takdirde hiçbir arıza tespit ücreti talep edilmez.',
            },
            {
              question: 'Yapılan tamir ve yedek parça işlemlerinde garanti veriyor musunuz?',
              answer: 'Evet. Btgrup bünyesinde yapılan anakart tamiri, BGA çip onarımı ve parça değişimlerinde (ekran, klavye, batarya, şarj soketi vb.) kullanılan sıfır orijinal yedek parçalar 1 yıla kadar, işçilik ve servis onarımlarımız ise 3 ila 6 ay servis garantimiz altındadır.',
            },
            {
              question: 'Kurumsal IT bakım anlaşması neleri kapsar ve avantajları nelerdir?',
              answer: 'Kurumsal IT bakım anlaşması; firmanızdaki tüm bilgisayarların, sunucuların, yedekleme ünitelerinin ve ağ donanımlarının periyodik bakımlarını, sınırsız uzaktan masaüstü desteğini ve öncelikli yerinde acil müdahaleyi kapsar. Bilgi işlem personeli istihdam etme maliyetinizi %70\'e kadar düşürürken veri kaybı ve iş durması risklerini sıfıra indirir.',
            },
            {
              question: 'Açılmayan veya sıvı dökülen laptop tamir edilebilir mi?',
              answer: 'Evet. Sıvı teması olan veya hiç tetik almayan cihazlar laboratuvarımızda ultrasonik temizleme banyolarından geçirilir ve mikroskop altında anakart devre yolları incelenir. BGA rework istasyonlarımız sayesinde entegre ve çip seviyesinde nokta atışı onarım gerçekleştirerek anakartınızı yüksek maliyetlerle değiştirmeden kurtarabiliyoruz.',
            },
            {
              question: 'Bozuk veya arızalanmış hard diskten verilerim kurtarılabilir mi?',
              answer: 'Mekanik hasar görmüş, bad sector oluşmuş veya format atılmış disklerinizden özel donanım ve lisanslı veri kurtarma yazılımlarımızla %95\'e varan başarı oranıyla verilerinizi kurtarıyoruz. Verilerinizin gizliliği ve güvenliği KVKK standartlarına uygun olarak korunmaktadır.',
            },
          ]}
        />

        {/* Kurumsal Destek & İletişim Çağrısı */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 sm:p-12 text-center space-y-6">
          <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto">
            <Wrench className="w-7 h-7" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold">Cihazınızda Bir Problem mi Var?</h3>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Arızalı bilgisayar veya sunucunuz için uzman teknisyenlerimizden ücretsiz ön teşhis ve servis desteği alabilirsiniz. Bize telefonla ulaşabilir veya online talep oluşturabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/teklif-al?kategori=Teknik Servis"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-2xl shadow-md transition-all"
            >
              Teknik Servis Talebi Gönder
            </Link>
            <a
              href="tel:+903322387078"
              className="flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-2xl border border-slate-700 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>0 (332) 238 70 78</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
