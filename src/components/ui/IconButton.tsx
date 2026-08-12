import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ icon, label, className = '', ...rest }, ref) {
    return (
      <button
        ref={ref}
        aria-label={label}
        title={label}
        className={`
          group
          inline-flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-[--color-border]
          bg-[--color-surface]/70
          text-[--color-text-muted]
          backdrop-blur-md
          transition-all
          duration-300
          ease-out
          hover:-translate-y-1
          hover:border-[--color-primary]/60
          hover:bg-[--color-primary]/10
          hover:text-[--color-primary]
          hover:shadow-lg
          hover:shadow-[--color-primary]/15
          active:scale-95
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-[--color-primary]
          dark:bg-white/[0.04]
          ${className}
        `}
        {...rest}
      >
        <span className="transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
      </button>
    );
  }
);