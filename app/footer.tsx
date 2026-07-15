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

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/1en');
  const t = isEnglish ? messagesEn.Futter : messagesUk.Futter;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md text-black dark:text-white border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Ліва сторона */}
        <div className="text-lg font-bold">
          {t.title}
        </div>

        {/* Центральний текст */}
        <div className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
          {t.t}
        </div>

        {/* Права сторона */}
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/valerii-artiukh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}