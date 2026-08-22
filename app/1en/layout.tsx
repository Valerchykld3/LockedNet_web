import { ReactNode } from 'react';
import Header from '../header'; 
import Sidebar from './sidebar';

export default function EnLayout({
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

