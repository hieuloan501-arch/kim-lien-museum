import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Trong bản mới, eslint viết như thế này:
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;