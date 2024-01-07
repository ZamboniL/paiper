import { Poppins } from 'next/font/google';
import ApplicationList from 'src/components/ApplicationList';
import BenefitList from 'src/components/BenefitList';
import Header from 'src/components/Header';
import Hero from 'src/components/Hero';
import Partners from 'src/components/Partners';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex h-[2400px] min-h-full flex-col ${poppins.className}`}>
      <Header />
      <Hero />
      <Partners />
      <ApplicationList />
      <BenefitList />
    </main>
  );
}
