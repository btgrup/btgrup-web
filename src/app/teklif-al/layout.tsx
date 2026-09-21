import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hızlı Fiyat Teklifi Al | Konya Btgrup Bilgi Teknolojileri',
  description: 'Konya web tasarım, kurumsal hosting, bilgisayar teknik servis ve orijinal lisanslı yazılım ihtiyaçlarınız için 60 saniyede online fiyat teklifi oluşturun.',
  keywords: 'konya web tasarım fiyat teklifi, konya hosting fiyat, konya bilgisayar tamiri fiyatı, btgrup online teklif',
  alternates: {
    canonical: 'https://btgrup.com/teklif-al',
  },
};

export default function TeklifAlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
