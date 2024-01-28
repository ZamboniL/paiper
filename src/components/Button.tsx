import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

const variants = {
  rest: {
    x: 0
  },
  hover: {
    x: 300
  }
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
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`${colorClass[color]} rounded-lg px-5 py-3 font-semibold ${className} relative overflow-hidden`}
      onClick={onClick}
    >
      <motion.div
        variants={variants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute -left-4 top-0 h-full w-[6px] origin-center bg-white blur-md"
      />
      {children}
    </motion.button>
  );
}
