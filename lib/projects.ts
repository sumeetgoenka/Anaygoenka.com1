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
    slug: 'nudge',
    title: 'Nudge',
    tagline: 'A floating HUD for your day.',
    description:
      'A macOS menu-bar companion that keeps your schedule, todos, and focus visible without getting in the way. Time blocks, checklists, 20-20-20 eye breaks, hydration reminders.',
    category: 'App',
    year: '2025',
    accent: '#8B5CF6',
    why:
      "Calendar apps live in tabs I never open. I wanted something that just sits there and tells me what I should be doing right now — and what's coming next.",
    features: [
      'Floating always-on-top widget with schedule and countdown to next block',
      'Todo mode with priorities, descriptions, and quick-add',
      'Personalised greetings and tone throughout the day',
      'Optional 20-20-20 eye-break reminders',
      'Gentle hydration nudges anchored to wall-clock times',
      'Sparkle auto-updates — never re-download',
    ],
    learned:
      'Menu-bar apps are a different beast from windowed apps — always-on-top windows, click-through regions, and wall-clock scheduling on a sleeping laptop. First app I shipped with Sparkle auto-updates.',
    tech: ['Swift', 'AppKit', 'macOS', 'Sparkle'],
    liveUrl: 'https://nudge-daily.vercel.app',
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
    slug: 'yallo-ats',
    title: 'Yallo ATS',
    tagline: 'AI-powered recruitment infrastructure for a real firm.',
    description:
      "A full recruitment ATS and CRM built for Yallo Group, my father's IT staffing firm. The headline feature is Reverse Match — AI that proactively surfaces candidates for roles rather than waiting for a search.",
    category: 'Web',
    year: '2025–',
    accent: '#06B6D4',
    why:
      'The team was doing everything manually. I mapped the workflow, designed the data model, and built the system that replaces it.',
    features: [
      'Reverse Match — pgvector embeddings match candidates to open roles automatically',
      'Unified contacts architecture — candidates and clients in one table, not two',
      'Full ATS pipeline: sourcing, screening, placement, invoicing',
      'GDPR-compliant data model with organisation-level multi-tenancy',
      'Built on Next.js, TypeScript, PostgreSQL, Vercel',
    ],
    learned:
      'Designing for real operational constraints is harder than building for yourself. Thirty-one tables, a 26-page spec, and a colleague (Rohit) to keep in sync — proper software, not a side project.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'pgvector'],
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
    liveUrl: 'https://www.youtube.com/@AnayTheTutor',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
