export type ProjectCategory = 'App' | 'Web' | 'Teaching';

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  year: string;
  accent: string;
  why: string;
  features: string[];
  learned: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'focusdragon',
    title: 'FocusDragon',
    tagline: 'The toughest free distraction blocker on macOS.',
    description:
      'A system-level website and app blocker for macOS with multiple layers of tamper resistance. Built because every other blocker was too easy to bypass.',
    category: 'App',
    year: '2025',
    accent: '#FF4D1C',
    why:
      'I kept disabling my own blockers on impulse. So I built one that fights back — a root-level daemon, anti-tamper locks, and extensions for every browser that matters.',
    features: [
      'System-level DNS blocking via /etc/hosts — works across every browser on the machine',
      'Background daemon running as root — survives restarts, resists force-quit',
      'Process monitor that terminates blocked apps within seconds of launch',
      'Browser extensions for Chrome, Firefox, Safari, Edge, Brave, Opera, Vivaldi',
      'Lock modes: timer, random-text challenge, schedule-based',
      'Anti-tamper blocks uninstall and System Settings while a lock is active',
    ],
    learned:
      'My first full native macOS app — Swift, SwiftUI, a LaunchDaemon, XPC IPC, and six browser extensions shipped in parallel. Privilege escalation, notarisation, cross-browser packaging — the full surface area of shipping real software.',
    tech: ['Swift', 'SwiftUI', 'macOS', 'LaunchDaemon', 'WebExtensions'],
    liveUrl: 'https://focusdragon.vercel.app',
    featured: true,
  },
  {
    slug: 'happystudy',
    title: 'HappyStudy',
    tagline: 'A revision platform built for one school.',
    description:
      'A Latymer School-specific Q&A and community platform. Not generic GCSE revision — built around the syllabuses, teachers, and students of one school. Infrastructure is live. Content sprint is summer 2026.',
    category: 'Web',
    year: '2024–',
    accent: '#22C55E',
    why:
      "Generic revision tools don't know what your school actually teaches. I wanted something that did.",
    features: [
      "Subject Q&A structured around Latymer's specific curriculum",
      'LatymerHub — a Reddit-style student community',
      'Groq-powered AI moderation with a strike system',
      'Homework tracking and due-date reminders',
      'Student dashboard with progress stats',
    ],
    learned:
      'How to scope deliberately. The temptation is to build for everyone. The discipline is to build for one school and make it actually good. Also: auth, databases, and moderation — every ugly piece of a real SaaS.',
    tech: ['Next.js', 'Supabase', 'Groq'],
    liveUrl: 'https://happystudy.co.uk',
    featured: true,
  },
  {
    slug: 'yallo-ai-academy',
    title: 'Yallo AI Academy',
    tagline: 'AI certification prep for individual professionals.',
    description:
      "A B2C online product for professionals preparing for the AI certification economy — starting with independent Claude Certified Architect preparation. Self-paced lessons, a six-domain readiness assessment, and a 4-week live cohort with mentors.",
    category: 'Web',
    year: '2026',
    accent: '#D4A843',
    why:
      "Vendor AI certifications are emerging fast; enterprise architects need somewhere serious to prepare. Most options are either generic Udemy courses or vendor-locked academies. Yallo AI Academy is the architecture-led, deployment-ready middle ground — an independent preparation product that doesn't pretend to be the official exam.",
    features: [
      'Six-domain Yallo Readiness Score — Foundations, Prompt & Context, API & Tool Use, Evaluation, Governance, Architecture',
      'Eight-pathway skill tree with a seven-layer lesson template (Why this matters / Learn / Yallo Lens / Check / Apply / Exam Readiness / Deployability)',
      'Founding Cohort: 1 mentor + ~30 globally distributed professionals, four weeks on Zoom, capstone-graded',
      'Independent preparation programme — no vendor endorsement claims, no exam dumps, original questions only',
      'In-house admin dashboard (no HubSpot) on Supabase — leads, pipeline, orders, cohorts, email + webhook logs',
    ],
    learned:
      'How to write execution plans that multiple agents can pick up in parallel — every phase has a Shared Contract, every sub-phase declares the files it owns and the files it must not touch.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Sanity', 'Stripe', 'Resend', 'Vercel'],
    liveUrl: 'https://academy.yallo.co',
    featured: true,
  },
  {
    slug: 'yallo-phone',
    title: 'Yallo Phone',
    tagline: 'A company softphone that works everywhere.',
    description:
      'A full calling and messaging platform for Yallo Group — a browser softphone plus native iOS and Android apps, all on one Twilio backbone. Calls, SMS, shared contacts, and voicemails that transcribe and summarise themselves.',
    category: 'Web',
    year: '2026',
    accent: '#3B82F6',
    why:
      'A recruitment firm lives on the phone. The team was spread across mobiles and personal numbers, with no shared history and nothing written down. I built the phone system so every call, text, and voicemail lands in one place the whole company can see.',
    features: [
      'Browser softphone on the Twilio Voice SDK — Opus codec, roaming edge selection, live call-quality warnings',
      'Native iOS and Android apps sharing the same Fastify + Prisma backend',
      'Voicemail transcription via Deepgram, then summarised with Claude',
      'Two-way SMS, shared contacts, and full call history',
      'Number scoring — a heuristic that ranks how memorable a number is, so the nicest ones get offered first',
      'Admin dashboard, in-app bug reports, and push notifications',
    ],
    learned:
      'How to debug something you cannot see. Calls to India sounded fuzzy and my first theory was carrier routing — plausible, expensive to act on, and wrong. Turning on Twilio Voice Insights and reading the actual per-leg jitter showed the carrier was the cleanest part of the call and the problem was the caller’s own uplink. Measure before you spend.',
    tech: ['TypeScript', 'Fastify', 'Prisma', 'Twilio', 'React', 'React Native', 'Swift', 'Deepgram', 'Claude'],
    liveUrl: 'https://phone.yallo.co',
    featured: true,
  },
  {
    slug: 'anaythetutor',
    title: 'AnayTheTutor',
    tagline: 'A YouTube channel where I teach AI, maths, and CS.',
    description:
      'Short, clear lessons about artificial intelligence, competition maths, and computer science — explained the way I had to figure them out. Teaching forces clarity.',
    category: 'Teaching',
    year: '2024–',
    accent: '#EF4444',
    why:
      'Explaining something out loud is the fastest way to find the holes in your understanding. So I started recording.',
    features: [
      'Focused breakdowns of AI concepts, maths techniques, and CS fundamentals',
      'Short-form lessons under five minutes',
      'Built around practical intuition, not textbook recital',
    ],
    learned:
      'Video is a brutal editor. If the explanation is shaky, it shows. I learned to plan tighter, cut harder, and lead with the punchline.',
    tech: ['YouTube'],
    liveUrl: 'https://www.youtube.com/@CoolestAnay',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
