import type { SkillCategory } from '@/types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    icon: 'Code2',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'],
  },

  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'Globe',
    skills: ['React', 'Tailwind CSS', 'Node.js', 'REST APIs'],
  },

  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: 'BrainCircuit',
    skills: [
      'OpenAI',
      'ChatGPT',
      'Claude',
      'Gemini',
    ],
  },

  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'Megaphone',
    skills: [
      'Meta Ads',
      'SEO',
      'YouTube SEO',
      'Social Media Creation',
      'Optimization',
      'Virtual Assistant',
    ],
  },

  {
    id: 'engineering',
    title: 'Engineering',
    icon: 'CircuitBoard',
    skills: [
      'MATLAB',
      'Arduino',
      'PCB Design',
      'Circuit Analysis',
    ],
  },

  {
    id: 'leadership',
    title: 'Leadership',
    icon: 'Users',
    skills: [
      'Team Coordination',
      'Event Planning',
      'Mentoring',
    ],
  },

  {
    id: 'communication',
    title: 'Communication',
    icon: 'MessagesSquare',
    skills: [
      'Public Speaking',
      'Technical Writing',
      'Presentation',
    ],
  },

  {
    id: 'problem-solving',
    title: 'Problem Solving',
    icon: 'Puzzle',
    skills: [
      'Critical Thinking',
      'Problem Solving',
      'Debugging',
      'System Design',
      'Creative Solutions',
    ],
  },
];