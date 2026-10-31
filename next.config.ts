import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // sharp-based image optimization is not available in the Cloudflare
  // Workers runtime — serve Next/Image sources as-is instead.
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
