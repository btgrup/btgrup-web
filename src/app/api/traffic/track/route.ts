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

    const recorded = recordVisit({
      path,
      referrer,
      userAgent,
      visitorId
    });

    return NextResponse.json({ ok: recorded }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'İzleme kaydedilemedi' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
