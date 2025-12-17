'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Simple Navigation */}
      <nav className="relative z-50 w-full px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="w-8"></div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10 text-sm">
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              About
            </a>
            <a href="#portfolio" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Work
            </a>
            <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Services
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="px-7 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-all hover:shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative flex-1 flex items-center justify-center px-6 md:px-16 pb-24 pt-16">
        <div className="max-w-7xl mx-auto w-full">
          {/* Massive Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal text-slate-900 mb-32 md:mb-40 tracking-tight leading-[1.1] text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Websites that{' '}
            <span className="relative inline-block">
              <span className="relative z-10">look expensive</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200 -z-0"></span>
            </span>
            {' '}—{' '}
            <span className="relative inline-block">
              <span className="italic relative z-10">without the agency price</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-slate-900"></span>
            </span>.
          </motion.h1>

          {/* Browser/Mockup Container */}
          <motion.div
            className="relative max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Background Shape - Left */}
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-[#a8b5a0] rounded-[4rem] opacity-50 -z-10 blur-sm"></div>

            {/* Background Shape - Right */}
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-[#a8b5a0] rounded-[4rem] opacity-50 -z-10 blur-sm"></div>

            {/* Browser Mockup */}
            <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl border border-slate-200">
              {/* Browser Chrome */}
              <div className="bg-slate-50 px-4 py-3.5 flex items-center gap-3 border-b border-slate-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                </div>
                <div className="flex-1 ml-2">
                  <div className="bg-white rounded-md px-4 py-1.5 text-xs text-slate-500 max-w-md border border-slate-200">
                    anaygoenka.com/dashboard
                  </div>
                </div>
              </div>

              {/* Screen Content - Full Dashboard */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
                {/* Dashboard UI Mockup */}
                <div className="absolute inset-0 p-8">
                  {/* Top Section - Stats Cards */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {/* Card 1 - Client Satisfaction */}
                    <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
                      <div className="text-xs text-slate-500 mb-2">Client Satisfaction</div>
                      <div className="text-3xl font-semibold text-emerald-600 mb-1">92%</div>
                      <div className="flex items-center gap-1 text-xs text-emerald-600">
                        <span>↑</span>
                        <span>+12% from last quarter</span>
                      </div>
                    </div>

                    {/* Card 2 - Projects Delivered */}
                    <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
                      <div className="text-xs text-slate-500 mb-2">Projects Delivered</div>
                      <div className="text-3xl font-semibold text-blue-600 mb-1">24</div>
                      <div className="flex items-center gap-1 text-xs text-blue-600">
                        <span>↑</span>
                        <span>+8 this month</span>
                      </div>
                    </div>

                    {/* Card 3 - Avg Response Time */}
                    <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
                      <div className="text-xs text-slate-500 mb-2">Avg Response Time</div>
                      <div className="text-3xl font-semibold text-purple-600 mb-1">2.4h</div>
                      <div className="flex items-center gap-1 text-xs text-purple-600">
                        <span>↓</span>
                        <span>-30 min improvement</span>
                      </div>
                    </div>

                    {/* Card 4 - Active Clients */}
                    <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
                      <div className="text-xs text-slate-500 mb-2">Active Clients</div>
                      <div className="text-3xl font-semibold text-orange-600 mb-1">12</div>
                      <div className="flex items-center gap-1 text-xs text-orange-600">
                        <span>→</span>
                        <span>steady growth</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Chart Section */}
                  <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Performance Overview</div>
                        <div className="text-lg font-semibold text-slate-900">Project Success Rate</div>
                      </div>
                      <div className="px-3 py-1.5 bg-slate-50 rounded-md text-xs text-slate-600 border border-slate-200">
                        2021 - 2024
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="relative h-32">
                      {/* Year labels */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-slate-400 mb-1">
                        <span>2021</span>
                        <span>2022</span>
                        <span>2023</span>
                        <span>2024</span>
                      </div>

                      {/* Decorative chart bars with gradient colors */}
                      <div className="absolute bottom-6 left-0 right-0 flex items-end justify-around gap-2 h-24">
                        {[
                          { height: 40, color: 'bg-gradient-to-t from-emerald-500 to-emerald-400' },
                          { height: 48, color: 'bg-gradient-to-t from-emerald-500 to-emerald-400' },
                          { height: 55, color: 'bg-gradient-to-t from-blue-500 to-blue-400' },
                          { height: 62, color: 'bg-gradient-to-t from-blue-500 to-blue-400' },
                          { height: 68, color: 'bg-gradient-to-t from-blue-500 to-blue-400' },
                          { height: 75, color: 'bg-gradient-to-t from-purple-500 to-purple-400' },
                          { height: 82, color: 'bg-gradient-to-t from-purple-500 to-purple-400' },
                          { height: 88, color: 'bg-gradient-to-t from-purple-500 to-purple-400' },
                          { height: 92, color: 'bg-gradient-to-t from-orange-500 to-orange-400' },
                          { height: 95, color: 'bg-gradient-to-t from-orange-500 to-orange-400' },
                          { height: 97, color: 'bg-gradient-to-t from-orange-500 to-orange-400' },
                          { height: 98, color: 'bg-gradient-to-t from-orange-500 to-orange-400' },
                        ].map((bar, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center justify-end">
                            <div
                              className={`w-full rounded-t transition-all ${bar.color}`}
                              style={{ height: `${bar.height}%` }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top right notification badge */}
                <div className="absolute top-8 right-8">
                  <div className="px-3 py-2 bg-white/95 backdrop-blur-sm rounded-lg text-xs border border-slate-200 shadow-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-700 font-medium">All Systems Operational</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-center max-w-3xl mx-auto text-slate-600 text-lg md:text-xl mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Dubai-based full-stack developer building{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold text-slate-900">fast, modern websites</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-200 -z-0"></span>
            </span>
            {' '}and web apps that actually convert.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="#portfolio"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-base font-medium transition-all hover:shadow-lg"
            >
              View Work
            </a>
            <a
              href="#pricing"
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-lg text-base font-medium transition-all hover:shadow-lg"
            >
              Get a Quote
            </a>
          </motion.div>

          {/* Stats Bar Below */}
          <motion.div
            className="mt-20 flex flex-wrap items-center justify-center gap-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div>
              <div className="text-sm text-slate-500 mb-1">At a glance</div>
              <div className="text-base text-slate-900">5+ live projects · 24–48h typical turnaround · Dubai (GMT+4)</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
