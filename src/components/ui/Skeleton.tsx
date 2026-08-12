interface SkeletonProps {
  className?: string;
  rounded?: string;
}

export function Skeleton({ className = '', rounded = 'rounded-xl' }: SkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading content"
      className={`animate-pulse bg-black/10 dark:bg-white/10 ${rounded} ${className}`}
    />
  );
}
