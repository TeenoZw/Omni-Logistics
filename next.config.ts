import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Remove output: "export" to allow API routes to work
  trailingSlash: true,
};

export default nextConfig;
