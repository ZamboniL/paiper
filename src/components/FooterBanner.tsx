import Arrow from './icons/Arrow';

export default function FooterBanner() {
  return (
    <div className="flex h-24 w-full gap-16 overflow-x-hidden bg-primary-400 py-12 md:py-16">
      <div className="flex items-center gap-4">
        <span className="text-nowrap text-4xl font-semibold text-white md:text-5xl">
          Veja o Paiper em ação
        </span>
        <div className="w-fit rounded-full bg-white p-2 md:p-4">
          <Arrow />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-nowrap text-4xl font-semibold text-white md:text-5xl">
          Veja o Paiper em ação
        </span>
        <div className="w-fit rounded-full bg-white p-2 md:p-4">
          <Arrow />
        </div>
      </div>
    </div>
  );
}
