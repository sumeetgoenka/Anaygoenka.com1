'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const reasons = [
    {
      title: 'User-First Design',
      description: 'I build with the end user in mind — modern, clean, and usable.',
    },
    {
      title: 'Fast Turnaround',
      description: 'Small sites: 1–3 days. Larger builds: 1–2 weeks.',
    },
    {
      title: 'Real Value',
      description: 'Not agency rates. Not inflated freelancer pricing. Just fair value.',
    },
    {
      title: 'Modern Stack',
      description: 'Next.js, React, Vercel — real code (no Wix/WordPress templates).',
    },
    {
      title: 'Smart Integrations',
      description: 'APIs, automations, and tools that connect smoothly and help users.',
    },
    {
      title: 'Mobile-First Always',
      description: 'Responsive, fast-loading, and sharp on every device.',
    },
  ];

  return (
    <section id="why-choose" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-4">
            Why Work With Me
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Six reasons why this is{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold text-slate-900">different (and better)</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-200 -z-0"></span>
            </span>
            .
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-normal text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
