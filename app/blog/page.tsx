import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogList from '@/components/sections/BlogList';

export const metadata: Metadata = {
  title: 'Blog — Anay Goenka',
  description: 'Blog — notes, updates, and learnings.',
};

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof getAllPosts>> = [];
  try {
    posts = await getAllPosts();
  } catch {
    // Firebase not configured yet
  }

  return <BlogList posts={posts} />;
}
