import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  color?: 'light' | 'main' | 'dark';
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const colorClass: Record<Required<ButtonProps>['color'], string> = {
  light: 'bg-primary-300 text-primary-400',
  main: 'bg-primary-400 text-primary-300',
  dark: 'bg-primary-500 text-white'
};

export default function Button({
  color = 'main',
  className,
  onClick,
  href,
  children
}: ButtonProps) {
  if (href) {
    return (
      <Link
        className={`${colorClass[color]} rounded-lg px-5 py-3 font-semibold ${className}`}
        href={href}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${colorClass[color]} rounded-lg px-5 py-3 font-semibold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
