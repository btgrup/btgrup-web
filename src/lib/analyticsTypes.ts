export interface VisitItem {
  id: string;
  path: string;
  referrer: string;
  device: 'Masaüstü' | 'Mobil' | 'Tablet';
  browser: string;
  os: string;
  timestamp: string; // ISO string
  timeAgo?: string;
  visitorId: string;
}

export interface DailyStat {
  date: string; // YYYY-MM-DD
  views: number;
  visitors: string[]; // List of unique visitorIds for this date
  pages: Record<string, number>;
  referrers: Record<string, number>;
  devices: Record<string, number>;
  browsers: Record<string, number>;
}

export interface AnalyticsData {
  days: Record<string, DailyStat>; // Key: YYYY-MM-DD
  recentVisits: VisitItem[];
}

export interface ChartPoint {
  date: string;
  label: string; // e.g. "18 Eyl" or "Pzt"
  views: number;
  visitors: number;
}

export interface StatItem {
  name: string;
  count: number;
  percentage: number;
}

export interface AnalyticsSummary {
  period: '7d' | '30d' | 'all';
  isKvConfigured?: boolean;
  totalViews: number;
  totalVisitors: number;
  todayViews: number;
  todayVisitors: number;
  yesterdayViews: number;
  yesterdayVisitors: number;
  last7DaysViews: number;
  last7DaysVisitors: number;
  last30DaysViews: number;
  last30DaysVisitors: number;
  chartData: ChartPoint[];
  topPages: StatItem[];
  topReferrers: StatItem[];
  devices: StatItem[];
  browsers: StatItem[];
  recentVisits: VisitItem[];
}
