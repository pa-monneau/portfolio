'use client';

import { Badge } from '@recordair/ui-core';
import { UserIcon } from '@recordair/ui-core/icons';
import { motion } from 'motion/react';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
});

type Experience = {
  role: string;
  company: string;
  period: string;
  context: string;
  stack: string[];
};

const experiences: Experience[] = [
  {
    role: 'Développeur Full Stack — Founder',
    company: "Record'air (projet personnel)",
    period: "Avril 2026 – Aujourd'hui",
    context:
      'Marketplace de réservation de studios de musique façon Airbnb — conception et développement de bout en bout, en autonomie complète.',
    stack: ['Next.js', 'Supabase', 'Stripe', 'GCP'],
  },
  {
    role: 'Développeur Full Stack — Founder',
    company: "Home'air (projet personnel)",
    period: "Juin 2026 – Aujourd'hui",
    context:
      'Marketplace française de services à domicile, compte unique client/prestataire, migration progressive du back-end vers Go.',
    stack: ['Next.js', 'Go', 'Supabase', 'GCP'],
  },
  {
    role: 'Team Lead Full Stack',
    company: 'Ankama, France',
    period: 'Octobre 2025 – Mai 2026',
    context:
      "Team lead d'une équipe de 12 personnes sur Ankama Launcher : pilotage technique, outils internes, diffusion de bonnes pratiques.",
    stack: ['NestJS', 'Vue.js', 'Quasar', 'GitLab CI'],
  },
  {
    role: 'Développeur Full Stack',
    company: 'ABS French Preschool',
    period: 'Fév. – Juin 2024 · Déc. 2024 – Avr. 2025',
    context:
      "Plateforme CMS sur mesure pour une chaîne d'écoles américaines, du cadrage à la supervision GCP, en autonomie complète.",
    stack: ['Next.js', 'Go', 'Strapi', 'GCP'],
  },
  {
    role: 'Développeur Full Stack',
    company: 'Waykonect (filiale TotalEnergies)',
    period: 'Mai 2024 – Novembre 2024',
    context:
      "Refonte de la solution Waykonect, back-office réalisé en autonomie au sein d'une équipe de 6.",
    stack: ['Next.js', 'React', 'GraphQL', 'AWS'],
  },
  {
    role: 'Développeur Back-end / Front-end',
    company: 'Illicado',
    period: 'Juillet 2023 – Octobre 2023',
    context:
      "API Wallet en NestJS (cycle de vie d'une carte cadeau) et refonte du back-office en Vue 3 / Nuxt.",
    stack: ['NestJS', 'Vue 3', 'Microservices'],
  },
  {
    role: 'Référent Front',
    company: 'Lyreco',
    period: 'Décembre 2022 – Juin 2023',
    context:
      "Référent front sur un site e-commerce B2B : migration TypeScript et formation de l'équipe.",
    stack: ['Vue.js', 'TypeScript', 'Jest'],
  },
  {
    role: 'Développeur Full Stack',
    company: 'Client e-commerce',
    period: 'Juin 2022 – Août 2022',
    context:
      'Sites e-commerce en autonomie complète, Next.js en SSR/BFF et architecture hexagonale.',
    stack: ['Next.js', 'React', 'NextAuth'],
  },
  {
    role: 'Développeur NestJS',
    company: 'ADEO (Leroy Merlin, Brico Dépôt)',
    period: 'Novembre 2021 – Avril 2022',
    context:
      'POC du projet ERPC : refonte back-end hexagonale et queues inter-microservices KafkaJS.',
    stack: ['NestJS', 'KafkaJS', 'MongoDB'],
  },
  {
    role: 'Développeur React',
    company: 'SNCF e-voyageur',
    period: 'Mars 2021 – Septembre 2021',
    context:
      'Intégration et maintenance du front React de la plateforme digitale voyageurs SNCF.',
    stack: ['React', 'Redux', 'Drupal'],
  },
  {
    role: 'Développeur Web & Mobile',
    company: 'Phi Développement',
    period: 'Novembre 2019 – Mars 2021',
    context:
      'Projets en autonomie pour une agence, dont une app React Native avec paiement Stripe intégré.',
    stack: ['React Native', 'Express.js', 'Stripe'],
  },
  {
    role: 'Développeur React',
    company: 'Clicar',
    period: 'Janvier 2018 – Novembre 2019',
    context:
      'Développement du site clicar.com (front React, API Express.js) en petite équipe.',
    stack: ['React', 'Express.js', 'Docker'],
  },
  {
    role: 'Développeur Back-end',
    company: 'Info Logi Santé (Qualineo)',
    period: 'Novembre 2017 – Janvier 2018',
    context:
      "Refonte front-end d'une application métier pour le secteur de la santé.",
    stack: ['JavaScript', 'ASP.NET'],
  },
];

const Parcours = () => (
  <section
    id="parcours"
    className="w-full [padding:var(--portfolio-section-space)_var(--portfolio-page-padding)]"
  >
    <motion.div {...reveal()} className="text-center">
      <p className="mb-4 font-mono text-xs tracking-[0.2em] text-brand-primary uppercase">
        Parcours
      </p>
      <h2 className="mx-auto max-w-[45rem] [font-family:var(--portfolio-font-display)] text-[clamp(1.75rem,3.6vw,2.75rem)] leading-tight font-semibold tracking-tight text-fg-primary">
        De la mission au produit qui tourne
      </h2>
    </motion.div>

    <motion.div
      {...reveal(0.1)}
      className="mt-8 mb-24 flex flex-wrap items-center justify-center gap-6 text-center"
    >
      <p className="max-w-[37.5rem] xl:max-w-[50rem] text-[clamp(1rem,1.6vw,1.1875rem)] leading-relaxed text-fg-secondary">
        7 ans d&apos;expérience full stack et tech lead, développeur web et
        mobile freelance basé à Lille.
      </p>
      <Badge tone="brand" size="md" icon={<UserIcon className="size-3.5" />}>
        Team lead — jusqu&apos;à 12 personnes
      </Badge>
    </motion.div>

    <div className="relative mx-auto flex w-fit flex-col border-l border-line-subtle pl-8 sm:pl-10">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.company}
          {...reveal(i < 4 ? i * 0.08 : 0)}
          className="relative flex flex-col items-center gap-2 pb-12 text-center last:pb-0"
        >
          <span
            aria-hidden
            className="absolute top-1.5 -left-[2.28rem] size-2.5 rounded-full bg-brand-primary sm:-left-[2.78rem]"
          />
          <div className="max-w-[40rem] xl:max-w-[60rem]">
            <div className="flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1">
              <span className="font-mono text-[13px] text-fg-tertiary">
                {exp.period}
              </span>
              <h3 className="[font-family:var(--portfolio-font-display)] text-xl font-semibold text-fg-primary">
                {exp.role}
              </h3>
              <span className="text-sm text-fg-secondary">— {exp.company}</span>
            </div>
            <p className="mt-2 text-[15.5px] leading-relaxed text-fg-secondary">
              {exp.context}
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-1.5">
              {exp.stack.map((tech) => (
                <Badge
                  key={tech}
                  tone="neutral"
                  size="xs"
                  className="font-mono"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export { Parcours };
