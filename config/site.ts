// ============================================================
// SITE METADATA & SEO CONFIG
// ============================================================

export const siteConfig = {
  name: 'Abdullah',
  title: 'Abdullah — Software Engineering Student & Full Stack Developer',
  description:
    'Building modern, scalable web applications and intelligent solutions with a passion for clean architecture and emerging AI technologies.',
  url: 'https://abdullah-portfolio.com',
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@abdullah_dev',
  keywords: [
    'Abdullah',
    'Software Engineer',
    'Full Stack Developer',
    'Machine Learning Engineer',
    'React',
    'Next.js',
    'Node.js',
    'Python',
  ],
  author: {
    name: 'Abdullah',
    email: 'contact@example.com',
  },
  links: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
};

export type SiteConfig = typeof siteConfig;
