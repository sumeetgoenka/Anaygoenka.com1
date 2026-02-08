export interface Project {
  slug: string;
  title: string;
  description: string;
  why: string;
  features: string[];
  learned: string;
  tech: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'happystudy',
    title: 'HappyStudy',
    description: 'Ed-tech platform with gamification, homework tracking, and 500+ student sign-ups.',
    why: 'I wanted to make studying less boring and more rewarding for students.',
    features: [
      'Gamified learning with XP and streaks',
      'Homework tracking and reminders',
      'Student dashboard with progress stats',
      '500+ sign-ups',
    ],
    learned: 'This was my first full-stack SaaS. I learned how to structure a database, handle user auth, and ship a product that real people use.',
    tech: 'Full-stack SaaS',
    liveUrl: 'https://happystudy.co.uk',
    featured: true,
  },
  {
    slug: 'anaythetutor',
    title: 'AnayTheTutor',
    description: 'YouTube channel where I teach stuff and break down topics clearly.',
    why: 'Teaching helps me learn better, and I want to make tough topics feel simple.',
    features: [
      'Clear, step-by-step explanations',
      'Short lessons and walkthroughs',
      'Focused on practical understanding',
      'New videos as I learn more',
    ],
    learned: 'Explaining concepts out loud forces clarity. I learned how to structure lessons so ideas stick.',
    tech: 'YouTube · Teaching',
    liveUrl: 'https://www.youtube.com/@AnayTheTutor',
  },
  {
    slug: 'custom-tools',
    title: 'Custom Tools',
    description: 'Internal dashboards and automation tools for businesses.',
    why: 'Built various tools to solve specific problems — from data dashboards to workflow automations.',
    features: [
      'Admin dashboards for managing data',
      'API integrations and automations',
      'Custom reporting tools',
      'Business workflow automation',
    ],
    learned: 'Every tool had different requirements, which taught me to adapt quickly and build exactly what\'s needed without over-engineering.',
    tech: 'Full-stack · APIs',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
