import Card from 'components/Card';
import Chip from 'components/Chip';
import Graph from 'components/icons/Graph';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function BenefitList() {
  const containerRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', '50%'] });
  const scale = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  // const scaleSpring = useSpring(scale, { damping: 30, stiffness: 100, restDelta: 0.001 });
  console.log(scale);
  return (
    <div className="relative mx-auto mt-20 flex flex-col items-start gap-5 px-4 md:mt-40 md:flex-row md:px-0">
      <div className="flex flex-col gap-6 md:sticky md:top-28 md:max-w-[470px]">
        <Chip Icon={Graph} className="w-fit" id="beneficios">
          Benefícios
        </Chip>
        <h2 className="pb-6 text-4xl font-semibold md:text-[40px]">
          Veja o que a Paiper pode entregar para sua empresa:
        </h2>
      </div>
      <div className="hidden flex-col gap-7 md:flex md:max-w-[470px]">
        <Card
          tag="01"
          description="Centralize dados do cliente em uma plataforma única para gestão eficiente e análise estratégica. Otimizando o relacionamento e embase decisões para o sucesso do negócio."
        />
        <Card
          tag="02"
          description="Aprimore a tomada de decisões por meio de uma abordagem orientada por informações, otimizando a análise de dados para impulsionar escolhas estratégicas embasadas."
        />
        <Card
          tag="03"
          description="Eleve significativamente a taxa de retenção de clientes, reduzindo efetivamente a taxa de churn. Fortalecendo a fidelidade do cliente com estratégias focadas na satisfação e na entrega contínua de valor."
        />
        <Card
          tag="04"
          description="Reconheça proativamente oportunidades de crescimento e impulsione as vendas para seus clientes existentes, implementando estratégias personalizadas e eficazes."
        />
      </div>
      <ul className="relative flex flex-col gap-24 md:hidden" ref={containerRef}>
        <motion.li
          className="absolute left-7 top-0 h-40 w-1 rounded-sm bg-primary-400"
          style={{ height: scale }}
        />
        <li className="flex gap-8">
          <div className="flex flex-col items-center gap-3">
            <span className="relative z-10 bg-white text-5xl font-semibold text-primary-400">
              01
            </span>
          </div>
          <p className="text-primary-200">
            Centralize dados do cliente em uma plataforma única para gestão eficiente e análise
            estratégica. Otimizando o relacionamento e embase decisões para o sucesso do negócio.
          </p>
        </li>
        <li className="flex gap-8">
          <div className="flex flex-col items-center gap-3">
            <span className="relative z-10 bg-white text-5xl font-semibold text-primary-400">
              02
            </span>
          </div>
          <p className="text-primary-200">
            Aprimore a tomada de decisões por meio de uma abordagem orientada por informações,
            otimizando a análise de dados para impulsionar escolhas estratégicas embasadas.
          </p>
        </li>
        <li className="flex gap-8">
          <div className="flex flex-col items-center gap-3">
            <span className="relative z-10 bg-white text-5xl font-semibold text-primary-400">
              03
            </span>
          </div>
          <p className="text-primary-200">
            Eleve significativamente a taxa de retenção de clientes, reduzindo efetivamente a taxa
            de churn. Fortalecendo a fidelidade do cliente com estratégias focadas na satisfação e
            na entrega contínua de valor.
          </p>
        </li>
        <li className="flex gap-8">
          <div className="flex flex-col items-center gap-3">
            <span className="relative z-10 bg-white text-5xl font-semibold text-primary-400">
              04
            </span>
          </div>
          <p className="text-primary-200">
            Reconheça proativamente oportunidades de crescimento e impulsione as vendas para seus
            clientes existentes, implementando estratégias personalizadas e eficazes.
          </p>
        </li>
      </ul>
    </div>
  );
}
