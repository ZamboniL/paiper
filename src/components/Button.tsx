import React from 'react';

interface ButtonProps {
  color?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({ color, className, onClick, children }: ButtonProps) {
  const colorClass =
    color === 'primary' ? 'bg-primary-400 text-primary-300' : 'bg-primary-300 text-primary-400';
  return (
    <button
      className={`${colorClass} rounded-lg px-5 py-3 font-semibold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
