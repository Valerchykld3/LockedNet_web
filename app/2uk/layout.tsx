import { ReactNode } from 'react';
import Sidebar from './sidebar'; // Підключаємо український сайдбар

export default function UkLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}

