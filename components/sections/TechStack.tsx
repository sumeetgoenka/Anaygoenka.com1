'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiVercel,
  SiSupabase,
  SiFirebase,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from 'react-icons/si';

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const technologies = [
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'hover:text-white' },
    { name: 'React', icon: <SiReact />, color: 'hover:text-cyan-400' },
    { name: 'Vercel', icon: <SiVercel />, color: 'hover:text-white' },
    { name: 'Supabase', icon: <SiSupabase />, color: 'hover:text-green-400' },
    { name: 'Firebase', icon: <SiFirebase />, color: 'hover:text-yellow-400' },
    { name: 'Python', icon: <SiPython />, color: 'hover:text-blue-400' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'hover:text-yellow-300' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'hover:text-blue-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'hover:text-cyan-500' },
    { name: 'Git', icon: <SiGit />, color: 'hover:text-orange-500' },
    { name: 'GitHub', icon: <SiGithub />, color: 'hover:text-white' },
  ];

  return (
    <section id="tech-stack" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Modern tools. Real developer energy. No Wix, no WordPress templates.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-3 group"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div
                className={`text-6xl text-slate-400 transition-all duration-300 ${tech.color} group-hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]`}
              >
                {tech.icon}
              </div>
              <span className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-block px-8 py-4 bg-indigo-600/20 border border-indigo-500/50 rounded-full">
            <p className="text-indigo-300 font-semibold">
              + AI APIs (OpenAI, Anthropic, and more) 🤖
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
