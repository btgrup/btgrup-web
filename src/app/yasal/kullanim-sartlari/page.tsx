import React from 'react';
import { Scale, ShieldAlert, CheckCircle2, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Kullanım Şartları | Btgrup',
  description: 'BtGrup Bilgi Teknolojileri web sitesi kullanım şartları, fikri mülkiyet hakları ve hizmet kuralları.',
};

export default function KullanimSartlariPage() {
  return (
    <article className="prose prose-slate max-w-none text-slate-700">
      
      <div className="border-b border-slate-200 pb-6 mb-8">
        <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-2">
          <Scale className="w-4 h-4" />
          Hukuki Sözleşme & Şartlar
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight m-0">
          Web Sitesi Kullanım Şartları ve Hizmet Koşulları
        </h2>
        <div className="flex flex-wrap gap-4 text-xs text-slate-500 mt-3 font-medium">
          <span>BtGrup Bilgi Teknolojileri LTD. ŞTİ.</span>
          <span>•</span>
          <span>Son Güncelleme: Eylül 2026</span>
        </div>
      </div>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">1. Kabul ve Bağlayıcılık</h3>
        <p className="text-sm leading-relaxed mb-3">
          btgrup.com internet sitesini ziyaret ederek, sayfalarında gezinerek veya sitede yer alan formları doldurarak işbu <strong>Kullanım Şartları</strong>'nı, KVKK Aydınlatma Metni'ni ve Gizlilik Politikası'nı okuduğunuzu, anladığınızı ve koşullara uymayı peşinen kabul etmiş sayılırsınız.
        </p>
        <p className="text-sm leading-relaxed">
          Bu koşulları kabul etmiyorsanız, lütfen web sitesinin kullanımını durdurunuz.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">2. Fikri Mülkiyet ve Telif Hakları</h3>
        <p className="text-sm leading-relaxed mb-3">
          Web sitemizde bulunan tüm yazılı metinler, logolar, grafikler, görsel tasarımlar, arayüz bileşenleri, yazılım kodları ve marka adları <strong>BtGrup Bilgi Teknolojileri LTD. ŞTİ.</strong>'ye aittir ve 5846 sayılı Fikir ve Sanat Eserleri Kanunu ile Türk Ceza Kanunu kapsamında korunmaktadır.
        </p>
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
          <strong>Önemli Uyarı:</strong> Şirketimizin yazılı ön izni olmaksızın site içeriğinin, logolarının veya kaynak kodlarının kopyalanması, çoğaltılması, başka web sitelerinde yayımlanması veya ticari amaçlarla kullanılması kesinlikle yasaktır ve yasal kovuşturma sebebidir.
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">3. Hizmetlerin Tanımı ve Kapsamı</h3>
        <p className="text-sm leading-relaxed mb-3">
          BtGrup web sitesi, kurumsal bilişim çözümleri kapsamında bilgilendirme, online teklif alma, alan adı (domain) sorgulama ve teknik servis tanıtım hizmetleri sunmaktadır:
        </p>
        <ul className="text-xs sm:text-sm space-y-2 list-disc pl-5">
          <li><strong>Teklifler:</strong> Siteden iletilen teklif talepleri bağlayıcı nihai satış sözleşmesi niteliğinde olmayıp, ön bilgilendirme ve hazırlık mahiyetindedir. Hizmet koşulları taraflar arasında akdedilecek kurumsal sözleşmeyle belirlenir.</li>
          <li><strong>Alan Adı (Domain) Sorgulama:</strong> Sitedeki domain aracı, sorgulama anındaki genel WHOIS verilerini yansıtır. Tescil işlemi, resmi ödeme ve onay süreçlerinin tamamlanmasıyla gerçekleşir.</li>
          <li><strong>Teknik Servis ve Onarım:</strong> Donanım servis süreçlerinde cihaz teslim tutanağı ve teknik servis sözleşmesi hükümleri esastır.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">4. Kullanıcı Sorumlulukları ve Site Güvenliği</h3>
        <p className="text-sm leading-relaxed mb-3">
          Web sitesi kullanıcıları aşağıdaki kurallara uymakla yükümlüdür:
        </p>
        <ul className="text-xs sm:text-sm space-y-2 list-disc pl-5">
          <li>Site sistemlerine yetkisiz erişim sağlamaya çalışmamak, sunucuları aşırı yükleyecek otomatik sorgular (bot, spam) çalıştırmamak,</li>
          <li>Form alanlarına yanıltıcı, hukuka aykırı veya üçüncü şahısların haklarını ihlal edici bilgi girmemek,</li>
          <li>Site kodlarına veya veritabanına zarar verebilecek virüs, truva atı veya zararlı yazılımlar bulaştırmamak.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">5. Sorumluluk Sınırları ve Mücbir Sebepler</h3>
        <p className="text-sm leading-relaxed">
          BtGrup, sitemizin kesintisiz ve profesyonel standartlarda çalışması için gerekli tüm teknik tedbirleri almakla birlikte; internet altyapı sağlayıcılarından kaynaklanan genel kesintilerden, siber saldırılardan, doğal afetlerden veya mücbir sebeplerden doğabilecek geçici erişim aksaklıklarından doğrudan sorumlu tutulamaz.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-slate-900 mb-3">6. Yetkili Mahkeme ve Uygulanacak Hukuk</h3>
        <p className="text-sm leading-relaxed">
          İşbu Kullanım Şartları Türkiye Cumhuriyeti kanunlarına tabidir. Sitenin kullanımından veya sunulan hizmetlerden doğabilecek her türlü uyuşmazlıkta <strong>Konya Mahkemeleri ve İcra Daireleri</strong> münhasıran yetkilidir.
        </p>
      </section>

    </article>
  );
}
