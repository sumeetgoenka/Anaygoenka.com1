'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import type { Project } from '@/lib/projects';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/projects"
            className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors mb-8 inline-block"
          >
            &larr; Back to Projects
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-4">
            {project.title}
          </h1>
          <div className="w-16 h-1 bg-slate-900 mb-8"></div>

          <p className="text-slate-600 text-lg mb-2">{project.description}</p>
          <p className="text-sm text-slate-500 mb-12">{project.tech}</p>
        </motion.div>

        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Why I built it */}
          <div className="border-l-2 border-slate-900 pl-6">
            <h2 className="text-2xl font-normal text-slate-900 mb-2">Why I Built It</h2>
            <p className="text-slate-600 text-lg leading-relaxed">{project.why}</p>
          </div>

          {/* Cool features */}
          {project.features.length > 0 && (
            <div className="border-l-2 border-slate-900 pl-6">
              <h2 className="text-2xl font-normal text-slate-900 mb-4">Cool Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-lg">
                    <span className="text-slate-900 mt-1.5 shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* What I learned */}
          <div className="border-l-2 border-slate-900 pl-6">
            <h2 className="text-2xl font-normal text-slate-900 mb-2">What I Learned</h2>
            <p className="text-slate-600 text-lg leading-relaxed">{project.learned}</p>
          </div>

          {/* Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-4 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-base font-medium transition-all hover:shadow-lg"
                >
                  Live Demo &rarr;
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-lg text-base font-medium transition-all hover:shadow-lg"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
