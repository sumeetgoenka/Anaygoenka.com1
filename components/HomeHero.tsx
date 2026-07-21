import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="relative px-5 md:px-10 pt-32 md:pt-44 pb-16 md:pb-24">
      <div className="mx-auto max-w-[1400px]">
        <p className="rise rise-1 flex items-start gap-2.5 font-mono text-xs md:text-sm text-[color:var(--ink-soft)] mb-8 md:mb-10">
          <span className="pulse-dot mt-[0.3em] h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]" aria-hidden />
          <span className="min-w-0">Building in Dubai — currently shipping FocusDragon</span>
        </p>

        <h1 className="font-display display-xl">
          <span className="rise rise-1 block">Anay</span>
          <span className="rise rise-2 block">
            <span className="text-[color:var(--accent)]">Goenka</span>
            <span className="text-[color:var(--mute)]">.</span>
          </span>
        </h1>

        <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-y-8 gap-x-10 items-end">
          <p className="rise rise-3 md:col-span-6 text-lg md:text-2xl text-[color:var(--ink-soft)] leading-snug max-w-2xl text-pretty">
            I build macOS apps, websites, and videos that teach. Some of it is good.
            All of it is mine.
          </p>
          <div className="rise rise-4 md:col-span-5 md:col-start-8 flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[color:var(--ink)] text-[color:var(--bg)] font-medium text-sm transition-transform hover:scale-[1.03]"
            >
              See the work
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[color:var(--line-strong)] text-[color:var(--ink)] font-medium text-sm hover:border-[color:var(--ink)] transition-colors"
            >
              Who I am
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
