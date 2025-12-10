'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-3xl" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-relaxed">
            &ldquo;Anay delivered our school news platform in just 3 days. The design is clean, modern, and exactly what we needed. Hard to believe he&apos;s only 13!&rdquo;
          </blockquote>

          {/* Author */}
          <p className="text-slate-600 text-xl">
            — Sarah M., <span className="text-blue-600">London</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
