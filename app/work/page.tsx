import type { Metadata } from 'next';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

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
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--mute)] mb-6">The catalogue</p>
        <h1 className="font-display display-lg max-w-5xl">
          Everything I&apos;ve <span className="text-[color:var(--accent)]">shipped</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-[color:var(--ink-soft)] text-lg">
          Apps, sites, and videos — in rough order of how proud I am right now.
          Click anything for the longer story.
        </p>

        <div className="mt-16 md:mt-24 space-y-20">
          {(['App', 'Web', 'Teaching'] as const).map((cat) => {
            const list = byCategory[cat];
            if (list.length === 0) return null;
            return (
              <div key={cat}>
                <div className="flex items-end justify-between mb-2">
                  <h2 className="font-display text-2xl md:text-3xl text-[color:var(--mute)]">
                    {cat}
                    <span className="text-[color:var(--mute)] font-mono text-sm ml-3">
                      ({String(list.length).padStart(2, '0')})
                    </span>
                  </h2>
                </div>
                <div>
                  {list.map((p, i) => (
                    <ProjectCard key={p.slug} project={p} index={i} />
                  ))}
                  <div className="border-t border-[color:var(--line)]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
