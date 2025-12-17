'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'HappyStudy',
      description: 'Ed-tech platform with gamification, homework tracking, and 500+ student sign-ups.',
      tech: 'Full-stack SaaS',
      link: 'https://happystudy.co.uk',
    },
    {
      title: 'LatymerNews',
      description: 'Modern school newsroom with instant publishing — 50+ articles, built fast.',
      tech: 'Next.js · Vercel',
      link: 'https://latymernews.vercel.app',
    },
    {
      title: 'ScoreMarks',
      description: 'High-conversion landing page with 40% form completion.',
      tech: 'Next.js · Custom forms',
      link: 'https://scoremarks.vercel.app',
    },
    {
      title: 'Custom Tools',
      description: 'Internal dashboards and automation tools for businesses.',
      tech: 'Full-stack · APIs',
      featured: true,
    },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-4">
            My Work
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Real projects. Real results. Built with modern tech.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link || '#contact'}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noopener noreferrer' : undefined}
              className="group bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {project.featured && (
                <div className="inline-block px-3 py-1 bg-slate-900 text-white text-xs rounded-full mb-4 font-medium">
                  SPECIALTY
                </div>
              )}
              <h3 className="text-2xl font-normal text-slate-900 mb-3 group-hover:underline">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <p className="text-sm text-slate-500">{project.tech}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
