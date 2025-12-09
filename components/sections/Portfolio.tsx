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
    },
    {
      title: 'LatymerNews',
      tagline: 'A clean school newsroom with instant publishing.',
      features: 'Articles • Categories • Live updates • Lightweight UI',
      tech: 'Next.js, Vercel',
      link: 'https://latymernews.vercel.app',
    },
    {
      title: 'ScoreMarks',
      tagline: 'A sleek, high-conversion service landing page.',
      features: 'Forms • Auto email • Pricing UI • Responsive',
      tech: 'Next.js, Form handling',
      link: 'https://scoremarks.vercel.app',
    },
    {
      title: 'CrazyCalculator',
      tagline: 'An algebra engine disguised as a calculator.',
      features: 'Simultaneous equations • Step-by-step • Custom parser • Fast AF',
      tech: 'Advanced algorithms, clean UI',
      link: 'https://crazycalculator.vercel.app',
    },
    {
      title: 'AI Chatbot Projects',
      tagline: 'Intelligent conversational AI that actually helps users.',
      features: 'Custom-trained chatbots • Website integration • Natural language processing • Multi-purpose applications',
      tech: 'AI APIs, Python, Next.js',
      link: '#contact',
      featured: true,
      icon: <FaRobot className="text-5xl" />,
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
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

        {/* Projects list */}
        <div className="max-w-4xl mx-auto space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {project.icon && (
                <div className="text-indigo-400 mb-4 flex justify-center">
                  {project.icon}
                </div>
              )}

              <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>

              <p className="text-xl text-slate-300 italic mb-4">
                &ldquo;{project.tagline}&rdquo;
              </p>

              <p className="text-slate-400 mb-4">
                {project.features}
              </p>

              <div className="text-indigo-400 text-sm font-semibold mb-6">
                {project.tech}
              </div>

              {project.featured && (
                <div className="mb-6 text-indigo-300 text-sm">
                  ⭐ This is my specialty - building intelligent chatbots that actually help users
                </div>
              )}

              <a
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-semibold"
              >
                {project.link.startsWith('http') ? 'View Live' : 'Get Started'}
                <FaExternalLinkAlt className="text-sm" />
              </a>

              {index < projects.length - 1 && (
                <div className="mt-12 w-16 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
