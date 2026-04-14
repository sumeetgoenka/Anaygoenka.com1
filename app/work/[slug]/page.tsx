import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/lib/projects';

interface Params { slug: string }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Not found' };
  return {
    title: `${project.title} — Anay Goenka`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="px-5 md:px-10 pt-32 md:pt-40 pb-20">
      <div className="mx-auto max-w-[1100px]">
        <Link href="/work" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--mute)] hover:text-[color:var(--ink)] transition-colors">
          <span>←</span> Back to work
        </Link>

        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-[color:var(--mute)]">
            <span>{project.category}</span>
            <span className="w-1 h-1 rounded-full bg-[color:var(--mute)]" />
            <span>{project.year}</span>
          </div>
          <h1 className="mt-6 font-display display-lg" style={{ color: project.accent }}>
            {project.title}
          </h1>
          <p className="mt-6 text-2xl md:text-3xl text-[color:var(--ink-soft)] max-w-3xl leading-tight">
            {project.tagline}
          </p>
        </header>

        <div
          className="mt-12 h-48 md:h-72 rounded-2xl relative overflow-hidden border border-[color:var(--line-strong)]"
          style={{
            background: `radial-gradient(ellipse at 30% 30%, ${project.accent}40, transparent 60%), radial-gradient(ellipse at 70% 70%, ${project.accent}20, transparent 55%), var(--bg-2)`,
          }}
          aria-hidden
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="absolute inset-0 grid place-items-center">
            <span
              className="font-display text-7xl md:text-9xl"
              style={{ color: project.accent, textShadow: `0 0 60px ${project.accent}80` }}
            >
              {project.title.charAt(0)}
            </span>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <aside className="md:col-span-4 space-y-8 md:sticky md:top-28 self-start">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--mute)] mb-3">Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-[color:var(--line-strong)] text-[color:var(--ink-soft)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {project.liveUrl && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--mute)] mb-3">Visit</p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[color:var(--accent)] link-sweep"
                >
                  {project.liveUrl.replace(/^https?:\/\//, '')} ↗
                </a>
              </div>
            )}
            {project.githubUrl && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--mute)] mb-3">Source</p>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="link-sweep">
                  GitHub ↗
                </a>
              </div>
            )}
          </aside>

          <div className="md:col-span-8 space-y-16">
            <section>
              <h2 className="font-display text-sm uppercase tracking-[0.2em] text-[color:var(--mute)] mb-4">Why I built it</h2>
              <p className="text-xl md:text-2xl leading-snug text-[color:var(--ink)]">{project.why}</p>
            </section>

            <section>
              <h2 className="font-display text-sm uppercase tracking-[0.2em] text-[color:var(--mute)] mb-6">What it does</h2>
              <ul className="space-y-4">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-4 text-[color:var(--ink-soft)] leading-relaxed">
                    <span className="font-mono text-[color:var(--accent)] text-sm pt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-sm uppercase tracking-[0.2em] text-[color:var(--mute)] mb-4">What I learned</h2>
              <p className="text-lg leading-relaxed text-[color:var(--ink-soft)]">{project.learned}</p>
            </section>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-[color:var(--line)] flex items-center justify-between">
          <Link href="/work" className="text-sm text-[color:var(--mute)] hover:text-[color:var(--ink)]">← All work</Link>
          <Link href={`/work/${next.slug}`} className="group text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--mute)]">Next</p>
            <p className="font-display text-2xl md:text-4xl mt-1 group-hover:text-[color:var(--accent)] transition-colors">
              {next.title} →
            </p>
          </Link>
        </div>
      </div>
    </article>
  );
}
