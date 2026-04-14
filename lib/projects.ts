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
      'Calendar apps live in tabs I never open. I wanted a tiny widget that just sits there and tells me what I should be doing right now — and what is coming next.',
    features: [
      'Floating always-on-top widget with schedule + countdown to next block',
      'Todo mode with priorities, descriptions, and quick-add',
      'Personalised greetings and tone throughout the day',
      'Optional 20-20-20 eye-break reminders',
      'Gentle hydration nudges anchored to wall-clock times',
      'Sparkle auto-updates — never re-download',
    ],
    learned:
      'Menu-bar apps are a different beast from windowed apps — always-on-top windows, click-through regions, and wall-clock scheduling in a sleeping laptop. First app I shipped with Sparkle auto-updates.',
    tech: ['Swift', 'AppKit', 'macOS', 'Sparkle'],
    liveUrl: 'https://nudge-daily.vercel.app',
    featured: true,
  },
  {
    slug: 'happystudy',
    title: 'HappyStudy',
    tagline: 'A gamified study platform for students.',
    description:
      'An ed-tech SaaS with XP, streaks, homework tracking, and a student dashboard. 500+ sign-ups. Built at 12, still my first real product.',
    category: 'Web',
    year: '2024',
    accent: '#22C55E',
    why:
      'Studying felt like a grind. I wanted to make it feel like levelling up in a game — and see if real students would actually use it.',
    features: [
      'Gamified learning with XP, streaks, and levels',
      'Homework tracker with due-date reminders',
      'Student dashboard with progress stats',
      'Teacher tools for assigning work',
      'Over 500 student sign-ups',
    ],
    learned:
      'This was the project that taught me to ship. Auth, databases, payments, moderation — every piece of a real SaaS, figured out in public by a 12-year-old.',
    tech: ['Next.js', 'Firebase', 'Stripe'],
    liveUrl: 'https://happystudy.co.uk',
    featured: true,
  },
  {
    slug: 'anaythetutor',
    title: 'AnayTheTutor',
    tagline: 'A YouTube channel where I teach stuff.',
    description:
      'Short, clear lessons where I break down topics the way I wish they had been explained to me. Teaching forces clarity.',
    category: 'Teaching',
    year: '2024–',
    accent: '#EF4444',
    why:
      'Explaining something out loud is the fastest way to find the holes in your understanding. So I started recording.',
    features: [
      'Step-by-step breakdowns of maths and CS topics',
      'Short-form lessons under five minutes',
      'Focused on practical intuition, not textbook recital',
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
