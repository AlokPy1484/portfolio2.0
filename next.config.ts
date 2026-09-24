import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.plexvisuals.com", "images.unsplash.com"],
  },
};

module.exports = {
  allowedDevOrigins: ['192.168.1.42'],
}

export default nextConfig;
