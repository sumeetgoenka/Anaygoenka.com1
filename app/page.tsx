import { projects } from '@/lib/projects';
import { getRecentPosts } from '@/lib/devlog';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import LatestDevlog from '@/components/sections/LatestDevlog';
import HomeHero from '@/components/sections/HomeHero';
import NowSnippet from '@/components/sections/NowSnippet';

export default async function Home() {
  let recentPosts: Awaited<ReturnType<typeof getRecentPosts>> = [];
  try {
    recentPosts = await getRecentPosts(3);
  } catch {
    // Firebase not configured yet — show page without devlog
  }

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <HomeHero />
      <FeaturedProjects projects={featuredProjects} />
      <LatestDevlog posts={recentPosts} />
      <NowSnippet />
    </>
  );
}
