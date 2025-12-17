'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WhoFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const audiences = [
    {
      title: 'Small Businesses & Local Services',
      text: 'You need a professional site quickly — without agency pricing or delays.',
    },
    {
      title: 'Entrepreneurs & Micro-Startups',
      text: 'You need an MVP to validate an idea fast and start getting users.',
    },
    {
      title: 'Schools, Clubs & Organisations',
      text: 'Clean, functional sites for news, events, sign-ups, and updates.',
    },
    {
      title: 'Anyone Who Wants Quality Without Agency Prices',
      text: 'You want modern work, clear communication, and fair pricing.',
    },
  ];

  return (
    <section id="who-for" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-4">
            Who I Build For
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            If you need quality work{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold text-slate-900">without the wait</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-200 -z-0"></span>
            </span>
            , we're a match.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-normal text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
