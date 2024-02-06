import { motion } from 'framer-motion';

export default function BenefitItem({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.li
      initial="rest"
      whileInView="inView"
      viewport={{ margin: '50% 0px -50% 0px' }}
      className="flex gap-8"
    >
      <div className="flex flex-col items-center gap-3">
        <motion.span
          variants={{ inView: { color: '#2351FF' } }}
          className="relative z-10 bg-white text-5xl font-semibold text-primary-100"
        >
          {title}
        </motion.span>
      </div>
      <motion.p
        variants={{ rest: { y: 20, opacity: 0 }, inView: { y: 0, opacity: 1 } }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="text-primary-200"
      >
        {description}
      </motion.p>
    </motion.li>
  );
}
