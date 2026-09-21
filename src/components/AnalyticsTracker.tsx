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

    // Tekil Ziyaretçi Kimliği (Kişisel veri içermez, rastgele anonim kimlik)
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

    const jsonStr = JSON.stringify(payload);

    // Reklam engelleyicilerden etkilenmeyen birincil uç nokta (/api/traffic/track)
    // ve geriye dönük uyumlu ikincil uç nokta (/api/analytics/track)
    fetch('/api/traffic/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonStr,
      keepalive: true,
    })
      .then((res) => {
        if (!res.ok) {
          return fetch('/api/analytics/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: jsonStr,
            keepalive: true,
          });
        }
      })
      .catch(() => {
        // Birincil rota ağ hatası verirse ikincil rotayı dene
        fetch('/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: jsonStr,
          keepalive: true,
        }).catch(() => {
          // İletişim hatalarını sessizce yut
        });
      });
  }, [pathname]);

  return null;
}
