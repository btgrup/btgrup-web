import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim & Lokasyon | Btgrup Bilgi Teknolojileri Konya',
  description: 'Konya Selçuklu 3. Organize Sanayi Bölgesi merkez ofisimiz, müşteri hizmetleri telefon hatlarımız ve doğrudan iletişim formu ile Btgrup Bilgi Teknolojileri.',
  keywords: 'btgrup konya iletişim, konya bilişim iletişim, btgrup selçuklu, konya 3 osb bilişim, konya web tasarım telefon',
  alternates: {
    canonical: 'https://btgrup.com/iletisim',
  },
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
