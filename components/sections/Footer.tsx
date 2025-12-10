'use client';

import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">ANAY</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              13-year-old full-stack developer building modern websites, AI tools, and web apps in Dubai.
            </p>
            <a
              href="mailto:anay@anaygoenka.com"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              anay@anaygoenka.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-slate-900 font-bold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/anaygoenka"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://twitter.com/anaygoenka"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/anaygoenka"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-200 text-center text-slate-600">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Anay. Built with <FaHeart className="text-red-500" /> by Anay
          </p>
        </div>
      </div>
    </footer>
  );
}
