import type { Metadata } from "next";
import Header from "./header";
import { ThemeProvider } from "./theme-provider";
//import { NextIntlClientProvider } from 'next-intl';
//import { getMessages } from 'next-intl/server';
import "./globals.css";


export const metadata: Metadata = {
  title: "LockedNet - AntiBlackout System",
  description: "LockedNet — це децентралізована екосистема виживання та комфорту, створена для абсолютної незалежності від зовнішніх мереж.",
};

export default function RootLayout({
  children, //: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html
      lang="eng"
      suppressHydrationWarning // Важливо для next-themes
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Header />
          <main className="flex-grow">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
