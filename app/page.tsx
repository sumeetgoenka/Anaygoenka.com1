import { projects } from '@/lib/projects';
import { getRecentPosts } from '@/lib/blog';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import LatestBlog from '@/components/sections/LatestBlog';
import HomeHero from '@/components/sections/HomeHero';
import NowSnippet from '@/components/sections/NowSnippet';

export default async function Home() {
  let recentPosts: Awaited<ReturnType<typeof getRecentPosts>> = [];
  try {
    recentPosts = await getRecentPosts(3);
  } catch {
    // Firebase not configured yet — show page without blog
  }

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <HomeHero />
      <FeaturedProjects projects={featuredProjects} />
      <LatestBlog posts={recentPosts} />
      <NowSnippet />
    </>
  );
}
