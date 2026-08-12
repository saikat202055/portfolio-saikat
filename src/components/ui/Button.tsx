import {
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';

type Variant =
  | 'primary'
  | 'secondary'
  | 'ghost';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary: `
    border
    border-[var(--color-primary)]
    bg-[var(--color-primary)]
    text-white

    shadow-lg
    shadow-black/10

    hover:-translate-y-0.5
    hover:brightness-110
    hover:shadow-xl

    active:translate-y-0
    active:scale-[0.98]

    dark:border-[var(--color-primary)]
    dark:bg-[var(--color-primary)]
    dark:text-white
  `,

  secondary: `
    border
    border-[var(--color-border)]

    bg-[var(--color-surface)]
    text-[var(--color-text)]

    hover:-translate-y-0.5
    hover:border-[var(--color-primary)]
    hover:bg-[var(--color-primary)]/5

    dark:bg-[var(--color-surface)]
    dark:text-[var(--color-text)]
  `,

  ghost: `
    border
    border-transparent

    bg-transparent
    text-[var(--color-text-muted)]

    hover:bg-[var(--color-primary)]/10
    hover:text-[var(--color-primary)]
  `,
};

export function Button({
  children,
  variant = 'primary',
  icon,
  className = '',
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`
        group
        relative

        inline-flex
        min-h-11
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

        transition-[transform,background-color,border-color,box-shadow,filter,opacity]
        duration-200
        ease-out

        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[var(--color-primary)]

        disabled:cursor-not-allowed
        disabled:opacity-50
        disabled:transform-none

        ${variantStyles[variant]}

        ${className}
      `}
      {...rest}
    >
      <span
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          gap-2
        "
      >
        {icon}

        <span>
          {children}
        </span>
      </span>
    </button>
  );
}

export default Button;