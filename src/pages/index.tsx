import { Poppins } from 'next/font/google';
import Header from 'src/components/Header';
import Hero from 'src/components/Hero';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex h-[2400px] min-h-full flex-col ${poppins.className}`}>
      <Header />
      <Hero />
    </main>
  );
}
