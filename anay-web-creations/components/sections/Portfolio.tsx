'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaRobot } from 'react-icons/fa';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'HappyStudy.co.uk',
      tagline: 'A full ed-tech platform built at age 12.',
      features: 'XP system • Homework manager • Games • Teacher tools • AdSense approved',
      tech: 'Full-stack SaaS',
      link: 'https://happystudy.co.uk',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'LatymerNews',
      tagline: 'A clean school newsroom with instant publishing.',
      features: 'Articles • Categories • Live updates • Lightweight UI',
      tech: 'Next.js, Vercel',
      link: 'https://latymernews.vercel.app',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'ScoreMarks',
      tagline: 'A sleek, high-conversion service landing page.',
      features: 'Forms • Auto email • Pricing UI • Responsive',
      tech: 'Next.js, Form handling',
      link: 'https://scoremarks.vercel.app',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'CrazyCalculator',
      tagline: 'An algebra engine disguised as a calculator.',
      features: 'Simultaneous equations • Step-by-step • Custom parser • Fast AF',
      tech: 'Advanced algorithms, clean UI',
      link: 'https://crazycalculator.vercel.app',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AI Chatbot Projects',
      tagline: 'Intelligent conversational AI that actually helps users.',
      features: 'Custom-trained chatbots • Website integration • Natural language processing • Multi-purpose applications',
      tech: 'AI APIs, Python, Next.js',
      link: '#contact',
      gradient: 'from-indigo-500 to-purple-600',
      featured: true,
      icon: <FaRobot className="text-5xl" />,
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">My Work</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Real projects. Live websites. Built from scratch with modern tech.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`group relative rounded-3xl overflow-hidden card-hover ${
                project.featured ? 'lg:col-span-3' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {/* Card background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>

              {/* Card content */}
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 h-full flex flex-col">
                {/* Icon for featured project */}
                {project.featured && (
                  <div className="text-indigo-400 mb-4">
                    {project.icon}
                  </div>
                )}

                {/* Project title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-lg text-slate-300 font-semibold mb-4 italic">
                  &ldquo;{project.tagline}&rdquo;
                </p>

                {/* Features */}
                <p className="text-slate-400 text-sm mb-4 flex-grow">
                  {project.features}
                </p>

                {/* Tech stack */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-slate-700/50 rounded-full text-indigo-400 text-xs font-semibold">
                    {project.tech}
                  </span>
                </div>

                {/* Specialty badge for AI chatbots */}
                {project.featured && (
                  <div className="mb-6 p-4 bg-indigo-600/20 border border-indigo-500/50 rounded-xl">
                    <p className="text-indigo-300 text-sm font-semibold">
                      ⭐ This is my specialty - building intelligent chatbots that actually help users
                    </p>
                  </div>
                )}

                {/* View button */}
                <a
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all group-hover:scale-105"
                >
                  {project.link.startsWith('http') ? 'View Live' : 'Get Started'}
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
