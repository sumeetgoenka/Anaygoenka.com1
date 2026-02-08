'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col bg-white overflow-hidden">
      <div className="relative flex-1 flex items-center justify-center px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-5xl mx-auto w-full text-center">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal text-slate-900 mb-8 tracking-tight leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I&apos;m{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Anay</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200 -z-0"></span>
            </span>
            .
          </motion.h1>

          <motion.p
            className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I do and make{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold text-slate-900">cool stuff</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-200 -z-0"></span>
            </span>
            !
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link
              href="/projects"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-base font-medium transition-all hover:shadow-lg"
            >
              See My Projects
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-lg text-base font-medium transition-all hover:shadow-lg"
            >
              About Me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
