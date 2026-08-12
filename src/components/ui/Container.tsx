import { type HTMLAttributes, type ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({
  children,
  className = '',
  ...rest
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-7xl
        px-5
        sm:px-6
        lg:px-8
        xl:px-10
        ${className}
      `}
      {...rest}
    >
      {children}
    </div>
  );
}