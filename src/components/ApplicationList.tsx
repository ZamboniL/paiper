import Card from './Card';
import Chip from './Chip';
import Currency from './icons/Currency';
import Magnet from './icons/Magnet';
import Money from './icons/Money';
import PriceTag from './icons/PriceTag';
import Rocket from './icons/Rocket';

export default function ApplicationList() {
  return (
    <div className="mx-auto mt-20 flex max-w-5xl flex-col items-center gap-6 px-4">
      <Chip Icon={Rocket}>Aplicações</Chip>
      <h2 className="text-center text-4xl font-semibold md:text-5xl">
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
          Icon={Currency}
          title="Ativos financeiros"
          description="Facilidade operacional, negociações efetivas, aquisições/originação de ativos e distribuição de crédito."
          className="col-span-3"
        />
      </div>
    </div>
  );
}
