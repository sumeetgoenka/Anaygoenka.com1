'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import type { DevlogPost } from '@/lib/devlog';

interface DevlogPostViewProps {
  post: DevlogPost;
}

export default function DevlogPostView({ post }: DevlogPostViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/devlog"
            className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors mb-8 inline-block"
          >
            &larr; Back to Devlog
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-4">
            {post.title}
          </h1>
          <div className="w-16 h-1 bg-slate-900 mb-6"></div>

          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm text-slate-500">
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            {post.tags.length > 0 && (
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="prose-custom space-y-6 text-slate-600 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
