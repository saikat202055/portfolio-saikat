interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`mb-12 flex flex-col ${alignment}`}>
      {eyebrow && (
        <span className="mb-3 font-[--font-mono] text-xs font-medium uppercase tracking-widest text-[--color-primary]">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-[--color-text-muted]">
          {description}
        </p>
      )}
    </div>
  );
}
