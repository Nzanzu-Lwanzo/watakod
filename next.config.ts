import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media.gettyimages.com",
      },
    ],
  },
};

export default nextConfig;
