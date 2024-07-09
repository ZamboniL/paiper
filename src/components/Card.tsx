import { Variants, motion } from 'framer-motion';
import { RefAttributes } from 'react';

const iconBoxVariants: Variants = {
  rest: {
    width: '64px',
    height: '64px',
    background: '#2351FF'
  },
  hover: {
    width: '52px',
    height: '52px',
    background: '#ffffff'
  }
};

const titleVariants: Variants = { rest: { color: '#132053' }, hover: { color: '#ffffff' } };

const textVariants: Variants = { rest: { color: '#7A8089' }, hover: { color: '#ffffff' } };

const circleVariants: Variants = {
  rest: {
    opacity: 0,
    bottom: -250,
    right: -275
  },
  hover: {
    bottom: -200,
    right: -200,
    opacity: [0.1, 0.7, 0.1]
  }
};

const iconVariants = {
  rest: { height: '44px', width: '44px', stroke: '#ffffff', fill: '#ffffff' },
  hover: { height: '32px', width: '32x', stroke: '#2351FF', fill: '#2351FF' }
};

const cardHoverClass = `hover:shadow-card hover:border-0
hover:bg-[linear-gradient(180deg,_#4C80FF_-11.49%,_#2351FF_51.18%,_#1D3DB6_115.11%)]`;

const squareClass = `absolute flex origin-center items-center justify-center 
rounded-lg border-[1px]`;

interface CardProps {
  className?: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  title?: React.ReactNode;
  description: React.ReactNode;
}

export default function Card({ title, description, Icon, className }: CardProps) {
  const MotionIcon = motion(Icon);
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      animate="rest"
      transition={{ duration: 0.325, ease: 'easeOut' }}
      className={` relative flex w-full flex-col justify-between overflow-hidden rounded-lg
  border-[1px] border-primary-100 bg-primary-50 p-8 ${cardHoverClass} ${className}`}
    >
      <motion.div
        transition={{ ease: 'circOut', duration: 0.325 }}
        variants={{ rest: { opacity: 0.4 }, hover: { opacity: [1, 0.4, 0.5] } }}
        className={`absolute -left-3 -top-3 z-10 h-[152px] w-[152px]
            bg-[radial-gradient(45%_45%_at_50%_50%,_#2351FF_0%,_rgba(158,88,_223,_0)_100%)]`}
      >
        <motion.div
          variants={{
            rest: { opacity: 0, height: '96px', width: '96px' },
            hover: { opacity: [1, 0.4, 0.1], height: '84px', width: '84px' }
          }}
          transition={{ repeat: 0, ease: 'easeOut', duration: 0.325 }}
          className={`${squareClass} left-[28px] top-[28px] z-0 border-white`}
        />
        <motion.div
          variants={{
            rest: { opacity: 0, height: '128px', width: '128px' },
            hover: { opacity: [1, 0.4, 0.1], height: '116px', width: '116px' }
          }}
          transition={{ repeat: 0, ease: 'easeOut', duration: 0.325 }}
          className={`${squareClass} left-[12px] top-[12px] z-0 border-white/30`}
        />
        <motion.div
          variants={{
            rest: { opacity: 0, height: '152px', width: '152px' },
            hover: { opacity: [1, 0.4, 0.1], height: '140px', width: '140px' }
          }}
          transition={{ repeat: 0, ease: 'easeOut', duration: 0.325 }}
          className={`${squareClass} left-[4px] top-[4px] z-0 border-white/10`}
        />
      </motion.div>
      <motion.div
        variants={iconBoxVariants}
        transition={{ repeat: 0, ease: 'easeOut', duration: 0.325 }}
        className="relative z-10 mb-11 flex h-14 w-14 origin-center items-center justify-center rounded-lg"
      >
        <div className="contents">
          <MotionIcon className="h-full w-full" variants={iconVariants} />
        </div>
      </motion.div>
      <div>
        <motion.h3
          variants={titleVariants}
          className="flex flex-row items-center gap-4 pb-2 text-base font-semibold"
        >
          {title}
        </motion.h3>
        <motion.p variants={textVariants}>{description}</motion.p>
      </div>
      <motion.div
        variants={circleVariants}
        transition={{ repeat: 0, ease: 'easeOut', duration: 0.325 }}
        className="absolute h-[261px] w-[261px] rounded-full bg-white"
      />
      <motion.div
        variants={circleVariants}
        transition={{ repeat: 0, ease: 'easeOut', duration: 0.325 }}
        className="absolute h-[301px] w-[301px] rounded-full bg-white"
      />
      <motion.div
        variants={circleVariants}
        transition={{ repeat: 0, ease: 'easeOut', duration: 0.325 }}
        className="absolute h-[360px] w-[360px] rounded-full bg-white"
      />
    </motion.div>
  );
}
