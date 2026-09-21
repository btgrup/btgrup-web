import React from 'react';
import { Cookie, Settings, CheckCircle2, Sliders } from 'lucide-react';
import CookieSettingsButton from '@/components/CookieSettingsButton';

export const metadata = {
  title: 'Çerez Politikası | Btgrup',
  description: 'BtGrup Bilgi Teknolojileri çerez (cookie) kullanım politikası, çerez türleri ve tarayıcı ayarları rehberi.',
};

export default function CerezPolitikasiPage() {
  return (
    <article className="prose prose-slate max-w-none text-slate-700">
      
      <div className="border-b border-slate-200 pb-6 mb-8">
        <div className="flex items-center gap-2 text-purple-600 text-xs font-bold uppercase tracking-wider mb-2">
          <Cookie className="w-4 h-4" />
          Şeffaf Çerez Tercihleri
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight m-0">
          Çerez (Cookie) Politikası
        </h2>
        <div className="flex flex-wrap gap-4 text-xs text-slate-500 mt-3 font-medium">
          <span>BtGrup Bilgi Teknolojileri LTD. ŞTİ.</span>
          <span>•</span>
          <span>Son Güncelleme: Eylül 2026</span>
        </div>
      </div>

      {/* İnteraktif Çerez Tercih Kartı */}
      <div className="not-prose mb-8">
        <CookieSettingsButton variant="card" />
      </div>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">1. Çerez (Cookie) Nedir?</h3>
        <p className="text-sm leading-relaxed mb-3">
          Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınız, akıllı telefonunuz veya tabletiniz gibi cihazlarınıza kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin daha verimli çalışmasını, kullanıcı tercihlerinin hatırlanmasını ve ziyaretçilere kişiselleştirilmiş bir deneyim sunulmasını sağlar.
        </p>
        <p className="text-sm leading-relaxed">
          Çerezler kesinlikle virüs içermez, cihazınıza zarar vermez ve dosya veya belgelerinize erişemez.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-4">2. Sitemizde Kullanılan Çerez Türleri</h3>

        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Zorunlu ve Teknik Çerezler
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Web sitemizin temel fonksiyonlarının güvenli bir şekilde çalışabilmesi, sayfalar arasında geçiş yapılması ve formların güvenle iletilmesi için elzemdir. Bu çerezlerin devre dışı bırakılması durumunda web sitesinin bazı bölümleri düzgün çalışmayabilir.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              İşlevsellik ve Tercih Çerezleri
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Web sitemizi bir sonraki ziyaretinizde tercihlerinizi (örneğin dil seçimi veya form hatırlatıcıları) anımsayarak daha hızlı ve konforlu bir gezinme deneyimi yaşamanızı sağlar.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              Performans ve Analiz Çerezleri
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ziyaretçilerin web sitemizi nasıl kullandıklarını (en çok hangi sayfaların ziyaret edildiği, sitede geçirilen süre vb.) tamamen anonim ve istatistiki olarak analiz etmemize yardımcı olur. Toplanan veriler yalnızca site hızını ve kullanıcı deneyimini iyileştirmek için kullanılır.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">3. Çerezleri Nasıl Yönetebilir veya Silebilirsiniz?</h3>
        <p className="text-sm leading-relaxed mb-3">
          Tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi dilediğiniz an kişiselleştirebilir, kaydedilmiş çerezleri silebilir veya tüm çerezleri engelleyebilirsiniz:
        </p>
        <ul className="text-xs sm:text-sm space-y-2 list-disc pl-5">
          <li><strong>Google Chrome:</strong> Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler ve diğer site verileri</li>
          <li><strong>Mozilla Firefox:</strong> Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Site Verileri</li>
          <li><strong>Microsoft Edge:</strong> Ayarlar &gt; Çerezler ve Site İzinleri &gt; Çerezleri ve site verilerini yönet</li>
          <li><strong>Apple Safari:</strong> Tercihler &gt; Gizlilik &gt; Tüm Çerezleri Engelle</li>
        </ul>
        <p className="text-xs text-slate-500 mt-3">
          Lütfen zorunlu teknik çerezlerin engellenmesi durumunda btgrup.com üzerindeki form gönderimlerinin veya sayfalar arası gezinmenin kısıtlanabileceğini unutmayınız.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-slate-900 mb-3">4. Politika Güncellemeleri</h3>
        <p className="text-sm leading-relaxed">
          BtGrup, yasal mevzuattaki değişiklikler veya sunulan teknolojik hizmetlerin güncellenmesi doğrultusunda Çerez Politikasını güncelleme hakkını saklı tutar. Güncellenen metin bu sayfada yayımlandığı tarihte yürürlüğe girer.
        </p>
      </section>

    </article>
  );
}
