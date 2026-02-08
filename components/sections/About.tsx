'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
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
            About Me
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Student by day,{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold text-slate-900">developer by night</span>
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
              Hey, I'm Anay — a student based in Dubai with a serious love for building things on the internet.
              I taught myself to code and haven't stopped since.
            </p>

            <p>
              When I'm not in school, I'm building full-stack web apps, experimenting with new frameworks, and shipping projects that people actually use. I've built platforms for students, newsrooms for schools, and tools that solve real problems.
            </p>

            <p>
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-slate-900">Curious, self-driven, and always learning</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-200 -z-0"></span>
              </span>
              — that's the short version. The long version is in my projects below.
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
              <h3 className="text-2xl font-normal text-slate-900 mb-2">Self-Taught</h3>
              <p className="text-slate-600">Learned to code from scratch — curiosity is my best teacher.</p>
            </div>

            <div className="border-l-2 border-slate-900 pl-6">
              <h3 className="text-2xl font-normal text-slate-900 mb-2">Always Building</h3>
              <p className="text-slate-600">I ship real projects, not just tutorials.</p>
            </div>

            <div className="border-l-2 border-slate-900 pl-6">
              <h3 className="text-2xl font-normal text-slate-900 mb-2">Full-Stack</h3>
              <p className="text-slate-600">Frontend to backend — I build the whole thing.</p>
            </div>

            <div className="border-l-2 border-slate-900 pl-6">
              <h3 className="text-2xl font-normal text-slate-900 mb-2">Student Life</h3>
              <p className="text-slate-600">Balancing school and code — and loving every bit of it.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
