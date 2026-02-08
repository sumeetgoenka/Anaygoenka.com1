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
            Student first,{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold text-slate-900">builder second</span>
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
              Hey, I'm Anay, a student in Dubai. Right now my main focus is academics, getting really strong at the
              basics and pushing my grades up.
            </p>

            <p>
              Outside school, I'm into tech and I love experimenting, especially with Python. I'm still early in my
              coding journey, but I enjoy learning by building small projects and figuring things out as I go.
            </p>

            <p>
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-slate-900">
                  Curious, self-driven, and always improving
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-200 -z-0"></span>
              </span>
              . That's me.
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
              <h3 className="text-2xl font-normal text-slate-900 mb-2">Academics First</h3>
              <p className="text-slate-600">Focused on school and improving every term.</p>
            </div>

            <div className="border-l-2 border-slate-900 pl-6">
              <h3 className="text-2xl font-normal text-slate-900 mb-2">Learning Python</h3>
              <p className="text-slate-600">Basics now, building confidence step-by-step.</p>
            </div>

            <div className="border-l-2 border-slate-900 pl-6">
              <h3 className="text-2xl font-normal text-slate-900 mb-2">Curious Mindset</h3>
              <p className="text-slate-600">I love learning how things work.</p>
            </div>

            <div className="border-l-2 border-slate-900 pl-6">
              <h3 className="text-2xl font-normal text-slate-900 mb-2">Balanced Life</h3>
              <p className="text-slate-600">I love chess, cricket, piano and guitar and eating Indian food!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
