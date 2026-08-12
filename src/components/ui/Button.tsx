import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary: `
    border border-[--color-primary]/40
    bg-gradient-to-r
    from-[--color-primary-dark]
    via-[--color-primary]
    to-[--color-primary-light]
    text-white
    shadow-lg
    shadow-[--color-primary]/20
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-2xl
    hover:shadow-[--color-primary]/30
  `,

  secondary: `
    border
    border-[--color-border]
    bg-[--color-surface]/70
    text-[--color-text]
    backdrop-blur-md
    hover:-translate-y-1
    hover:border-[--color-primary]/50
    hover:bg-[--color-primary]/5
    hover:shadow-lg
    hover:shadow-[--color-primary]/10
    dark:bg-white/[0.04]
  `,

  ghost: `
    bg-transparent
    text-[--color-text-muted]
    hover:bg-[--color-primary]/10
    hover:text-[--color-primary]
  `,
};

export function Button({
  children,
  variant = 'primary',
  icon,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`
        group
        relative
        inline-flex
        items-center
        justify-center
        gap-2
        overflow-hidden
        rounded-full
        px-6
        py-3
        text-sm
        font-semibold
        tracking-wide
        transition-all
        duration-300
        ease-out
        active:scale-95
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[--color-primary]
        disabled:pointer-events-none
        disabled:opacity-50
        ${variantStyles[variant]}
        ${className}
      `}
      {...rest}
    >
      {variant === 'primary' && (
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-full
          "
        />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children}
      </span>
    </button>
  );
}