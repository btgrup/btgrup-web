import fs from 'fs';
import path from 'path';
import { AnalyticsData, DailyStat, VisitItem, AnalyticsSummary, StatItem, ChartPoint } from './analyticsTypes';
import { isKvConfigured, kvGet, kvSet } from './kv';

const isVercel = process.env.VERCEL === '1' || !!process.env.VERCEL;
const dataDir = isVercel ? path.join('/tmp', 'btgrup-data') : path.join(process.cwd(), 'data');
const defaultAnalyticsFile = path.join(process.cwd(), 'data', 'analytics.json');
const analyticsFile = path.join(dataDir, 'analytics.json');

// Yardımcı: Türkiye Saat Diliminde Bugünün Tarihi (YYYY-MM-DD)
export function getTodayDateString(offsetDays = 0): string {
  const d = new Date();
  if (offsetDays !== 0) {
    d.setDate(d.getDate() + offsetDays);
  }
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Istanbul' }).format(d);
}

// Bot / Crawler Kontrolü
function isBot(userAgent: string): boolean {
  if (!userAgent) return false;
  const lower = userAgent.toLowerCase();
  const botKeywords = [
    'bot', 'crawler', 'spider', 'slurp', 'baiduspider', 
    'yandex', 'duckduckgo', 'headless', 'lighthouse', 
    'bytespider', 'semrush', 'ahrefs', 'petalbot'
  ];
  return botKeywords.some(keyword => lower.includes(keyword));
}

// Kullanıcı Ajanından Cihaz Tespiti
function detectDevice(userAgent: string): 'Masaüstü' | 'Mobil' | 'Tablet' {
  if (!userAgent) return 'Masaüstü';
  const ua = userAgent.toLowerCase();
  if (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle)/i.test(ua)) {
    return 'Tablet';
  }
  if (/mobile|iphone|ipod|android.*mobile|blackberry|phone|iemobile/i.test(ua)) {
    return 'Mobil';
  }
  return 'Masaüstü';
}

// Kullanıcı Ajanından Tarayıcı Tespiti
function detectBrowser(userAgent: string): string {
  if (!userAgent) return 'Diğer';
  const ua = userAgent.toLowerCase();
  if (ua.includes('edg/')) return 'Microsoft Edge';
  if (ua.includes('opr/') || ua.includes('opera')) return 'Opera';
  if (ua.includes('chrome/') || ua.includes('crios/')) return 'Google Chrome';
  if (ua.includes('safari/') && !ua.includes('chrome')) return 'Safari';
  if (ua.includes('firefox/') || ua.includes('fxios')) return 'Mozilla Firefox';
  if (ua.includes('samsungbrowser')) return 'Samsung Internet';
  return 'Diğer';
}

// Kullanıcı Ajanından İşletim Sistemi Tespiti
function detectOS(userAgent: string): string {
  if (!userAgent) return 'Diğer';
  const ua = userAgent.toLowerCase();
  if (ua.includes('windows')) return 'Windows';
  if (ua.includes('macintosh') || ua.includes('mac os x')) return 'macOS';
  if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ios')) return 'iOS';
  if (ua.includes('android')) return 'Android';
  if (ua.includes('linux')) return 'Linux';
  return 'Diğer';
}

// Referrer (Yönlendiren) Temizleme ve Adlandırma
function cleanReferrer(referrer?: string, siteDomain = 'btgrup.com'): string {
  if (!referrer || referrer.trim() === '') return 'Doğrudan (Direct / Yer İmleri)';
  try {
    const url = new URL(referrer);
    const host = url.hostname.toLowerCase();
    if (host.includes(siteDomain) || host === 'localhost' || host === '127.0.0.1') {
      return 'Doğrudan (Site İçi Gezinme)';
    }
    if (host.includes('google.')) return 'Google Arama';
    if (host.includes('yandex.')) return 'Yandex';
    if (host.includes('bing.')) return 'Bing Arama';
    if (host.includes('instagram.')) return 'Instagram';
    if (host.includes('facebook.') || host.includes('fb.me')) return 'Facebook';
    if (host.includes('linkedin.')) return 'LinkedIn';
    if (host.includes('t.co') || host.includes('twitter.') || host.includes('x.com')) return 'X (Twitter)';
    if (host.includes('whatsapp.')) return 'WhatsApp';
    return host.replace(/^www\./, '');
  } catch {
    return 'Harici Kaynak';
  }
}

