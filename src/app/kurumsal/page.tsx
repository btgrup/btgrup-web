import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Users, 
  HeartHandshake, 
  TrendingUp, 
  CheckCircle2, 
  Target, 
  Eye, 
  ArrowRight,
  Sparkles,
  Zap,
  Globe2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kurumsal & Hakkımızda | 25 Yıllık Bilişim Çözüm Ortaklığı',
  description: 'Konya Organize Sanayi Bölgesi merkezli Btgrup Bilgi Teknolojileri: 2000 yılından bugüne Konya ve Türkiye genelinde yüzlerce kurumsal firmaya kesintisiz bilişim, web ve teknik altyapı ortaklığı sunmaktadır.',
  keywords: 'konya kurumsal bilişim, btgrup konya, konya bilgi teknolojileri, konya bilişim firmaları, btgrup kurumsal, konya osb bilişim',
  alternates: {
    canonical: 'https://www.btgrup.com/kurumsal',
  },
  openGraph: {
    title: 'Kurumsal & Hakkımızda | Btgrup Bilgi Teknolojileri',
    description: '2000 yılından bugüne kesintisiz kurumsal çözüm ortaklığı.',
    url: 'https://www.btgrup.com/kurumsal',
    images: ['https://www.btgrup.com/images/about/about-team.jpg'],
  },
};

