import Button from 'components/Button';
import Input from 'components/Input';

export default function IntegrationsPage() {
  return (
    <main className="pt-8 md:mt-24 md:pt-0">
      <div className="bg-[url('/hero-background.png')] md:bg-[url('/hero-background-xl.png')]">
        <h1 className="px-4 pb-6 text-center text-4xl font-semibold md:text-5xl">
          Fale com a gente!
        </h1>
        <h2 className="px-4 pb-12 text-center text-base text-primary-200 md:mx-auto md:max-w-xl md:pb-24">
          Experimente agora nossa solução completa, vamos juntos pelo caminho certo.{' '}
        </h2>
      </div>
      <div className="w-full bg-primary-400 px-4 py-16">
        <div className="md:m-auto md:max-w-[970px] md:grid-cols-3 md:gap-20 lg:grid">
          <form className="mb-16 flex flex-col gap-6 md:col-span-2">
            <h2 className="mb-2 text-2xl font-semibold text-white">Nos envie uma mensagem</h2>
            <Input placeholder="Nome da empresa" />
            <Input placeholder="Nome completo" />
            <Input placeholder="E-mail" />
            <Input placeholder="Telefone" />
            <Button color="dark">Enviar mensagem</Button>
          </form>
          <div className="flex flex-col gap-8 ">
            <div className="flex flex-col *:text-white">
              <label className="text-base">E-mail</label>
              <span className="text-2xl font-semibold">contato@paiper.com.br</span>
            </div>
            <div className="flex flex-col *:text-white">
              <label className="text-base">Telefone</label>
              <span className="text-2xl font-semibold">(11) 2391-3916</span>
            </div>
            <div className="flex flex-col *:text-white">
              <label className="text-base">Endereço</label>
              <span className="text-2xl font-semibold">
                Av. Nove de Julho, 4927 Jardim Paulista, São Paulo - SP, 01407-200
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
