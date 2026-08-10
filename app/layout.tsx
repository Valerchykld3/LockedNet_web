import { ReactNode } from 'react';
import { headers } from 'next/headers';
import { ThemeProvider } from './theme-provider'; 
import Header from './header'; 
import Footer from './footer';
import { SidebarProvider } from './sidebar-context';
import './/globals.css'; 

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  const pathname = headers().get('x-next-pathname') || '';
  const isEnglish = pathname.startsWith('/1en');
  const lang = isEnglish ? 'en' : 'uk';

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <SidebarProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="pt-20 pb-32 p-4 sm:p-8 md:p-12">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}