export default function KurumsalPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Üst Başlık (Hero Banner) */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-brand-950 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>2000'den Bugüne Çeyrek Asırlık Bilişim Güvencesi</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Teknolojiye Yön Veren <br />
              <span className="bg-gradient-to-r from-brand-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Kesintisiz Çözüm Ortaklığı
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              Btgrup Bilgi Teknolojileri olarak, 2000 yılından bu yana çok sayıda kurumsal markanın dijital dönüşümüne, güvenliğine ve kesintisiz bilişim altyapısına liderlik ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Rakamlarla Btgrup */}
      <section className="relative -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
            <span className="text-3xl sm:text-4xl font-black text-brand-600">25+</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Yıllık Sektörel Deneyim</span>
            <span className="text-[11px] text-slate-400 mt-0.5">2000'den beri kesintisiz</span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
            <span className="text-3xl sm:text-4xl font-black text-cyan-600">Yüzlerce</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Kurumsal Müşteri</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Güvenle hizmet verilen</span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
            <span className="text-3xl sm:text-4xl font-black text-emerald-600">%100</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Müşteri Sadakati</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Yüksek güven ve memnuniyet</span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-black text-purple-600">Profesyonel</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Bilişim & Altyapı Desteği</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Uzman teknik takip</span>
          </div>
        </div>
      </section>

      {/* 3. Ana Hikaye: Kimiz ve Felsefemiz */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider">
              Kurumsal Hikayemiz
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              İş Disiplini ve Güvene Dayalı <br className="hidden sm:block" />
              Sürdürülebilir İş Birlikleri
            </h2>
            <div className="text-slate-600 text-base sm:text-lg space-y-4 leading-relaxed">
              <p>
                Bilişim sektöründe <strong>2000 yılından bugüne çok sayıda kurumsal firmaya</strong> kesintisiz hizmet veren Btgrup, her geçen yıl uzman kadrosunu büyüterek ve teknolojisini yenileyerek profesyonel çalışmalarına devam etmektedir.
              </p>
              <p>
                Müşterilerimize daima en iyiyi sunmak ve memnuniyeti en üst düzeyde tutmak amacıyla şekillendirdiğimiz <strong>"Kesintisiz Çözüm Ortaklığı"</strong> anlayışımız sayesinde, kurulduğumuz günden bu yana bizimle çalışmayı seçen kurumlarla bağımızı ilk günkü güvenle koruyoruz. İş ortaklarımız ile aramızdaki bu kalıcı bağın temelinde; tavizsiz iş disiplini, şeffaflık ve koşulsuz dürüstlük yatmaktadır.
              </p>
              <p>
                Hızla değişen dijital ekosistemde işletmelerin kurumsal değişimlerini en başarılı şekilde yönetmelerine rehberlik ediyoruz. Bunu gerçekleştirirken de <strong>optimum maliyet, yüksek performans ve zamanında teslimat</strong> prensiplerimizden asla ödün vermiyoruz.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Çözüm Odaklı Hizmet</h4>
                  <p className="text-xs text-slate-500 mt-1">İhtiyacınızı eksiksiz anlar, firmanız için en doğru rotayı çizeriz.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Optimum Maliyet & Süre</h4>
                  <p className="text-xs text-slate-500 mt-1">Kaynaklarınızı en verimli şekilde kullanarak bütçenizi koruruz.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Blok: Görsel & Değerler Kartı */}
          <div className="lg:col-span-5 space-y-6">
            {/* Fotoğraf Vitrini */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src="/images/about/about-team.jpg"
                  alt="Btgrup Bilgi Teknolojileri Ekip ve Bilişim Merkezi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-brand-500/90 text-white px-2.5 py-1 rounded-md mb-1 inline-block">
                    Konya Bilişim Merkezi
                  </span>
                  <div className="text-sm sm:text-base font-bold text-white">
                    Çeyrek Asırlık Bilişim ve Teknoloji Güvencesi
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-brand-950 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl"></div>
              
              <h3 className="text-xl font-black mb-5 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-brand-400" />
                <span>Neden Btgrup?</span>
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Sıfır Kayıp Prensibi</strong>
                    Btgrup ile çalışan hiçbir kurumsal müşteri yarı yolda bırakılmaz; bakım ve destek süreçleri kesintisiz devam eder.
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Dünya Standartlarında Web</strong>
                    Standartlara uymayan yapılar pazar kaybettirir. Biz, uluslararası standartlara tam uyumlu, hızlı ve kazandıran siteler inşa ederiz.
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Sürekli Eğitilen Uzman Kadro</strong>
                    Ekibimiz hem akademik hem sektörel anlamda sürekli eğitim programlarına katılarak her zaman güncel teknolojiyi uygular.
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Hızlı & Uçtan Uca Çözüm</strong>
                    Web tasarımından domain ve cloud barındırmaya, bilgisayar teknik servisinden lisanslamaya kadar tek çatı altında tam entegrasyon.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Misyon & Vizyon */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vizyon */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Vizyonumuz</h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  Bilişim teknolojileri bilgi birikimimiz ve çeyrek asırlık deneyimimiz ile harmanlanmış profesyonel web ve altyapı stratejileri yaklaşımı sayesinde; firma ve kurumların ihtiyaçlarına en uygun, güvenli ve sürdürülebilir çözümleri sunmak ve onları çağın teknolojisine eksiksiz adapte etmektir.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200 text-xs font-bold text-brand-600 uppercase tracking-wider">
                Geleceğin Teknolojisine Bugünden Hazırlık
              </div>
            </div>

            {/* Misyon */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Misyonumuz</h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  Kurumsal müşterilerimizin dijital varlıklarını ve bilgi sistemlerini kesintisiz ve güven odaklı çözüm ortaklığı ilkesiyle korumak ve güçlendirmek; standartlara tam uyumlu, kolay gezilebilen ve rekabet avantajı sağlayan çözümleri en uygun maliyet ve süre dengesiyle hayata geçirmektir.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200 text-xs font-bold text-cyan-700 uppercase tracking-wider">
                Değer Katan Güvenilir Çözüm Ortaklığı
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Alt Aksiyon Çağrısı (CTA) */}
      <section className="py-20 bg-gradient-to-r from-brand-600 via-brand-700 to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Firmanız İçin Güvenilir Bilişim Çözüm Ortağı Arıyorsanız, Yanınızdayız.
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Web tasarım, bulut hosting, kurumsal bilgisayar bakımı veya lisans ihtiyaçlarınız için uzman ekibimizle hemen tanışın.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/teklif-al"
              className="px-8 py-4 bg-white text-brand-900 font-extrabold rounded-2xl hover:bg-slate-100 shadow-xl transition-all hover:scale-105"
            >
              Hemen Online Teklif Alın
            </Link>
            <Link
              href="/iletisim"
              className="px-8 py-4 bg-brand-900/40 hover:bg-brand-900/60 border border-white/20 text-white font-bold rounded-2xl transition-all"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
