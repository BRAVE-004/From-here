import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Single-page site: inlining the whole stylesheet removes the only
    // render-blocking request from the critical path.
    inlineCss: true,
  },
  // sharp-based image optimization is not available in the Cloudflare
  // Workers runtime — serve Next/Image sources as-is instead.
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
