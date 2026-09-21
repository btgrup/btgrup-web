import type { Metadata } from 'next';
import './globals.css';
import SiteLayoutWrapper from '@/components/SiteLayoutWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.btgrup.com'),
  title: {
    default: 'Btgrup Bilgi Teknolojileri | Konya Web Tasarım, Hosting, Bilgisayar Teknik Servis',
    template: '%s | Btgrup Bilgi Teknolojileri',
  },
  description: 'Konya merkezli Btgrup Bilgi Teknolojileri: 2000 yılından bugüne kurumsal web tasarım ve yazılım, yüksek hızlı NVMe SSD bulut hosting, garantili bilgisayar teknik servis ve orijinal lisanslı yazılım çözümleri.',
  keywords: [
    'konya web tasarım',
    'konya web yazılım',
    'konya e-ticaret',
    'konya kurumsal web sitesi',
    'konya teknik servis',
    'konya bilgisayar tamiri',
    'konya laptop tamiri',
    'konya hosting',
    'konya bulut sunucu',
    'konya domain tescil',
    'konya kurumsal mail',
    'konya lisanslı yazılım',
    'btgrup konya',
    'btgrup bilgi teknolojileri',
    'konya bilişim firmaları',
  ],
  authors: [{ name: 'Btgrup Bilgi Teknolojileri', url: 'https://www.btgrup.com' }],
  creator: 'Btgrup Bilgi Teknolojileri',
  publisher: 'Btgrup Bilgi Teknolojileri',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://www.btgrup.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/bt-favicon.png', type: 'image/png' },
    ],
    apple: '/bt-favicon.png',
  },
  openGraph: {
    title: 'Btgrup Bilgi Teknolojileri | Konya Kurumsal Bilişim ve Web Çözümleri',
    description: 'Konya ve Türkiye genelinde profesyonel web tasarım, NVMe SSD bulut hosting, garantili bilgisayar teknik servis ve orijinal yazılım lisansı çözümleri.',
    url: 'https://www.btgrup.com',
    siteName: 'Btgrup Bilgi Teknolojileri',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://www.btgrup.com/images/hero/hero-tech.jpg',
        width: 1200,
        height: 630,
        alt: 'Btgrup Bilgi Teknolojileri Konya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Btgrup Bilgi Teknolojileri | Konya Kurumsal Bilişim Hizmetleri',
    description: 'Konya web tasarım, bulut hosting, garantili teknik servis ve orijinal lisans çözümleri. 25 yıllık tecrübe.',
    images: ['https://www.btgrup.com/images/hero/hero-tech.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.btgrup.com/#website',
                  url: 'https://www.btgrup.com',
                  name: 'Btgrup Bilgi Teknolojileri',
                  description: 'Konya kurumsal web tasarım, bulut hosting, teknik servis ve lisanslı yazılım sistemleri.',
                  publisher: {
                    '@id': 'https://www.btgrup.com/#organization',
                  },
                  inLanguage: 'tr-TR',
                },
                {
                  '@type': ['LocalBusiness', 'ProfessionalService'],
                  '@id': 'https://www.btgrup.com/#organization',
                  name: 'Btgrup Bilgi Teknolojileri',
                  legalName: 'BtGrup Bilgi Teknolojileri LTD. ŞTİ.',
                  url: 'https://www.btgrup.com',
                  logo: 'https://www.btgrup.com/bt-logo.png',
                  image: 'https://www.btgrup.com/images/hero/hero-tech.jpg',
                  telephone: '+903322387078',
                  email: 'info@btgrup.com',
                  priceRange: '$$',
                  currenciesAccepted: 'TRY',
                  paymentAccepted: 'Nakit, Kredi Kartı, Banka Havalesi / EFT',
                  foundingDate: '2000',
                  description: 'Konya Organize Sanayi Bölgesi merkezli 2000 yılından bu yana kurumsal web tasarım, NVMe SSD hosting, garantili bilgisayar teknik servis ve orijinal lisanslı yazılım çözümleri.',
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
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                      opens: '08:30',
                      closes: '18:30',
                    },
                  ],
                  areaServed: [
                    { '@type': 'AdministrativeArea', name: 'Konya' },
                    { '@type': 'AdministrativeArea', name: 'Selçuklu' },
                    { '@type': 'AdministrativeArea', name: 'Karatay' },
                    { '@type': 'AdministrativeArea', name: 'Meram' },
                    { '@type': 'Country', name: 'Türkiye' },
                  ],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
