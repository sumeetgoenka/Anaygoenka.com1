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
      problem: 'Students needed an engaging way to track homework and stay motivated.',
      solution: 'Built a gamified learning platform with XP systems, homework tracking, and mini-games.',
      outcome: '500+ student sign-ups in first month • AdSense approved • Featured by teachers',
      features: 'XP system • Homework manager • Games • Teacher tools • AdSense approved',
      tech: 'Full-stack SaaS',
      link: 'https://happystudy.co.uk',
    },
    {
      title: 'LatymerNews',
      tagline: 'A clean school newsroom with instant publishing.',
      problem: 'School needed a modern platform for student journalism without complexity.',
      solution: 'Created a lightweight, fast news site with instant publishing and clean categorization.',
      outcome: '50+ articles published • 2-day build time • Zero load time complaints',
      features: 'Articles • Categories • Live updates • Lightweight UI',
      tech: 'Next.js, Vercel',
      link: 'https://latymernews.vercel.app',
    },
    {
      title: 'ScoreMarks',
      tagline: 'A sleek, high-conversion service landing page.',
      problem: 'Education service needed a professional website to convert visitors into leads.',
      solution: 'Designed a modern landing page with clear CTAs, pricing, and automated contact forms.',
      outcome: '40% form completion rate • Mobile-optimized • Delivered in 3 days',
      features: 'Forms • Auto email • Pricing UI • Responsive',
      tech: 'Next.js, Form handling',
      link: 'https://scoremarks.vercel.app',
    },
    {
      title: 'CrazyCalculator',
      tagline: 'An algebra engine disguised as a calculator.',
      problem: 'Students struggled with complex simultaneous equations and needed step-by-step help.',
      solution: 'Built a custom algebra parser that solves equations and shows the working process.',
      outcome: '2,000+ calculations performed • Used by 200+ students • Featured in math classes',
      features: 'Simultaneous equations • Step-by-step • Custom parser • Fast AF',
      tech: 'Advanced algorithms, clean UI',
      link: 'https://crazycalculator.vercel.app',
    },
    {
      title: 'AI Chatbot Projects',
      tagline: 'Intelligent conversational AI that actually helps users.',
      problem: 'Businesses need 24/7 customer support but can\'t afford full-time staff.',
      solution: 'Custom-trained chatbots that understand context, answer questions, and integrate seamlessly.',
      outcome: 'Handles 100+ conversations daily • 85% user satisfaction • Reduces support workload by 60%',
      features: 'Custom-trained chatbots • Website integration • Natural language processing • Multi-purpose applications',
      tech: 'AI APIs, Python, Next.js',
      link: '#contact',
      featured: true,
      icon: <FaRobot className="text-5xl" />,
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="text-slate-900">My Work</span>
          </h2>
          <p className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
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
                <div className="text-blue-600 mb-4 flex justify-center">
                  {project.icon}
                </div>
              )}

              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">{project.title}</h3>

              <p className="text-xl text-slate-700 italic mb-6 font-normal">
                &ldquo;{project.tagline}&rdquo;
              </p>

              {/* Case Study Structure */}
              <div className="text-left max-w-2xl mx-auto mb-6 space-y-4">
                <div>
                  <h4 className="text-blue-600 font-bold mb-2 text-sm uppercase tracking-wider">Problem</h4>
                  <p className="text-slate-700 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-blue-600 font-bold mb-2 text-sm uppercase tracking-wider">Solution</h4>
                  <p className="text-slate-700 leading-relaxed">{project.solution}</p>
                </div>
                <div>
                  <h4 className="text-orange-600 font-bold mb-2 text-sm uppercase tracking-wider">Outcome</h4>
                  <p className="text-slate-800 font-medium leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              <div className="text-blue-600 text-sm font-semibold mb-6">
                {project.tech}
              </div>

              {project.featured && (
                <div className="mb-6 text-blue-500 text-sm">
                  ⭐ This is my specialty - building intelligent chatbots that actually help users
                </div>
              )}

              <a
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors font-semibold"
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
