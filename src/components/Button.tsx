import Link from 'next/link';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useContainerDimensions } from 'hooks/useContainerDimensions';

interface ButtonProps {
  color?: 'light' | 'main' | 'dark';
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const colorClass: Record<
  Required<ButtonProps>['color'],
  { background: string; backgroundHover: string; color: string }
> = {
  light: {
    background: '#EBF6FF',
    backgroundHover: '#2351FF',

    color: 'text-primary-400'
  },
  main: {
    background: '#2351FF',
    backgroundHover: '#5271FF',

    color: 'text-primary-300'
  },
  dark: {
    background: '#132053',
    backgroundHover: '#233169',
    color: 'bg-primary-500 text-white'
  }
};

export default function Button({
  color = 'main',
  className,
  onClick,
  href,
  children
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { width } = useContainerDimensions(ref);

  if (href) {
    return (
      <Link
        className={`${colorClass[color].color} rounded-lg px-5 py-3 font-semibold ${className}`}
        style={{ background: colorClass[color].background }}
        href={href}
      >
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      ref={ref}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { background: colorClass[color].background },
        hover: { background: colorClass[color].backgroundHover }
      }}
      className={`${colorClass[color].color} rounded-lg px-5 py-3 font-semibold ${className} relative overflow-hidden`}
      onClick={onClick}
    >
      <motion.div
        variants={{ rest: { x: 0 }, hover: { x: width + 80 } }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute -left-4 top-0 h-full w-[6px] origin-center bg-white blur-md"
      />
      {children}
    </motion.button>
  );
}
