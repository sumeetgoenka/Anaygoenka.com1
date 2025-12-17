'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Guarantee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl" ref={ref}>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white border border-slate-200 rounded-lg p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-8">
              My Promise
            </h2>
            <div className="w-16 h-1 bg-slate-900 mx-auto mb-8"></div>

            <p className="text-2xl md:text-3xl text-slate-900 leading-relaxed mb-4">
              If you don&apos;t love the first draft,
            </p>
            <p className="text-2xl md:text-3xl text-slate-900 leading-relaxed mb-4">
              <span className="relative inline-block">
                <span className="relative z-10">I&apos;ll revise it until you do</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200 -z-0"></span>
              </span>
            </p>
            <p className="text-2xl md:text-3xl text-slate-900 leading-relaxed mb-8">
              — no extra cost.
            </p>

            <p className="text-slate-600 text-lg">Zero risk. Full confidence.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
