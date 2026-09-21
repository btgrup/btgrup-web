import { NextResponse } from 'next/server';
import { getSettings, updateSettings } from '@/lib/store';

export async function GET() {
  const settings = getSettings();
  return NextResponse.json(settings);
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const updated = updateSettings(body);
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Ayarlar güncellenirken hata oluştu" }, { status: 500 });
  }
}
