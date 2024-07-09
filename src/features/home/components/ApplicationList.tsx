import { motion } from 'framer-motion';
import Card from 'components/Card';
import Chip from 'components/Chip';
import Headset from 'components/icons/Headset';
import Magnet from 'components/icons/Magnet';
import Money from 'components/icons/Money';
import PriceTag from 'components/icons/PriceTag';
import Rocket from 'components/icons/Rocket';

export default function ApplicationList() {
  return (
    <motion.div
      initial={{ scale: 0.6 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="mx-auto mt-20 flex max-w-[970px] flex-col items-center gap-6 px-4 md:mt-40 md:px-0"
    >
      <Chip Icon={Rocket} id="aplicacoes">
        Aplicações
      </Chip>
      <h2 className="text-center text-4xl font-semibold md:max-w-4xl md:font-[40px]">
        Alcance um novo nível de excelência no atendimento ao cliente.
      </h2>
      <h3 className="pb-6 text-center text-base text-primary-200">
        Garantimos eficiência e escalabilidade nas suas operações.
      </h3>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-7">
        <Card
          Icon={Magnet}
          title="Retenção"
          description="Reduza seu churn, melhore seu CAC, trasforme clientes em fãs e melhore a satisfação dos seus clientes."
          className="col-span-3"
        />
        <Card
          Icon={Money}
          title="Cobrança"
          description="Seja assertivo, renegocie facilmente e reduza a inadimplência."
          className="col-span-2"
        />
        <Card
          Icon={PriceTag}
          title="Vendas"
          description="Ofertas, comunicação e campanhas para impulsionar vendas."
          className="col-span-2"
        />
        <Card
          Icon={Headset}
          title="Suporte"
          description="Um sistema de atendimento automatizado 24/7 omnichannel para melhorar a experiência do cliente em todos os canais de comunicação."
          className="col-span-3"
        />
      </div>
    </motion.div>
  );
}
