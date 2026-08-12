export type LeadershipItem = {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  icon: 'Megaphone' | 'HeartHandshake' | 'CalendarCheck2';
};

export const LEADERSHIP_ITEMS: LeadershipItem[] = [
  {
    id: 'student-ambassador',
    role: 'Student Ambassador',
    organization: 'Northern University Bangladesh',
    period: '2025 — Present',
    description:
      'Connected with 1,000+ prospective students through university outreach, academic guidance, and admission-related communication. Successfully supported 100+ students throughout the admission process while representing Northern University Bangladesh in student engagement and outreach activities.',
    icon: 'Megaphone',
  },

  {
    id: 'volunteer-team-lead',
    role: 'Volunteer Team Lead',
    organization: 'School, College & University Activities',
    period: 'Multiple Years of Experience',
    description:
      'Built extensive volunteering and team leadership experience throughout school, college, and university life. Led and supported teams in cultural programs, debate competitions, sports activities, student initiatives, and other collaborative programs, with a strong focus on coordination, communication, and teamwork.',
    icon: 'HeartHandshake',
  },

  {
    id: 'event-organizer',
    role: 'Event & Workshop Organizer',
    organization: 'School, College & University Events',
    period: 'Multiple Years of Experience',
    description:
      'Experienced in organizing and supporting a wide range of events, workshops, cultural programs, competitions, and student activities across school, college, and university. Contributed to planning, scheduling, participant coordination, logistics, teamwork, and smooth event execution.',
    icon: 'CalendarCheck2',
  },
];