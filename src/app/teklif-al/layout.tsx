import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hızlı Fiyat Teklifi Al | Web, Hosting ve Teknik Servis',
  description: 'Konya web tasarım, kurumsal bulut hosting, bilgisayar teknik servis ve orijinal lisanslı yazılım ihtiyaçlarınız için 60 saniyede online fiyat teklifi oluşturun.',
  keywords: 'konya web tasarım fiyat teklifi, konya hosting fiyat, konya bilgisayar tamiri fiyatı, btgrup online teklif',
  alternates: {
    canonical: 'https://www.btgrup.com/teklif-al',
  },
  openGraph: {
    title: 'Hızlı Online Fiyat Teklifi Al | Btgrup',
    description: 'Web tasarım, hosting, teknik servis ve lisans ihtiyaçlarınız için anında teklif alın.',
    url: 'https://www.btgrup.com/teklif-al',
    images: ['https://www.btgrup.com/images/hero/hero-tech.jpg'],
  },
};

export default function TeklifAlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
