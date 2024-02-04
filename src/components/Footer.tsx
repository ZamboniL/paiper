const socials =
  'block rounded-full bg-primary-400/40 p-3 transition-colors hover:bg-primary-400/20';
export default function Footer() {
  return (
    <footer className="bg-primary-500 px-4 py-16 md:py-20">
      <div
        className="flex flex-col items-start gap-14 md:m-auto md:max-w-[970px]
      md:flex-row md:justify-between"
      >
        <div>
          <img src="logo-white.svg" alt="" height={48} className="mb-10 h-12" />
          <ul className="flex items-center gap-3">
            <li>
              <a
                className={socials}
                href="https://www.facebook.com/paipertechnology"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/facebook.svg" alt="facebook" />
              </a>
            </li>
            <li>
              <a
                className={socials}
                href="https://www.instagram.com/paipertechnology/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/instagram.svg" alt="instagram" />
              </a>
            </li>
            <li>
              <a
                className={socials}
                href="https://www.linkedin.com/company/app-paiper/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/linkedin.svg" alt="linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div className="md:flex md:gap-24">
          <ul className="mb-10 flex flex-col gap-3 *:text-white md:mb-0">
            <li className="pb-1 text-base font-semibold">Institucional</li>
            <li>
              <a className="cursor-pointer transition-colors hover:text-gray-400">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a className="cursor-pointer transition-colors hover:text-gray-400">Termos de Uso</a>
            </li>
            <li>
              <a className="cursor-pointer transition-colors hover:text-gray-400">
                Trabalhe Conosco
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 *:text-white">
            <li className="pb-1 text-base font-semibold">Fale Conosco</li>
            <li>
              <a>Que tal um café?</a>
            </li>
            <li>Telefone: (11) 2391-3916</li>
            <li>Segunda a Sexta, das 09:00 às 18:00.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
