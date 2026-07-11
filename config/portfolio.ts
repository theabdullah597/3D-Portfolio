// ============================================================
// PORTFOLIO CONFIGURATION
// Edit this single file to update the entire website
// ============================================================

import type {
  Project,
  Experience,
  Education,
  Skill,
  Service,
  Testimonial,
  Certificate,
  BlogPost,
  SocialLink,
  Achievement,
  NavItem,
} from '@/types';

// ── Personal Info ─────────────────────────────────────────────
export const personalInfo = {
  name: 'Alex Morgan',
  title: 'Senior Software Engineer',
  tagline: 'Crafting digital experiences at the intersection of design & engineering.',
  bio: `I'm a senior software engineer with 8+ years of experience building scalable web applications for world-class companies. I specialize in React, TypeScript, and cloud-native architectures — turning complex problems into elegant solutions.`,
  location: 'San Francisco, CA',
  email: 'alex@example.com',
  phone: '+1 (555) 123-4567',
  avatar: '/images/avatar.jpg',
  resumeUrl: '/resume.pdf',
  availableForWork: true,
};

// ── Navigation ─────────────────────────────────────────────────
export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// ── Social Links ───────────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { platform: 'Dribbble', url: 'https://dribbble.com', icon: 'dribbble' },
];

// ── Achievements ────────────────────────────────────────────────
export const achievements: Achievement[] = [
  { id: '1', title: 'Years Experience', value: '8+', description: 'Building production software', icon: 'calendar' },
  { id: '2', title: 'Projects Shipped', value: '120+', description: 'Across industries', icon: 'rocket' },
  { id: '3', title: 'Happy Clients', value: '50+', description: 'Global clientele', icon: 'users' },
  { id: '4', title: 'Open Source Stars', value: '2.4k', description: 'GitHub stars earned', icon: 'star' },
];

// ── Skills ──────────────────────────────────────────────────────
export const skills: Skill[] = [
  // Frontend
  { name: 'React / Next.js', level: 98, category: 'frontend', icon: 'react' },
  { name: 'TypeScript', level: 95, category: 'frontend', icon: 'typescript' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend', icon: 'tailwind' },
  { name: 'Framer Motion', level: 90, category: 'frontend', icon: 'framer' },
  { name: 'Three.js / R3F', level: 85, category: 'frontend', icon: 'threejs' },
  { name: 'Vue.js', level: 80, category: 'frontend', icon: 'vue' },
  // Backend
  { name: 'Node.js', level: 92, category: 'backend', icon: 'node' },
  { name: 'Python / FastAPI', level: 88, category: 'backend', icon: 'python' },
  { name: 'PostgreSQL', level: 85, category: 'backend', icon: 'postgres' },
  { name: 'GraphQL', level: 82, category: 'backend', icon: 'graphql' },
  { name: 'Redis', level: 78, category: 'backend', icon: 'redis' },
  // DevOps
  { name: 'AWS', level: 85, category: 'devops', icon: 'aws' },
  { name: 'Docker / K8s', level: 82, category: 'devops', icon: 'docker' },
  { name: 'CI/CD', level: 88, category: 'devops', icon: 'github' },
  // AI
  { name: 'LangChain', level: 80, category: 'ai', icon: 'ai' },
  { name: 'OpenAI API', level: 85, category: 'ai', icon: 'ai' },
  // Design
  { name: 'Figma', level: 85, category: 'design', icon: 'figma' },
  { name: 'UI/UX Design', level: 82, category: 'design', icon: 'design' },
];

// ── Projects ────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: '1',
    title: 'Nebula Analytics',
    description: 'Real-time analytics platform processing 10M+ events/day',
    longDescription: 'A cutting-edge analytics platform built for enterprise scale, featuring real-time event processing, custom dashboards, and AI-powered insights.',
    image: '/images/projects/nebula.jpg',
    tags: ['Next.js', 'TypeScript', 'ClickHouse', 'Kafka', 'Redis'],
    category: 'fullstack',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    year: '2024',
  },
  {
    id: '2',
    title: 'Prism Design System',
    description: 'Component library powering 12 production apps',
    longDescription: 'A comprehensive design system with 200+ components, full accessibility support, dark mode, and beautiful animations.',
    image: '/images/projects/prism.jpg',
    tags: ['React', 'TypeScript', 'Storybook', 'Radix UI', 'Framer Motion'],
    category: 'frontend',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    year: '2024',
  },
  {
    id: '3',
    title: 'Cortex AI Platform',
    description: 'LLM-powered developer productivity suite',
    longDescription: 'An AI platform that integrates with developer workflows to automate code review, generate documentation, and predict bugs before they ship.',
    image: '/images/projects/cortex.jpg',
    tags: ['Python', 'FastAPI', 'LangChain', 'React', 'PostgreSQL'],
    category: 'ai',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    year: '2023',
  },
  {
    id: '4',
    title: 'Vault Finance',
    description: 'Fintech dashboard with real-time market data',
    longDescription: 'A premium fintech application featuring live market data, portfolio management, and algorithmic trading strategies.',
    image: '/images/projects/vault.jpg',
    tags: ['Next.js', 'Node.js', 'WebSockets', 'D3.js', 'PostgreSQL'],
    category: 'fullstack',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    year: '2023',
  },
  {
    id: '5',
    title: 'CloudOps CLI',
    description: 'Developer tool for multi-cloud infrastructure',
    longDescription: 'A powerful CLI tool that simplifies multi-cloud infrastructure management with a beautiful interactive terminal UI.',
    image: '/images/projects/cloudops.jpg',
    tags: ['Node.js', 'AWS SDK', 'Terraform', 'TypeScript', 'Ink'],
    category: 'backend',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    year: '2022',
  },
  {
    id: '6',
    title: 'Spectrum UI Kit',
    description: 'Mobile-first component kit for React Native',
    longDescription: 'A comprehensive UI kit for React Native with 150+ components, gesture support, and native animations.',
    image: '/images/projects/spectrum.jpg',
    tags: ['React Native', 'TypeScript', 'Reanimated', 'Expo'],
    category: 'mobile',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    year: '2022',
  },
];

