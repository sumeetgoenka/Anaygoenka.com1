'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden border-b border-slate-200">
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small intro text */}
          <motion.p
            className="text-blue-600 text-sm md:text-base font-semibold tracking-wider uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            13-Year-Old Developer • Dubai
          </motion.p>

          {/* Main headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 glow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Websites so good,</span>
            <br />
            <span className="text-slate-900">people forget I&apos;m 13.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-slate-700 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Fast. Modern. Aesthetic. AI-Powered.
            <br />
            <span className="text-blue-600">Full-stack builds with teen energy.</span>
          </motion.p>

          {/* AI Chatbot Specialty Badge */}
          <motion.div
            className="mb-12 inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-blue-600 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-2xl">🤖</span>
            <span className="text-blue-600 font-semibold">Specialty: AI Chatbots & Intelligent Automation</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="#portfolio"
              className="btn-glow px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border-2 border-blue-600 rounded-full text-blue-600 font-bold text-lg hover:bg-blue-50 transition-all"
            >
              Build With Me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {[
              { number: '5+', label: 'Projects Built' },
              { number: '1-3', label: 'Days Delivery' },
              { number: '100%', label: 'Modern Tech' },
              { number: '13', label: 'Years Old' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-blue-600 hover:text-blue-700 transition-colors">
          <FaArrowDown className="text-3xl" />
        </a>
      </motion.div>
    </section>
  );
}
