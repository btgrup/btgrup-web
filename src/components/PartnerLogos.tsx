import React from 'react';

interface Partner {
  name: string;
  category: string;
  svg: React.ReactNode;
}

const partners: Partner[] = [
  {
    name: 'Microsoft',
    category: 'Yetkili Lisans & Bulut Çözümleri',
    svg: (
      <svg className="h-7 w-auto" viewBox="0 0 100 22" fill="currentColor">
        <rect x="0" y="0" width="10" height="10" fill="#f25022" />
        <rect x="12" y="0" width="10" height="10" fill="#7fba00" />
        <rect x="0" y="12" width="10" height="10" fill="#00a4ef" />
        <rect x="12" y="12" width="10" height="10" fill="#ffb900" />
        <text x="28" y="16" fontFamily="Segoe UI, Helvetica, Arial, sans-serif" fontSize="15" fontWeight="600" fill="currentColor">Microsoft</text>
      </svg>
    ),
  },
  {
    name: 'Intel',
    category: 'İşlemci & Sunucu Teknolojileri',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 65 24" fill="currentColor">
        <text x="0" y="18" fontFamily="Helvetica, Arial, sans-serif" fontSize="22" fontWeight="800" letterSpacing="-1" fill="currentColor">intel</text>
      </svg>
    ),
  },
  {
    name: 'Dell Technologies',
    category: 'Sunucu & Kurumsal Donanım',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 70 24" fill="currentColor">
        <text x="0" y="18" fontFamily="Century Gothic, Arial, sans-serif" fontSize="20" fontWeight="900" letterSpacing="1" fill="currentColor">DELL</text>
      </svg>
    ),
  },
  {
    name: 'Lenovo',
    category: 'ThinkPad & Kurumsal İstemciler',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 95 24" fill="currentColor">
        <rect x="0" y="2" width="95" height="20" rx="3" fill="#e2231a" />
        <text x="8" y="17" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="800" letterSpacing="0.5" fill="#ffffff">Lenovo</text>
      </svg>
    ),
  },
  {
    name: 'HP',
    category: 'Kurumsal Bilgisayar & Yazıcılar',
    svg: (
      <svg className="h-7 w-auto" viewBox="0 0 32 32" fill="currentColor">
        <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <text x="6" y="22" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="bold" fontStyle="italic" fill="currentColor">hp</text>
      </svg>
    ),
  },
  {
    name: 'ASUS',
    category: 'Anakart & Ekipman Çözümleri',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 75 22" fill="currentColor">
        <text x="0" y="17" fontFamily="Helvetica, Arial, sans-serif" fontSize="18" fontWeight="900" letterSpacing="1" fill="currentColor">ASUS</text>
      </svg>
    ),
  },
  {
    name: 'ESET',
    category: 'Kurumsal Uç Nokta Siber Güvenlik',
    svg: (
      /* Resmi eset.com orijinal kapsül vektörü */
      <svg className="h-7 w-auto" viewBox="0 12 201 76" xmlns="http://www.w3.org/2000/svg">
        <path d="M173.064 12.5688C183.003 12.5688 191.48 17.6871 195.904 24.9404C199.808 31.695 200.668 42.6895 200.668 49.9729C200.668 57.2561 199.797 68.2608 195.904 75.0152C191.48 82.2686 183.003 87.3869 173.064 87.3869H28.1143C18.1653 87.3869 9.68773 82.2686 5.27378 75.0152C1.36028 68.2708 0.499512 57.2762 0.499512 49.9829C0.499512 42.6895 1.36028 31.695 5.26377 24.9404C9.68773 17.6871 18.1653 12.5688 28.1042 12.5688H173.064Z" fill="#0096A1"/>
        <path d="M124.571 45.872C124.71 41.093 125.621 39.5068 130.506 39.5068C134.529 39.5068 136.771 39.9257 136.771 45.4929V45.872H124.571ZM38.914 39.876C34.1797 39.876 33.2288 41.3326 33.0986 46.0117H45.0694V45.7425C45.0694 40.265 42.9174 39.876 38.914 39.876ZM21.9988 50.2021C21.9988 36.6833 25.0214 32.3132 39.1141 32.3132C52.2859 32.3132 56.1594 35.8951 56.1594 50.2021V51.8981H33.0886V52.1676C33.0886 58.4231 34.0696 60.4686 39.1141 60.4686C42.6072 60.4686 45.1394 60.0893 45.2595 56.3481H56.1594C56.0992 61.4463 54.3877 64.3098 51.4952 65.976C48.5124 67.622 44.2586 68.0312 39.1141 68.0312C25.2818 68.0312 21.9988 63.322 21.9988 50.2021ZM63.5158 43.6572C63.5158 32.5327 70.7022 32.3132 80.6311 32.3132C87.247 32.3132 96.0549 32.4231 96.0549 40.8238V42.2503H85.5956C85.085 39.4768 82.8631 39.2772 80.6311 39.2772C74.5357 39.2772 74.2756 40.0356 74.2756 42.3801C74.2756 44.3657 74.6257 45.6128 80.6211 45.7525C92.702 46.0217 97.7465 46.7102 97.7465 56.358C97.7465 66.4848 89.9795 68.0411 80.6311 68.0411C78.339 68.0411 76.1071 68.051 74.0552 67.8915C67.2693 67.3528 63.5958 64.8286 63.5158 57.0963H74.6159C74.7458 61.0172 77.7186 61.0771 80.6311 61.0771C85.866 61.0771 86.9869 60.748 86.9869 57.705C86.9869 55.8892 86.4563 54.8815 85.3055 54.3826C84.0643 53.8437 81.9623 53.9235 80.6311 53.9235C65.9381 53.9235 63.5158 50.6511 63.5158 43.6572ZM154.587 40.2849H162.705V67.6421H173.804V40.2849H181.912V32.3132H154.597V40.2849H154.587ZM113.711 49.9528C113.711 63.0128 116.954 67.662 130.716 67.662C135.86 67.662 140.094 67.2529 143.047 65.6168C145.87 63.9804 147.571 61.1969 147.651 56.1984H136.972C136.811 59.9397 134.169 60.319 130.716 60.319C125.581 60.319 124.591 58.1738 124.591 51.9083V51.529H147.651V49.9528C147.651 35.7054 143.818 32.1735 130.716 32.1735C116.693 32.1735 113.711 36.4837 113.711 49.9528ZM13.8715 74.2069C17.3947 77.9882 24.1607 80.8117 29.9558 80.8217H104.703V19.1436H29.9558C24.1607 19.1535 17.3947 21.987 13.8715 25.7584C8.30653 31.7246 7.09546 41.083 7.09546 49.9826C7.09546 58.8822 8.30653 68.2407 13.8715 74.197" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Sophos',
    category: 'UTM Firewall & Ağ Güvenliği',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 95 24" fill="currentColor">
        <text x="0" y="18" fontFamily="Arial, Helvetica, sans-serif" fontSize="19" fontWeight="900" letterSpacing="1.5" fill="#0064d2">SOPHOS</text>
      </svg>
    ),
  },
  {
    name: 'Logo Yazılım',
    category: 'ERP, Muhasebe & E-Dönüşüm',
    svg: (
      /* Resmi logo.com.tr vektörel geometrisi */
      <svg className="h-7 w-auto" viewBox="0 0 93 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.4099 17.3C29.3049 18.4999 28.1048 18.4999 28.1048 18.4999H17.3049L18.2498 7.70005C18.3548 6.49991 19.5548 6.49991 19.5548 6.49991H30.3548L29.4099 17.3ZM35.0949 20.9L36.5647 4.10003C36.5647 4.10003 36.8796 0.5 33.2796 0.5H16.4797C16.4797 0.5 12.8796 0.5 12.5647 4.10003L11.0949 20.9C11.0949 20.9 10.7799 24.5 14.3799 24.5H31.1799C31.1799 24.5 34.7799 24.5 35.0949 20.9Z" fill="#C8102E"/>
        <path d="M85.8103 17.3C85.7053 18.4999 84.5052 18.4999 84.5052 18.4999H73.7053L74.6502 7.70005C74.7552 6.49991 75.9551 6.49991 75.9551 6.49991H86.7552L85.8103 17.3ZM91.4952 20.9L92.965 4.10003C92.965 4.10003 93.28 0.5 89.68 0.5H72.88C72.88 0.5 69.28 0.5 68.9651 4.10003L67.4953 20.9C67.4953 20.9 67.1803 24.5 70.7803 24.5H87.5803C87.5803 24.5 91.1803 24.5 91.4952 20.9Z" fill="#C8102E"/>
        <path d="M58.5548 6.4999L57.6099 17.3C57.5049 18.4999 56.305 18.4999 56.305 18.4999H45.5049L46.4498 7.70005C46.5548 6.4999 47.7549 6.4999 47.7549 6.4999H58.5548ZM61.4798 0.5H44.6798C44.6798 0.5 41.0798 0.5 40.7649 4.10002L39.2951 20.9C39.2951 20.9 38.9801 24.5 42.5801 24.5H53.98L53.8225 26.3C53.7176 27.5 52.5176 27.5 52.5176 27.5H44.7178L44.2978 32.2999C44.2978 32.2999 44.1928 33.4999 45.3927 33.4999H55.5927C55.5927 33.4999 59.1927 33.4999 59.5077 29.9001L59.9857 24.4363C61.0247 24.2579 63.0615 23.5689 63.295 20.9L64.7649 4.10002C64.7649 4.10002 65.0798 0.5 61.4798 0.5Z" fill="#C8102E"/>
        <path d="M15.3178 27.5H6.31774L8.6799 0.500488H3.87994C3.87994 0.500488 2.68 0.500488 2.57502 1.70043L0.31784 27.5L0.0389041 30.6883L0.0336589 30.7482C0.0336589 30.7482 -0.207075 33.4999 2.54459 33.4999H13.5929C13.5929 33.4999 14.7929 33.4999 14.8978 32.3L15.3178 27.5Z" fill="#C8102E"/>
      </svg>
    ),
  },
  {
    name: 'ETA Bilgisayar',
    category: 'Ticari & Muhasebe Yazılımları',
    svg: (
      /* Resmi eta.com.tr logosu */
      <img
        src="/images/eta-logo.png"
        alt="ETA Bilgisayar Resmi Logosu"
        className="h-7 w-auto object-contain max-h-7"
      />
    ),
  },
];

export default function PartnerLogos() {
  return (
    <section className="py-12 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Resmi Donanım, Yazılım ve Teknoloji Çözüm Ortaklarımız
          </p>
          <div className="h-0.5 w-12 bg-brand-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Marka Rozetleri Grid / Flex */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              title={`${partner.name} - ${partner.category}`}
              className="group flex flex-col items-center justify-center p-4 w-full rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-brand-300 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="text-slate-500 group-hover:text-slate-900 group-hover:scale-105 transition-all duration-300 opacity-80 group-hover:opacity-100 flex items-center justify-center h-8">
                {partner.svg}
              </div>
              <span className="text-[10px] text-slate-400 group-hover:text-brand-600 mt-2 font-medium tracking-tight text-center transition-colors">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            Tüm tedarik ve satışlarımız <span className="font-bold text-slate-700">resmi distribütör garantili</span>, faturalı ve Btgrup teknik güvencesindedir.
          </p>
        </div>

      </div>
    </section>
  );
}
