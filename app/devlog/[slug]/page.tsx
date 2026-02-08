import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/devlog';
import DevlogPostView from '@/components/sections/DevlogPostView';

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
      title: `${post.title} — Devlog — Anay Goenka`,
      description: post.content.slice(0, 160),
    };
  } catch {
    return { title: 'Devlog — Anay Goenka' };
  }
}

export default async function DevlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) notFound();

  return <DevlogPostView post={post} />;
}
