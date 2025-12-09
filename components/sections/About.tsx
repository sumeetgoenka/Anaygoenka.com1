'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section title */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="gradient-text">💥 Who I Am</span>
            </motion.h2>
          </div>

          {/* Content card */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12 card-hover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed">
              <p>
                I&apos;m <span className="text-indigo-400 font-bold">Anay</span> — a{' '}
                <span className="text-purple-400 font-semibold">13-year-old Dubai-based full-stack developer</span>{' '}
                who builds modern websites, AI tools, and web apps with a mix of curiosity, creativity, and straight
                up hustle.
              </p>

              <p>
                I started <span className="gradient-text font-bold">vibecoding</span> at 12, using AI + trial and error
                to create full products. Now I build for real clients, schools, and anyone who wants something modern,
                fast, and actually useful.
              </p>

              {/* Key highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                {[
                  { emoji: '🚀', title: 'Fast Builds', desc: 'No templates, pure custom code' },
                  { emoji: '🤖', title: 'AI-Powered', desc: 'Smart tools & chatbots' },
                  { emoji: '💎', title: 'Teen Energy', desc: 'Fresh perspective on design' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 bg-slate-700/30 rounded-2xl border border-slate-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: '#6366f1' }}
                  >
                    <div className="text-4xl mb-3">{item.emoji}</div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
