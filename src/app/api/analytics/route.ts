import { NextResponse } from 'next/server';
import { getAnalyticsSummary, resetAnalytics } from '@/lib/analyticsStore';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const periodParam = searchParams.get('period') || '7d';
    const period = (['7d', '30d', 'all'].includes(periodParam) ? periodParam : '7d') as '7d' | '30d' | 'all';

    const summary = await getAnalyticsSummary(period);
    return NextResponse.json(summary, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'İstatistikler alınamadı' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    await resetAnalytics();
    return NextResponse.json({ success: true, message: 'İstatistikler başarıyla sıfırlandı' });
  } catch (error) {
    return NextResponse.json({ error: 'İstatistikler sıfırlanamadı' }, { status: 500 });
  }
}
