"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSidebar } from './sidebar-context';

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
  const { theme, setTheme } = useTheme();
  const { isOpen, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Визначаємо поточну мову та шлях для перемикання
  const isEnglish = pathname.startsWith('/1en');
  // Нова логіка для /1en та /2uk
  const newPath = isEnglish 
    ? pathname.replace('/1en', '/2uk') || '/2uk' 
    : pathname.replace('/2uk', '/1en');

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md text-black dark:text-white border-b border-gray-200 dark:border-gray-800 transition-colors">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Ліва сторона: Кнопка меню та назва */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="text-2xl font-bold">
          {/* Посилання на головну тепер залежить від поточної мови */}
          <Link href={isEnglish ? "/1en" : "/2uk"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            LockedNet
          </Link>
          </div>
        </div>

        {/* Права сторона: Іконки та кнопки */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/valerii-artiukh"
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
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors w-6 h-6 flex items-center justify-center"
          >
            {mounted ? (
              theme === "dark" ? <Sun size={24} /> : <Moon size={24} />
            ) : (
              <div className="w-6 h-6"></div> // Невидимий блок-заглушка для сервера
            )}
          </button>

          <Link
            href={newPath}
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors w-6 h-6 flex items-center justify-center font-semibold"
            aria-label="Switch language"
          >
            {isEnglish ? 'UA' : 'EN'}
          </Link>
        </div>
      </nav>
    </header>
  );
}