import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow Three.js to be transpiled
  transpilePackages: ['three'],

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Empty turbopack config to silence the warning
  turbopack: {},

  // Experimental features
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'gsap'],
  },
};

export default nextConfig;
