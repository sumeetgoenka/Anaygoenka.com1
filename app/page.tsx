import Link from 'next/link';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import Marquee from '@/components/Marquee';

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] px-5 md:px-10 pt-28 md:pt-40 pb-20">
        <div className="mx-auto max-w-[1400px] relative">
          <h1 className="font-display display-xl">
            Anay
            <br />
            <span className="text-[color:var(--accent)]">Goenka</span>
            <span className="text-[color:var(--mute)]">.</span>
          </h1>

          <div className="mt-10 grid md:grid-cols-12 gap-10 items-end">
            <p className="md:col-span-6 text-xl md:text-2xl text-[color:var(--ink-soft)] leading-snug max-w-2xl">
              I build macOS apps, websites, and videos that teach. Some of it is good.
              All of it is mine.
            </p>
            <div className="md:col-span-6 md:col-start-7 flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[color:var(--ink)] text-[color:var(--bg)] font-medium text-sm transition-transform hover:scale-[1.02]"
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

      {/* MARQUEE */}
      <Marquee
        accent
        items={['macOS apps', 'web platforms', 'AI', 'competition maths', 'swift', 'next.js', 'teaching']}
      />

      {/* SELECTED WORK */}
      <section className="px-5 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--mute)] mb-4">§ 01 — Selected work</p>
              <h2 className="font-display display-lg">
                Things I <span className="text-[color:var(--accent)]">made</span>.
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-2 text-sm text-[color:var(--mute)] hover:text-[color:var(--ink)] link-sweep"
            >
              All projects
              <span>→</span>
            </Link>
          </div>

          <div>
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
            <div className="border-t border-[color:var(--line)]" />
          </div>

          <div className="mt-12 md:hidden">
            <Link href="/work" className="text-sm link-sweep">
              All projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="px-5 md:px-10 py-24 md:py-40 border-t border-[color:var(--line)]">
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-12 gap-10">
          <p className="md:col-span-2 text-xs uppercase tracking-[0.2em] text-[color:var(--mute)] md:sticky md:top-32 self-start">
            § 02 — Me
          </p>
          <div className="md:col-span-10">
            <p className="font-display text-3xl md:text-6xl leading-[1.05] text-[color:var(--ink)]">
              I&apos;m <span className="text-[color:var(--accent)]">thirteen</span>. I started
              coding for fun, then for real, then because I couldn&apos;t stop. I ship things
              when they solve a problem I actually have — which is why the blocker I use most is
              one I had to build myself, and the HUD on my menu bar started as a sketch at midnight.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-[color:var(--mute)] hover:text-[color:var(--ink)] link-sweep"
              >
                The longer story
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-10 py-24 md:py-32 border-t border-[color:var(--line)]">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--mute)] mb-4">§ 03 — Next</p>
          <h2 className="font-display display-lg max-w-5xl">
            Got something cool? <br />
            <Link href="/contact" className="text-[color:var(--accent)] link-sweep">
              Tell me about it.
            </Link>
          </h2>
        </div>
      </section>
    </>
  );
}
