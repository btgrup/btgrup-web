import React from 'react';
import { Lock, Shield, Server, FileCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Gizlilik Politikası | Btgrup',
  description: 'BtGrup Bilgi Teknolojileri web sitesi gizlilik politikası, veri güvenliği standartları ve SSL şifreleme ilkeleri.',
};

export default function GizlilikPage() {
  return (
    <article className="prose prose-slate max-w-none text-slate-700">
      
      <div className="border-b border-slate-200 pb-6 mb-8">
        <div className="flex items-center gap-2 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-2">
          <Lock className="w-4 h-4" />
          Veri Güvenliği Standartlarımız
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight m-0">
          Gizlilik Politikası ve Güvenlik İlkeleri
        </h2>
        <div className="flex flex-wrap gap-4 text-xs text-slate-500 mt-3 font-medium">
          <span>BtGrup Bilgi Teknolojileri LTD. ŞTİ.</span>
          <span>•</span>
          <span>Son Güncelleme: Eylül 2026</span>
        </div>
      </div>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">1. Genel Bilgilendirme ve Kapsam</h3>
        <p className="text-sm leading-relaxed mb-3">
          BtGrup Bilgi Teknolojileri LTD. ŞTİ. (“BtGrup”), kullanıcılarının ve kurumsal müşterilerinin kişisel ve ticari bilgilerinin gizliliğine en üst düzeyde önem verir. Bu Gizlilik Politikası, btgrup.com internet sitesini ziyaret eden tüm kullanıcıların bilgi güvenliğinin nasıl sağlandığını, hangi verilerin toplandığını ve nasıl korunduğunu açıklamaktadır.
        </p>
        <p className="text-sm leading-relaxed">
          Web sitemizi kullanarak, bu politikada belirtilen veri işleme ve güvenlik uygulamalarını kabul etmiş sayılırsınız.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">2. Bilgi Güvenliği Standartlarımız</h3>
        <p className="text-sm leading-relaxed mb-4">
          btgrup.com üzerindeki tüm veri trafiği uluslararası siber güvenlik standartlarıyla korunmaktadır:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1.5">
              <Shield className="w-4 h-4 text-brand-600" />
              <span>256-Bit SSL/TLS Şifreleme</span>
            </div>
            <p className="text-slate-600">
              Web sitemiz üzerinden ilettiğiniz formlar, şifreleme sertifikaları ile korunur. Verileriniz sunucularımıza üçüncü şahıslarca okunamaz şifreli tünel üzerinden iletilir.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1.5">
              <Server className="w-4 h-4 text-cyan-600" />
              <span>NVMe Güvenli Sunucu Mimarisi</span>
            </div>
            <p className="text-slate-600">
              Barındırma ve veri altyapımız DDoS ataklarına ve yetkisiz erişimlere karşı donanımsal güvenlik duvarları (firewall) ile korunmaktadır.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">3. Hangi Verileri Topluyoruz?</h3>
        <p className="text-sm leading-relaxed mb-3">
          Sitemizi ziyaret ettiğinizde iki tür veri işlenmektedir:
        </p>
        <ul className="text-xs sm:text-sm space-y-2 list-disc pl-5">
          <li><strong>Doğrudan Tarafınızca Sağlanan Veriler:</strong> Çevrim içi teklif alma formu veya iletişim sayfasında bizzat girdiğiniz ad, soyad, firma bilgisi, telefon numarası ve ihtiyaç detayları.</li>
          <li><strong>Otomatik Olarak Toplanan Teknik Veriler:</strong> Sitemizi ziyaretiniz sırasında IP adresiniz, tarayıcı türünüz, işletim sisteminiz, ziyaret edilen sayfalar ve sitede geçirilen süre gibi istatistiki anonim veriler.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">4. Bilgilerin Paylaşımı ve Gizlilik Taahhüdü</h3>
        <p className="text-sm leading-relaxed mb-3">
          BtGrup, müşterilerine ait iletişim bilgilerini, kurumsal projeleri veya teklif taleplerini;
        </p>
        <ul className="text-xs sm:text-sm space-y-2 list-disc pl-5 mb-3">
          <li>Hiçbir koşulda reklam, pazarlama veya ticari kazanç amacıyla üçüncü taraflarla paylaşmaz veya satmaz.</li>
          <li>Yalnızca adli makamların veya yetkili yasal kurumların usulüne uygun bağlayıcı resmi talepleri halinde yasal mercilere sunar.</li>
          <li>Tüm şirket personelimiz ve teknik servis uzmanlarımız gizlilik sözleşmelerine ve mesleki sır saklama ilkelerine tabidir.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">5. Harici Bağlantılar ve Üçüncü Taraflar</h3>
        <p className="text-sm leading-relaxed">
          Sitemizde WhatsApp yönlendirmesi veya Google Haritalar gibi harici araçlara yönlendiren bağlantılar bulunabilir. Bu harici sitelerin kendi gizlilik politikaları ve kullanım koşulları geçerlidir. BtGrup, harici bağlantıların gizlilik uygulamalarından sorumlu tutulamaz.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-slate-900 mb-3">6. İletişim</h3>
        <p className="text-sm leading-relaxed">
          Gizlilik politikamız veya veri güvenliği standartlarımız ile ilgili her türlü soru ve öneriniz için <a href="mailto:info@btgrup.com" className="text-brand-600 font-bold">info@btgrup.com</a> e-posta adresimizden bize ulaşabilirsiniz.
        </p>
      </section>

    </article>
  );
}
