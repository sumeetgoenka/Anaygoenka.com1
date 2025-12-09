'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaStore,
  FaUsers,
  FaChalkboardTeacher,
  FaLightbulb,
  FaHome,
  FaRocket,
  FaDollarSign,
} from 'react-icons/fa';

export default function WhoFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const audiences = [
    { icon: <FaStore />, text: 'Small businesses needing a fresh online presence' },
    { icon: <FaUsers />, text: 'School clubs, teams, competitions' },
    { icon: <FaChalkboardTeacher />, text: 'Teachers needing tools/dashboards' },
    { icon: <FaLightbulb />, text: 'Students launching side projects' },
    { icon: <FaHome />, text: 'Families wanting personal sites' },
    { icon: <FaRocket />, text: 'Anyone starting a new idea or micro-startup' },
    { icon: <FaDollarSign />, text: 'Anyone who wants a fast + aesthetic website without paying agency prices' },
  ];

  return (
    <section id="who-for" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">🎯 Who I Build For</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            If you see yourself here, we&apos;re a perfect match.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-3xl text-indigo-400 flex-shrink-0">{item.icon}</div>
              <p className="text-slate-300 text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
