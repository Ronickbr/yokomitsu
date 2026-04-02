import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // 1. Basic Admin Protection
  if (request.nextUrl.pathname.includes('/admin')) {
    // Check for a dummy cookie or header (In a real app, use next-auth or similar)
    const isAuthenticated = request.cookies.has('yokomitsu_admin_session');
    
    // If not authenticated and not already on the login page
    if (!isAuthenticated && !request.nextUrl.pathname.includes('/admin/login')) {
      // Extract locale from the URL to redirect properly
      const locale = request.nextUrl.pathname.split('/')[1];
      const validLocale = routing.locales.includes(locale as any) ? locale : routing.defaultLocale;
      
      const loginUrl = new URL(`/${validLocale}/admin/login`, request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 2. Next-Intl Middleware
  return intlMiddleware(request);
}
 
export const config = {
  // Match only internationalized pathnames, including admin
  matcher: ['/', '/(pt-BR|en|es)/:path*']
};
