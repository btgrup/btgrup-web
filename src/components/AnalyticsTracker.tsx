'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // Admin sayfalarını izleme
    if (!pathname || pathname.startsWith('/admin')) {
      return;
    }

    // Aynı sayfa için mükerrer tetiklemeyi önle
    if (lastTrackedPath.current === pathname) {
      return;
    }
    lastTrackedPath.current = pathname;

    // KVKK Çerez Onayı Kontrolü (Kullanıcı analitik çerezlerini reddettiyse izleme yapma)
    try {
      const consent = localStorage.getItem('btgrup_cookie_consent_v1');
      if (consent) {
        const parsed = JSON.parse(consent);
        if (parsed.analytics === false) {
          return;
        }
      }
    } catch {
      // Çerez okuma hatası durumunda devam et
    }

    // Tekil Ziyaretçi Kimliği (Kişisel veri içermez, rastgele UUID benzeri anonim kimlik)
    let visitorId = '';
    try {
      visitorId = localStorage.getItem('btgrup_vid') || '';
      if (!visitorId) {
        visitorId = 'v_' + Math.random().toString(36).substring(2, 12) + Date.now().toString(36);
        localStorage.setItem('btgrup_vid', visitorId);
      }
    } catch {
      visitorId = 'v_temp_' + Math.random().toString(36).substring(2, 10);
    }

    const payload = {
      path: pathname,
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      visitorId
    };

    // Hafif ve kesintisiz arka plan isteği (sendBeacon veya fetch keepalive)
    const jsonStr = JSON.stringify(payload);
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([jsonStr], { type: 'application/json' });
      navigator.sendBeacon('/api/analytics/track', blob);
    } else {
      fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonStr,
        keepalive: true
      }).catch(() => {
        // İletişim hatalarını sessizce yut
      });
    }
  }, [pathname]);

  return null;
}
