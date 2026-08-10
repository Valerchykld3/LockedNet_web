"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebar } from '../sidebar-context';
import messages from '../../messages/uk.json';

export default function Sidebar() {
  const t = messages.Sidebar;
  const { isOpen, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  const roadmapLinks = [
    { href: '/2uk', title: t.home },
    { href: '/2uk/archnet1', title: t.ch1 },
    { href: '/2uk/netph2', title: t.ch2 },
    { href: '/2uk/bascon3', title: t.ch3 },
    { href: '/2uk/netbrain4', title: t.ch4 },
    { href: '/2uk/helpbeac5', title: t.ch5 },
    { href: '/2uk/works', title: t.ch6 },
    { href: '/2uk/works', title: t.ch7 },
  ];

  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full z-30 w-64 bg-white dark:bg-black shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out pt-20 pb-24`}
      ><div className="h-full overflow-y-auto pb-20">
        <nav className="p-4 mt-16 md:mt-0">
          <h3 className="text-lg font-bold mb-4">{t.title}</h3>
          <ul>
            {roadmapLinks.map((link) => (
              <li key={link.href} className="mb-2">
                <Link
                  href={link.href}
                  data-active={pathname === link.href}
                  onClick={toggleSidebar}
                  className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 data-[active=true]:bg-gray-200 dark:data-[active=true]:bg-gray-800 transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        </div>
      </aside>
    </>
  );
}