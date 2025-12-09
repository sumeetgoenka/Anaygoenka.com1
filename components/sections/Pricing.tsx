'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCheck, FaStar } from 'react-icons/fa';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const tiers = [
    {
      icon: '💫',
      name: 'Starter Website',
      price: '$27',
      perfectFor: 'Small businesses, school clubs, personal projects',
      timeline: '1-3 days',
      features: [
        '1-3 custom pages',
        'Clean, modern UI',
        'Contact form',
        'Mobile responsive',
        'Basic hosting setup',
      ],
    },
    {
      icon: '🚀',
      name: 'Professional Website',
      price: '$77',
      perfectFor: 'Businesses, portfolios, content sites',
      timeline: '1-2 weeks',
      popular: true,
      features: [
        '5-7 custom pages',
        'Smooth animations',
        'Blog or updates system',
        'Custom forms & integrations',
        'SEO optimization',
        'Full hosting & domain setup',
      ],
    },
    {
      icon: '💎',
      name: 'Custom Web App',
      price: 'Get Quote',
      perfectFor: 'SaaS ideas, complex tools, AI-powered platforms',
      timeline: '2-4 weeks (depends on complexity)',
      premium: true,
      features: [
        'Custom dashboards',
        'Database integration',
        'User login systems',
        'AI chatbot integration',
        'Admin panels',
        'Full-stack features',
        'Ongoing support options',
      ],
      note: 'This is where the real magic happens - SaaS-level power',
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Just honest work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl p-8 ${
                tier.popular
                  ? 'bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-2 border-indigo-500 scale-105'
                  : tier.premium
                  ? 'bg-slate-800/70 border-2 border-purple-500/50'
                  : 'bg-slate-800/50 border border-slate-700'
              } backdrop-blur-sm card-hover`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white text-sm font-bold flex items-center gap-1">
                  <FaStar className="text-xs" />
                  MOST POPULAR
                </div>
              )}

              <div className="text-5xl mb-4">{tier.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>

              <div className="text-4xl font-bold gradient-text mb-4">{tier.price}</div>

              <p className="text-indigo-400 text-sm font-semibold mb-4">Perfect for: {tier.perfectFor}</p>

              <div className="mb-6 pb-6 border-b border-slate-700">
                <div className="text-slate-300">
                  <span className="text-sm">Timeline:</span>
                  <div className="text-lg font-semibold text-white">{tier.timeline}</div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <FaCheck className="text-indigo-400 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {tier.note && (
                <div className="mb-6 p-4 bg-indigo-600/10 border border-indigo-500/30 rounded-xl">
                  <p className="text-indigo-300 text-sm italic">{tier.note}</p>
                </div>
              )}

              <a
                href="#contact"
                className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                  tier.popular || tier.premium
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                {tier.price === 'Get Quote' ? 'Get Quote' : 'Get Started'}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-slate-400 mt-12 text-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          All packages include free revisions until you&apos;re 100% happy 🔥
        </motion.p>
      </div>
    </section>
  );
}
