import Link from 'next/link';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useContainerDimensions } from 'hooks/useContainerDimensions';

interface ButtonProps {
  color?: 'light' | 'main' | 'dark' | 'success';
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const colorClass: Record<Required<ButtonProps>['color'], { border: string; borderHover: string }> =
  {
    light: {
      border: '#EBF6FF',
      borderHover: '#2351FF'
    },
    main: {
      border: '#2351FF',
      borderHover: '#5271FF'
    },
    dark: {
      border: '#132053',
      borderHover: '#233169'
    },
    success: {
      border: '#00CD73',
      borderHover: '#00AC49'
    }
  };

export default function FilledButton({
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
        className={`flex h-[42px] items-center justify-center rounded-lg px-6 text-center font-semibold ${className} border`}
        style={{ borderColor: colorClass[color].border, color: colorClass[color].border }}
        href={href}
        onClick={onClick}
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
        rest: { borderColor: colorClass[color].border, color: colorClass[color].border },
        hover: { borderColor: colorClass[color].borderHover }
      }}
      className={`relative flex h-[42px] items-center justify-center overflow-hidden rounded-lg border px-6 font-semibold ${className}`}
      onClick={onClick}
    >
      <motion.div
        variants={{ rest: { x: -20 }, hover: { x: width + 80 } }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute -left-4 top-0 h-full w-[6px] origin-center bg-white blur-md"
      />
      {children}
    </motion.button>
  );
}
