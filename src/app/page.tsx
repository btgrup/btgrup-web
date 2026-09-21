import React from 'react';
import HeroSection from '@/components/HeroSection';
import PartnerLogos from '@/components/PartnerLogos';
import ServicesSection from '@/components/ServiceCard';
import Link from 'next/link';
import { ShieldCheck, Award, Clock, Users, ArrowRight, HeartHandshake, TrendingUp, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Bölümü & Alan Adı Tescil Servisi (Koyu Alanda) */}
      <HeroSection />

      {/* 2. Teknoloji & Çözüm Ortakları Marka Logoları Bandı */}
      <PartnerLogos />

      {/* 3. 4 Ana Hizmet Alanı (Görsel Kartlı) */}
      <ServicesSection />

      {/* 5. Kurumsal Güven ve Çözüm Ortaklığı Felsefesi */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 text-brand-600 font-bold text-xs uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                25 Yıllık Temel Hizmet Felsefemiz
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                "Standartlara Uyan Siteler Kazanıyor ve Kazandırıyor"
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                İnternet dünyasında standartlara uymayan hantal yapılar kullanıcı ve pazar kaybederken; kolay gezilebilen, hızlı ve modern standartlara sahip web siteleri şirketlere her zaman kazandırır.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Güven Odaklı Çözüm Ortaklığı</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Müşterilerimizin teknoloji ihtiyaçlarına en doğru ve sürdürülebilir rotayı çizeriz. Bu yaklaşımımız sayesinde 2000 yılından bu yana kurumlarla bağımızı güvenle koruyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Kurumsal Değişimde Optimum Maliyet</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      İşletmelerin dijital dönüşümlerini en başarılı şekilde yönetmelerine yardımcı olurken; optimum maliyet ve zaman konusunda son derece titizlik gösteririz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Sütun: Öne Çıkan Başarı Göstergeleri */}
            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-brand-950 p-8 sm:p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-2">
                  Btgrup Güvencesiyle
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
                  Şirketinizin Dijital Geleceğini Şansa Bırakmayın
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-black text-brand-400">2000</div>
                    <div className="text-xs text-slate-300 mt-1 font-medium">Kuruluş Yılı</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-black text-cyan-400">Yüzlerce</div>
                    <div className="text-xs text-slate-300 mt-1 font-medium">Kurumsal Referans</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400">%100</div>
                    <div className="text-xs text-slate-300 mt-1 font-medium">Müşteri Sadakati</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-black text-amber-400">Sıfır</div>
                    <div className="text-xs text-slate-300 mt-1 font-medium">Müşteri Kaybı İlkesi</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/kurumsal"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm transition-all shadow-lg shadow-brand-500/25"
                  >
                    <span>Hakkımızda Detayları</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/teklif-al"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/10"
                  >
                    Hızlı Teklif Al
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Kurumsal Güven ve Çözüm Ortaklığı Bölümü */}
      <section className="py-20 bg-slate-900 text-white" id="kurumsal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-400 font-bold text-xs uppercase tracking-widest bg-brand-950 px-3.5 py-1.5 rounded-full border border-brand-800">
              2000'den Bugüne Çeyrek Asırlık Tecrübe
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight">
              Bilişimde Doğru Adres, Güvenilir Sonuç
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              2000 yılından bu yana çok sayıda kurumsal firmaya sunduğumuz <strong>"Kesintisiz Çözüm Ortaklığı"</strong> anlayışıyla; yüksek iş disiplini, şeffaflık ve optimum maliyetle profesyonel bilişim çözümleri üretiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-slate-800/60 p-6 rounded-3xl border border-slate-700/80">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Güven Odaklı Hizmet</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                İş ortaklarımızın ihtiyaçlarını eksiksiz anlar, kurulduğumuz günden beri dürüstlük ve yüksek disiplinle çalışırız.
              </p>
            </div>

            <div className="bg-slate-800/60 p-6 rounded-3xl border border-slate-700/80">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Optimum Maliyet & Süre</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                İşletmenizin kurumsal değişiminde en doğru bütçe planlamasını ve tam zamanında teslimatı garanti ederiz.
              </p>
            </div>

            <div className="bg-slate-800/60 p-6 rounded-3xl border border-slate-700/80">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Uluslararası Standartlar</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Standartlara uygun, modern ve hızlı web altyapıları ile arama motorlarında kazandıran stratejiler sunarız.
              </p>
            </div>

            <div className="bg-slate-800/60 p-6 rounded-3xl border border-slate-700/80">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sürekli Eğitilen Kadro</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Uzman ekibimiz düzenli mesleki eğitimlerle her zaman güncel teknolojiyi kurumunuza entegre eder.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/kurumsal"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-lg shadow-brand-600/30 transition-all hover:scale-105"
            >
              <span>Kurumsal Hikayemiz ve Vizyonumuzu İnceleyin</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Alt Aksiyon Çağrısı (CTA) */}
      <section className="py-20 bg-gradient-to-r from-brand-600 via-brand-700 to-cyan-700 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Şirketiniz İçin Hemen Bir Teklif Alın
          </h2>
          <p className="text-brand-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Web tasarım, bulut hosting, bilgisayar teknik servis veya kurumsal donanım/lisans ihtiyaçlarınız için formumuzu doldurun, uzman ekibimiz hemen iletişime geçsin.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/teklif-al"
              className="px-8 py-4 bg-white text-brand-900 font-extrabold rounded-2xl hover:bg-slate-100 shadow-xl transition-all hover:scale-105"
            >
              Hemen Online Teklif İste
            </Link>
            <a
              href="tel:+903322387078"
              className="px-8 py-4 bg-brand-900/40 hover:bg-brand-900/60 border border-white/20 text-white font-bold rounded-2xl transition-all"
            >
              Telefonla Arayın: 0 (332) 238 70 78
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
