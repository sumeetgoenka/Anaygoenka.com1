'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission (you'll need to set up a real backend or email service)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let&apos;s Build Together</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Ready to create something amazing? Drop me a message and let&apos;s make it happen.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-slate-300 font-semibold mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="starter">Starter Website</option>
                  <option value="professional">Professional Website</option>
                  <option value="webapp">Custom Web App</option>
                  <option value="ai-chatbot">AI Chatbot</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-slate-300 font-semibold mb-2">
                  Budget Range (Optional)
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="e.g., $500-$1000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-bold text-lg hover:from-indigo-500 hover:to-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  'Sent! 🎉'
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {/* Email */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <FaEnvelope className="text-4xl text-indigo-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Email Me</h3>
                  <p className="text-slate-400">Get a response within 24 hours</p>
                </div>
              </div>
              <a
                href="mailto:your-email@example.com"
                className="text-indigo-400 hover:text-indigo-300 transition-colors font-semibold"
              >
                your-email@example.com
              </a>
            </div>

            {/* Process */}
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">The Process</h3>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-center gap-2">
                  <span className="text-indigo-400">1.</span> Ask a few questions
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-indigo-400">2.</span> I send a quote
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-indigo-400">3.</span> You approve
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-indigo-400">4.</span> I build
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-indigo-400">5.</span> You flex 🔥
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700">
              <p className="text-slate-300">
                <span className="text-green-400 text-2xl">●</span> Available for new projects
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
