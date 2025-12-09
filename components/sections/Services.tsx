'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaRocket,
  FaGraduationCap,
  FaRobot,
  FaCode,
  FaNewspaper,
  FaChartLine,
  FaCog,
  FaServer,
} from 'react-icons/fa';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <FaRocket />,
      title: 'Landing Pages & Business Sites',
      description: 'Modern, conversion-focused websites that make your business shine',
    },
    {
      icon: <FaGraduationCap />,
      title: 'School Dashboards & Student Tools',
      description: 'Educational platforms with smart features for students and teachers',
    },
    {
      icon: <FaRobot />,
      title: 'AI Chatbots & Conversational Interfaces',
      description: 'Intelligent chatbots that actually help users - my specialty! ⭐',
      featured: true,
    },
    {
      icon: <FaCode />,
      title: 'Custom Web Applications',
      description: 'Full-stack apps built from scratch with modern tech',
    },
    {
      icon: <FaNewspaper />,
      title: 'Blog & News Platforms',
      description: 'Content management systems that are easy to use and beautiful',
    },
    {
      icon: <FaChartLine />,
      title: 'Admin Panels & Analytics Dashboards',
      description: 'Data visualization and management tools that make sense',
    },
    {
      icon: <FaCog />,
      title: 'Productivity & Automation Tools',
      description: 'Apps that save time and make workflows smoother',
    },
    {
      icon: <FaServer />,
      title: 'Hosting & Domain Setup',
      description: 'Complete deployment and configuration on modern platforms',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
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
            <span className="gradient-text">What I Build</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            From simple landing pages to complex AI-powered applications — I build it all.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div
                className={`text-5xl mb-4 ${
                  service.featured ? 'text-indigo-400' : 'text-purple-400'
                }`}
              >
                {service.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              {service.featured && <div className="mt-2 text-indigo-400 text-xs font-semibold">⭐ SPECIALTY</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
