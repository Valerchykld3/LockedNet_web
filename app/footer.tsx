"use client";

import { usePathname } from 'next/navigation';
import messagesUk from '../messages/uk.json';
import messagesEn from '../messages/en.json';

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor" // SVG бере колір тексту currentColor
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/1en');
  const t = isEnglish ? messagesEn.Futter : messagesUk.Futter;

  return (
    // ЗМІНЕНО: Семантичні класи: bg-background/90, text-foreground, border-border. Видалили dark: класи.
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm text-foreground border-t border-border transition-colors duration-300">
      <div className="container mx-auto p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Ліва сторона */}
        {/* ЗМІНЕНО: Назва тепер акцентного кольору (primary) */}
        <div className="text-lg font-bold text-primary">
          {t.title}
        </div>

        {/* Центральний текст */}
        {/* ЗМІНЕНО: text-foreground/80 (трохи прозорий) замість gray-600/dark:gray-400 */}
        <div className="text-center text-xs sm:text-sm text-foreground/80 max-w-2xl font-light">
          {t.t}
        </div>

        {/* Права сторона */}
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/valerii-artiukh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            // ЗМІНЕНО: transition-colors, text-foreground, hover:text-primary (акцентний ховер)
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}