'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const technologies = [
    'Next.js',
    'React',
    'Vercel',
    'Supabase',
    'Firebase',
    'Python',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'Git',
    'GitHub',
  ];

  return (
    <section id="tech-stack" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-4">
            Tech Stack
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Modern tools. Real developer energy.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <span className="text-slate-900 font-normal text-lg">{tech}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-block px-8 py-4 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-slate-900 font-normal">
              + AI APIs (OpenAI, Anthropic, and more)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
