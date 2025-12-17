'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      title: 'Landing Pages',
      description: 'Conversion-focused pages that make your business look premium.',
    },
    {
      title: 'Web Applications',
      description: 'Full-stack apps built with modern frameworks and clean UX.',
      featured: true,
    },
    {
      title: 'Admin Dashboards',
      description: 'Internal tools for managing data, users, and workflows.',
    },
    {
      title: 'Custom Integrations',
      description: 'APIs, automations, and tools that connect your services.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-4">
            What I Build
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Modern solutions for{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold text-slate-900">real businesses</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-200 -z-0"></span>
            </span>
            .
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {service.featured && (
                <div className="inline-block px-3 py-1 bg-slate-900 text-white text-xs rounded-full mb-4 font-medium">
                  SPECIALTY
                </div>
              )}
              <h3 className="text-2xl font-normal text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
