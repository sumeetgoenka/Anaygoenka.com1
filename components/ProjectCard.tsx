'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Project } from '@/lib/projects';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const num = String(index + 1).padStart(2, '0');
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/work/${project.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative block border-t border-[color:var(--line)] py-9 md:py-12 transition-colors duration-300"
      style={{ borderTopColor: hover ? project.accent : undefined }}
    >
      <div className="grid grid-cols-12 gap-x-4 gap-y-3 items-baseline">
        <span className="col-span-2 md:col-span-1 font-mono text-xs text-[color:var(--mute)] pt-2 tabular-nums">
          {num}
        </span>

        <div className="col-span-10 md:col-span-5">
          <h3 className="font-display text-[2rem] leading-[0.95] md:text-4xl lg:text-[3.4rem] break-words transition-colors duration-300">
            <span style={{ color: hover ? project.accent : undefined }}>{project.title}</span>
          </h3>
        </div>

        <div className="col-span-12 md:col-span-4 md:col-start-7 text-[color:var(--ink-soft)] text-base md:text-lg leading-relaxed pretty">
          {project.tagline}
        </div>

        <div className="hidden md:flex col-span-2 justify-end items-center gap-2 text-xs text-[color:var(--mute)] font-mono">
          <span>{project.category}</span>
          <span className="w-1 h-1 rounded-full bg-[color:var(--mute)]" />
          <span>{project.year}</span>
        </div>
      </div>

      <div className="mt-5 md:mt-6 flex flex-wrap gap-2 pl-[calc(2/12*100%)] md:pl-[calc(1/12*100%)]">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-[color:var(--line)] text-[color:var(--mute)]"
          >
            {t}
          </span>
        ))}
      </div>

      <span
        className="hidden md:grid absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full place-items-center opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
        style={{ border: `1px solid ${project.accent}`, color: project.accent }}
        aria-hidden
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7" strokeLinecap="round" />
          <path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
