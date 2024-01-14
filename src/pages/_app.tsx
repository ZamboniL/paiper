import { Poppins } from 'next/font/google';
import type { AppProps } from 'next/app';
import Header from 'components/Header';
import Footer from 'components/Footer';
import 'styles/globals.css';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className={`min-h-full ${poppins.className}`}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