// Sayfa Yolunu Başlığa / Okunabilir Formata Dönüştürme
export function getPageTitleByPath(rawPath: string): string {
  const p = rawPath.split('?')[0].replace(/\/$/, '') || '/';
  switch (p) {
    case '/':
      return 'Ana Sayfa (/)';
    case '/hizmetler/web-tasarim':
      return 'Web Tasarım & Yazılım';
    case '/hizmetler/hosting-domain':
      return 'Bulut Hosting & Domain';
    case '/hizmetler/teknik-servis':
      return 'Bilgisayar Teknik Servis';
    case '/hizmetler/bilgisayar-yazilim':
      return 'Bilgisayar & Lisans Satışı';
    case '/kurumsal':
      return 'Kurumsal & Hakkımızda';
    case '/iletisim':
      return 'İletişim & Harita';
    case '/teklif-al':
      return 'Hızlı Teklif Formu';
    case '/yasal/kvkk':
      return 'KVKK Aydınlatma Metni';
    case '/yasal/cerez-politikasi':
      return 'Çerez Politikası';
    case '/yasal/gizlilik':
      return 'Gizlilik İlkeleri';
    case '/yasal/kullanim-sartlari':
      return 'Kullanım Şartları';
    default:
      return p;
  }
}

function getEmptyAnalytics(): AnalyticsData {
  return {
    days: {},
    recentVisits: []
  };
}

// Bellek içi önbellek
let memoryAnalytics: AnalyticsData | null = null;

async function ensureAnalytics(): Promise<AnalyticsData> {
  // 1. Bulut KV (Upstash / Vercel KV) tanımlıysa öncelikle buluttan çek
  if (isKvConfigured()) {
    try {
      const cloudData = await kvGet<AnalyticsData>('btgrup_analytics');
      if (cloudData && typeof cloudData === 'object') {
        if (!cloudData.days) cloudData.days = {};
        if (!cloudData.recentVisits) cloudData.recentVisits = [];
        memoryAnalytics = cloudData;
        // Yedek yerel kopyasını da güncelle
        try {
          if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
          fs.writeFileSync(analyticsFile, JSON.stringify(cloudData, null, 2), 'utf-8');
        } catch {}
        return cloudData;
      }
    } catch (err) {
      console.error('[Analytics] KV okuma hatası, yerel dosya deneniyor:', err);
    }
  }

  // 2. Yerel dosya veya bellek önbelleğinden yükle
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(analyticsFile)) {
      if (fs.existsSync(defaultAnalyticsFile)) {
        try {
          const content = fs.readFileSync(defaultAnalyticsFile, 'utf-8');
          fs.writeFileSync(analyticsFile, content, 'utf-8');
          const parsed = JSON.parse(content);
          memoryAnalytics = parsed;
          if (isKvConfigured()) {
            await kvSet('btgrup_analytics', parsed);
          }
          return parsed;
        } catch {}
      }
      const initial = getEmptyAnalytics();
      try {
        fs.writeFileSync(analyticsFile, JSON.stringify(initial, null, 2), 'utf-8');
      } catch {}
      memoryAnalytics = initial;
      if (isKvConfigured()) {
        await kvSet('btgrup_analytics', initial);
      }
      return initial;
    }
    const raw = fs.readFileSync(analyticsFile, 'utf-8');
    const parsed: AnalyticsData = JSON.parse(raw);
    if (!parsed.days) parsed.days = {};
    if (!parsed.recentVisits) parsed.recentVisits = [];
    memoryAnalytics = parsed;
    if (isKvConfigured()) {
      await kvSet('btgrup_analytics', parsed);
    }
    return parsed;
  } catch (error) {
    console.error('Analytics veri okuma hatası:', error);
    if (!memoryAnalytics) {
      memoryAnalytics = getEmptyAnalytics();
    }
    return memoryAnalytics;
  }
}

