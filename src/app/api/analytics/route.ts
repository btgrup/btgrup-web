import { NextResponse } from 'next/server';
import { getAnalyticsSummary } from '@/lib/analyticsStore';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const periodParam = searchParams.get('period') || '7d';
    const period = (['7d', '30d', 'all'].includes(periodParam) ? periodParam : '7d') as '7d' | '30d' | 'all';

    const summary = getAnalyticsSummary(period);
    return NextResponse.json(summary);
  } catch (error) {
    return NextResponse.json({ error: 'İstatistikler alınamadı' }, { status: 500 });
  }
}
