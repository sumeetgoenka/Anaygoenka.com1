'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHello, setShowHello] = useState(false);
  const [helloName, setHelloName] = useState('');
  const [helloEmail, setHelloEmail] = useState('');
  const [helloMessage, setHelloMessage] = useState('');
  const [helloError, setHelloError] = useState('');
  const [helloStatus, setHelloStatus] = useState<'idle' | 'success'>('idle');
  const [isSendingHello, setIsSendingHello] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Now', href: '/now' },
    { name: 'About', href: '/about' },
  ];

  function openHello() {
    setShowHello(true);
  }

  function closeHello() {
    setShowHello(false);
    setHelloError('');
    setHelloStatus('idle');
  }

  async function handleHelloSubmit(e: React.FormEvent) {
    e.preventDefault();
    setHelloError('');
    setHelloStatus('idle');
    setIsSendingHello(true);

    try {
      const res = await fetch('/api/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: helloName.trim(),
          email: helloEmail.trim(),
          message: helloMessage.trim(),
        }),
      });

      if (!res.ok) {
        let data: { error?: string; details?: string } = {};
        let rawText = '';
        try {
          rawText = await res.text();
          data = rawText ? JSON.parse(rawText) : {};
        } catch (parseError) {
          console.error('Failed to parse hello error response:', parseError);
        }
        console.error('Hello submit failed', {
          status: res.status,
          statusText: res.statusText,
          body: rawText,
        });
        setHelloError(
          data.details
            ? `${data.error || 'Something went wrong.'} — ${data.details}`
            : data.error || 'Something went wrong.'
        );
        return;
      }

      setHelloStatus('success');
      setHelloName('');
      setHelloEmail('');
      setHelloMessage('');
    } catch (error) {
      console.error('Failed to send hello message:', error);
      setHelloError(
        error instanceof Error ? `Network error — ${error.message}` : 'Network error. Please try again.'
      );
    } finally {
      setIsSendingHello(false);
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-slate-900'
            }`}
          >
            Anay Goenka
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              type="button"
              onClick={openHello}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-all hover:shadow-lg"
            >
              Say Hello
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-b border-slate-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block font-medium transition-colors ${
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? 'text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                type="button"
                className="block w-full px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-center font-medium transition-all"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openHello();
                }}
              >
                Say Hello
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHello && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-8 relative"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                type="button"
                onClick={closeHello}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
              <h2 className="text-2xl font-normal text-slate-900 mb-2">Say Hello</h2>
              <p className="text-slate-600 mb-6">Send me a message and I&apos;ll get back to you.</p>

              {helloError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {helloError}
                </div>
              )}
              {helloStatus === 'success' && (
                <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 text-sm">
                  Message sent. Thanks for reaching out!
                </div>
              )}

              <form onSubmit={handleHelloSubmit} className="space-y-4">
                <div>
                  <label className="block text-slate-900 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={helloName}
                    onChange={(e) => setHelloName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-slate-900 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={helloEmail}
                    onChange={(e) => setHelloEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-900 font-medium mb-2">Message</label>
                  <textarea
                    value={helloMessage}
                    onChange={(e) => setHelloMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-colors resize-none"
                    placeholder="Say hi..."
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={isSendingHello}
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSendingHello ? 'Sending...' : 'Send Message'}
                  </button>
                  <button
                    type="button"
                    onClick={closeHello}
                    className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-lg text-sm font-medium transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
