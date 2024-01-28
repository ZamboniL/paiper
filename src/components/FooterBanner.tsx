import { useScroll, useTransform } from 'framer-motion';
import Arrow from './icons/Arrow';
import { motion } from 'framer-motion';
import { useState } from 'react';

function BannerItem({
  isHovered,
  onMouseEnter,
  onMouseLeave
}: {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="flex cursor-pointer items-center gap-4"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="whitespace-nowrap text-nowrap text-4xl font-semibold text-white md:text-5xl">
        Veja o Paiper em ação
      </span>
      <motion.div
        className="w-fit rounded-full bg-white p-2 md:p-4"
        transition={{ ease: 'easeOut' }}
        animate={{ rotate: isHovered ? 45 : 0 }}
      >
        <Arrow />
      </motion.div>
    </div>
  );
}

export default function FooterBanner({ transformRange }: { transformRange: [number, number] }) {
  const [hover, setHover] = useState<number | boolean>(false);
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], transformRange);

  const handleHover = (index: number) => () => {
    setHover(index);
  };

  const handleHoverEnd = () => {
    setHover(false);
  };

  return (
    <div className="relative w-full overflow-hidden bg-primary-400">
      <motion.div style={{ translateX: translateY }} className=" flex h-24 gap-16 py-12 md:py-16">
        <BannerItem
          isHovered={hover === 1}
          onMouseEnter={handleHover(1)}
          onMouseLeave={handleHoverEnd}
        />
        <BannerItem
          isHovered={hover === 2}
          onMouseEnter={handleHover(2)}
          onMouseLeave={handleHoverEnd}
        />
        <BannerItem
          isHovered={hover === 3}
          onMouseEnter={handleHover(3)}
          onMouseLeave={handleHoverEnd}
        />
        <BannerItem
          isHovered={hover === 4}
          onMouseEnter={handleHover(4)}
          onMouseLeave={handleHoverEnd}
        />
      </motion.div>
    </div>
  );
}
