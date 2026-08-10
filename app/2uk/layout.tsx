import { ReactNode } from 'react';
import Sidebar from './sidebar';

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

