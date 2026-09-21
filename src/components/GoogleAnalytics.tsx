'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [gaId, setGaId] = useState<string | null>(null);

  useEffect(() => {
    // Admin sayfalarında GA4 çalıştırma
    if (pathname && pathname.startsWith('/admin')) {
      return;
    }

    // KVKK Çerez Onayı Kontrolü
    try {
      const consent = localStorage.getItem('btgrup_cookie_consent_v1');
      if (consent) {
        const parsed = JSON.parse(consent);
        if (parsed.analytics === false) {
          return;
        }
      }
    } catch {
      // Devam et
    }

    // Firma ayarlarından GA4 kimliğini çek
    async function checkGA() {
      try {
        const res = await fetch('/api/settings');
        if (res.ok) {
          const data = await res.json();
          if (data.googleAnalyticsId && data.googleAnalyticsId.trim().startsWith('G-')) {
            setGaId(data.googleAnalyticsId.trim());
          }
        }
      } catch (e) {
        console.error('GA4 ayar kontrolü hatası:', e);
      }
    }

    checkGA();
  }, [pathname]);

  // Sayfa değiştikçe GA4 page_view gönder
  useEffect(() => {
    if (!gaId || !pathname || pathname.startsWith('/admin')) return;

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', gaId, {
        page_path: pathname,
      });
    }
  }, [pathname, gaId]);

  if (!gaId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
