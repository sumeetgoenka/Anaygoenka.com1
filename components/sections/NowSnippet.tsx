'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export default function NowSnippet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10" ref={ref}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-4">
            What I&apos;m doing{' '}
            <span className="relative inline-block">
              <span className="relative z-10">now</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200 -z-0"></span>
            </span>
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-8"></div>

          <div className="bg-white border border-slate-200 rounded-lg p-8 text-left max-w-2xl mx-auto mb-8">
            <p className="text-slate-600 text-lg leading-relaxed">
              Currently building new projects, learning new frameworks, and balancing it all with school in Dubai.
            </p>
          </div>

          <Link
            href="/now"
            className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
          >
            See the full update &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
