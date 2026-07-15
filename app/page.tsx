// d:\lnweb\app\page.tsx
import { redirect } from 'next/navigation';
import Sidebar from './2uk/sidebar';

export default function RootPage() {
  // Перенаправляємо користувача на українську версію за замовчуванням
  redirect('/2uk');

  // Повертаємо Sidebar, щоб уникнути миготіння при завантаженні
  return (
    <Sidebar />
  );
}
