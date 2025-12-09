'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border-2 border-indigo-500/50 rounded-3xl p-12 text-center">
            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-2xl" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
              &ldquo;We were shocked. A 13-year-old built us a site that looked better than agencies three times the
              price.&rdquo;
            </blockquote>

            {/* Author */}
            <p className="text-slate-400 text-lg">
              — Client Name, <span className="text-indigo-400">Dubai</span>
            </p>

            {/* Note */}
            <p className="text-slate-500 text-sm mt-6 italic">
              * Placeholder testimonial - will be replaced with real client feedback
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
