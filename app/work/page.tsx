import type { Metadata } from 'next';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Work — Anay Goenka',
  description: 'Projects I have built. macOS apps, websites, and teaching.',
};

export default function WorkPage() {
  const byCategory = {
    App: projects.filter((p) => p.category === 'App'),
    Web: projects.filter((p) => p.category === 'Web'),
    Teaching: projects.filter((p) => p.category === 'Teaching'),
  };

  return (
    <section className="px-5 md:px-10 pt-32 md:pt-44 pb-20">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h1 className="font-display display-lg text-balance">
            Everything I&apos;ve <span className="text-[color:var(--accent)]">shipped</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-[color:var(--ink-soft)] text-lg text-pretty">
            Apps, sites, and videos — in rough order of how proud I am right now.
            Click anything for the longer story.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-24 space-y-20">
          {(['App', 'Web', 'Teaching'] as const).map((cat) => {
            const list = byCategory[cat];
            if (list.length === 0) return null;
            return (
              <div key={cat}>
                <Reveal className="flex items-end justify-between mb-2">
                  <h2 className="font-display text-2xl md:text-3xl">
                    {cat}
                    <span className="font-mono text-sm text-[color:var(--mute)] ml-3">
                      ({String(list.length).padStart(2, '0')})
                    </span>
                  </h2>
                </Reveal>
                <Stagger>
                  {list.map((p, i) => (
                    <StaggerItem key={p.slug}>
                      <ProjectCard project={p} index={i} />
                    </StaggerItem>
                  ))}
                  <div className="border-t border-[color:var(--line)]" />
                </Stagger>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
