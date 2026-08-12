'use client';

import { Badge } from '@recordair/ui-core';
import {
  ArrowRightIcon,
  CheckIcon,
  WrenchIcon,
} from '@recordair/ui-core/icons';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { publicAssetPath } from '@/lib/publicAssetPath';
import { getTechBadgeClassName, sortTechnologies } from '@/lib/techBadge';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

type ProjectMeta = {
  id: string;
  index: string;
  name: string;
  status: 'live' | 'progress';
  stack: string[];
  image: string;
  href: string;
};

const projects: ProjectMeta[] = [
  {
    id: 'designair',
    index: '01',
    name: "Design'air",
    status: 'live',
    stack: ['React', 'TypeScript', 'Vite', 'Storybook', 'Tailwind CSS', 'npm'],
    image: '/images/projects/designair.png',
    href: 'https://pa-monneau.github.io/designair/?path=/docs/introduction-overview--docs',
  },
  {
    id: 'recordair',
    index: '02',
    name: "Record'air",
    status: 'live',
    stack: [
      'Next.js 16',
      'React',
      'TypeScript',
      'NestJS',
      'Supabase self-hosted',
      'PostgreSQL',
      'Stripe',
      'GCP',
    ],
    image: '/images/projects/recordair.png',
    href: 'https://recordair.com',
  },
  {
    id: 'homeair',
    index: '03',
    name: "Home'air",
    status: 'progress',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'Stripe',
      'GCP',
      'Cloud Run',
    ],
    image: '/images/projects/homeair.png',
    href: 'https://homeair-577545104657.europe-west9.run.app/',
  },
  {
    id: 'biair',
    index: '04',
    name: "Bi'air",
    status: 'live',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'Realtime',
      'GCP',
      'Cloud Run',
      'Vitest',
    ],
    image: '/images/projects/biair.png',
    href: 'https://biair-538206392035.europe-west9.run.app/',
  },
];

const Projets = () => {
  const t = useTranslations('Projets');

  return (
    <section
      id="projets"
      className="w-full bg-surface-elevated [padding:6rem_var(--portfolio-page-padding)_var(--portfolio-section-space)]"
    >
      <div className="w-full">
        <motion.div {...reveal()} className="mb-24 text-center">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-brand-primary uppercase">
            {t('eyebrow')}
          </p>
          <h2 className="mx-auto max-w-[45rem] [font-family:var(--portfolio-font-display)] text-[clamp(1.75rem,3.6vw,2.75rem)] leading-tight font-semibold tracking-tight text-fg-primary">
            {t('title')}
          </h2>
        </motion.div>

        <div>
          {projects.map((project, i) => {
            const facts = t.raw(`items.${project.id}.facts`) as string[];

            return (
              <motion.article
                key={project.id}
                {...reveal(0.1 + i * 0.08)}
                className="grid grid-cols-1 items-center gap-8 border-t border-line-subtle py-16 lg:grid-cols-[5fr_7fr] lg:gap-16"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('openLabel', { name: project.name })}
                  className="relative aspect-4/3 overflow-hidden rounded-[var(--radius-lg)] border border-line-subtle bg-surface-page transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
                >
                  <Image
                    src={publicAssetPath(project.image)}
                    alt={t('previewAlt', { name: project.name })}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover object-top"
                  />
                </a>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 flex items-baseline justify-center gap-4">
                    <span className="font-mono text-[13px] text-fg-tertiary">
                      {project.index}
                    </span>
                    <h3 className="[font-family:var(--portfolio-font-display)] text-[clamp(1.5rem,2.6vw,2rem)] font-semibold tracking-tight text-fg-primary">
                      {project.name}
                    </h3>
                  </div>
                  <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-1 font-mono text-[12.5px] text-brand-secondary">
                    {project.status === 'live' ? (
                      <CheckIcon className="size-3.5" />
                    ) : (
                      <WrenchIcon className="size-3.5" />
                    )}
                    <span>{t(`items.${project.id}.statusLabel`)}</span>
                    <span className="text-fg-tertiary">
                      — {t(`items.${project.id}.statusSub`)}
                    </span>
                  </div>

                  <p className="mb-6 max-w-[35rem] text-[16.5px] leading-relaxed text-fg-secondary">
                    {t(`items.${project.id}.pitch`)}
                  </p>

                  <ul className="mb-6 flex flex-col items-center gap-2 text-[14.5px] text-fg-secondary">
                    {facts.map((fact) => (
                      <li key={fact} className="flex justify-center gap-3">
                        <CheckIcon
                          aria-hidden
                          className="mt-0.5 size-3.5 shrink-0 text-brand-primary"
                        />
                        {fact}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-8 flex flex-wrap justify-center gap-2">
                    {sortTechnologies(project.stack).map((tech) => (
                      <Badge
                        key={tech}
                        tone="neutral"
                        className={getTechBadgeClassName(tech)}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-b border-dashed border-line pb-0.5 text-sm font-semibold text-fg-primary transition-colors hover:border-brand-primary hover:text-brand-primary"
                  >
                    {t('viewProject')} <ArrowRightIcon className="size-3.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Projets };
