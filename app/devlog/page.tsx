import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/devlog';
import DevlogList from '@/components/sections/DevlogList';

export const metadata: Metadata = {
  title: 'Devlog — Anay Goenka',
  description: 'Development log — notes, updates, and learnings.',
};

export const dynamic = 'force-dynamic';

export default async function DevlogPage() {
  let posts: Awaited<ReturnType<typeof getAllPosts>> = [];
  try {
    posts = await getAllPosts();
  } catch {
    // Firebase not configured yet
  }

  return <DevlogList posts={posts} />;
}
