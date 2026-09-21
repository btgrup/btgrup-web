import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get('btgrup_admin_session');
  const isAuthenticated = sessionCookie?.value === 'authenticated';

  // Yalnızca /admin rotalarını denetle
  if (pathname.startsWith('/admin')) {
    // /admin/login sayfasına erişim isteği
    if (pathname === '/admin/login') {
      // Kullanıcı zaten giriş yapmışsa ana dashboard'a yönlendir
      if (isAuthenticated) {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
      return NextResponse.next();
    }

    // Diğer tüm /admin sayfalarında oturum yoksa /admin/login'e yönlendir
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
