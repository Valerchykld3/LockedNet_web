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
  const pathname = usePathname(); // наприклад, '/1en/archnet1'

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // РІШЕННЯ ДЛЯ ПЕРЕМИКАННЯ МОВ НА ВКЛАДЕНИХ СТОРІНКАХ
  // 1. Розбиваємо шлях на сегменти: '/1en/archnet1' -> ['', '1en', 'archnet1']
  const pathSegments = pathname ? pathname.split('/') : [];
  
  // 2. Локаль завжди знаходиться у другому сегменті (індекс 1)
  const currentLocale = pathSegments[1]; // '1en' або '2uk'
  const isEnglish = currentLocale === '1en';

  // 3. Функція для створення нового шляху
  const getTranslatedPath = () => {
    if (pathSegments.length <= 1 || (currentLocale !== '1en' && currentLocale !== '2uk')) {
      // Якщо шлях порожній, '/', або локаль не розпізнана -> ведемо на головну UA
      return '/2uk';
    }

    // Копіюємо сегменти, щоб не псувати оригінал
    const newSegments = [...pathSegments];

    // Замінюємо тільки сегмент локалі
    if (isEnglish) {
      newSegments[1] = '2uk';
    } else {
      newSegments[1] = '1en';
    }

    // Збираємо назад: ['', '2uk', 'archnet1'] -> '/2uk/archnet1'
    // Обробляємо випадок, коли результат split('') дає порожній рядок для головної
    const finalPath = newSegments.join('/');
    return finalPath === '' ? '/' + newSegments[1] : finalPath;
  };

  const newPath = getTranslatedPath();

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
          <div className="text-2xl font-bold flex items-center">
          {/* РІШЕННЯ: Окремий заокруглений контейнер для назви (лого) */}
          <Link href={isEnglish ? "/1en" : "/2uk"} 
            // Прибрали ховер з Лінку, щоб не було лишніх тіней
            className="group flex items-center transition-all duration-300">
            {/* Контейнер: Заокруглений, локальний фон, тінь для відокремлення */}
            <span className="flex items-center justify-center 
                             /* Світла тема: майже білий фон, легка тінь, контраст для зеленого */
                             bg-white/95 px-3 py-1 rounded-full border border-gray-100/50 
                             filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] 
                             /* Темна тема: Сірий фон, напівпрозорий, тінь прибираємо, контраст для помаранчевого */
                             dark:bg-gray-900/60 dark:border-gray-800/80 dark:drop-shadow-none
                             transition-colors duration-300">
              {/* Назва LockedNet з primary кольором. Ховер трохи світлішає. */}
              <span className="text-primary transition-opacity group-hover:opacity-85">LockedNet</span>
            </span>
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
            className="hover:text-primary transition-colors duration-300"
          >
            <LinkedInIcon />
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Перемкнути темний режим"
            // ЗМІНЕНО: hover:text-primary
            className="hover:text-primary transition-colors duration-300 w-6 h-6 flex items-center justify-center"
          >
            {mounted ? (
              // Іконки автоматично візьмуть колір тексту завдяки currentColor у lucide
              theme === "dark" ? <Sun size={24} /> : <Moon size={24} />
            ) : (
              <div className="w-6 h-6"></div>
            )}
          </button>

          <Link
      href={newPath} // Використовуємо надійно вирахований новий шлях
      className="hover:text-primary transition-colors duration-300 w-6 h-6 flex items-center justify-center font-semibold"
      aria-label="Switch language"
    >
      {isEnglish ? 'UA' : 'EN'}
    </Link>
        </div>
      </nav>
    </header>
  );
}