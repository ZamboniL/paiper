import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './Button';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fixedClass =
    'md:fixed top-4 left-0 right-0 m-auto z-50 md:shadow-[0_20px_40px_0_rgba(50,50,93,0.20)] md:rounded-lg max-w-7xl';

  return (
    <header
      className={`${
        fixed ? fixedClass : ''
      } flex justify-center border-primary-100 md:border-b-[1px] md:py-4`}
    >
      <div className="flex w-full max-w-7xl flex-col justify-between md:flex-row md:items-center md:px-4">
        <div
          className="mb-9 flex w-full items-center justify-between border-b-[1px] p-4
         md:mb-0 md:w-auto md:border-0 md:p-0"
        >
          <Image width={120} height={38} src="logo.svg" alt="" />
          <Image
            width={32}
            height={32}
            src={open ? 'icons/x.svg' : 'icons/hamburguer.svg'}
            alt=""
            className="md:hidden"
            onClick={() => setOpen(!open)}
          />
        </div>
        <ul
          className={`${
            open
              ? 'mb-9 flex flex-col border-b-[1px] border-primary-100 bg-white px-4 pb-9'
              : 'hidden'
          } gap-8 md:flex`}
        >
          <li>
            <a href="">Aplicações</a>
          </li>
          <li>
            <a href="">Benefícios</a>
          </li>
          <li>
            <a href="">Soluções</a>
          </li>
          <li>
            <a href="">Integrações</a>
          </li>
        </ul>
        <ul
          className={`${
            open ? ' flex h-screen flex-col bg-white px-4' : 'hidden'
          } gap-3 md:flex md:items-center`}
        >
          <li>
            <Button className="w-full md:w-auto" color="secondary">
              Contato
            </Button>
          </li>
          <li>
            <Button className="w-full md:w-auto" color="primary">
              Entrar
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
