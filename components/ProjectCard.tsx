'use client';

import Link from 'next/link';
import type { Project } from '@/lib/projects';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block border-t border-[color:var(--line)] py-10 md:py-14 lift"
    >
      <div className="grid grid-cols-12 gap-4 items-baseline">
        <span className="col-span-2 md:col-span-1 font-mono text-xs text-[color:var(--mute)] pt-2">
          {num}
        </span>

        <div className="col-span-10 md:col-span-5">
          <h3
            className="font-display text-4xl md:text-6xl leading-[0.95] transition-colors"
            style={{ ['--hover' as string]: project.accent }}
          >
            <span className="transition-colors group-hover:text-[color:var(--accent)]">
              {project.title}
            </span>
          </h3>
        </div>

        <div className="col-span-10 md:col-span-4 md:col-start-7 text-[color:var(--ink-soft)] text-base md:text-lg leading-relaxed">
          {project.tagline}
        </div>

        <div className="hidden md:flex col-span-2 justify-end items-center gap-2 text-xs text-[color:var(--mute)]">
          <span>{project.category}</span>
          <span className="w-1 h-1 rounded-full bg-[color:var(--mute)]" />
          <span>{project.year}</span>
        </div>
      </div>

      <div className="mt-5 md:mt-6 flex flex-wrap gap-2 pl-[calc(2/12*100%)] md:pl-[calc(1/12*100%)]">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-[color:var(--line-strong)] text-[color:var(--mute)]"
          >
            {t}
          </span>
        ))}
      </div>

      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[color:var(--line-strong)] grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-hidden
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7" strokeLinecap="round" />
          <path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
