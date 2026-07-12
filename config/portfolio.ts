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
  name: 'Abdullah',
  title: 'Software Engineering Student | Full Stack Web Developer | Machine Learning Engineer',
  tagline: 'Building modern, scalable web applications and intelligent solutions with a passion for clean architecture, user-centered design, and emerging AI technologies.',
  bio: `I am Abdullah, a Software Engineering student (2023–2027) with practical experience in Full Stack Web Development and Machine Learning. I enjoy solving real-world problems by building scalable web applications, designing intuitive user interfaces, and developing data-driven solutions.\n\nOver the past several months, I have contributed to professional web development projects, including delivering a production-ready website for a UK-based client. My expertise spans frontend development, backend architecture, database management, REST APIs, and machine learning.\n\nI continuously learn modern technologies and strive to build software that is secure, efficient, maintainable, and user-focused.`,
  location: 'Pakistan',
  email: 'theabdullahx9779@gmail.com',
  phone: '+92 347 0050687',
  avatar: '/images/avatar.jpg',
  resumeUrl: '/resume.pdf',
  availableForWork: true,
  status: 'Available for Freelance • Open to Internship • Open to Remote Opportunities',
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
  { platform: 'GitHub', url: 'https://github.com/theabdullah597', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/abdullah-farid-a25756283/', icon: 'linkedin' },
];

// ── Achievements ────────────────────────────────────────────────
export const achievements: Achievement[] = [
  { id: '1', title: 'Months Experience', value: '6+', description: 'Professional Web Development', icon: 'calendar' },
  { id: '2', title: 'Projects Completed', value: '20+', description: 'Delivered with quality', icon: 'rocket' },
  { id: '3', title: 'Technologies', value: '12+', description: 'Mastered tools', icon: 'cpu' },
  { id: '4', title: 'Commitment to Quality', value: '100%', description: 'Client satisfaction', icon: 'star' },
];

// ── Skills ──────────────────────────────────────────────────────
export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 90, category: 'language', icon: 'python' },
  { name: 'JavaScript', level: 85, category: 'language', icon: 'javascript' },
  { name: 'HTML5', level: 95, category: 'language', icon: 'html' },
  { name: 'CSS3', level: 90, category: 'language', icon: 'css' },

  // Frontend
  { name: 'React.js', level: 85, category: 'frontend', icon: 'react' },
  { name: 'Next.js', level: 80, category: 'frontend', icon: 'nextjs' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend', icon: 'tailwind' },
  { name: 'Bootstrap', level: 85, category: 'frontend', icon: 'bootstrap' },
  { name: 'Responsive Design', level: 90, category: 'frontend', icon: 'monitor' },

  // Backend
  { name: 'Node.js', level: 85, category: 'backend', icon: 'node' },
  { name: 'Express.js', level: 85, category: 'backend', icon: 'express' },
  { name: 'REST APIs', level: 90, category: 'backend', icon: 'api' },
  { name: 'Authentication', level: 80, category: 'backend', icon: 'lock' },
  { name: 'EmailJS', level: 85, category: 'backend', icon: 'mail' },
  { name: 'API Integration', level: 85, category: 'backend', icon: 'zap' },

  // Databases
  { name: 'MySQL', level: 85, category: 'database', icon: 'database' },
  { name: 'MongoDB', level: 80, category: 'database', icon: 'mongodb' },

  // Machine Learning
  { name: 'Scikit-learn', level: 80, category: 'ml', icon: 'ai' },
  { name: 'Pandas', level: 85, category: 'ml', icon: 'table' },
  { name: 'NumPy', level: 85, category: 'ml', icon: 'calculator' },
  { name: 'Data Analysis', level: 85, category: 'ml', icon: 'bar-chart' },
  { name: 'Data Preprocessing', level: 80, category: 'ml', icon: 'filter' },
  { name: 'Model Evaluation', level: 75, category: 'ml', icon: 'check-circle' },

  // Testing & QA
  { name: 'Selenium Automation', level: 80, category: 'testing', icon: 'terminal' },
  { name: 'API Testing', level: 85, category: 'testing', icon: 'test-tube' },
  { name: 'Postman', level: 90, category: 'testing', icon: 'postman' },
  { name: 'Software Testing', level: 85, category: 'testing', icon: 'shield' },

  // Tools & Other Skills
  { name: 'Git & GitHub', level: 90, category: 'tools', icon: 'github' },
  { name: 'Figma', level: 80, category: 'tools', icon: 'figma' },
  { name: 'Canva', level: 95, category: 'tools', icon: 'image' },
  { name: 'VS Code', level: 95, category: 'tools', icon: 'code' },
  { name: 'Prompt Engineering', level: 90, category: 'other', icon: 'message-square' },
  { name: 'Graphic Designing', level: 85, category: 'other', icon: 'pen-tool' },
  { name: 'System Design', level: 80, category: 'other', icon: 'layout' },
  { name: 'Problem Solving', level: 90, category: 'other', icon: 'brain' },
];

