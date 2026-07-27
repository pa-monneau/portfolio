'use client';

import { Badge } from '@recordair/ui-core';
import { UserIcon } from '@recordair/ui-core/icons';
import { motion } from 'motion/react';
import { getTechBadgeClassName, sortTechnologies } from '@/lib/techBadge';

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
      'Marketplace de réservation de studios à trois acteurs, conçue et développée de bout en bout en autonomie : parcours de réservation, back-office studio, messagerie temps réel et infrastructure GCP. Paiement Stripe intégré jusqu’à la capture, aux webhooks et aux commissions marketplace.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Stripe',
      'GCP',
    ],
  },
  {
    role: 'Développeur Full Stack — Founder',
    company: "Home'air (projet personnel)",
    period: "Juin 2026 – Aujourd'hui",
    context:
      'Marketplace de services à domicile pensée autour de deux parcours, client et prestataire, avec un compte à double rôle et des réservations directes ou par candidatures. Architecture Next.js et Supabase auto-hébergé sur GCP, avec une cible API Go pour faire évoluer progressivement le back-end.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Go',
      'Supabase',
      'PostgreSQL',
      'Stripe',
      'GCP',
    ],
  },
  {
    role: 'Team Lead Full Stack',
    company: 'Ankama, France',
    period: 'Octobre 2025 – Mai 2026',
    context:
      'Team lead de 12 personnes sur Ankama Launcher : pilotage technique des sprints, migrations inter-équipes et accompagnement des développeurs. Mise en place d’une API NestJS en clean architecture et d’environnements personnels déployables à la demande via GitLab CI.',
    stack: [
      'TypeScript',
      'Go',
      'Node.js',
      'NestJS',
      'Vue.js',
      'Quasar',
      'PostgreSQL',
      'GitLab CI',
    ],
  },
  {
    role: 'Développeur Full Stack',
    company: 'ABS French Preschool',
    period: 'Fév. – Juin 2024 · Déc. 2024 – Avr. 2025',
    context:
      'Réalisation hors design d’une plateforme CMS pour une chaîne d’écoles américaines, du cadrage fonctionnel à la supervision GCP. Front Next.js, back headless Strapi et API Go d’adaptation pour normaliser puis exposer les données de plusieurs sources externes.',
    stack: ['Next.js', 'React', 'TypeScript', 'Go', 'Strapi', 'GCP', 'Jest'],
  },
  {
    role: 'Développeur Full Stack',
    company: 'Waykonect (filiale TotalEnergies)',
    period: 'Mai 2024 – Novembre 2024',
    context:
      'Refonte de la solution au sein d’une équipe de 6, avec réalisation du back-office Next.js en autonomie et évolution du produit React. Reprise d’un projet sans documentation, réintégration à l’infrastructure AWS et création d’environnements de test déployables via pipeline.',
    stack: ['Next.js', 'React', 'TypeScript', 'Go', 'GraphQL', 'AWS', 'Jest'],
  },
  {
    role: 'Développeur Back-end / Front-end',
    company: 'Illicado',
    period: 'Juillet 2023 – Octobre 2023',
    context:
      'Conception de l’API Wallet NestJS couvrant le cycle de vie d’une carte cadeau dans une architecture microservices. Développement d’API CRUD hexagonales, refonte du back-office en Vue 3 / Nuxt et mise en place de la CI/CD GitLab.',
    stack: ['TypeScript', 'Node.js', 'NestJS', 'Vue 3', 'Nuxt', 'Jest'],
  },
  {
    role: 'Référent Front',
    company: 'Lyreco',
    period: 'Décembre 2022 – Juin 2023',
    context:
      'Référent front d’une équipe Scrum de 10 personnes sur le site e-commerce B2B : migration TypeScript, refactorisation du legacy et optimisation des performances. Mise en place de Jest, du linter et de Prettier, puis formation de trois développeurs aux bonnes pratiques TS/JS.',
    stack: ['TypeScript', 'Vue.js', 'NestJS', 'Jest', 'GitLab CI'],
  },
  {
    role: 'Développeur Full Stack',
    company: 'Client e-commerce',
    period: 'Juin 2022 – Août 2022',
    context:
      'Développement en autonomie de sites e-commerce avec Next.js en SSR/BFF et une architecture hexagonale documentée. Intégration de NextAuth, microservices et chaîne CI/CD GitLab avec provisioning Ansible.',
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'NextAuth'],
  },
  {
    role: 'Développeur NestJS',
    company: 'ADEO (Leroy Merlin, Brico Dépôt)',
    period: 'Novembre 2021 – Avril 2022',
    context:
      'Réalisation du POC ERPC au sein d’une équipe de 4 : refonte de services back-end en architecture hexagonale et développement de fonctionnalités NestJS. Mise en place de KafkaJS pour les échanges inter-microservices, avec documentation et tests automatisés.',
    stack: ['TypeScript', 'Node.js', 'NestJS', 'Vue.js', 'KafkaJS', 'MongoDB'],
  },
  {
    role: 'Développeur React',
    company: 'SNCF e-voyageur',
    period: 'Mars 2021 – Septembre 2021',
    context:
      'Intégration et maintenance du front React de la plateforme digitale voyageurs SNCF. Développement de fonctionnalités avec Redux, intégration de templates Drupal et rédaction de la documentation de refactorisation.',
    stack: ['React', 'Redux', 'TypeScript', 'JavaScript', 'Drupal'],
  },
  {
    role: 'Développeur Web & Mobile',
    company: 'Phi Développement',
    period: 'Novembre 2019 – Mars 2021',
    context:
      'Réalisation en autonomie de projets web et mobile pour une agence : microservices Express, dashboards d’administration et authentification Passport.js. Développement d’une application React Native avec géolocalisation, génération de PDF et paiement Stripe.',
    stack: [
      'React',
      'React Native',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Stripe',
    ],
  },
  {
    role: 'Développeur React',
    company: 'Clicar',
    period: 'Janvier 2018 – Novembre 2019',
    context:
      'Développement du site clicar.com au sein d’une équipe de deux développeurs et un designer : front React et API Express.js. Réalisation de l’authentification, du dashboard d’administration et du déploiement Docker, avec contribution à la formation et aux contenus de cours.',
    stack: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Docker',
    ],
  },
  {
    role: 'Développeur Back-end',
    company: 'Info Logi Santé (Qualineo)',
    period: 'Novembre 2017 – Janvier 2018',
    context:
      'Refonte et intégration du front d’une application métier pour le secteur de la santé. Correction de bugs, intégration UI et refactorisation progressive de code legacy en ASP.NET.',
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
    </motion.div>

    <div className="relative mx-auto flex w-fit flex-col border-l border-line-subtle pl-8 sm:pl-10">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.company}
          {...reveal(i < 4 ? i * 0.08 : 0)}
          className="relative flex flex-col items-start gap-2 pb-12 text-left last:pb-0"
        >
          <span
            aria-hidden
            className="absolute top-1.5 -left-[2.28rem] size-2.5 rounded-full bg-brand-primary sm:-left-[2.78rem]"
          />
          <div className="max-w-[40rem] xl:max-w-[60rem]">
            <div className="flex flex-col gap-1">
              <h3 className="[font-family:var(--portfolio-font-display)] text-xl font-semibold text-fg-primary">
                {exp.role}{' '}
                <span className="text-fg-secondary">— {exp.company}</span>
              </h3>
              <span className="font-mono text-[13px] text-fg-tertiary">
                {exp.period}
              </span>
            </div>
            <p className="mt-2 text-[15.5px] leading-relaxed text-fg-secondary">
              {exp.context}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {sortTechnologies(exp.stack).map((tech) => (
                <Badge
                  key={tech}
                  tone="neutral"
                  size="xs"
                  className={getTechBadgeClassName(tech)}
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
