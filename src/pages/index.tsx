import { Poppins } from 'next/font/google';
import ApplicationList from 'src/components/ApplicationList';
import BenefitList from 'src/components/BenefitList';
import Footer from 'src/components/Footer';
import FooterBanner from 'src/components/FooterBanner';
import Header from 'src/components/Header';
import Hero from 'src/components/Hero';
import Integration from 'src/components/Integration';
import Partners from 'src/components/Partners';
import SolutionsList from 'src/components/SolutionsList';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex h-[2400px] min-h-full flex-col ${poppins.className}`}>
      <Header />
      <Hero />
      <Partners />
      <ApplicationList />
      <BenefitList />
      <SolutionsList />
      <Integration />
      <FooterBanner />
      <Footer />
    </main>
  );
}
