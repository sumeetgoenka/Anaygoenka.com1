'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      number: '1',
      title: 'Chat',
      description: 'We discuss what you want, what you don\'t, and what style you like.',
    },
    {
      number: '2',
      title: 'Plan',
      description: 'I outline the structure, features, and timeline — clean and easy.',
    },
    {
      number: '3',
      title: 'Build',
      description: 'I develop your site using modern tools and best practices.',
    },
    {
      number: '4',
      title: 'Preview',
      description: 'You get a live preview link to review everything properly.',
    },
    {
      number: '5',
      title: 'Refine',
      description: 'We iterate until you\'re genuinely happy with the result.',
    },
    {
      number: '6',
      title: 'Launch',
      description: 'I deploy to Vercel and connect your domain — ready to share.',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-4">
            My Process
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Simple, clear, and drama-free.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-baseline gap-3 mb-3">
                <div className="text-3xl font-normal text-slate-900">{step.number}</div>
                <h3 className="text-xl font-normal text-slate-900">{step.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
