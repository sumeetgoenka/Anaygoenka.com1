import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '700'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anay Goenka — builder, student, occasional nuisance',
  description:
    "I'm Anay — a 13-year-old developer in Dubai. I build macOS apps, websites, and teaching videos. This is where I keep my work.",
  keywords: ['Anay Goenka', 'FocusDragon', 'Nudge', 'HappyStudy', 'Dubai', 'developer', 'macOS'],
  authors: [{ name: 'Anay Goenka' }],
  openGraph: {
    title: 'Anay Goenka',
    description: 'Builder, student, occasional nuisance. Dubai-based.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="grain">
        <Navbar />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
