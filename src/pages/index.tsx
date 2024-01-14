import FooterBanner from 'components/FooterBanner';
import ApplicationList from '@/home/components/ApplicationList';
import BenefitList from '@/home/components/BenefitList';
import Hero from '@/home/components/Hero';
import Integration from '@/home/components/Integration';
import Partners from '@/home/components/Partners';
import SolutionsList from '@/home/components/SolutionsList';

export default function HomePage() {
  return (
    <main className={`flex min-h-full flex-col`}>
      <Hero />
      <Partners />
      <ApplicationList />
      <BenefitList />
      <SolutionsList />
      <Integration />
      <FooterBanner />
    </main>
  );
}
