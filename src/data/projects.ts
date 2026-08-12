import type { Project } from '@/types';

export const PROJECT_FILTERS = [
  'All',
  'AI/ML',
  'Web Dev',
  'Embedded',
  'Ongoing',
] as const;

export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

export const PROJECTS: (Project & { category: ProjectFilter })[] = [
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    description:
      'An AI-powered resume analysis project designed to evaluate resumes, identify relevant skills, and provide useful insights based on job requirements.',
    image: '/src/assets/projects/resume-analyzer/thumbnail.webp',
    tags: ['AI', 'Machine Learning', 'Python', 'NLP'],
    category: 'AI/ML',
    featured: true,
  },

  {
    id: 'password-protected-door-lock',
    title: 'Password Protected Door Lock',
    description:
      'A password-protected electronic door lock system built using embedded hardware, designed to provide secure access through password authentication.',
    image: '/src/assets/projects/door-lock/thumbnail.webp',
    tags: ['Embedded Systems', 'C/C++', 'Electronics', 'Security'],
    category: 'Embedded',
    featured: true,
  },

  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    description:
      'A modern and responsive personal portfolio built to showcase my skills, projects, education, achievements, and professional journey.',
    image: '/src/assets/projects/portfolio-site/thumbnail.webp',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web Dev',
    featured: true,
  },

  {
    id: 'birthday-wish-template',
    title: 'Birthday Wish Template',
    description:
      'An interactive birthday wish web experience designed with modern UI elements, animations, and a responsive layout for a personalized celebration.',
    image: '/src/assets/projects/birthday-wish/thumbnail.webp',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    category: 'Web Dev',
  },

  {
    id: 'teacher-portfolio',
    title: 'Teacher Portfolio Website',
    description:
      'An ongoing professional portfolio website for educators, designed to present teaching experience, academic background, achievements, and educational resources.',
    image: '/src/assets/projects/teacher-portfolio/thumbnail.webp',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
    category: 'Ongoing',
  },

  {
    id: 'job-hunter',
    title: 'Job Hunter',
    description:
      'An ongoing job discovery platform focused on helping users explore relevant opportunities through a clean, efficient, and user-friendly experience.',
    image: '/src/assets/projects/job-hunter/thumbnail.webp',
    tags: ['Web App', 'React', 'API', 'Job Search'],
    category: 'Ongoing',
  },

  {
    id: 'ai-based-project',
    title: 'AI-Based Project',
    description:
      'An ongoing AI-focused project exploring intelligent automation and practical machine-learning applications to solve real-world problems.',
    image: '/src/assets/projects/ai-project/thumbnail.webp',
    tags: ['AI', 'Machine Learning', 'Python', 'Automation'],
    category: 'Ongoing',
  },
];