// ── Services ────────────────────────────────────────────────────
export const services: Service[] = [
  {
    id: '1',
    title: 'Frontend Engineering',
    description: 'Pixel-perfect UIs with React, Next.js, and cutting-edge animations',
    icon: 'monitor',
    features: ['React / Next.js', 'TypeScript', 'Framer Motion', 'Three.js'],
    gradient: 'from-violet-600 to-indigo-600',
  },
  {
    id: '2',
    title: 'Backend Development',
    description: 'Scalable APIs and microservices built for millions of users',
    icon: 'server',
    features: ['Node.js / Python', 'REST & GraphQL', 'Database Design', 'Microservices'],
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love',
    icon: 'pen-tool',
    features: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    gradient: 'from-pink-600 to-rose-600',
  },
  {
    id: '4',
    title: 'AI Integration',
    description: 'LLM-powered features that give products a competitive edge',
    icon: 'cpu',
    features: ['LangChain', 'OpenAI / Anthropic', 'RAG Systems', 'AI Agents'],
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    id: '5',
    title: 'Cloud & DevOps',
    description: 'Production-grade infrastructure with zero downtime',
    icon: 'cloud',
    features: ['AWS / GCP', 'Docker & K8s', 'CI/CD Pipelines', 'Monitoring'],
    gradient: 'from-orange-600 to-amber-600',
  },
  {
    id: '6',
    title: 'API Development',
    description: 'Fast, secure, and well-documented APIs at any scale',
    icon: 'zap',
    features: ['REST / GraphQL', 'WebSockets', 'Authentication', 'Rate Limiting'],
    gradient: 'from-purple-600 to-violet-600',
  },
];

// ── Experience ──────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Vercel',
    role: 'Senior Software Engineer',
    duration: '2022 – Present',
    startDate: '2022-03',
    endDate: 'present',
    description: [
      'Lead engineer on the Next.js Commerce team, shipping features used by 500k+ developers',
      'Architected the new Edge Runtime caching layer, reducing TTFB by 60%',
      'Mentored 6 junior engineers, establishing code review culture and best practices',
    ],
    technologies: ['Next.js', 'TypeScript', 'Rust', 'Edge Runtime', 'Turborepo'],
    type: 'full-time',
  },
  {
    id: '2',
    company: 'Stripe',
    role: 'Software Engineer II',
    duration: '2020 – 2022',
    startDate: '2020-06',
    endDate: '2022-02',
    description: [
      'Built the Stripe Dashboard v3 — serving 3M+ merchants daily',
      'Designed and implemented the real-time notification system using WebSockets',
      'Reduced bundle size by 40% through aggressive code splitting and tree shaking',
    ],
    technologies: ['React', 'TypeScript', 'Ruby on Rails', 'WebSockets', 'PostgreSQL'],
    type: 'full-time',
  },
  {
    id: '3',
    company: 'Airbnb',
    role: 'Frontend Engineer',
    duration: '2018 – 2020',
    startDate: '2018-01',
    endDate: '2020-05',
    description: [
      'Led the redesign of the Airbnb Experiences booking flow, increasing conversion by 22%',
      'Built the component library that standardized UI across 10+ product teams',
      'Optimized Core Web Vitals across mobile, achieving 95+ Lighthouse scores',
    ],
    technologies: ['React', 'JavaScript', 'CSS-in-JS', 'GraphQL', 'A/B Testing'],
    type: 'full-time',
  },
  {
    id: '4',
    company: 'Freelance',
    role: 'Full-Stack Developer',
    duration: '2016 – 2018',
    startDate: '2016-01',
    endDate: '2017-12',
    description: [
      'Delivered 30+ web applications for startups and SMBs',
      'Specialized in high-performance React frontends and Node.js backends',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    type: 'freelance',
  },
];

