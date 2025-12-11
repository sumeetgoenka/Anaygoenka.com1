'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const valueCards = [
  { emoji: '🚀', title: 'Fast Builds', desc: 'Launch-ready sites in days, not months.' },
  { emoji: '🤖', title: 'AI-Powered', desc: 'Chatbots and tools that actually save you time.' },
  { emoji: '💬', title: 'Clear Communication', desc: 'Regular updates, Loom walkthroughs, no disappearing.' },
  { emoji: '⚡️', title: 'Teen Energy', desc: 'Modern taste and fresh ideas, zero corporate cringe.' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 md:py-28"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/35 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-100/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-6" ref={ref}>
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 border border-slate-200 rounded-full text-xs font-semibold uppercase tracking-wide text-slate-600">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 animate-pulse"></span>
              About
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-[#1F2A5C]">
              <span className="gradient-text">Who I Am</span>
            </h2>
            <div className="mt-3 h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full"></div>
          </motion.div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="space-y-5 text-slate-700 text-base md:text-lg leading-relaxed"
            >
              <p>
                I&apos;m <span className="font-semibold text-[#1F2A5C]">Anay</span> — a 13-year-old full-stack developer
                in Dubai. I&apos;ve been building since I was 11 and have shipped 5+ sites and tools for students,
                creators, schools, and small businesses.
              </p>

              <p>
                You get someone who moves fast without cutting corners: modern frameworks + AI assistance = launch-ready
                builds in days. I share Loom updates, timelines, and next steps so you always know what&apos;s shipping
                and when.
              </p>

              <p>
                I call it <span className="font-semibold text-[#1F2A5C]">vibecoding</span>: lots of experiments and lots
                of shipping, but always aimed at a site or tool that looks sharp, loads fast, and actually helps your
                business.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {valueCards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + index * 0.08, duration: 0.5 }}
                  className="h-full"
                >
                  <div className="h-full rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-5 sm:p-6 shadow-lg shadow-blue-100/50 hover:shadow-blue-200/70 transition-all duration-300 hover:-translate-y-1">
                    <div className="text-3xl mb-3">{item.emoji}</div>
                    <h3 className="text-lg font-semibold text-[#1F2A5C] mb-1">{item.title}</h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
