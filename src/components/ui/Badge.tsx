import { type ReactNode } from 'react';

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-[--color-primary]/10 px-3 py-1 font-[--font-mono] text-xs font-medium text-[--color-primary]">
      {children}
    </span>
  );
}
