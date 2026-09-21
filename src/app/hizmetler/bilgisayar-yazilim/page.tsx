import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PartnerLogos from '@/components/PartnerLogos';
import { 
  Laptop, 
  Cpu, 
  ShieldCheck, 
  Key, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Headphones, 
  Sparkles,
  Layers,
  Phone,
  Check
} from 'lucide-react';
import FAQSection from '@/components/FAQSection';

export const metadata = {
  title: 'Konya Bilgisayar Satışı ve Lisanslı Yazılım | Btgrup',
  description: 'Konya sıfır ve garantili kurumsal ofis bilgisayarları, iş istasyonları, orijinal Windows 11 Pro, Microsoft 365 ve ESET siber güvenlik lisans tedariği.',
  keywords: 'konya bilgisayar satışı, konya kurumsal bilgisayar, konya laptop satışı, konya orijinal windows lisansı, konya yazılım lisans, konya workstation',
  alternates: {
    canonical: 'https://btgrup.com/hizmetler/bilgisayar-yazilim',
  },
};

export default function BilgisayarYazilimPage() {
  const scopeList = [
    'Kurumsal Ofis ve Muhasebe Bilgisayarları Tedariği',
    'Yüksek Performanslı İş İstasyonu (Workstation) Kurulumu',
    'Lenovo, Asus, Dell ve HP Kurumsal Laptop Satışı',
    'Orijinal Microsoft Windows 11 Pro Lisansları',
    'Microsoft 365 Kurumsal İş Paketi Kurulum & Yönetimi',
    'ESET & Kurumsal Uç Nokta Siber Güvenlik Çözümleri'
  ];

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            %100 Orijinal & Faturalı Yasal Ürünler
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Bilgisayar & Orijinal Lisanslı Yazılım
          </h1>
          <p className="mt-3 text-lg font-semibold text-purple-700">
            Kurumsal Ofis Donanımı ve Yasal Güvenceli Yazılımlar
          </p>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            İşletmenizin ihtiyaçlarına göre optimize edilmiş sıfır garantili masaüstü bilgisayarlar, iş istasyonları ve kurumsal laptop tedariği sağlıyoruz. %100 orijinal, faturalı işletim sistemi ve antivirüs lisanslarıyla yasal güvencenizi koruyoruz.
          </p>
        </div>

        {/* Donanım Görsel Vitrini */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 mb-16 group">
          <div className="relative h-64 sm:h-96 w-full bg-slate-950">
            <Image
              src="/images/services/hardware-sales.jpg"
              alt="Btgrup Kurumsal Bilgisayar, Laptop ve Orijinal Lisans Tedariği"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-lg bg-purple-600 text-white font-bold text-xs uppercase tracking-wider mb-2">
                  Yetkili Satıcı Güvencesi
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                  Lenovo, Dell, Asus ve Microsoft Kurumsal Çözümleri
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white text-xs font-semibold shrink-0">
                Resmi Garanti & Kurumsal Fatura
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resmi Çözüm Ortakları ve Marka Logoları Bandı */}
      <div className="mb-16">
        <PartnerLogos />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kapsam ve Özellikler Kartı (Hizmet Alanları sayfasından aktarılan modül) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200 inline-flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Tedarik ve Lisanslama
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Faturalı, Yasal Güvenceli ve Resmi Garantili
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Şirketlerin bilgi güvenliği ve yasal uyumluluk gereksinimlerine tam uygun lisanslama modelleri sunuyoruz. Kutulu, dijital ESD ve OEM ürünlerde resmi distribütör garantisiyle çalışıyoruz.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 font-medium">
                <span className="flex items-center gap-1.5 text-purple-800 bg-purple-50 px-3 py-1 rounded-lg">
                  ✓ Kurumsal Faturalı Teslimat
                </span>
                <span className="flex items-center gap-1.5 text-purple-800 bg-purple-50 px-3 py-1 rounded-lg">
                  ✓ Resmi Distribütör Garantisi
                </span>
                <span className="flex items-center gap-1.5 text-purple-800 bg-purple-50 px-3 py-1 rounded-lg">
                  ✓ Anahtar Teslim Kurulum
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
                <span>Tedarik & Lisans Kapsamı</span>
              </h3>
              <ul className="space-y-3">
                {scopeList.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Ana Tedarik Grubu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Masaüstü & Laptop Sistemleri</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Kurumsal ofis kullanımı, çizim & mühendislik veya yazılım geliştirme için özel konfigüre edilmiş bilgisayarlar.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Lenovo, Asus, Dell, HP Orijinal Modeller</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>İhtiyaca Özel Toplama (Custom OEM) PC</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>2 Yıl Resmi Distribütör Garantili</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <Key className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Orijinal Yazılım Lisansları</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Microsoft ve popüler yazılım geliştiricilerinin kurumsal faturalı ve süresiz lisans anahtarları.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Windows 11 Pro / Enterprise Lisansları</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Microsoft 365 Kurumsal Bulut Paketleri</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>SQL Server & Windows Server Lisansları</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Siber Güvenlik & Antivirüs</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Şirket ağınızı virüslere, fidye yazılımlarına (ransomware) ve yetkisiz sızıntılara karşı koruyun.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>ESET PROTECT Cloud & Endpoint</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Kaspersky & Bitdefender Kurumsal Çözümler</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Merkezi Güvenlik Kurulumu & Yönetimi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Neden Btgrup Donanım Tedariği? */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">Kurumsal Tedarik Avantajlarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Doğru Donanım Seçimi</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Şirketinizin ihtiyaç duymadığı gereksiz pahalı donanımlar yerine işinize en uygun, bütçe dostu konfigürasyonları hazırlıyoruz.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">%100 Lisanslı & Faturalı</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Denetimlerde ve resmi süreçlerde firmanızı güvenceye alan orijinal, faturalı ve distribütör çıkışlı lisanslar sağlıyoruz.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <Headphones className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Kurulum & Satış Sonrası Destek</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Cihazları sadece kutusuyla teslim etmiyoruz; işletim sistemi, ofis programları ve şirket ağına entegre ederek çalışır halde sunuyoruz.
              </p>
            </div>
          </div>
        </div>

        {/* Sıkça Sorulan Sorular (FAQ & Schema) */}
        <FAQSection
          themeColor="purple"
          badge="Merak Edilenler"
          title="Bilgisayar ve Lisans Tedariği Hakkında Sıkça Sorulan Sorular"
          subtitle="Kurumsal donanım seçimi, orijinal Microsoft lisansları ve anahtar teslim kurulum süreçlerimiz hakkında merak edilenler."
          items={[
            {
              question: 'Satın aldığımız bilgisayar ve donanımların garanti kapsamı nasıldır?',
              answer: 'Tedarik ettiğimiz tüm masaüstü bilgisayarlar, iş istasyonları, monitörler ve dizüstü bilgisayarlar %100 sıfır, kapalı kutu ve Türkiye resmi distribütör garantilidir. Minimum 2 yıl boyunca üretici ve distribütör güvencesi altındadır. Olası arıza durumunda yetkili servis süreçlerini Btgrup olarak sizin adınıza takip ediyoruz.',
            },
            {
              question: 'Satılan Windows ve Office lisansları yasal ve faturalı mıdır?',
              answer: 'Evet. İşletmenizin resmi denetimlerde (BSA vb.) ve vergi süreçlerinde hiçbir cezai yaptırımla karşılaşmaması için yalnızca %100 orijinal, adınıza/firmanıza faturalı Microsoft lisansları tedarik ediyoruz. Lisans anahtarlarınız doğrudan resmi sistemlere kaydedilir.',
            },
            {
              question: 'Şirketimiz için özel donanım ve workstation (iş istasyonu) toplayabilir misiniz?',
              answer: 'Kesinlikle. Mimarlık, mühendislik, grafik tasarım veya 3D modelleme gibi ağır iş yükleri gerektiren yazılımlarınız (AutoCAD, 3ds Max, SolidWorks, Revit, Adobe Premiere vb.) için tam uyumlu, ECC bellekli ve profesyonel GPU\'lu iş istasyonlarını ihtiyacınıza özel projelendirip kuruyoruz.',
            },
            {
              question: 'Bilgisayarlar ofisimize çalışmaya hazır (anahtar teslim) mı geliyor?',
              answer: 'Evet. Cihazları sadece koli olarak bırakmıyoruz; şirketinizin talep ettiği işletim sistemini, ofis yazılımlarını, antivirüs korumasını, ortak ağ yazıcılarını ve kurumsal ağ bağlantılarını eksiksiz kurarak personellerinizin hemen çalışabileceği şekilde teslim ediyoruz.',
            },
            {
              question: 'Ticari muhasebe yazılımları ve siber güvenlik antivirüs tedariği yapıyor musunuz?',
              answer: 'Evet. Başta ESET ve kurumsal uç nokta (endpoint) siber güvenlik çözümleri olmak üzere, şirketinizin ihtiyaç duyduğu ticari muhasebe, ERP ve lisanslı yardımcı yazılımların tedariğini, lisans yenilemelerini ve teknik kurulumlarını sağlıyoruz.',
            },
          ]}
        />

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold">Ofisinizin Donanım İhtiyaçları İçin Teklif Alın</h3>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Yeni bilgisayar alımı, ofis sistemleri yenileme veya toplu lisanslama talepleriniz için bize ulaşın, ihtiyacınıza özel projelendirme yapalım.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/teklif-al?kategori=Bilgisayar Satışı"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-md transition-all hover:scale-105"
            >
              <span>Kurumsal Teklif & Bilgi İste</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+903322387078"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all"
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
