import { ReactNode } from 'react';
// ThemeProvider не потрібен тут, бо він вже є в кореневому layout.tsx
import Header from '../header'; // Беремо спільний хедер з кореня app
import Sidebar from './sidebar'; // А сайдбар буде свій, англійський

export default function EnLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    // Next.js достатньо розумний, щоб об'єднати layout,
    // тому нам не треба дублювати ThemeProvider, body, etc.
    // Ми просто огортаємо дочірні елементи в наш сайдбар.
    // Атрибут lang="en" ми встановимо в кореневому layout.
    <>
      <Sidebar />
      {children}
    </>
  );
}

