import Link from 'next/link';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import Marquee from '@/components/Marquee';
import HomeHero from '@/components/HomeHero';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <HomeHero />

      <Marquee
        accent
        items={['macOS apps', 'web platforms', 'AI', 'competition maths', 'swift', 'next.js', 'teaching']}
      />

      {/* SELECTED WORK */}
      <section className="px-5 md:px-10 py-24 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <h2 className="font-display display-lg max-w-3xl">
              Things I <span className="text-[color:var(--accent)]">made</span>.
            </h2>
            <div className="flex items-center gap-6">
              <span className="font-mono text-xs text-[color:var(--mute)]">
                {String(featured.length).padStart(2, '0')} selected
              </span>
              <Link
                href="/work"
                className="hidden md:inline-flex items-center gap-2 text-sm text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] link-sweep"
              >
                All projects
                <span>→</span>
              </Link>
            </div>
          </Reveal>

          <Stagger>
            {featured.map((p, i) => (
              <StaggerItem key={p.slug}>
                <ProjectCard project={p} index={i} />
              </StaggerItem>
            ))}
            <div className="border-t border-[color:var(--line)]" />
          </Stagger>

          <div className="mt-12 md:hidden">
            <Link href="/work" className="text-sm text-[color:var(--ink-soft)] link-sweep">
              All projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="px-5 md:px-10 py-24 md:py-40 border-t border-[color:var(--line)]">
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-3">
            <p className="label md:sticky md:top-32">the short version</p>
          </Reveal>
          <Reveal className="md:col-span-9" delay={0.1}>
            <p className="font-display text-[1.9rem] leading-[1.1] md:text-[3.4rem] md:leading-[1.06] text-[color:var(--ink)] text-balance">
              I&apos;m <span className="text-[color:var(--accent)]">fourteen</span>. I started
              coding for fun, then for real, then because I couldn&apos;t stop. I ship things
              when they solve a problem I actually have — which is why the blocker I use most is
              one I had to build myself.
            </p>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] link-sweep"
            >
              The longer story
              <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-10 py-28 md:py-40 border-t border-[color:var(--line)]">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2 className="font-display display-lg max-w-5xl text-balance">
              Got something cool?{' '}
              <Link href="/contact" className="text-[color:var(--accent)] link-sweep">
                Tell me about it.
              </Link>
            </h2>
          </Reveal>
        </div>
      </section>
    </>
  );
}
