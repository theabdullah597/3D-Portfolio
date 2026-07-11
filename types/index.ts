// ============================================================
// GLOBAL TYPE DEFINITIONS
// Single source of truth for all TypeScript interfaces
// ============================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: 'fullstack' | 'frontend' | 'backend' | 'ai' | 'mobile';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  logo?: string;
  type: 'full-time' | 'contract' | 'freelance' | 'internship';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa?: string;
  achievements?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0–100
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'design' | 'ai';
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  url: string;
  tags: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
