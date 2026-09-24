import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work/yallo-certs", destination: "/work/yallo-ai-academy", permanent: true },
      { source: "/work/nudge", destination: "/work", permanent: false },
      { source: "/work/yallo-ats", destination: "/work", permanent: false },
    ];
  },
};

export default nextConfig;
