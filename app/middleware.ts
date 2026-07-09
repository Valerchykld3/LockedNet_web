import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['uk', 'en'],
  defaultLocale: 'uk'
});

export const config = {
  // Пропускаємо шляхи, які не потребують локалізації
  matcher: ['/((?!api|_next|.*\\..*).*)']
};