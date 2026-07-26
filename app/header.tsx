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

  const isEnglish = pathname.startsWith('/1en');
  const newPath = isEnglish 
    ? pathname.replace('/1en', '/2uk') || '/2uk' 
    : pathname.replace('/2uk', '/1en');

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    // ЗМІНЕНО: bg-background/80, text-foreground, border-border. Видалили dark: класи.
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md text-foreground border-b border-border transition-colors duration-300">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Ліва сторона: Кнопка меню та назва */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            // ЗМІНЕНО: ховер тепер використовує колір тексту з прозорістю
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="text-2xl font-bold">
          <Link href={isEnglish ? "/1en" : "/2uk"} 
            // ЗМІНЕНО: текст лого тепер primary (помаранчевий/зелений), ховер трохи світлішає
            className="text-primary hover:opacity-80 transition-opacity">
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
            // ЗМІНЕНО: hover:text-primary. Видалили dark: класи.
            className="hover:text-primary transition-colors"
          >
            <LinkedInIcon />
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Перемкнути темний режим"
            // ЗМІНЕНО: hover:text-primary
            className="hover:text-primary transition-colors w-6 h-6 flex items-center justify-center"
          >
            {mounted ? (
              // Іконки автоматично візьмуть колір тексту завдяки currentColor у lucide
              theme === "dark" ? <Sun size={24} /> : <Moon size={24} />
            ) : (
              <div className="w-6 h-6"></div>
            )}
          </button>

          <Link
            href={newPath}
            // ЗМІНЕНО: hover:text-primary
            className="hover:text-primary transition-colors w-6 h-6 flex items-center justify-center font-semibold"
            aria-label="Switch language"
          >
            {isEnglish ? 'UA' : 'EN'}
          </Link>
        </div>
      </nav>
    </header>
  );
}