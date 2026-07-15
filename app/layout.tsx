import { ReactNode } from 'react';
import { headers } from 'next/headers';
import { ThemeProvider } from './theme-provider'; // Припускаю, що ти створив цей файл
import Header from './header'; // Спільний хедер для всього сайту
import Footer from './footer'; // Новий футер
import { SidebarProvider } from './sidebar-context';
import './/globals.css'; // Не забудь про стилі!

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  // Визначаємо поточний шлях на сервері, щоб встановити правильний lang
  const pathname = headers().get('x-next-pathname') || '';
  const isEnglish = pathname.startsWith('/1en');
  const lang = isEnglish ? 'en' : 'uk';

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <SidebarProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="pt-20 pb-20 p-4 sm:p-8 md:p-12">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}