import Chip from 'components/Chip';
import Graph from 'components/icons/Graph';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import BenefitItem from './BenefitItem';

export default function BenefitList() {
  const containerRef = useRef<HTMLUListElement>(null);

  return (
    <motion.div
      initial={{ scale: 0.6 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="relative mx-auto mt-20 flex w-full max-w-[970px] flex-col items-start gap-5 px-4 md:mt-40 md:px-0"
    >
      <div className="flex flex-col gap-6 md:top-28">
        <Chip Icon={Graph} className="w-fit" id="beneficios">
          Benefícios
        </Chip>
        <h2 className=" max-w-[584px] pb-6 text-4xl font-semibold md:text-[40px] md:leading-[44px]">
          Veja o que a Paiper pode entregar para sua empresa:
        </h2>
      </div>
      <motion.ul
        drag="x"
        dragConstraints={{ left: -1200, right: 0 }}
        className="flex gap-8"
        ref={containerRef}
      >
        <BenefitItem
          title="Centralização Estratégica"
          description="Centralize dados do cliente em uma plataforma única para gestão eficiente e análise estratégica. Otimizando o relacionamento e embase decisões para o sucesso do negócio."
          image="/img/benefit/center.png"
        />
        <BenefitItem
          title="Decisões Estratégicas"
          description="Aprimore a tomada de decisões por meio de uma abordagem orientada por informações, otimizando a análise de dados para impulsionar escolhas estratégicas embasadas."
          image="/img/benefit/decisions.png"
        />
        <BenefitItem
          title="Retenção Maximizada"
          description="Aumente a taxa de retenção de clientes ao reduzir o churn de forma eficaz, fortalecendo a fidelidade do cliente por meio de estratégias focadas na satisfação e na entrega contínua de valor."
          image="/img/benefit/retention.png"
        />
        <BenefitItem
          title="Oportunidades de Crescimento"
          description="Reconheça proativamente oportunidades de crescimento e impulsione as vendas para seus clientes existentes, implementando estratégias personalizadas e eficazes."
          image="/img/benefit/oportunities.png"
        />
      </motion.ul>
    </motion.div>
  );
}
