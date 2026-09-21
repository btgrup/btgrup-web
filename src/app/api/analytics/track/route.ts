import { NextResponse } from 'next/server';
import { recordVisit } from '@/lib/analyticsStore';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    let body: any;
    try {
      body = await request.json();
    } catch {
      const rawText = await request.text();
      body = rawText ? JSON.parse(rawText) : {};
    }

    const userAgent = request.headers.get('user-agent') || '';
    const { path, referrer, visitorId } = body;

    if (!path || !visitorId) {
      return NextResponse.json({ ok: false, message: 'Geçersiz parametreler' }, { status: 400 });
    }

    const recorded = await recordVisit({
      path,
      referrer,
      userAgent,
      visitorId
    });

    return NextResponse.json({ ok: recorded });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'İzleme kaydedilemedi' }, { status: 500 });
  }
}
