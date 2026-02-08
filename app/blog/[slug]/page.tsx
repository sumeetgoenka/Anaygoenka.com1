import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog';
import BlogPostView from '@/components/sections/BlogPostView';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Post Not Found' };
    return {
      title: `${post.title} — Blog — Anay Goenka`,
      description: post.content.slice(0, 160),
    };
  } catch {
    return { title: 'Blog — Anay Goenka' };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) notFound();

  return <BlogPostView post={post} />;
}
