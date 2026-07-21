'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[var(--z-nav)] transition-colors duration-300 ${
        scrolled || open
          ? 'bg-[color:var(--bg)]/85 backdrop-blur-xl border-b border-[color:var(--line)]'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Anay Goenka — home">
          <span
            className="block h-2.5 w-2.5 rounded-full bg-[color:var(--accent)] transition-transform duration-500 group-hover:scale-125"
            aria-hidden
          />
          <span className="font-display text-lg tracking-tight">Anay Goenka</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative py-1 transition-colors ${
                isActive(l.href)
                  ? 'text-[color:var(--ink)]'
                  : 'text-[color:var(--mute)] hover:text-[color:var(--ink)]'
              }`}
            >
              {l.name}
              {isActive(l.href) && (
                <motion.span
                  layoutId={reduce ? undefined : 'nav-underline'}
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[color:var(--accent)]"
                />
              )}
            </Link>
          ))}
        </nav>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-[color:var(--line-strong)] relative z-[var(--z-modal)]"
        >
          <span className="flex flex-col gap-[5px]">
            <span
              className={`block w-4 h-px bg-[color:var(--ink)] transition-transform duration-300 ${
                open ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-4 h-px bg-[color:var(--ink)] transition-transform duration-300 ${
                open ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-16 z-[var(--z-overlay)] bg-[color:var(--bg)]"
          >
            <nav className="px-5 py-10 flex flex-col gap-3">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.06 * i + 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    className={`font-display text-5xl leading-tight ${
                      isActive(l.href) ? 'text-[color:var(--accent)]' : 'text-[color:var(--ink)]'
                    }`}
                  >
                    {l.name}
                    <span className="text-[color:var(--mute)]">.</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <p className="absolute bottom-10 left-5 text-sm text-[color:var(--mute)] font-mono">
              Dubai · GMT+4
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
