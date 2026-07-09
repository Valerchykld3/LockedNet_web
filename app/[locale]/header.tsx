"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Header() {
  const t = useTranslations('Header');
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    // Видаляємо поточну локаль з шляху
    const newPath = pathname.startsWith(`/${locale}`)
      ? pathname.substring(locale.length + 1)
      : pathname;
    router.replace(`/${nextLocale}${newPath}`);
  };

  return (
    <header className="bg-white dark:bg-black text-black dark:text-white shadow-md transition-colors">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Ліва сторона: Назва */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            {t('home')}
          </Link>
        </div>

        {/* Права сторона: Іконки та кнопки */}
        <div className="flex items-center gap-6">
          <a
            href="www.linkedin.com/in/valerii-artiukh" // TODO: Вставте ваше посилання на LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <LinkedInIcon />
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Перемкнути темний режим"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <select
            onChange={handleLanguageChange}
            defaultValue={locale}
            className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-md p-1 font-semibold"
          >
            <option value="uk">УКР</option>
            <option value="en">ENG</option>
          </select>
        </div>
      </nav>
    </header>
  );
}