'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaComments, FaDrawPolygon, FaCode, FaEye, FaCheckCircle, FaRocket } from 'react-icons/fa';

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      number: '1',
      icon: <FaComments />,
      title: 'Chat',
      description: 'We talk about your idea — what you want, what you hate, and what you vibe with.',
    },
    {
      number: '2',
      icon: <FaDrawPolygon />,
      title: 'Plan',
      description: 'I sketch the layout, features, and timeline. Nothing complicated — just clean and clear.',
    },
    {
      number: '3',
      icon: <FaCode />,
      title: 'Build',
      description: 'This is where the magic happens. I develop the site with real modern tech.',
    },
    {
      number: '4',
      icon: <FaEye />,
      title: 'Preview',
      description: 'You get a full preview link to see your site before it goes live.',
    },
    {
      number: '5',
      icon: <FaCheckCircle />,
      title: 'Fix + Perfect',
      description: 'We make changes until you say: "Bro this is fire 🔥."',
    },
    {
      number: '6',
      icon: <FaRocket />,
      title: 'Launch 🎉',
      description: 'I deploy to Vercel + connect your domain. You get the final site ready to show the world.',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">🔄 My Process</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Clear, simple, teen-friendly vibe. No corporate BS.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col md:flex-row gap-6 mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {/* Connector line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 md:left-auto md:right-1/2 top-20 md:top-auto md:bottom-0 w-0.5 h-full md:w-full md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30"></div>
              )}

              {/* Step number circle */}
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full text-white font-bold text-xl shadow-lg shadow-indigo-500/50 z-10">
                {step.number}
              </div>

              {/* Content card */}
              <div className="flex-grow bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-indigo-500/50 hover:bg-slate-800/70 transition-all card-hover">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-indigo-400">{step.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
