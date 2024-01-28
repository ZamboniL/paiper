import { Variants, motion } from 'framer-motion';

const cardVariants: Variants = {
  rest: {
    background: '#F8F8FA'
  },
  hover: {
    background: '#2351FF',
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
    scale: 1,
    background: '#ffffff',
    boxShadow: 'none',
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
        duration: 0.3,
        ease: 'easeInOut'
      }}
      className={`flex w-full flex-col justify-between rounded-lg border-[1px]
  border-primary-100 bg-primary-50 p-8 ${className}`}
    >
      {Icon && (
        <motion.div
          variants={iconBoxVariants}
          className="mb-11 flex h-14 w-14 items-center justify-center rounded-lg"
        >
          <Icon className="h-8 w-8" />
        </motion.div>
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
    </motion.div>
  );
}
