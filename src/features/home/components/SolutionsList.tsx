import { useRef, useState } from 'react';
import Chip from '../../../components/Chip';
import Tab from '../../../components/Tab';
import CRM from '../../../components/icons/CRM';
import Calculator from '../../../components/icons/Calculator';
import Diagram from '../../../components/icons/Diagram';
import Document from '../../../components/icons/Document';
import Lightning from '../../../components/icons/Lightning';
import Omni from '../../../components/icons/Omni';
import PersonCheck from '../../../components/icons/PersonCheck';
import Stars from 'components/icons/Stars';
import DisplayCard from './DisplayCard';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Star from 'components/icons/Star';
import ThumbsUp from 'components/icons/ThumbsUp';

export type Solution = keyof typeof cards;

const cards = {
  crm: {
    title: 'CRM',
    description:
      'Nossa solução revoluciona o atendimento ao cliente com automação avançada, integração de canais e análise de dados, proporcionando uma visão holística. Contrate nosso CRM para eficiência operacional, otimização de processos e satisfação do cliente, impulsionando retenção. Garantimos uma excepcional experiência do cliente.',
    image: '/img/crm-print.png',
    icon: CRM
  },
  'data-driven': {
    title: 'Data-driven',
    description:
      'Nossa abordagem Data-Driven utiliza tecnologias avançadas para transformar dados em insights em tempo real. Com uma plataforma intuitiva, você interpreta seus dados de maneira clara, facilitando decisões estratégicas embasadas. Oferecemos um conjunto abrangente de ferramentas poderosas que garantem precisão nos insights.',
    image: '/img/data-print.png',
    icon: Calculator
  },
  formalization: {
    title: 'Formalização',
    description:
      'Automatizamos processos burocráticos, incluindo contratos digitais, BPO e Onboarding, para viabilizar uma operação enxuta. Nossa abrangente solução de BPO facilita a troca segura e prática de informações com os clientes, integrando-se às principais soluções de contrato digital, validações cadastrais, identidade e compliance.',
    image: '/img/form-print.png',
    icon: Document
  },
  ai: {
    title: 'Inteligência Artificial',
    description:
      'Nossa solução de Inteligência Artificial emprega algoritmos avançados de aprendizado de máquina para analisar grandes volumes de dados, identificar padrões e embasar ações eficazes. Isso viabiliza uma segmentação precisa dos clientes, otimizando a comunicação por meio de abordagens, canais e periodicidade estratégicos.',
    image: '/img/ai-print.png',
    icon: Stars
  },
  omnichannel: {
    title: 'Omnichannel',
    description:
      'O Omnichannel vai além da presença em diversos canais; é proporcionar uma jornada perfeita para os clientes, independentemente de sua localização ou da maneira como preferem se envolver com sua marca. Nossa solução Omnichannel permite a integração de todos os canais de comunicação digitais em um ambiente unificado.',
    image: '/img/omni-print.png',
    icon: Omni
  },
  'client-satisfaction': {
    title: 'Satisfação do cliente',
    description:
      'A satisfação do cliente é mais do que apenas um indicador de sucesso. É um reflexo direto da qualidade dos seus produtos, serviços e interações com sua marca. Com a nossa solução você pode coletar, analisar e agir com base nas percepções dos seus clientes, garantindo que eles tenham a melhor experiência possível.',
    image: '/img/client-print.png',
    icon: PersonCheck
  },
  workflow: {
    title: 'Workflow',
    description:
      'Nossa solução Workflow simplifica a gestão eficaz de processos de negócios, integrando-os de forma fluida às regras de comunicação, independentemente da complexidade envolvida. Com uma abordagem intuitiva e sem código, permite otimizar processos, reduzir custos e ampliar a eficiência operacional de maneira ágil.',
    image: '/img/workflow-print.png',
    icon: Diagram
  }
};

