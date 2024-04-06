import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { isLogin, canRoute } from './test/config.test';
import sitemap from '@/configs/site.config';
isLogin;
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const nextUrl = request.nextUrl;
  const url = request.url;
  if (isLogin && url.includes('/auth/login')) {
    return NextResponse.redirect(sitemap.profile({}));
  }

  if (!canRoute && url.includes('/admin')) {
    return NextResponse.redirect(sitemap.profile({}));
  }
  response.headers.set('x-pathname', nextUrl.pathname);
  response.headers.set('x-search', nextUrl.search);
  return response;
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
