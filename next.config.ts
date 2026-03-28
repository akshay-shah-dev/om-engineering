import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/om-engineering',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
