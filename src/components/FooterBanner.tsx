export default function FooterBanner() {
  return (
    <div className="relative w-full">
      <div className="absolute -top-12 right-1/2 z-40 mx-auto flex w-[356px] max-w-[98%] translate-x-1/2 flex-col items-center justify-center gap-2.5 rounded-lg bg-primary-400 px-14 py-6 sm:top-1/2 sm:-translate-y-1/2 md:w-[570px] md:gap-6 md:py-9">
        <h2 className="text-center text-4xl font-semibold text-white">Veja o Paiper em ação!</h2>
        <button className="rounded-md bg-white px-6 py-3.5 font-semibold text-primary-400">
          Agendar demonstração
        </button>
      </div>
      <svg
        viewBox="0 0 1370 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mb-1 w-full sm:hidden"
      >
        <path
          d="M 0 0 L 132.926 18.549 C 499.206 69.661 870.794 69.661 1237.07 18.549 L 1370 0 L 1370 860 L 0 860 L 0 0 Z"
          fill="#132053"
        />
      </svg>
      <svg
        viewBox="0 0 1370 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mb-1 hidden w-full sm:block md:hidden"
      >
        <path
          d="M 0 0 L 132.926 18.549 C 499.206 69.661 870.794 69.661 1237.07 18.549 L 1370 0 L 1370 460 L 0 460 L 0 0 Z"
          fill="#132053"
        />
      </svg>
      <svg
        viewBox="0 0 1370 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mb-1 hidden w-full md:block"
      >
        <path
          d="M 0 0 L 132.926 18.549 C 499.206 69.661 870.794 69.661 1237.07 18.549 L 1370 0 L 1370 460 L 0 460 L 0 0 Z"
          fill="#132053"
        />
      </svg>
    </div>
  );
}
