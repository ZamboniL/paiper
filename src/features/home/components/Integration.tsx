import Button from 'components/Button';
import Chip from 'components/Chip';
import Code from 'components/icons/Code';

export default function Integration() {
  return (
    <div
      // eslint-disable-next-line tailwindcss/no-contradicting-classname, tailwindcss/classnames-order
      className="bg-top-2 md:bg-top-4 relative bg-[url('/img/circles.png')] bg-no-repeat pb-24
      pt-72 md:bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(255,255,255,1)),url('/img/circles.png')]
      md:pb-40 md:pt-[425px]"
    >
      <div className="m-auto flex flex-col items-center gap-6  md:max-w-2xl">
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
  );
}
