import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Scale, Cookie, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Yasal Bildirimler ve Politikalar | Btgrup',
  description: 'BtGrup Bilgi Teknolojileri KVKK aydınlatma metni, gizlilik politikası, çerez tercihleri ve site kullanım şartları.',
};

export default function LegalIndexPage() {
  const policies = [
    {
      title: 'KVKK Aydınlatma Metni',
      desc: '6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca kişisel verilerinizin işlenme amaçları, hukuki sebepleri ve haklarınız hakkında detaylı aydınlatma.',
      href: '/yasal/kvkk',
      icon: ShieldCheck,
      color: 'text-brand-600 bg-brand-50 border-brand-200',
      points: [
        'Veri sorumlusunun kimliği ve yükümlülükleri',
        'Kişisel verilerin işlenme amaçları ve yöntemleri',
        'KVKK 11. madde kapsamındaki yasal haklarınız',
        'Yazılı ve dijital başvuru kanalları',
      ],
    },
    {
      title: 'Gizlilik Politikası',
      desc: 'Web sitemizi ziyaretinizde ve hizmetlerimizi kullanımınızda toplanan teknik bilgilerin, iletişim kayıtlarının korunmasına yönelik gizlilik ilkelerimiz.',
      href: '/yasal/gizlilik',
      icon: Lock,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
      points: [
        'SSL şifreleme ve veri güvenliği önlemleri',
        'Müşteri iletişim ve teklif verilerinin korunması',
        'Üçüncü taraflarla bilgi paylaşımı sınırları',
        'Güvenli sunucu altyapısı standartları',
      ],
    },
    {
      title: 'Kullanım Şartları',
      desc: 'btgrup.com web sitesinin kullanımına, içeriklerin telif haklarına, web tasarım/hosting/servis hizmetlerinin genel işleyiş ve taahhütlerine dair sözleşme.',
      href: '/yasal/kullanim-sartlari',
      icon: Scale,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      points: [
        'Fikri mülkiyet ve telif hakkı korumaları',
        'Kullanıcı yükümlülükleri ve site güvenliği',
        'Hizmet sunumu ve sorumluluk sınırları',
        'Uyuşmazlıklarda Konya Mahkemeleri yetkisi',
      ],
    },
    {
      title: 'Çerez (Cookie) Politikası',
      desc: 'Kullanıcı deneyiminizi iyileştirmek, site performansını analiz etmek ve oturumları yönetmek amacıyla kullandığımız çerezler ve kontrol yöntemleri.',
      href: '/yasal/cerez-politikasi',
      icon: Cookie,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      points: [
        'Zorunlu ve işlevsel çerez türleri',
        'Analitik ve performans çerezleri',
        'Tarayıcı üzerinden çerez yönetimi ve silme',
        'Çerez ayarlarının site işleyişine etkisi',
      ],
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Kurumsal Hukuki ve Yasal Politikalarımız
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
          BtGrup Bilgi Teknolojileri LTD. ŞTİ. olarak 2000 yılından bugüne kurumsal müşterilerimize sunduğumuz hizmetlerde şeffaflık, yasalara tam uyumluluk ve bilgi güvenliğini temel ilke kabul ediyoruz. İlgili yasal metinleri aşağıdan ayrıntılı olarak inceleyebilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {policies.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.href}
              className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200 flex flex-col justify-between hover:border-brand-300 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${p.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {p.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {p.desc}
                </p>

                <ul className="space-y-2 mb-6 border-t border-slate-200/60 pt-4">
                  {p.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-brand-600 text-brand-600 hover:text-white border border-slate-200 hover:border-transparent text-xs font-bold transition-all shadow-xs"
                >
                  <span>Metni İncele</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
