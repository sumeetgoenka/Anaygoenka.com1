'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const tiers = [
    {
      name: 'Starter Website',
      price: '$27',
      perfectFor: 'school clubs, personal projects, small businesses',
      timeline: '1–3 days',
      features: [
        '1–3 custom pages',
        'Clean, modern UI',
        'Contact form',
        'Mobile responsive',
        'Basic hosting setup',
      ],
    },
    {
      name: 'Professional Website',
      price: '$77',
      perfectFor: 'businesses, portfolios, content sites',
      timeline: '1–2 weeks',
      popular: true,
      features: [
        '5–7 custom pages',
        'Smooth animations',
        'Blog / updates system',
        'Custom forms & integrations',
        'SEO basics',
        'Hosting + domain setup',
      ],
    },
    {
      name: 'Custom Web App',
      price: 'Get a Quote',
      perfectFor: 'SaaS, complex tools, custom platforms',
      timeline: '2–4 weeks (depends on complexity)',
      features: [
        'Dashboards + admin panels',
        'Database integration',
        'User authentication',
        'API integrations',
        'Full-stack features',
        'Ongoing support options',
      ],
      note: 'This is where you get SaaS-level power.',
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-4">
            Pricing
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Transparent pricing. No surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-8 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {tier.popular && (
                <div className="inline-block px-3 py-1 bg-slate-900 text-white text-xs rounded-full mb-4 font-medium self-start">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-normal text-slate-900 mb-3">{tier.name}</h3>

              <div className="text-4xl font-normal text-slate-900 mb-4">{tier.price}</div>

              <p className="text-slate-600 text-sm mb-4">Best for: {tier.perfectFor}</p>

              <div className="mb-6 pb-6 border-b border-slate-200">
                <div className="text-slate-600">
                  <span className="text-sm">Timeline:</span>
                  <div className="text-lg font-normal text-slate-900">{tier.timeline}</div>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="text-slate-900 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {tier.note && (
                <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <p className="text-slate-600 text-sm">{tier.note}</p>
                </div>
              )}

              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
              >
                {tier.price === 'Get a Quote' ? 'Get Quote' : 'Get Started'}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-slate-600 mt-12 text-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          All packages include revisions until you&apos;re 100% happy.
        </motion.p>
      </div>
    </section>
  );
}
