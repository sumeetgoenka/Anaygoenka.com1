'use client';

import { motion } from 'framer-motion';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Premium radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent"></div>

      {/* Subtle animated blobs */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-purple-400/8 rounded-full blur-3xl animate-float-delayed"></div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">

          {/* Trust badge */}
          <motion.div
            className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100/90 backdrop-blur-sm border border-slate-200/60 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Available for Projects
            </span>
          </motion.div>

          {/* Main headline - BIG and BOLD */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-12 tracking-tight leading-[1.05] max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-[#1F2A5C] block">
              Websites so good,
            </span>
            <span className="text-[#1F2A5C] block mt-2">
              people forget I'm{' '}
              <span className="relative inline-block">
                <span className="text-orange-600">13</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-600/30 rounded"></span>
              </span>.
            </span>
          </motion.h1>

          {/* CTA Buttons - clean and prominent */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#contact"
              className="px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white font-bold text-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-[1.05] transition-all flex items-center justify-center gap-3 group"
            >
              Start a Project
              <FaArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="px-12 py-5 border-2 border-[#1F2A5C] rounded-2xl text-[#1F2A5C] font-bold text-lg hover:bg-[#1F2A5C] hover:text-white hover:scale-[1.05] transition-all"
            >
              View Work
            </a>
          </motion.div>

          {/* Minimal trust indicators */}
          <motion.div
            className="flex flex-wrap gap-8 justify-center items-center text-sm text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="font-semibold">
              <span className="text-2xl text-[#1F2A5C]">5+</span> live projects
            </span>
            <span className="text-slate-300">·</span>
            <span className="font-semibold">
              <span className="text-2xl text-[#1F2A5C]">24-48hr</span> delivery
            </span>
            <span className="text-slate-300">·</span>
            <span className="font-semibold">
              <span className="text-2xl text-[#1F2A5C]">Dubai</span>-based
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about" className="text-slate-400 hover:text-slate-600 transition-colors">
          <FaArrowDown className="text-2xl" />
        </a>
      </motion.div>
    </section>
  );
}
