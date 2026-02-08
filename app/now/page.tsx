'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function NowPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sections = [
    {
      title: 'Current Project',
      content: 'Building a proper, hand-coded Python game.',
    },
    {
      title: 'What I\'m Learning',
      content: 'Learning Python.',
    },
    {
      title: 'Next Goal',
      content: 'Learn HTML.',
    },
    {
      title: 'Recent Wins',
      content: 'Topped my class in the end-of-term exams!',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-4">
            Now
          </h1>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            What I&apos;m{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold text-slate-900">currently up to</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-200 -z-0"></span>
            </span>
            . Updated regularly.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="border-l-2 border-slate-900 pl-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            >
              <h2 className="text-2xl font-normal text-slate-900 mb-2">
                {section.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
