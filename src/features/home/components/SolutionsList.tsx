import { useState } from 'react';
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

const icons = {
  crm: CRM,
  'data-driven': Calculator,
  formalization: Document,
  ai: Stars,
  omnichannel: Omni,
  'client-satisfaction': PersonCheck,
  workflow: Diagram
};

export default function SolutionsList() {
  const [activeTab, setActiveTab] = useState('crm');

  function handleTabClick(value: string) {
    setActiveTab(value);
  }

  return (
    <div
      className="mt-20 bg-primary-400 py-24 md:mt-40 md:flex md:flex-col
    md:items-center md:justify-center md:py-40"
    >
      <div className="mb-12 flex flex-col items-center gap-6 md:max-w-3xl">
        <Chip Icon={Lightning} id="solucoes">Soluções</Chip>
        <h2 className="px-4 text-center text-4xl font-semibold text-white">
          Tecnologia que permite estabelecer conexões significativas e fornecer insights inteligente
          com seus clientes.
        </h2>
        <p className="px-4 text-center text-base text-white">
          Garantimos eficiência e escalabilidade nas suas operações.
        </p>
      </div>
      <div className="mb-12 flex gap-3 overflow-hidden px-4">
        <Tab currentTab={activeTab} onClick={handleTabClick} value="crm" Icon={icons['crm']}>
          CRM
        </Tab>
        <Tab
          currentTab={activeTab}
          onClick={handleTabClick}
          value="data-driven"
          Icon={icons['data-driven']}
        >
          Data-driven
        </Tab>
        <Tab
          currentTab={activeTab}
          onClick={handleTabClick}
          value="formalization"
          Icon={icons['formalization']}
        >
          Formalização
        </Tab>
        <Tab currentTab={activeTab} onClick={handleTabClick} value="ai" Icon={icons['ai']}>
          Inteligência Artificial
        </Tab>
        <Tab
          currentTab={activeTab}
          onClick={handleTabClick}
          value="omnichannel"
          Icon={icons['omnichannel']}
        >
          Omnichannel
        </Tab>
        <Tab
          currentTab={activeTab}
          onClick={handleTabClick}
          value="client-satisfaction"
          Icon={icons['client-satisfaction']}
        >
          Satisfação do cliente
        </Tab>
        <Tab
          currentTab={activeTab}
          onClick={handleTabClick}
          value="workflow"
          Icon={icons['workflow']}
        >
          Workflow
        </Tab>
      </div>
      <div className="max-w-[970px] px-4">
        <DisplayCard
          Icon={icons['crm']}
          title="CRM"
          description="Nossa solução revoluciona o atendimento ao cliente com automação avançada, integração de canais e análise de dados, proporcionando uma visão holística. Contrate nosso CRM para eficiência operacional, otimização de processos e satisfação do cliente, impulsionando retenção. Garantimos uma excepcional experiência do cliente."
          image="/img/crm-print.png"
        ></DisplayCard>
      </div>
    </div>
  );
}
