'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="relative z-10 container mx-auto max-w-6xl px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-4">
            Who I Am
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A developer who ships{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold text-slate-900">fast and clean</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-200 -z-0"></span>
            </span>
            .
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 text-slate-600 text-lg leading-relaxed"
          >
            <p>
              Hi, I'm Anay — a full-stack developer based in Dubai.
              I've shipped websites and tools for students, creators, schools, and small businesses.
            </p>

            <p>
              You get someone who moves fast without cutting corners: modern frameworks + smart workflows = launch-ready builds in days. I share clear timelines and regular updates, so you always know what's shipping and when.
            </p>

            <p>
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-slate-900">Rapid experimentation, clean execution</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-200 -z-0"></span>
              </span>
              , and shipping features that look sharp, load fast, and genuinely help your users.
            </p>
          </motion.div>

          {/* Right - Key Points */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="border-l-2 border-slate-900 pl-6">
              <h3 className="text-2xl font-normal text-slate-900 mb-2">Fast Delivery</h3>
              <p className="text-slate-600">Launch-ready sites in days, not months.</p>
            </div>

            <div className="border-l-2 border-slate-900 pl-6">
              <h3 className="text-2xl font-normal text-slate-900 mb-2">Modern Features</h3>
              <p className="text-slate-600">Smart tools and integrations that save real time.</p>
            </div>

            <div className="border-l-2 border-slate-900 pl-6">
              <h3 className="text-2xl font-normal text-slate-900 mb-2">Clear Communication</h3>
              <p className="text-slate-600">Frequent updates, Loom walkthroughs, zero disappearing.</p>
            </div>

            <div className="border-l-2 border-slate-900 pl-6">
              <h3 className="text-2xl font-normal text-slate-900 mb-2">Fresh, Modern Taste</h3>
              <p className="text-slate-600">Clean design, strong UX, no "corporate cringe".</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
