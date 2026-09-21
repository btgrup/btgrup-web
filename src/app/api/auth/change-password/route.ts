import { NextResponse } from 'next/server';
import { getAdminAuth, updateAdminAuth } from '@/lib/store';

export async function POST(request: Request) {
  try {
    const { currentPassword, newUsername, newPassword } = await request.json();

    const currentAuth = getAdminAuth();

    if (currentPassword !== currentAuth.password) {
      return NextResponse.json({ error: "Mevcut şifreniz hatalı!" }, { status: 400 });
    }

    if (!newPassword || newPassword.length < 4) {
      return NextResponse.json({ error: "Yeni şifre en az 4 karakter olmalıdır" }, { status: 400 });
    }

    const updated = updateAdminAuth({
      username: newUsername?.trim() || currentAuth.username,
      password: newPassword
    });

    return NextResponse.json({ success: true, message: "Yönetici şifresi güncellendi" });
  } catch (error) {
    return NextResponse.json({ error: "Şifre güncellenirken hata oluştu" }, { status: 500 });
  }
}
