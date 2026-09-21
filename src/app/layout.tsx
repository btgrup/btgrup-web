import type { Metadata } from 'next';
import './globals.css';
import SiteLayoutWrapper from '@/components/SiteLayoutWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://btgrup.com'),
  title: 'Btgrup Bilgi Teknolojileri | Konya Web Tasarım, Hosting, Bilgisayar Teknik Servis',
  description: 'Konya merkezli Btgrup Bilgi Teknolojileri: Konya kurumsal web tasarım ve yazılım, yüksek hızlı NVMe SSD bulut hosting, garantili bilgisayar teknik servisi ve orijinal lisans çözümleri.',
  keywords: 'konya web tasarım, konya teknik servis, konya bilgisayar tamiri, konya hosting, konya kurumsal web sitesi, konya b2b yazılım, btgrup konya, btgrup, btgrup bilgi teknolojileri, konya laptop tamiri, konya bilgisayar satışı, konya bilişim firmaları',
  alternates: {
    canonical: 'https://btgrup.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/bt-favicon.png', type: 'image/png' },
    ],
    apple: '/bt-favicon.png',
  },
  openGraph: {
    title: 'Btgrup Bilgi Teknolojileri | Konya Kurumsal Bilişim Hizmetleri',
    description: 'Konya ve Türkiye genelinde profesyonel web tasarım, bulut hosting, garantili bilgisayar teknik servis ve orijinal yazılım çözümleri.',
    url: 'https://btgrup.com',
    siteName: 'Btgrup Bilgi Teknolojileri',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-500 selection:text-white">
        <SiteLayoutWrapper>
          {children}
        </SiteLayoutWrapper>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Btgrup Bilgi Teknolojileri',
              image: 'https://btgrup.com/bt-logo.png',
              '@id': 'https://btgrup.com',
              url: 'https://btgrup.com',
              telephone: '+903322387078',
              priceRange: '$$',
              description: 'Konya web tasarım, NVMe SSD hosting, bilgisayar teknik servis ve lisanslı yazılım çözümleri.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Büyükkayacık Mah. 3. OSB 9 Nolu Sk. No:34/1',
                addressLocality: 'Selçuklu',
                addressRegion: 'Konya',
                postalCode: '42250',
                addressCountry: 'TR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 37.9774646,
                longitude: 32.6221218,
              },
              areaServed: [
                { '@type': 'City', name: 'Konya' },
                { '@type': 'Country', name: 'Türkiye' },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
