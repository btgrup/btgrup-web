import { NextResponse } from 'next/server';
import dns from 'dns/promises';

// Gerçek alan adı müsaitlik kontrolü (Resmi RDAP Kayıt Defteri + Google DoH)
async function checkDomainAvailability(fullDomain: string, tld: string): Promise<boolean> {
  // 1. Resmi Registry RDAP Sorguları
  let rdapUrl = '';
  if (tld === '.com') {
    rdapUrl = `https://rdap.verisign.com/com/v1/domain/${fullDomain}`;
  } else if (tld === '.net') {
    rdapUrl = `https://rdap.verisign.com/net/v1/domain/${fullDomain}`;
  } else if (tld === '.org') {
    rdapUrl = `https://rdap.publicinterestregistry.org/rdap/domain/${fullDomain}`;
  }

  if (rdapUrl) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const res = await fetch(rdapUrl, {
        signal: controller.signal,
        headers: { Accept: 'application/rdap+json' },
      });
      clearTimeout(timeoutId);

      if (res.status === 200) {
        return false; // Kesin olarak tescilli / dolu
      }
      if (res.status === 404) {
        // Çifte teyit için DNS kontrolüne de bakacağız (aşağıda)
      }
    } catch {
      // Ağ hatası durumunda DoH fallback çalışacak
    }
  }

  // 2. Google DNS-over-HTTPS (DoH) SOA / NS Sorgusu
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const dohRes = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(fullDomain)}&type=SOA`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (dohRes.ok) {
      const data = await dohRes.json();
      // Status 0: NOERROR (Alan adı kayıtlı, aktif ve yetkili NS/SOA kaydı mevcut)
      if (data.Status === 0) {
        return false; // Dolu
      }
      // Status 3: NXDOMAIN (DNS'te böyle bir alan adı kaydı yok -> Boşta / Müsait)
      if (data.Status === 3) {
        return true; // Müsait
      }
    }
  } catch {
    // Cloudflare fallback
  }

  // 3. Cloudflare DNS-over-HTTPS Sorgusu
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const cfRes = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(fullDomain)}&type=SOA`, {
      headers: { Accept: 'application/dns-json' },
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (cfRes.ok) {
      const data = await cfRes.json();
      if (data.Status === 0) return false;
      if (data.Status === 3) return true;
    }
  } catch {
    // Node DNS fallback
  }

  // 4. Yerel Node.js DNS Sorgusu (Son Çare)
  try {
    const soa = await dns.resolveSoa(fullDomain);
    if (soa) return false;
  } catch (err: any) {
    if (err.code === 'ENOTFOUND' || err.code === 'NXDOMAIN') {
      return true;
    }
  }

  return false;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const domainQuery = searchParams.get('domain')?.trim().toLowerCase();

  if (!domainQuery) {
    return NextResponse.json({ error: "Alan adı belirtilmedi" }, { status: 400 });
  }

  // Domain adından protokol, www ve geçersiz karakterleri temizleme
  let cleanName = domainQuery.replace(/^https?:\/\//, '').replace(/^www\./, '');
  // Eğer kullanıcı uzantı yazdıysa (örn: btgrup.com veya btgrup.com.tr) ana adı çekelim
  cleanName = cleanName.split('.')[0].replace(/[^a-z0-9-]/g, '');

  if (!cleanName || cleanName.length < 2) {
    return NextResponse.json({ error: "Lütfen en az 2 karakterli geçerli bir alan adı girin" }, { status: 400 });
  }

  const extensions = [
    { tld: '.com', popular: true, tag: 'Global' },
    { tld: '.com.tr', popular: true, tag: 'Türkiye' },
    { tld: '.net', popular: false, tag: 'Teknoloji & Ağ' },
    { tld: '.org', popular: false, tag: 'Kurumsal & Vakıf' },
    { tld: '.io', popular: false, tag: 'Bilişim & Startup' },
  ];

  try {
    // Tüm uzantıları paralel olarak gerçek DNS/RDAP sunucularında sorgulayalım
    const results = await Promise.all(
      extensions.map(async (ext) => {
        const fullDomain = `${cleanName}${ext.tld}`;
        const isAvailable = await checkDomainAvailability(fullDomain, ext.tld);

        return {
          domain: fullDomain,
          tld: ext.tld,
          available: isAvailable,
          popular: ext.popular,
          tag: ext.tag
        };
      })
    );

    return NextResponse.json({ query: cleanName, results });
  } catch (error) {
    return NextResponse.json({ error: "Alan adı sorgulanırken bir hata oluştu" }, { status: 500 });
  }
}
