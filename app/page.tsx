import { Contact } from '@/components/home/Contact';
import { Hero } from '@/components/home/Hero';
import { Parcours } from '@/components/home/Parcours';
import { Projets } from '@/components/home/Projets';
import { SiteHeader } from '@/components/layout/SiteHeader';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div id="top" />
      <Hero />
      <Parcours />
      <Projets />
      <Contact />
    </>
  );
}
