import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Contact — Anay Goenka',
  description: 'How to reach me.',
};

const channels = [
  { label: 'Email', value: 'anay.goenka@yallo.co', href: 'mailto:anay.goenka@yallo.co' },
  { label: 'GitHub', value: '@anaygoenka', href: 'https://github.com/anaygoenka' },
  { label: 'YouTube', value: '@CoolestAnay', href: 'https://www.youtube.com/@CoolestAnay' },
];

export default function ContactPage() {
  return (
    <section className="px-5 md:px-10 pt-32 md:pt-44 pb-20 min-h-[80vh]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-mono text-xs text-[color:var(--mute)] mb-6">contact</p>
          <h1 className="font-display display-xl max-w-6xl text-balance">
            Let&apos;s <br />
            <span className="text-[color:var(--accent)]">talk</span>
            <span className="text-[color:var(--mute)]">.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-xl text-[color:var(--ink-soft)] leading-relaxed text-pretty">
            If you&apos;re building something interesting, have a question, or just want to say hi —
            my inbox is open.
          </p>
        </Reveal>

        <div className="mt-20">
          <Stagger>
            {channels.map((c) => (
              <StaggerItem key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group relative flex items-center justify-between gap-4 border-t border-[color:var(--line)] py-8 md:py-10 transition-colors duration-300 hover:border-[color:var(--accent)]"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 min-w-0">
                    <span className="font-mono text-xs text-[color:var(--mute)] md:w-24 shrink-0">
                      {c.label}
                    </span>
                    <span className="font-display text-2xl md:text-4xl break-all text-[color:var(--ink)] group-hover:text-[color:var(--accent)] transition-colors duration-300">
                      {c.value}
                    </span>
                  </div>

                  <span
                    className="hidden md:grid shrink-0 w-11 h-11 rounded-full place-items-center border border-[color:var(--line-strong)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-[color:var(--accent)] group-hover:text-[color:var(--accent)]"
                    aria-hidden
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7" strokeLinecap="round" />
                      <path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </StaggerItem>
            ))}
            <div className="border-t border-[color:var(--line)]" />
          </Stagger>
        </div>

        <Reveal>
          <div className="mt-20 pt-10 border-t border-[color:var(--line)] grid md:grid-cols-2 gap-10">
            <div>
              <p className="font-mono text-xs text-[color:var(--mute)] mb-3">Response time</p>
              <p className="text-[color:var(--ink-soft)]">Usually within 24 hours. Always within three days.</p>
            </div>
            <div>
              <p className="font-mono text-xs text-[color:var(--mute)] mb-3">Timezone</p>
              <p className="text-[color:var(--ink-soft)]">Dubai (GMT+4). Mostly nocturnal.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
