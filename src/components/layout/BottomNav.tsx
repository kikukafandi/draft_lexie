'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, ScanLine, MessageCircle, User } from 'lucide-react';

const navItems = [
  { href: '/home', icon: Home, label: 'Home' },
  { href: '/classification', icon: BookOpen, label: 'Bookstore' },
  { href: '/scan', icon: ScanLine, label: 'Scan' },
  { href: '/chat', icon: MessageCircle, label: 'Chat' },
  { href: '/user', icon: User, label: 'Mine' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white border-t border-gray-200 flex z-50">
      {navItems.map(({ href, icon: Icon, label }) => {
        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className="flex-1 flex flex-col items-center justify-center py-2 gap-0.5"
          >
            <Icon size={22} className={active ? 'text-[#8A1410]' : 'text-[#999999]'} />
            <span className={`text-[10px] ${active ? 'text-[#8A1410] font-medium' : 'text-[#999999]'}`}>
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
