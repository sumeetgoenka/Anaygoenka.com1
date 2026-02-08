'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Anay Goenka · Student & Developer
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Built with care (and a lot of late nights)
            <span className="mx-1">·</span>
            <Link href="/admin" className="text-slate-600 hover:text-slate-400 transition-colors">
              ~
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
