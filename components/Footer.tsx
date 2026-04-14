import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-[2] border-t border-[color:var(--line)] mt-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-[color:var(--mute)] text-xs uppercase tracking-[0.2em] mb-6">Say hello</p>
            <Link
              href="mailto:anay.goenka@yallo.co"
              className="font-display display-md ink-grad link-sweep inline-block"
            >
              anay.goenka@yallo.co
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[color:var(--line)]">
            <div>
              <p className="text-[color:var(--mute)] text-xs uppercase tracking-[0.2em] mb-3">Sitemap</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-[color:var(--accent)] transition-colors">Home</Link></li>
                <li><Link href="/work" className="hover:text-[color:var(--accent)] transition-colors">Work</Link></li>
                <li><Link href="/about" className="hover:text-[color:var(--accent)] transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-[color:var(--accent)] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[color:var(--mute)] text-xs uppercase tracking-[0.2em] mb-3">Elsewhere</p>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/anaygoenka" target="_blank" rel="noreferrer" className="hover:text-[color:var(--accent)] transition-colors">GitHub</a></li>
                <li><a href="https://www.youtube.com/@AnayTheTutor" target="_blank" rel="noreferrer" className="hover:text-[color:var(--accent)] transition-colors">YouTube</a></li>
                <li><a href="https://focusdragon.vercel.app" target="_blank" rel="noreferrer" className="hover:text-[color:var(--accent)] transition-colors">FocusDragon</a></li>
                <li><a href="https://nudge-daily.vercel.app" target="_blank" rel="noreferrer" className="hover:text-[color:var(--accent)] transition-colors">Nudge</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[color:var(--mute)] text-xs uppercase tracking-[0.2em] mb-3">Based in</p>
              <p className="text-sm">Dubai, UAE</p>
              <p className="text-[color:var(--mute)] text-xs mt-1">GMT+4</p>
            </div>
            <div>
              <p className="text-[color:var(--mute)] text-xs uppercase tracking-[0.2em] mb-3">Stack</p>
              <p className="text-sm text-[color:var(--ink-soft)]">Next.js · Tailwind · Swift</p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-[color:var(--line)] text-xs text-[color:var(--mute)]">
            <p>© {year} Anay Goenka</p>
            <p>Hand-coded in Dubai.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
