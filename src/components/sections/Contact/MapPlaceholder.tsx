import { MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/data/social';

export function MapPlaceholder() {
  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        CONTACT_INFO.location
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${CONTACT_INFO.location} in Google Maps`}
      className="group flex h-full min-h-[220px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-black/10 bg-black/[0.02] text-center transition-colors hover:border-[--color-primary] dark:border-white/15 dark:bg-white/[0.02]"
    >
      <MapPin
        size={28}
        className="text-[--color-primary] transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      />
      <span className="text-sm font-medium">{CONTACT_INFO.location}</span>
      <span className="text-xs text-[--color-text-muted]">Open in Google Maps</span>
    </a>
  );
}
