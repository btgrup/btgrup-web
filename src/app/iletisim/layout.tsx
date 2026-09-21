import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim, Adres ve Lokasyon Bilgileri | Btgrup Konya',
  description: 'Konya Selçuklu 3. Organize Sanayi Bölgesi merkez ofisimiz, müşteri hizmetleri telefon hatlarımız (0332 238 70 78) ve doğrudan teklif / destek iletişim formu.',
  keywords: 'btgrup konya iletişim, konya bilişim iletişim, btgrup selçuklu, konya 3 osb bilişim, konya web tasarım telefon, btgrup adres',
  alternates: {
    canonical: 'https://www.btgrup.com/iletisim',
  },
  openGraph: {
    title: 'İletişim & Lokasyon | Btgrup Bilgi Teknolojileri',
    description: 'Büyükkayacık Mah. 3. OSB 9 Nolu Sk. No:34/1 Selçuklu / Konya. Tel: 0 (332) 238 70 78',
    url: 'https://www.btgrup.com/iletisim',
    images: ['https://www.btgrup.com/images/hero/hero-tech.jpg'],
  },
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
