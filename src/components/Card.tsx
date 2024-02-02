import { Variants, motion } from 'framer-motion';

const cardVariants: Variants = {
  rest: {
    // background: '#F8F8FA'
  },
  hover: {
    // background: '#2351FF',
    color: 'white'
  }
};

const iconBoxVariants: Variants = {
  rest: {
    scale: 1.2,
    background: '#2351FF',
    boxShadow: '0px 0px 20px rgba(35, 81, 255, 0.2), 0px 0px 8px #6EA3FF inset',
    stroke: '#ffffff',
    fill: '#ffffff'
  },
  hover: {
    scale: 0.8,
    background: '#ffffff',
    boxShadow: '0px',
    stroke: '#2351FF',
    fill: '#2351FF'
  }
};

const tagVariants: Variants = {
  rest: {
    color: '#2351FF'
  },
  hover: {
    color: '#ffffff'
  }
};

const titleVariants: Variants = {
  rest: {
    color: '#132053'
  },
  hover: {
    color: '#ffffff'
  }
};

const textVariants: Variants = {
  rest: {
    color: '#7A8089'
  },
  hover: {
    color: '#ffffff'
  }
};

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

interface CardProps {
  className?: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tag?: string;
  title?: React.ReactNode;
  description: React.ReactNode;
}

export default function Card({ title, tag, description, Icon, className }: CardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardVariants}
      transition={{
        duration: 0.325,
        ease: 'easeOut'
      }}
      className={`relative flex w-full flex-col justify-between overflow-hidden rounded-lg border-[1px]
  border-primary-100 bg-primary-50 p-8 hover:bg-[linear-gradient(#2351FF_-22%,_#132053_120%)] ${className}`}
    >
      {Icon && (
        <div className="relative">
          <motion.div
            variants={{
              rest: { scale: 1, opacity: 1 },
              hover: { scale: 0.7, opacity: [0.1, 0.9, 0.1] }
            }}
            transition={{ repeat: 0, ease: 'easeOut', duration: 0.325 }}
            className="absolute -left-5 -top-5 flex h-24 w-24 items-center justify-center rounded-lg border-[1px] border-white"
          />
          <motion.div
            variants={{
              rest: { scale: 1, opacity: 0 },
              hover: { scale: 0.7, opacity: [0.1, 0.325, 0.1] }
            }}
            transition={{ repeat: 0, ease: 'easeOut', duration: 0.325 }}
            className="absolute -left-9 -top-9 flex h-32 w-32 items-center justify-center rounded-lg border-[1px] border-white"
          />
          <motion.div
            variants={{
              rest: { scale: 1, opacity: 0 },
              hover: { scale: 0.7, opacity: [0.1, 0.2, 0.1] }
            }}
            transition={{ repeat: 0, ease: 'easeOut', duration: 0.325 }}
            className="absolute -left-11 -top-11 flex h-[152px] w-[152px] items-center justify-center rounded-lg border-[1px] border-white"
          />
          <motion.div
            variants={iconBoxVariants}
            transition={{ repeat: 0, ease: 'easeOut', duration: 0.325 }}

            className="mb-11 flex h-14 w-14 items-center justify-center rounded-lg"
          >
            <Icon className="h-8 w-8" />
          </motion.div>
        </div>
      )}
      {tag && (
        <motion.span variants={tagVariants} className="mb-8 text-[40px] font-semibold">
          {tag}
        </motion.span>
      )}
      <div>
        {title && (
          <motion.h3
            variants={titleVariants}
            className={`${
              Icon ? 'pb-2' : 'pb-5'
            } flex flex-row items-center gap-4 pb-2 text-base font-semibold`}
          >
            {title}
          </motion.h3>
        )}
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
