'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaShieldAlt } from 'react-icons/fa';

export default function Guarantee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border-2 border-green-500/50 rounded-3xl p-12">
            {/* Icon */}
            <motion.div
              className="inline-block mb-6"
              animate={isInView ? { rotate: [0, 5, -5, 0] } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <FaShieldAlt className="text-7xl text-green-400" />
            </motion.div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🔒 <span className="gradient-text">My Promise</span>
            </h2>

            {/* Promise */}
            <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed mb-6">
              If you don&apos;t love the first draft,
              <br />
              <span className="text-green-400 font-bold">I&apos;ll redo it until you&apos;re happy</span>
              <br />— no extra cost.
            </p>

            <p className="text-slate-400 text-lg">Zero risk. Pure confidence. That&apos;s the vibe.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
