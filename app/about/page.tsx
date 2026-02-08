import type { Metadata } from 'next';
import AboutSection from '@/components/sections/About';

export const metadata: Metadata = {
  title: 'About — Anay Goenka',
  description: 'Student and full-stack developer based in Dubai.',
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
    </>
  );
}
