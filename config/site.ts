// ============================================================
// SITE METADATA & SEO CONFIG
// ============================================================

export const siteConfig = {
  name: 'Alex Morgan',
  title: 'Alex Morgan — Senior Software Engineer',
  description:
    'Senior Software Engineer specializing in React, Next.js, and cloud-native architectures. Building exceptional digital experiences at the intersection of design and engineering.',
  url: 'https://alexmorgan.dev',
  ogImage: '/og-image.jpg',
  twitterHandle: '@alexmorgan_dev',
  keywords: [
    'Senior Software Engineer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Frontend Engineer',
    'Full Stack Developer',
    'San Francisco',
    'Portfolio',
  ],
  author: {
    name: 'Alex Morgan',
    email: 'alex@example.com',
  },
  links: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
};

export type SiteConfig = typeof siteConfig;