export default function SolutionsList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('crm');
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', '25%'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1.05]);
  const scaleSpring = useSpring(scale, { damping: 30, stiffness: 100, restDelta: 0.001 });

  function handleTabClick(value: string) {
    setActiveTab(value);
  }

  return (
    <motion.div
      className="relative mt-20 rounded-2xl bg-primary-400 py-24 md:mt-40
    md:flex md:flex-col md:items-center md:justify-center md:py-40"
      ref={containerRef}
      style={{ scale: scaleSpring }}
    >
      <div
        className={`absolute -top-10 left-8 flex h-20 w-20 items-center justify-center rounded-xl bg-[linear-gradient(140deg,_#2351FF_-3.5%,_#4C80FF_110%)]
      md:left-40`}
      >
        <Star />
      </div>
      <div
        className={`absolute bottom-40 right-72 hidden h-20 w-20 items-center justify-center rounded-xl 
        bg-[linear-gradient(140deg,_#2351FF_-3.5%,_#4C80FF_110%)] xl:flex`}
      >
        <ThumbsUp />
      </div>
      <div className="mb-12 flex flex-col items-center gap-6 md:max-w-3xl">
        <Chip Icon={Lightning} id="solucoes">
          Soluções
        </Chip>
        <h2 className="px-4 text-center text-4xl font-semibold text-white">
          Tecnologia que permite estabelecer conexões significativas e fornecer insights inteligente
          com seus clientes.
        </h2>
        <p className="px-4 text-center text-base text-white">
          Garantimos eficiência e escalabilidade nas suas operações.
        </p>
      </div>
      <div className="mb-12 flex gap-3 overflow-hidden px-4">
        <Tab currentTab={activeTab} onClick={handleTabClick} value="crm" Icon={cards['crm'].icon}>
          CRM
        </Tab>
        <Tab
          currentTab={activeTab}
          onClick={handleTabClick}
          value="data-driven"
          Icon={cards['data-driven'].icon}
        >
          Data-driven
        </Tab>
        <Tab
          currentTab={activeTab}
          onClick={handleTabClick}
          value="formalization"
          Icon={cards['formalization'].icon}
        >
          Formalização
        </Tab>
        <Tab currentTab={activeTab} onClick={handleTabClick} value="ai" Icon={cards['ai'].icon}>
          Inteligência Artificial
        </Tab>
        <Tab
          currentTab={activeTab}
          onClick={handleTabClick}
          value="omnichannel"
          Icon={cards['omnichannel'].icon}
        >
          Omnichannel
        </Tab>
        <Tab
          currentTab={activeTab}
          onClick={handleTabClick}
          value="client-satisfaction"
          Icon={cards['client-satisfaction'].icon}
        >
          Satisfação do cliente
        </Tab>
        <Tab
          currentTab={activeTab}
          onClick={handleTabClick}
          value="workflow"
          Icon={cards['workflow'].icon}
        >
          Workflow
        </Tab>
      </div>
      <div className="px-4">
        <DisplayCard
          Icon={cards[activeTab as Solution].icon}
          title={cards[activeTab as Solution].title}
          description={cards[activeTab as Solution].description}
          image={cards[activeTab as Solution].image}
        />
      </div>
      <motion.div initial="rest" whileInView="view" viewport={{ once: true }} className="relative">
        <motion.div
          variants={{
            rest: { width: '0px', height: '0px' },
            view: { width: '770px', height: '770px' }
          }}
          transition={{ duration: 1, delay: 0.85, ease: 'easeInOut' }}
          className="absolute bottom-[-712px] left-1/2 -translate-x-1/2 rounded-full bg-white opacity-5"
        />
        <motion.div
          variants={{
            rest: { width: '0px', height: '0px' },
            view: { width: '975px', height: '975px' }
          }}
          transition={{ duration: 1, delay: 0.35, ease: 'easeInOut' }}
          className="absolute bottom-[-812px] left-1/2 -translate-x-1/2 rounded-full bg-white opacity-5"
        />
        <motion.div
          variants={{
            rest: { width: '1000px', height: '1000px' },
            view: { width: '1200px', height: '1200px' }
          }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute bottom-[-920px] left-1/2 -translate-x-1/2 rounded-full bg-white opacity-5"
        />
      </motion.div>
    </motion.div>
  );
}
