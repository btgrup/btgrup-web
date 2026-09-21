import { NextResponse } from 'next/server';
import { recordVisit } from '@/lib/analyticsStore';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userAgent = request.headers.get('user-agent') || '';
    
    const { path, referrer, visitorId } = body;

    if (!path || !visitorId) {
      return NextResponse.json({ ok: false, message: 'Geçersiz parametreler' }, { status: 400 });
    }

    const recorded = recordVisit({
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
