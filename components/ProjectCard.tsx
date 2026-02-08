'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export default function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all"
      >
        {project.featured && (
          <div className="inline-block px-3 py-1 bg-slate-900 text-white text-xs rounded-full mb-4 font-medium">
            FEATURED
          </div>
        )}
        <h3 className="text-2xl font-normal text-slate-900 mb-3 group-hover:underline">
          {project.title}
        </h3>
        <p className="text-slate-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        <p className="text-sm text-slate-500">{project.tech}</p>
      </Link>
    </motion.div>
  );
}
