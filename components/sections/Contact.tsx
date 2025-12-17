'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate sending
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-4">
            Let's build something{' '}
            <span className="relative inline-block">
              <span className="relative z-10">great</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200 -z-0"></span>
            </span>
            .
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Drop a message and I'll reply within{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold text-slate-900">24 hours</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-200 -z-0"></span>
            </span>
            .
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-slate-900 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-900 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-900 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="w-full px-8 py-4 bg-slate-900 rounded-lg text-white font-medium text-lg hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Sent!' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center">
                <p className="text-slate-900 font-medium mb-1">Thanks for reaching out!</p>
                <p className="text-slate-600 text-sm">I'll get back to you within 24 hours.</p>
              </div>
            )}
          </form>

          {/* Quick Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-2xl font-normal text-slate-900 mb-1">24h</div>
              <div className="text-sm text-slate-600">response time</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-2xl font-normal text-slate-900 mb-1">Dubai-based</div>
              <div className="text-sm text-slate-600">(GMT+4)</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-2xl font-normal text-slate-900 mb-1">English</div>
              <div className="text-sm text-slate-600">communication</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
