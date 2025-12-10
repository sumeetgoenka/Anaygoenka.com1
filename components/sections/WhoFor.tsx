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
    {
      icon: <FaStore />,
      title: 'Small Businesses & Local Services',
      text: 'You need a professional online presence fast, but agency quotes are $5,000+ and take months. You want modern design, mobile-friendly, and ready in days—not weeks.',
    },
    {
      icon: <FaRocket />,
      title: 'Entrepreneurs & Micro-Startups',
      text: 'You\'re launching a new idea and need an MVP website to validate it. You can\'t afford to waste time or money on complex solutions when you need to move fast and test the market.',
    },
    {
      icon: <FaUsers />,
      title: 'Schools, Clubs & Organizations',
      text: 'Your team needs a clean, functional website for news, events, or members. You don\'t have a big budget, but you still want something that looks professional and works perfectly.',
    },
    {
      icon: <FaDollarSign />,
      title: 'Anyone Wanting Quality Without Agency Prices',
      text: 'You know what you want but you\'re tired of overpriced quotes and complicated processes. You want a developer who delivers fast, communicates clearly, and doesn\'t charge $10K for a landing page.',
    },
  ];

  return (
    <section id="who-for" className="py-20 md:py-32 bg-white relative overflow-hidden">
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
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            If you see yourself here, we&apos;re a perfect match.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 bg-gray-50/50 p-6 rounded-2xl border border-slate-200 hover:border-blue-600/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-3xl text-blue-600 flex-shrink-0 mt-1">{item.icon}</div>
              <div>
                <h3 className="text-slate-900 font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
