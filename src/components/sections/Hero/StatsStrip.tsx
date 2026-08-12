import { memo } from 'react';
import { useCounter } from '@/hooks/useCounter';
import { STATS, type Stat } from '@/data/stats';

const StatItem = memo(function StatItem({ stat }: { stat: Stat }) {
  const { ref, value } = useCounter(stat.value);

  const display =
    stat.value % 1 !== 0
      ? value.toFixed(2)
      : Math.round(value);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center sm:items-start sm:text-left"
    >
      <span className="font-[--font-heading] text-3xl font-bold sm:text-4xl">
        {display}
        {stat.suffix}
      </span>

      <span className="mt-1 text-xs text-[--color-text-muted] sm:text-sm">
        {stat.label}
      </span>
    </div>
  );
});

export function StatsStrip() {
  const filteredStats = STATS.filter(
    (stat) =>
      stat.label.toLowerCase() !== 'cgpa' &&
      stat.id.toLowerCase() !== 'cgpa'
  );

  return (
    <dl className="grid grid-cols-3 gap-6 sm:grid-cols-3 sm:gap-10">
      {filteredStats.map((stat) => (
        <StatItem
          key={stat.id}
          stat={stat}
        />
      ))}
    </dl>
  );
}