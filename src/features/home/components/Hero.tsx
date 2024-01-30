import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', '5%'] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);

  return (
    <div className="relative bg-center px-4 pt-16 md:bg-[url('/hero-background-xl.png')] md:pt-24">
      <h1
        className="relative z-10 pb-6 text-center text-4xl font-semibold leading-10
      md:mx-auto md:max-w-3xl md:text-5xl"
      >
        Maximize a produtividade e minimize custos no atendimento ao cliente.
      </h1>
      <div className="bg-[url('/hero-background.png')] md:bg-none">
        <h2
          className="relative z-10 mb-12 text-center text-base font-normal text-primary-200
        md:mx-auto md:max-w-3xl"
        >
          Nossa plataforma com tecnologia disruptiva impulsiona a eficiência operacional em larga
          escala, proporcionando resultados maximizados e transformando a maneira como as empresas
          se comunicam com seus clientes.
        </h2>
        <div ref={containerRef} className="relative m-auto w-fit">
          <motion.img
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            height={46}
            width={46}
            src="/icons/check.svg"
            alt=""
            className="absolute -top-5 right-4 z-10 md:-right-10 md:top-44 md:h-16 md:w-16"
          />
          <picture>
            <source srcSet="/print-xl.png" media="(min-width: 768px)" />
            <motion.img
              style={{ rotateX, transformPerspective: 1200 }}
              height={270}
              width={360}
              src="/print.png"
              alt=""
              className="w-auto drop-shadow-2xl"
            />
          </picture>
          <picture>
            <source srcSet="/ai-button-xl.png" media="(min-width: 768px)" />
            <motion.img
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              height={32}
              width={112}
              src="/ai-button.png"
              alt=""
              className="absolute -bottom-6 left-4 w-auto md:-left-24 md:top-1/2 md:h-16"
            />
          </picture>
          <motion.img
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            height={43}
            width={43}
            src="/icons/graphic.svg"
            alt=""
            className="absolute -bottom-12 right-8 md:-bottom-8 md:right-48 md:h-16 md:w-16"
          />
        </div>
      </div>
    </div>
  );
}
