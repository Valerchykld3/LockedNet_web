import { redirect } from 'next/navigation';
import Sidebar from './2uk/sidebar';

export default function RootPage() {
  redirect('/2uk');

  return (
    <Sidebar />
  );
}