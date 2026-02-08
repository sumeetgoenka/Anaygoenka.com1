'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

interface LatestBlogProps {
  posts: BlogPost[];
}

export default function LatestBlog({ posts }: LatestBlogProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  if (posts.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-4">
            Blog
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Latest notes and updates.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-normal text-slate-900 group-hover:underline">
                    {post.title}
                  </h3>
                  <span className="text-sm text-slate-500 shrink-0 ml-4">
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                {post.tags.length > 0 && (
                  <div className="flex gap-2 mt-3">
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
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
          >
            View all posts &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
