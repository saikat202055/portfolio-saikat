import { Search } from 'lucide-react';

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProjectSearch({ value, onChange }: ProjectSearchProps) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <Search
        size={16}
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[--color-text-muted]"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search projects or tech..."
        aria-label="Search projects by title or technology"
        className="w-full rounded-full border border-black/10 bg-transparent py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-[--color-primary] dark:border-white/15"
      />
    </div>
  );
}