async function saveAnalytics(data: AnalyticsData) {
  memoryAnalytics = data;

  // Yerel dosyaya yaz
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(analyticsFile, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Analytics yerel veri yazma hatası:', error);
  }

  // Bulut KV'ye kaydet
  if (isKvConfigured()) {
    try {
      await kvSet('btgrup_analytics', data);
    } catch (kvErr) {
      console.error('Analytics KV yazma hatası:', kvErr);
    }
  }
}

// İstatistikleri Sıfırlama
export async function resetAnalytics(): Promise<boolean> {
  const empty: AnalyticsData = {
    days: {},
    recentVisits: []
  };
  await saveAnalytics(empty);
  return true;
}

// Ziyaret Kaydetme
export async function recordVisit(params: {
  path: string;
  referrer?: string;
  userAgent?: string;
  visitorId: string;
}): Promise<boolean> {
  const { path: rawPath, referrer: rawRef, userAgent = '', visitorId } = params;

  // Admin veya dahili asset rotalarını izleme
  if (
    !rawPath ||
    rawPath.startsWith('/admin') ||
    rawPath.startsWith('/api') ||
    rawPath.startsWith('/_next') ||
    rawPath.includes('favicon')
  ) {
    return false;
  }

  // Arama motoru botlarını hariç tut
  if (isBot(userAgent)) {
    return false;
  }

  const data = await ensureAnalytics();
  const today = getTodayDateString();
  const cleanPath = rawPath.split('?')[0] || '/';
  const referrer = cleanReferrer(rawRef);
  const device = detectDevice(userAgent);
  const browser = detectBrowser(userAgent);
  const os = detectOS(userAgent);

  // Gün kaydını hazırla
  if (!data.days[today]) {
    data.days[today] = {
      date: today,
      views: 0,
      visitors: [],
      pages: {},
      referrers: {},
      devices: {},
      browsers: {}
    };
  }

  const dayRecord = data.days[today];
  dayRecord.views += 1;

  // Tekil ziyaretçi kontrolü (Günün içinde aynı visitorId)
  if (!dayRecord.visitors.includes(visitorId)) {
    dayRecord.visitors.push(visitorId);
  }

  // Dağılımlar
  dayRecord.pages[cleanPath] = (dayRecord.pages[cleanPath] || 0) + 1;
  dayRecord.referrers[referrer] = (dayRecord.referrers[referrer] || 0) + 1;
  dayRecord.devices[device] = (dayRecord.devices[device] || 0) + 1;
  dayRecord.browsers[browser] = (dayRecord.browsers[browser] || 0) + 1;

  // Son Canlı Ziyaret Akışı
  const newVisit: VisitItem = {
    id: `v-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    path: cleanPath,
    referrer,
    device,
    browser,
    os,
    timestamp: new Date().toISOString(),
    visitorId
  };

  data.recentVisits.unshift(newVisit);
  if (data.recentVisits.length > 60) {
    data.recentVisits = data.recentVisits.slice(0, 60);
  }

  await saveAnalytics(data);
  return true;
}

// Göreceli Zaman Formatı (TR)
function formatTimeAgo(isoDate: string): string {
  try {
    const diff = Math.floor((Date.now() - new Date(isoDate).getTime()) / 1000);
    if (diff < 30) return 'Az önce';
    if (diff < 60) return `${diff} sn önce`;
    const min = Math.floor(diff / 60);
    if (min < 60) return `${min} dk önce`;
    const hour = Math.floor(min / 60);
    if (hour < 24) return `${hour} sa önce`;
    const day = Math.floor(hour / 24);
    return `${day} gün önce`;
  } catch {
    return 'Bilinmiyor';
  }
}

// Türkçe Tarih Etiketi (örn: "20 Eyl")
function formatDayLabel(dateStr: string): string {
  try {
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
    const day = parseInt(parts[2], 10);
    const monthIndex = parseInt(parts[1], 10) - 1;
    return `${day} ${months[monthIndex] || ''}`;
  } catch {
    return dateStr;
  }
}

// Özet ve Analiz Raporu Üretimi
export async function getAnalyticsSummary(period: '7d' | '30d' | 'all' = '7d'): Promise<AnalyticsSummary> {
  const data = await ensureAnalytics();
  const today = getTodayDateString();
  const yesterday = getTodayDateString(-1);

  const todayRecord = data.days[today] || { views: 0, visitors: [] };
  const yesterdayRecord = data.days[yesterday] || { views: 0, visitors: [] };

  const todayViews = todayRecord.views;
  const todayVisitors = todayRecord.visitors.length;
  const yesterdayViews = yesterdayRecord.views;
  const yesterdayVisitors = yesterdayRecord.visitors.length;

  // Gün sayısı belirleme
  const daysCount = period === '7d' ? 7 : period === '30d' ? 30 : 90;

  // Chart ve toplamlar
  const chartData: ChartPoint[] = [];
  const aggregatedPages: Record<string, number> = {};
  const aggregatedReferrers: Record<string, number> = {};
  const aggregatedDevices: Record<string, number> = {};
  const aggregatedBrowsers: Record<string, number> = {};

  let totalViews = 0;
  const uniqueVisitorSet = new Set<string>();

  // Son X günü geriye/ileriye doğru topla
  for (let i = daysCount - 1; i >= 0; i--) {
    const dStr = getTodayDateString(-i);
    const record = data.days[dStr];

    const dViews = record ? record.views : 0;
    const dVisitors = record ? record.visitors.length : 0;

    totalViews += dViews;
    if (record) {
      record.visitors.forEach(v => uniqueVisitorSet.add(v));

      Object.entries(record.pages || {}).forEach(([p, count]) => {
        aggregatedPages[p] = (aggregatedPages[p] || 0) + count;
      });
      Object.entries(record.referrers || {}).forEach(([r, count]) => {
        aggregatedReferrers[r] = (aggregatedReferrers[r] || 0) + count;
      });
      Object.entries(record.devices || {}).forEach(([dev, count]) => {
        aggregatedDevices[dev] = (aggregatedDevices[dev] || 0) + count;
      });
      Object.entries(record.browsers || {}).forEach(([b, count]) => {
        aggregatedBrowsers[b] = (aggregatedBrowsers[b] || 0) + count;
      });
    }

    chartData.push({
      date: dStr,
      label: formatDayLabel(dStr),
      views: dViews,
      visitors: dVisitors
    });
  }

  // 7 günlük ve 30 günlük hızlı KPI değerleri
  let last7DaysViews = 0;
  const last7VisitorSet = new Set<string>();
  for (let i = 6; i >= 0; i--) {
    const dStr = getTodayDateString(-i);
    const r = data.days[dStr];
    if (r) {
      last7DaysViews += r.views;
      r.visitors.forEach(v => last7VisitorSet.add(v));
    }
  }

  let last30DaysViews = 0;
  const last30VisitorSet = new Set<string>();
  for (let i = 29; i >= 0; i--) {
    const dStr = getTodayDateString(-i);
    const r = data.days[dStr];
    if (r) {
      last30DaysViews += r.views;
      r.visitors.forEach(v => last30VisitorSet.add(v));
    }
  }

  // Yardımcı: StatItem listesi sıralama ve yüzdeleme
  const toSortedStatList = (dict: Record<string, number>, max = 6): StatItem[] => {
    const total = Object.values(dict).reduce((acc, curr) => acc + curr, 0) || 1;
    return Object.entries(dict)
      .sort((a, b) => b[1] - a[1])
      .slice(0, max)
      .map(([name, count]) => ({
        name,
        count,
        percentage: Math.round((count / total) * 100)
      }));
  };

  const topPages = toSortedStatList(aggregatedPages, 8);
  const topReferrers = toSortedStatList(aggregatedReferrers, 6);
  const devices = toSortedStatList(aggregatedDevices, 4);
  const browsers = toSortedStatList(aggregatedBrowsers, 5);

  // Canlı ziyaretler için zaman etiketi ekle
  const recentVisits = (data.recentVisits || []).slice(0, 30).map(v => ({
    ...v,
    timeAgo: formatTimeAgo(v.timestamp)
  }));

  return {
    period,
    isKvConfigured: isKvConfigured(),
    totalViews,
    totalVisitors: uniqueVisitorSet.size,
    todayViews,
    todayVisitors,
    yesterdayViews,
    yesterdayVisitors,
    last7DaysViews,
    last7DaysVisitors: last7VisitorSet.size,
    last30DaysViews,
    last30DaysVisitors: last30VisitorSet.size,
    chartData,
    topPages,
    topReferrers,
    devices,
    browsers,
    recentVisits
  };
}
