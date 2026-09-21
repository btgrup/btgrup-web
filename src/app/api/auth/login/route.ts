import { NextResponse } from 'next/server';
import { getAdminAuth } from '@/lib/store';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: "Kullanıcı adı ve şifre zorunludur" }, { status: 400 });
    }

    const currentAuth = getAdminAuth();

    if (username.trim() !== currentAuth.username || password !== currentAuth.password) {
      return NextResponse.json({ error: "Kullanıcı adı veya şifre hatalı!" }, { status: 401 });
    }

    const response = NextResponse.json({ success: true, message: "Giriş başarılı" });

    // Güvenli oturum çerezi (Session cookie)
    response.cookies.set({
      name: 'btgrup_admin_session',
      value: 'authenticated',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 gün
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Giriş yapılırken sunucu hatası oluştu" }, { status: 500 });
  }
}
