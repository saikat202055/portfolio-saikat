import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/data/social';
import { IconButton } from '@/components/ui/IconButton';

const DETAILS = [
  { icon: Mail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: Phone, label: 'Phone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
  { icon: MapPin, label: 'Location', value: CONTACT_INFO.location },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-[--color-text-muted]">
        Have a project in mind, a question about my work, or just want to
        connect? My inbox is always open.
      </p>

      <ul className="flex flex-col gap-4">
        {DETAILS.map(({ icon: Icon, label, value, href }) => (
          <li key={label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[--color-primary]/10 text-[--color-primary]">
              <Icon size={16} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs text-[--color-text-muted]">{label}</p>
              {href ? (
                <a href={href} className="text-sm font-medium hover:text-[--color-primary]">
                  {value}
                </a>
              ) : (
                <p className="text-sm font-medium">{value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex gap-3">
        <IconButton
          icon={<Github size={18} />}
          label="GitHub profile"
          onClick={() => window.open(SOCIAL_LINKS.github, '_blank', 'noopener,noreferrer')}
        />
        <IconButton
          icon={<Linkedin size={18} />}
          label="LinkedIn profile"
          onClick={() => window.open(SOCIAL_LINKS.linkedin, '_blank', 'noopener,noreferrer')}
        />
      </div>
    </div>
  );
}
