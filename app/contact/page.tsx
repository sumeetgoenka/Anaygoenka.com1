import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Anay Goenka',
  description: 'How to reach me.',
};

const channels = [
  { label: 'Email', value: 'anay@anaygoenka.com', href: 'mailto:anay@anaygoenka.com' },
  { label: 'GitHub', value: '@anay-goenka', href: 'https://github.com/anay-goenka' },
  { label: 'YouTube', value: '@AnayTheTutor', href: 'https://www.youtube.com/@AnayTheTutor' },
];

export default function ContactPage() {
  return (
    <section className="px-5 md:px-10 pt-32 md:pt-44 pb-20 min-h-[80vh]">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--mute)] mb-6">Contact</p>
        <h1 className="font-display display-xl max-w-6xl">
          Let&apos;s <br />
          <span className="text-[color:var(--accent)]">talk</span>
          <span className="text-[color:var(--mute)]">.</span>
        </h1>

        <p className="mt-10 max-w-2xl text-xl text-[color:var(--ink-soft)] leading-relaxed">
          If you&apos;re building something interesting, have a question, or just want to say hi —
          my inbox is open.
        </p>

        <div className="mt-20 grid md:grid-cols-3 gap-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group block p-8 rounded-2xl border border-[color:var(--line-strong)] hover:border-[color:var(--accent)] transition-colors lift"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--mute)] mb-6">
                {c.label}
              </p>
              <p className="font-display text-2xl md:text-3xl group-hover:text-[color:var(--accent)] transition-colors break-all">
                {c.value}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-xs text-[color:var(--mute)] group-hover:text-[color:var(--ink)]">
                Open <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-[color:var(--line)] grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--mute)] mb-3">Response time</p>
            <p className="text-[color:var(--ink-soft)]">Usually within 24 hours. Always within three days.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--mute)] mb-3">Timezone</p>
            <p className="text-[color:var(--ink-soft)]">Dubai (GMT+4). Mostly nocturnal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
