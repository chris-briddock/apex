import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Always use a locale prefix (e.g., /en, /es)
  localePrefix: 'always'
});

export const config = {
  // Match only pathnames that don't start with:
  // - api (API routes)
  // - _next (Next.js internals)
  // - _vercel (Vercel internals)
  // - static files (files with a dot)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
