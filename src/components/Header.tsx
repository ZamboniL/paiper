import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './Button';
import Link from 'next/link';

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
    'md:fixed top-4 left-0 right-0 md:m-auto z-50 md:shadow-3xl md:rounded-lg max-w-7xl';

  return (
    <>
      <div className={fixed ? 'md:pt-[77px]' : ''} />
      <header
        className={`${
          fixed ? fixedClass : ''
        } flex justify-center border-primary-100 bg-white md:border-b-[1px] md:py-4`}
      >
        <div className="flex w-full max-w-7xl flex-col justify-between md:flex-row md:items-center md:px-4">
          <div
            className="mb-9 flex w-full items-center justify-between border-b-[1px] p-4
         md:mb-0 md:w-auto md:border-0 md:p-0"
          >
            <Link href="/">
              <Image width={120} height={38} src="logo.svg" alt="" />
            </Link>
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
              <a href="#aplicacoes">Aplicações</a>
            </li>
            <li>
              <a href="#beneficios">Benefícios</a>
            </li>
            <li>
              <a href="#solucoes">Soluções</a>
            </li>
            <li>
              <Link href="/integracoes">Integrações</Link>
            </li>
          </ul>
          <ul
            className={`${
              open ? ' flex h-screen flex-col bg-white px-4' : 'hidden'
            } gap-3 md:flex md:items-center`}
          >
            <li>
              <Button className="w-full md:w-auto" color="light" href="/contato">
                Contato
              </Button>
            </li>
            <li>
              <Button className="w-full md:w-auto">Entrar</Button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
