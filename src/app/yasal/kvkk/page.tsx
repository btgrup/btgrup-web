import React from 'react';
import { ShieldCheck, Building2, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'KVKK Aydınlatma Metni | Btgrup',
  description: 'BtGrup Bilgi Teknolojileri 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) Kapsamında Aydınlatma Metni.',
};

export default function KvkkPage() {
  return (
    <article className="prose prose-slate max-w-none text-slate-700">
      
      {/* Üst Belge Başlığı */}
      <div className="border-b border-slate-200 pb-6 mb-8">
        <div className="flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4" />
          6698 Sayılı Kanun Uyarınca
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight m-0">
          Kişisel Verilerin Korunması ve İşlenmesi Aydınlatma Metni
        </h2>
        <div className="flex flex-wrap gap-4 text-xs text-slate-500 mt-3 font-medium">
          <span>Veri Sorumlusu: BtGrup Bilgi Teknolojileri LTD. ŞTİ.</span>
          <span>•</span>
          <span>Son Güncelleme: Eylül 2026</span>
        </div>
      </div>

      {/* 1. Veri Sorumlusu */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">1. Veri Sorumlusunun Kimliği</h3>
        <p className="text-sm leading-relaxed mb-4">
          6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, <strong>BtGrup Bilgi Teknolojileri LTD. ŞTİ.</strong> (“BtGrup” veya “Şirket”) olarak, veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan amaçlar doğrultusunda ve mevzuata uygun olarak işlemekte, saklamakta ve korumaktayız.
        </p>
        
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1.5 text-slate-600">
          <div><strong>Ticaret Ünvanı:</strong> BtGrup Bilgi Teknolojileri LTD. ŞTİ.</div>
          <div><strong>Adres:</strong> Büyükkayacık Mah. 3. Organize Sanayi Bölgesi 9 Nolu Sk. No:34/1 Selçuklu / KONYA</div>
          <div><strong>Telefon:</strong> 0 (332) 238 70 78</div>
          <div><strong>E-Posta:</strong> info@btgrup.com</div>
        </div>
      </section>

      {/* 2. İşlenen Kişisel Veriler */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">2. İşlenen Kişisel Verileriniz</h3>
        <p className="text-sm leading-relaxed mb-3">
          btgrup.com web sitemizi ziyaret etmeniz, teklif formlarını veya iletişim kanallarını kullanmanız durumunda aşağıdaki kategorilerdeki kişisel verileriniz işlenebilmektedir:
        </p>
        <ul className="text-xs sm:text-sm space-y-2 list-disc pl-5">
          <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, firma/unvan bilgisi.</li>
          <li><strong>İletişim Bilgileri:</strong> Telefon numarası, kurumsal veya şahsi e-posta adresi, teslimat/servis adresi.</li>
          <li><strong>Müşteri İşlem Bilgileri:</strong> Teklif talep formu içeriği, talep edilen hizmet dalı (Web tasarım, hosting, teknik servis, lisans), arıza bildirim kayıtları.</li>
          <li><strong>İşlem Güvenliği ve Teknik Bilgiler:</strong> 5651 sayılı Kanun uyarınca IP adresi, web sitesi giriş-çıkış logları, erişim zaman damgaları, kullanılan tarayıcı ve cihaz bilgileri.</li>
        </ul>
      </section>

      {/* 3. Veri İşleme Amaçları */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">3. Kişisel Verilerin İşlenme Amaçları</h3>
        <p className="text-sm leading-relaxed mb-3">
          Kişisel verileriniz KVKK'nın 5. ve 6. maddelerinde belirtilen şartlara uygun olarak şu amaçlarla işlenmektedir:
        </p>
        <ul className="text-xs sm:text-sm space-y-2 list-disc pl-5">
          <li>Talep ettiğiniz web tasarım, hosting, sunucu, teknik servis veya yazılım lisanslama tekliflerinin hazırlanması ve tarafınıza iletilmesi,</li>
          <li>Bilgisayar onarım ve servis süreçlerinin yürütülmesi, arıza takip durumunun bildirilmesi,</li>
          <li>Sözleşme süreçlerinin kurulması, faturalandırma ve muhasebe işlemlerinin yerine getirilmesi,</li>
          <li>Müşteri ilişkileri yönetimi, teknik destek taleplerinin yanıtlanması ve iletişim sürekliliğinin sağlanması,</li>
          <li>5651 sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi Kanunu kapsamındaki yasal log tutma yükümlülüklerinin karşılanması,</li>
          <li>Bilgi güvenliği süreçlerinin yürütülmesi ve sistem altyapısının korunması.</li>
        </ul>
      </section>

      {/* 4. Toplama Yöntemi ve Hukuki Sebebi */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebepleri</h3>
        <p className="text-sm leading-relaxed mb-3">
          Kişisel verileriniz, web sitemizdeki çevrim içi teklif ve iletişim formları, telefon santralimiz, e-posta yazışmaları ve teknik servis teslim tutanakları vasıtasıyla elektronik ve fiziki ortamlarda toplanmaktadır.
        </p>
        <p className="text-sm leading-relaxed">
          Söz konusu veriler KVKK m. 5/2 kapsamında; <em>"bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması"</em>, <em>"veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi"</em> ve <em>"ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaatlerimiz için veri işlenmesinin zorunlu olması"</em> hukuki sebeplerine dayalı olarak toplanır ve işlenir.
        </p>
      </section>

      {/* 5. Verilerin Aktarımı */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">5. Kişisel Verilerin Aktarılması</h3>
        <p className="text-sm leading-relaxed">
          Kişisel verileriniz kural olarak üçüncü taraflarla ticari veya pazarlama amacıyla paylaşılmaz. Yalnızca yasal zorunluluklar çerçevesinde; yetkili kamu kurum ve kuruluşlarına (adli makamlar, Gelir İdaresi, BTK), resmi lisans tedarik süreçlerinde distribütör sistemlerine (yalnızca lisanslama için zorunlu olan asgari kurumsal bilgiler) ve bilişim altyapımızı sağlayan güvenli yerel sunucularımıza mevzuata uygun şekilde aktarılabilmektedir.
        </p>
      </section>

      {/* 6. İlgili Kişinin Hakları (Madde 11) */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">6. İlgili Kişinin (Veri Sahibinin) Hakları</h3>
        <p className="text-sm leading-relaxed mb-3">
          KVKK’nın 11. maddesi uyarınca veri sahibi olarak Şirketimize başvurarak şu haklarınızı kullanabilirsiniz:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
            <span>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
            <span>İşlenmişse buna ilişkin bilgi talep etme,</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
            <span>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
            <span>Yurt içinde veya yurt dışında aktarıldığı 3. kişileri bilme,</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
            <span>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
            <span>KVKK 7. maddesi uyarınca silinmesini veya yok edilmesini talep etme.</span>
          </div>
        </div>
      </section>

      {/* 7. Başvuru Usulü */}
      <section>
        <h3 className="text-lg font-bold text-slate-900 mb-3">7. Başvuru Yolu ve Usulü</h3>
        <p className="text-sm leading-relaxed mb-3">
          Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici belgelerle birlikte talebinizi;
        </p>
        <ul className="text-xs sm:text-sm space-y-1.5 list-disc pl-5 mb-4">
          <li><strong>Yazılı olarak:</strong> Büyükkayacık Mah. 3. OSB 9 Nolu Sk. No:34/1 Selçuklu / KONYA adresine şahsen veya noter vasıtasıyla,</li>
          <li><strong>E-posta ile:</strong> Sistemimizde kayıtlı e-posta adresiniz üzerinden <a href="mailto:info@btgrup.com" className="text-brand-600 font-bold">info@btgrup.com</a> adresine,</li>
        </ul>
        <p className="text-xs text-slate-500">
          Şirketimiz, başvuruda yer alan talepleri, talebin niteliğine göre en kısa sürede ve en geç <strong>30 (otuz) gün</strong> içinde ücretsiz olarak sonuçlandıracaktır.
        </p>
      </section>

    </article>
  );
}
