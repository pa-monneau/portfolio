'use client';

import { Badge } from '@recordair/ui-core';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { getTechBadgeClassName, sortTechnologies } from '@/lib/techBadge';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
});

type ExperienceMeta = {
  id: string;
  stack: string[];
};

const experiences: ExperienceMeta[] = [
  {
    id: 'recordair',
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
    id: 'homeair',
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
    id: 'ankama',
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
    id: 'absPreschool',
    stack: ['Next.js', 'React', 'TypeScript', 'Go', 'Strapi', 'GCP', 'Jest'],
  },
  {
    id: 'waykonect',
    stack: ['Next.js', 'React', 'TypeScript', 'Go', 'GraphQL', 'AWS', 'Jest'],
  },
  {
    id: 'illicado',
    stack: ['TypeScript', 'Node.js', 'NestJS', 'Vue 3', 'Nuxt', 'Jest'],
  },
  {
    id: 'lyreco',
    stack: ['TypeScript', 'Vue.js', 'NestJS', 'Jest', 'GitLab CI'],
  },
  {
    id: 'ecommerceClient',
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'NextAuth'],
  },
  {
    id: 'adeo',
    stack: ['TypeScript', 'Node.js', 'NestJS', 'Vue.js', 'KafkaJS', 'MongoDB'],
  },
  {
    id: 'sncf',
    stack: ['React', 'Redux', 'TypeScript', 'JavaScript', 'Drupal'],
  },
  {
    id: 'phi',
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
    id: 'clicar',
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
    id: 'infoLogiSante',
    stack: ['JavaScript', 'ASP.NET'],
  },
];

const Parcours = () => {
  const t = useTranslations('Parcours');

  return (
    <section
      id="parcours"
      className="w-full [padding:var(--portfolio-section-space)_var(--portfolio-page-padding)]"
    >
      <motion.div {...reveal()} className="text-center">
        <p className="mb-4 font-mono text-xs tracking-[0.2em] text-brand-primary uppercase">
          {t('eyebrow')}
        </p>
        <h2 className="mx-auto max-w-[45rem] [font-family:var(--portfolio-font-display)] text-[clamp(1.75rem,3.6vw,2.75rem)] leading-tight font-semibold tracking-tight text-fg-primary">
          {t('title')}
        </h2>
      </motion.div>

      <motion.div
        {...reveal(0.1)}
        className="mt-8 mb-24 flex flex-wrap items-center justify-center gap-6 text-center"
      >
        <p className="max-w-[37.5rem] xl:max-w-[50rem] text-[clamp(1rem,1.6vw,1.1875rem)] leading-relaxed text-fg-secondary">
          {t('intro')}
        </p>
      </motion.div>

      <div className="relative mx-auto flex w-fit flex-col border-l border-line-subtle pl-8 sm:pl-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
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
                  {t(`experiences.${exp.id}.role`)}{' '}
                  <span className="text-fg-secondary">
                    — {t(`experiences.${exp.id}.company`)}
                  </span>
                </h3>
                <span className="font-mono text-[13px] text-fg-tertiary">
                  {t(`experiences.${exp.id}.period`)}
                </span>
              </div>
              <p className="mt-2 text-[15.5px] leading-relaxed text-fg-secondary">
                {t(`experiences.${exp.id}.context`)}
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
};

export { Parcours };
