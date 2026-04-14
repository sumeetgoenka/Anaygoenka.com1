'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[color:var(--bg)]/80 backdrop-blur-xl border-b border-[color:var(--line)]' : ''
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[color:var(--accent)] pulse-dot" />
          <span className="font-display text-lg tracking-tight">Anay Goenka</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative transition-colors ${
                isActive(l.href) ? 'text-[color:var(--ink)]' : 'text-[color:var(--mute)] hover:text-[color:var(--ink)]'
              }`}
            >
              {l.name}
              {isActive(l.href) && (
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-[color:var(--accent)]" />
              )}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-9 h-9 grid place-items-center rounded-full border border-[color:var(--line-strong)]"
        >
          <span className="flex flex-col gap-[5px]">
            <span className={`block w-4 h-px bg-[color:var(--ink)] transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`block w-4 h-px bg-[color:var(--ink)] transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--line)] bg-[color:var(--bg)]">
          <div className="px-5 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-display text-3xl ${
                  isActive(l.href) ? 'text-[color:var(--accent)]' : 'text-[color:var(--ink)]'
                }`}
              >
                {l.name}.
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
