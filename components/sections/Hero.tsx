'use client';

import { motion } from 'framer-motion';
import { FaArrowDown, FaArrowRight, FaCheckCircle, FaClock, FaCode } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 px-6">
      {/* Premium radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent"></div>

      {/* Subtle animated blobs */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-purple-400/8 rounded-full blur-3xl animate-float-delayed"></div>

      {/* Main content - 2 column layout */}
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Text & CTAs */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100/90 backdrop-blur-sm border border-slate-200/60 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Dubai-based Teen Full-Stack Dev · Available for Projects
              </span>
            </motion.div>

            {/* Main headline - tighter */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold mb-4 tracking-tight leading-[1.1] max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-[#1F2A5C] block">
                Websites so good, people forget I'm{' '}
                <span className="relative inline-block">
                  <span className="text-orange-600">13</span>
                  <span className="absolute bottom-0 left-0 w-full h-1.5 bg-orange-600/30 rounded"></span>
                </span>.
              </span>
            </motion.h1>

            {/* Trust line */}
            <motion.p
              className="text-sm md:text-base text-slate-600 mb-6 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Trusted by students, startups and small businesses across Dubai
            </motion.p>

            {/* Value proposition */}
            <motion.p
              className="text-base md:text-lg text-slate-600 mb-2 font-normal leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Fast launches. Modern stack. Zero agency bloat.
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-slate-800 mb-8 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Full-stack builds with the energy of someone who actually cares about your project.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#contact"
                className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white font-bold text-base hover:from-orange-600 hover:to-orange-700 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.03] transition-all flex items-center justify-center gap-2"
              >
                Start a Project
                <FaArrowRight className="text-sm" />
              </a>
              <a
                href="#portfolio"
                className="px-10 py-4 border-2 border-[#1F2A5C] rounded-2xl text-[#1F2A5C] font-bold text-base hover:bg-[#1F2A5C] hover:text-white hover:scale-[1.03] transition-all"
              >
                View Portfolio
              </a>
            </motion.div>

            {/* CTA clarification */}
            <motion.p
              className="text-xs text-slate-500 mb-6 text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Takes about a minute. I'll reply within 24 hours with ideas and a rough cost.
            </motion.p>

            {/* Recent clients strip */}
            <motion.div
              className="mb-6 text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Recent clients</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-700">StudyHub</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-700">Local Café</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-700">Design Coach</span>
              </div>
            </motion.div>

            {/* Stats with icons */}
            <motion.div
              className="flex flex-wrap gap-6 justify-center lg:justify-start items-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-2 text-slate-700">
                <FaCheckCircle className="text-green-500 text-base" />
                <span><span className="font-bold text-[#1F2A5C]">5+</span> live projects</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <FaClock className="text-blue-500 text-base" />
                <span><span className="font-bold text-[#1F2A5C]">24-48hr</span> delivery</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <FaCode className="text-purple-500 text-base" />
                <span><span className="font-bold text-[#1F2A5C]">Modern</span> stack</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Featured services card with magical glow */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Magical glow behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/15 to-orange-400/20 rounded-[2.5rem] blur-3xl scale-105 animate-pulse-slow"></div>

            {/* Services card */}
            <div className="relative bg-white/60 backdrop-blur-2xl border border-white/90 rounded-3xl p-8 shadow-2xl shadow-blue-200/40 hover:shadow-blue-300/60 transition-all duration-500 hover:scale-[1.01]">
              {/* Specialty chip */}
              <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/60 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Specialty: AI Chatbots & Intelligent Systems</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1F2A5C] mb-6">What I Build</h3>

              {/* Service items - outcome-focused */}
              <div className="space-y-4 mb-6">
                {/* Modern Websites - with visual emphasis */}
                <motion.div
                  className="flex gap-4 p-4 bg-white/50 rounded-2xl border border-slate-200/60 hover:border-blue-300/60 hover:bg-white/70 transition-all group cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <div className="text-3xl flex-shrink-0">🌐</div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-slate-900 mb-1 group-hover:text-[#1F2A5C] transition-colors">
                      Modern Websites
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Clean, fast sites that actually get people to contact you
                    </p>
                  </div>
                  {/* Fake browser preview */}
                  <div className="hidden sm:flex items-center">
                    <div className="w-16 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg border border-slate-200/60 flex items-center justify-center">
                      <div className="w-8 h-1 bg-slate-300 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-4 p-4 bg-white/50 rounded-2xl border border-slate-200/60 hover:border-blue-300/60 hover:bg-white/70 transition-all group cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <div className="text-3xl flex-shrink-0">🤖</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 group-hover:text-[#1F2A5C] transition-colors">
                      AI Chatbots
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Custom chatbots that answer FAQs and book calls 24/7
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-4 p-4 bg-white/50 rounded-2xl border border-slate-200/60 hover:border-blue-300/60 hover:bg-white/70 transition-all group cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <div className="text-3xl flex-shrink-0">⚡</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 group-hover:text-[#1F2A5C] transition-colors">
                      Web Apps
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Simple internal tools and dashboards that save you time
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Process badge - sharpened */}
              <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl border border-orange-200/60">
                <p className="text-sm text-slate-700 font-medium text-center leading-relaxed">
                  <span className="text-orange-600 font-bold">Clear process.</span> Fixed timelines. Weekly check-ins. No ghosting.
                </p>
              </div>

              {/* Who this is for clarification */}
              <div className="mt-4 text-center">
                <p className="text-xs text-slate-500">
                  Perfect for students, creators and small businesses
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about" className="text-slate-500 hover:text-slate-700 transition-colors">
          <FaArrowDown className="text-2xl" />
        </a>
      </motion.div>
    </section>
  );
}
