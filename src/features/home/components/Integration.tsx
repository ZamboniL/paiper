import Button from 'components/Button';
import Chip from 'components/Chip';
import Code from 'components/icons/Code';

import { motion } from 'framer-motion';

export default function Integration() {
  return (
    <motion.div
      initial={{ scale: 0.6 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="overflow-y-clip bg-gradient-to-b from-transparent to-white pb-24 pt-72 md:pb-40 md:pt-[425px]"
    >
      <div className="relative">
        <div
          id="bigCircle"
          className="absolute left-1/2 top-1/2 h-min min-h-[793px] w-min min-w-[793px] origin-center
        -translate-x-1/2 -translate-y-1/2 rounded-full border-[1px] md:min-h-[1030px] md:min-w-[1030px]"
        />
        <div
          id="gradient"
          className="absolute left-1/2 top-1/2 z-20 h-min min-h-[1030px] w-full min-w-[1400px] origin-center -translate-x-1/2 
          -translate-y-1/2 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_65%,_rgb(255,255,255)_70%)]"
        />
        <div
          id="smallCircle"
          className="absolute left-1/2 top-1/2 h-min min-h-[631px] w-min min-w-[631px] origin-center -translate-x-1/2 -translate-y-1/2
        rounded-full border-[1px] md:min-h-[762px] md:min-w-[762px]"
        />
        <motion.div
          id="smallRotatingCircle"
          initial={{ translateX: '-50%', translateY: '-50%', rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 240, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 h-min min-h-[698px] w-min min-w-[698px] origin-center md:min-h-[829px] md:min-w-[829px]"
        >
          <OrbContainer
            rotation="0"
            src={['/integracoes/voll-orb.png', '/integracoes/voll-orb.png']}
          />
          <OrbContainer
            rotation="60"
            src={['/integracoes/transfeera-orb.png', '/integracoes/transfeera-orb.png']}
          />
          <OrbContainer
            rotation="30"
            src={['/integracoes/dna-orb.png', '/integracoes/dna-orb.png']}
          />
          <OrbContainer
            rotation="-60"
            src={['/integracoes/pontal-tech-orb.png', '/integracoes/pontal-tech-orb.png']}
          />
          <OrbContainer
            rotation="-30"
            src={['/integracoes/engati-orb.png', '/integracoes/engati-orb.png']}
          />
          <OrbContainer
            rotation="90"
            src={['/integracoes/curly-braces.png', '/integracoes/aws-orb.png']}
          />
        </motion.div>
        <motion.div
          id="bigRotatingCircle"
          initial={{ translateX: '-50%', translateY: '-50%', rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 240, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 h-min min-h-[860px] w-min min-w-[860px] origin-center md:min-h-[1097px] md:min-w-[1097px]"
        >
          <OrbContainer
            rotation="0"
            src={['/integracoes/health-orb.png', '/integracoes/health-orb.png']}
            inverse
          />
          <OrbContainer
            rotation="25"
            src={['/integracoes/button-orb.png', '/integracoes/button-orb.png']}
            inverse
          />
          <OrbContainer
            rotation="50"
            src={['/integracoes/gupshup-orb.png', '/integracoes/gupshup-orb.png']}
            inverse
          />
          <OrbContainer
            rotation="75"
            src={['/integracoes/mysql-orb.png', '/integracoes/clicksign-orb.png']}
            inverse
          />
          <OrbContainer
            rotation="-75"
            src={['/integracoes/nuveo-orb.png', '/integracoes/nuveo-orb.png']}
            inverse
          />
          <OrbContainer
            rotation="-50"
            src={['/integracoes/mongo-orb.png', '/integracoes/mongo-orb.png']}
            inverse
          />
          <OrbContainer
            rotation="-25"
            src={['/integracoes/hit-orb.png', '/integracoes/hit-orb.png']}
            inverse
          />
        </motion.div>
        <div className="relative z-30 m-auto flex max-w-lg flex-col  items-center gap-6 md:max-w-2xl">
          <Chip Icon={Code}>Integrações</Chip>
          <h2 className="px-2 text-center text-4xl font-semibold">
            Integrações com as principais soluções de mercado.
          </h2>
          <p className="px-4 text-center text-base text-primary-200">
            Com a nossa solução, é fácil integrar todas as ferramentas e fontes de dados necessárias
            para obter uma visão completa e detalhada de cada um dos seus clientes.
          </p>
          <p className="px-4 text-center text-base text-primary-200">
            Integramos e transformamos diversas fontes de dados: arquivos, banco de dados,
            webservices, webhooks e muito mais.
          </p>
          <Button className="text-base">Ver todas as integrações</Button>
        </div>
      </div>
    </motion.div>
  );
}

const left = 'left-[calc(50%_-_32px)]';

const OrbContainer = ({
  rotation,
  src,
  inverse
}: {
  rotation: string;
  src: [string, string];
  inverse?: boolean;
}) => {
  const rotate = -parseInt(rotation);

  return (
    <div
      className={`absolute inset-y-0 ${left} flex flex-col items-center justify-between`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <motion.img
        initial={{ rotate }}
        animate={inverse ? { rotate: -360 + rotate } : { rotate: 360 + rotate }}
        transition={{ duration: 240, repeat: Infinity, ease: 'linear' }}
        src={src[0]}
      />
      <motion.img
        initial={{ rotate }}
        animate={inverse ? { rotate: -360 + rotate } : { rotate: 360 + rotate }}
        transition={{ duration: 240, repeat: Infinity, ease: 'linear' }}
        src={src[1]}
      />
    </div>
  );
};
