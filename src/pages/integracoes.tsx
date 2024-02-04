import FooterBanner from 'components/FooterBanner';
import IntegrationCard from 'components/IntegrationCard/IntegrationCard';

export default function IntegrationsPage() {
  return (
    <main className="pt-8 md:mt-24 md:pt-0">
      <h1 className="px-4 pb-6 text-center text-4xl font-semibold md:text-5xl">Integrações</h1>
      <h2 className="px-4 pb-12 text-center text-base text-primary-200 md:mx-auto md:max-w-xl">
        Integrações de forma rápida e fácil para criar soluções mais completas para seus clientes.
      </h2>
      <div
        className="mb-16 flex flex-col items-center gap-5 px-4 md:mx-auto md:mb-24 md:max-w-[970px] 
      md:flex-row md:flex-wrap md:justify-center md:px-0"
      >
        <IntegrationCard
          title={
            <>
              <img src="/integracoes/aws.png" alt="" />
              AWS
            </>
          }
          description="Plataforma de serviços de computação em nuvem oferecida pela Amazon."
        />
        <IntegrationCard
          title={
            <>
              <img src="/integracoes/engati.png" alt="" />
              Engati
            </>
          }
          description="Crie chatbots inteligentes e personalizados para fornecer suporte ao seus clientes."
        />
        <IntegrationCard
          title={
            <>
              <img src="/integracoes/clicksign.png" alt="" />
              Clicksign
            </>
          }
          description={
            <>
              Envie contratos, acordos e outros documentos para assinatura
              <br /> digital.
            </>
          }
        />
        <IntegrationCard
          title={
            <>
              <img src="/integracoes/pontal-tech.png" alt="" />
              Pontaltech
            </>
          }
          description="Envio de SMS marketing, SMS corporativo, cobrando, recuperação extrajudicial, entre outros."
        />
        <IntegrationCard
          title={
            <>
              <img src="/integracoes/voll.png" alt="" />
              Pontaltech
            </>
          }
          description="Sincronize sistemas, aplicativos e plataformas diferentes para melhorar a eficiência operacional."
        />
        <IntegrationCard
          title={
            <>
              <img src="/integracoes/gupshup.png" alt="" />
              Gupshup
            </>
          }
          description="Crie chatbots personalizados e automatizados para fornecer suporte ao seu cliente."
        />
        <IntegrationCard
          title={
            <>
              <img src="/integracoes/nuveo.png" alt="" />
              Nuveo
            </>
          }
          description="Automatize tarefas manuais e repetitivas, melhorando a sua eficiência operacional."
        />
        <IntegrationCard
          title={
            <>
              <img src="/integracoes/transfeera.png" alt="" />
              Transfeera
            </>
          }
          description="Realize transferências bancarias de forma ágil e eficiente, integrando sistemas financeiros."
        />
      </div>
      <FooterBanner transformRange={[0, -100]} />
    </main>
  );
}
