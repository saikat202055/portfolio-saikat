export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export const STATS: Stat[] = [
  { id: 'projects', label: 'Projects Built', value: 12, suffix: '+' },
  { id: 'certificates', label: 'Certificates Earned', value: 9, suffix: '+' },
  { id: 'events', label: 'Events Led', value: 6, suffix: '+' },
  { id: 'cgpa', label: 'CGPA', value: 3.75 },
];
