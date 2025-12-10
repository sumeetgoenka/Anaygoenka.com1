'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBrain, FaBolt, FaDollarSign, FaPalette, FaRobot, FaCode } from 'react-icons/fa';

export default function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const reasons = [
    {
      icon: <FaBrain />,
      title: 'Student-Level Understanding',
      points: [
        'I am the target audience',
        'Know what looks modern and works fast',
        'Fresh perspective on design trends',
      ],
    },
    {
      icon: <FaBolt />,
      title: 'Speed Demon',
      points: ['Small sites: 1-3 days', 'Bigger projects: 1-2 weeks', 'SaaS-level: depends on complexity'],
    },
    {
      icon: <FaDollarSign />,
      title: 'Affordable Pricing',
      points: ['Not agency prices', 'Not overpriced freelancer rates', 'Actual value from a passionate creator'],
    },
    {
      icon: <FaPalette />,
      title: 'Aesthetic + Performance',
      points: ['Mobile-friendly & responsive', 'Modern UI with clean animations', 'Fast loading times', 'Properly hosted'],
    },
    {
      icon: <FaRobot />,
      title: 'AI Chatbot Specialist',
      points: ['Custom conversational interfaces', 'Integration with your existing site', 'Smart automation & user engagement'],
    },
    {
      icon: <FaCode />,
      title: 'Real Tech Stack',
      points: ['Next.js, React, Vercel', 'Supabase, Firebase', 'Python, AI agents', 'Not Wix, not WordPress templates', 'Real developer energy'],
    },
  ];

  return (
    <section id="why-choose" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Why Choose Me</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            Six reasons why working with me is different (and better).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="text-5xl text-blue-600 mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <ul className="space-y-2 text-left">
                {reason.points.map((point, i) => (
                  <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