// ── Education ───────────────────────────────────────────────────
export const education: Education[] = [
  {
    id: '1',
    institution: 'Stanford University',
    degree: 'M.S.',
    field: 'Computer Science',
    duration: '2014 – 2016',
    gpa: '3.9/4.0',
    achievements: ['Dean\'s List', 'Published 2 research papers on distributed systems'],
  },
  {
    id: '2',
    institution: 'UC Berkeley',
    degree: 'B.S.',
    field: 'Electrical Engineering & CS',
    duration: '2010 – 2014',
    gpa: '3.8/4.0',
    achievements: ['Summa Cum Laude', 'Best Senior Project Award'],
  },
];

// ── Testimonials ────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow Inc.',
    avatar: '/images/testimonials/sarah.jpg',
    content: 'Alex is one of the most talented engineers I\'ve ever worked with. The quality of their code and the speed of delivery is exceptional. Our platform\'s performance improved by 3x after their optimizations.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Williams',
    role: 'Product Manager',
    company: 'Stripe',
    avatar: '/images/testimonials/marcus.jpg',
    content: 'Working with Alex was a pleasure. They have a rare combination of deep technical expertise and strong design sensibility. The Dashboard v3 they built is still one of our most loved features.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Elena Petrova',
    role: 'Founder',
    company: 'Luminary AI',
    avatar: '/images/testimonials/elena.jpg',
    content: 'Alex delivered our AI platform in record time, and the quality exceeded all expectations. Their ability to take complex technical challenges and turn them into beautiful user experiences is unmatched.',
    rating: 5,
  },
  {
    id: '4',
    name: 'James O\'Brien',
    role: 'Engineering Lead',
    company: 'Vercel',
    avatar: '/images/testimonials/james.jpg',
    content: 'Alex elevated the entire team\'s output. As a mentor and technical leader, they have a gift for making complex concepts accessible while pushing for the highest standards of engineering.',
    rating: 5,
  },
];

// ── Certifications ──────────────────────────────────────────────
export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'AWS Solutions Architect – Professional',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: 'https://example.com',
    category: 'Cloud',
  },
  {
    id: '2',
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2022',
    credentialUrl: 'https://example.com',
    category: 'Cloud',
  },
  {
    id: '3',
    title: 'Meta Frontend Developer Certificate',
    issuer: 'Meta',
    date: '2022',
    credentialUrl: 'https://example.com',
    category: 'Frontend',
  },
  {
    id: '4',
    title: 'Certified Kubernetes Administrator',
    issuer: 'CNCF',
    date: '2021',
    credentialUrl: 'https://example.com',
    category: 'DevOps',
  },
];

// ── Blog Posts ──────────────────────────────────────────────────
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Cinematic Web Experiences with GSAP & React',
    excerpt: 'A deep dive into creating scroll-driven animations that feel like a movie — using GSAP ScrollTrigger with Next.js App Router.',
    category: 'Animation',
    readTime: '8 min read',
    date: 'Dec 2024',
    image: '/images/blog/gsap.jpg',
    url: '#',
    tags: ['GSAP', 'React', 'Animation'],
  },
  {
    id: '2',
    title: 'The Architecture of a 10M req/day Next.js App',
    excerpt: 'How we scaled Nebula Analytics from 0 to 10 million events per day — the decisions, mistakes, and lessons learned.',
    category: 'Architecture',
    readTime: '12 min read',
    date: 'Nov 2024',
    image: '/images/blog/architecture.jpg',
    url: '#',
    tags: ['Next.js', 'Architecture', 'Performance'],
  },
  {
    id: '3',
    title: 'Three.js for Web Developers: A Practical Guide',
    excerpt: 'Everything you need to know to start building beautiful 3D experiences in the browser using Three.js and React Three Fiber.',
    category: '3D',
    readTime: '15 min read',
    date: 'Oct 2024',
    image: '/images/blog/threejs.jpg',
    url: '#',
    tags: ['Three.js', 'WebGL', 'React'],
  },
  {
    id: '4',
    title: 'Design Systems That Scale: Lessons from Prism',
    excerpt: 'Building a component library that powers 12 production apps — the principles, patterns, and pitfalls.',
    category: 'Design Systems',
    readTime: '10 min read',
    date: 'Sep 2024',
    image: '/images/blog/design-system.jpg',
    url: '#',
    tags: ['Design System', 'React', 'TypeScript'],
  },
  {
    id: '5',
    title: 'LLM-Powered Code Review at Scale',
    excerpt: 'How we integrated LangChain and GPT-4 into our CI/CD pipeline to catch bugs before they reach production.',
    category: 'AI',
    readTime: '9 min read',
    date: 'Aug 2024',
    image: '/images/blog/ai.jpg',
    url: '#',
    tags: ['AI', 'LangChain', 'DevOps'],
  },
  {
    id: '6',
    title: 'TypeScript Patterns I Wish I Knew Earlier',
    excerpt: 'Advanced TypeScript patterns that transformed how I write frontend code — from conditional types to template literal magic.',
    category: 'TypeScript',
    readTime: '7 min read',
    date: 'Jul 2024',
    image: '/images/blog/typescript.jpg',
    url: '#',
    tags: ['TypeScript', 'Patterns', 'Frontend'],
  },
];
