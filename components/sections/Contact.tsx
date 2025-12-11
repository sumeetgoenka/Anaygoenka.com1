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
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [submittedEmail, setSubmittedEmail] = useState('');

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell me about your project';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('sending');
    setErrors({});

    // Save email before clearing form
    const emailToShow = formData.email;

    // Simulate form submission (you'll need to set up a real backend or email service)
    setTimeout(() => {
      setStatus('success');
      setSubmittedEmail(emailToShow);
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="text-slate-900">Let&apos;s Build Together</span>
          </h2>
          <p className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
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
                <label htmlFor="name" className="block text-slate-900 font-bold mb-2 text-sm uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border rounded-xl text-slate-900 focus:outline-none transition-colors ${
                    errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-blue-600'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-900 font-bold mb-2 text-sm uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border rounded-xl text-slate-900 focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-blue-600'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="projectType" className="block text-slate-900 font-bold mb-2 text-sm uppercase tracking-wide">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border rounded-xl text-slate-900 focus:outline-none transition-colors ${
                    errors.projectType ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-blue-600'
                  }`}
                >
                  <option value="">Select a project type</option>
                  <option value="starter">Starter Website</option>
                  <option value="professional">Professional Website</option>
                  <option value="webapp">Custom Web App</option>
                  <option value="ai-chatbot">AI Chatbot</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && <p className="text-red-400 text-sm mt-1">{errors.projectType}</p>}
              </div>

              <div>
                <label htmlFor="budget" className="block text-slate-900 font-bold mb-2 text-sm uppercase tracking-wide">
                  Budget Range (Optional)
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="e.g., $500-$1000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-900 font-bold mb-2 text-sm uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-white border rounded-xl text-slate-900 focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-blue-600'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-slate-900 font-bold text-lg hover:from-blue-600 hover:to-orange-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === 'sending' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <span className="text-2xl">✓</span>
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-4 text-center">
                  <p className="text-green-400 font-semibold mb-1">Thanks for reaching out!</p>
                  <p className="text-slate-700 text-sm">I&apos;ll get back to you within 24 hours at {submittedEmail}.</p>
                </div>
              )}
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
            <div className="bg-white/50 backdrop-blur-sm border border-slate-300 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <FaEnvelope className="text-4xl text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Email Me</h3>
                  <p className="text-slate-600">Get a response within 24 hours</p>
                </div>
              </div>
              <a
                href="mailto:anay@anaygoenka.com"
                className="text-blue-600 hover:text-blue-500 transition-colors font-semibold"
              >
                anay@anaygoenka.com
              </a>
            </div>

            {/* Process */}
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-blue-600/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">The Process</h3>
              <div className="space-y-2 text-slate-800 font-normal">
                <p className="flex items-center gap-2">
                  <span className="text-blue-600">1.</span> Ask a few questions
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-600">2.</span> I send a quote
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-600">3.</span> You approve
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-600">4.</span> I build
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-600">5.</span> You flex 🔥
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="text-center p-6 bg-white/30 rounded-2xl border border-slate-300">
              <p className="text-slate-700">
                <span className="text-green-400 text-2xl">●</span> Available for new projects
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