// ── Projects ────────────────────────────────────────────────────
// Using placeholders for projects as requested. Provide actual data later.
export const projects: Project[] = [
  {
    id: '1',
    title: 'UK Client E-Commerce Platform',
    description: 'Production-ready website delivered for a UK-based client.',
    longDescription: 'A fully responsive and scalable e-commerce platform built with React, Node.js, and MongoDB. Features secure payment gateways, user authentication, and an intuitive admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop', // E-commerce
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    category: 'fullstack',
    liveUrl: 'https://eastbest.co.uk/',
    githubUrl: 'https://github.com/theabdullah597/Eastbest-Limited',
    featured: true,
    year: '2026',
  },
  {
    id: '2',
    title: 'Diabetes Detection System',
    description: 'Data analysis and predictive modeling solution.',
    longDescription: 'Built robust machine learning models using Python, Scikit-learn, and Pandas to analyze large datasets and provide actionable business insights.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop', // Medical Data
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    category: 'ml',
    liveUrl: 'https://github.com/theabdullah597/Diabetes-Prediction',
    githubUrl: 'https://github.com/theabdullah597/Diabetes-Prediction',
    featured: true,
    year: '2026',
  },
  {
    id: '3',
    title: 'Automated Testing on Online Examination System',
    description: 'End-to-end automation testing framework.',
    longDescription: 'Developed a comprehensive automated testing suite using Selenium and Postman to ensure software quality and reliability across multiple web applications.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop', // Code Testing
    tags: ['Selenium', 'Python', 'Postman', 'QA'],
    category: 'testing',
    liveUrl: 'https://github.com/theabdullah597/Online-Examination-System',
    githubUrl: 'https://github.com/theabdullah597/Online-Examination-System',
    featured: true,
    year: '2026',
  },
];

// ── Services ────────────────────────────────────────────────────
export const services: Service[] = [
  {
    id: '1',
    title: 'Full Stack Web Development',
    description: 'Building modern, scalable web applications using React, Node.js, Express, MySQL, and MongoDB.',
    icon: 'monitor',
    features: ['React & Next.js', 'Node & Express', 'MySQL / MongoDB', 'Clean Architecture'],
    gradient: 'from-violet-600 to-indigo-600',
  },
  {
    id: '2',
    title: 'Machine Learning Solutions',
    description: 'Developing predictive models, data analysis solutions, and intelligent automation using Python and ML libraries.',
    icon: 'cpu',
    features: ['Scikit-learn', 'Pandas & NumPy', 'Data Preprocessing', 'Predictive Modeling'],
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    id: '3',
    title: 'Frontend Development',
    description: 'Creating responsive, interactive, and visually appealing user interfaces with React and Tailwind CSS.',
    icon: 'layout',
    features: ['React.js', 'Tailwind CSS', 'Responsive Design', 'Bootstrap'],
    gradient: 'from-pink-600 to-rose-600',
  },
  {
    id: '4',
    title: 'Backend Development',
    description: 'Developing secure APIs, authentication systems, and scalable server-side applications.',
    icon: 'server',
    features: ['Node.js', 'Express.js', 'Authentication', 'Database Design'],
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    id: '5',
    title: 'API Integration',
    description: 'Integrating third-party services, payment gateways, EmailJS, and RESTful APIs.',
    icon: 'zap',
    features: ['REST APIs', 'EmailJS', 'Third-party Integrations', 'Postman'],
    gradient: 'from-orange-600 to-amber-600',
  },
  {
    id: '6',
    title: 'Automation Testing',
    description: 'Testing web applications using Selenium and API testing tools to improve software quality.',
    icon: 'shield',
    features: ['Selenium', 'API Testing', 'Software Testing', 'Quality Assurance'],
    gradient: 'from-purple-600 to-violet-600',
  },
];

// ── Experience ──────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Freelance',
    role: 'Web Developer',
    duration: '2025 – Present',
    startDate: '2026-02',
    endDate: 'present',
    description: [
      'Developed responsive web applications using React and Node.js.',
      'Delivered a production-ready website for a UK-based client.',
      'Designed RESTful APIs and integrated backend services.',
      'Managed MySQL and MongoDB databases.',
      'Improved website responsiveness and user experience.',
      'Collaborated with clients to transform requirements into functional applications.',
    ],
    technologies: ['React', 'Node.js', 'MySQL', 'MongoDB', 'REST APIs'],
    type: 'freelance',
  },
];

// ── Education ───────────────────────────────────────────────────
export const education: Education[] = [
  {
    id: '1',
    institution: 'Capital University of Science & Technology, Islamabad', // Update later if desired
    degree: 'Bachelor',
    field: 'Software Engineering',
    duration: '2023 – 2027',
    gpa: '',
    achievements: [
      'Relevant Coursework:',
      'Data Structures & Algorithms',
      'Database Systems',
      'Software Engineering',
      'Artificial Intelligence',
      'Machine Learning',
      'Web Engineering',
      'Operating Systems',
      'Computer Networks',
    ],
  },
];

// ── Testimonials ────────────────────────────────────────────────
// Emptying placeholders for now
export const testimonials: Testimonial[] = [];

// ── Certifications ──────────────────────────────────────────────
export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Internship Certificate',
    issuer: 'qwetrumtechnologies',
    date: '2026',
    credentialUrl: '#',
    category: 'Experience',
  },
  {
    id: '2',
    title: 'Freelancing Certificate',
    issuer: 'Freelance Platform',
    date: '2025',
    credentialUrl: '#',
    category: 'Experience',
  },
  {
    id: '3',
    title: 'Data Analytics Certificate',
    issuer: 'Data Analytics Institute',
    date: '2025',
    credentialUrl: '#',
    category: 'Data Science',
  },
];

// ── Blog Posts ──────────────────────────────────────────────────
export const blogPosts: BlogPost[] = [];
