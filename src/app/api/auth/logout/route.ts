import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true, message: "Çıkış yapıldı" });

  response.cookies.set({
    name: 'btgrup_admin_session',
    value: '',
    httpOnly: true,
    path: '/',
    maxAge: 0
  });

  return response;
}
