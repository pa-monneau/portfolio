import { setRequestLocale } from 'next-intl/server';
import { Contact } from '@/components/home/Contact';
import { Hero } from '@/components/home/Hero';
import { Parcours } from '@/components/home/Parcours';
import { Projets } from '@/components/home/Projets';
import { SiteHeader } from '@/components/layout/SiteHeader';

const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <div id="top" />
      <Hero />
      <Projets />
      <Parcours />
      <Contact />
    </>
  );
};

export default Home;
