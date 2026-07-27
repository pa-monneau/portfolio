'use client';

import { Badge } from '@recordair/ui-core';
import {
  ArrowRightIcon,
  CheckIcon,
  WrenchIcon,
} from '@recordair/ui-core/icons';
import { motion } from 'motion/react';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

type Project = {
  index: string;
  name: string;
  status: 'live' | 'progress';
  statusLabel: string;
  statusSub: string;
  pitch: string;
  facts: string[];
  stack: string[];
  stackPending?: string[];
  href?: string;
  note: string;
};

const projects: Project[] = [
  {
    index: '01',
    name: "Design'air",
    status: 'live',
    statusLabel: 'Publié',
    statusSub: 'lib UI partagée',
    pitch:
      "Design system React partagé entre Record'air, Home'air et Bi'air, conçu pour accélérer chaque produit sans diluer leur identité.",
    facts: [
      '3 packages npm publiés et versionnés',
      'Storybook déployé avec documentation générée depuis les stories',
    ],
    stack: ['React', 'TypeScript', 'Storybook', 'npm'],
    href: 'https://pa-monneau.github.io/designair/?path=/docs/introduction-overview--docs',
    note: 'Socle UI commun des projets de l’écosystème Air.',
  },
  {
    index: '02',
    name: "Record'air",
    status: 'live',
    statusLabel: 'En production',
    statusSub: "encaisse réellement de l'argent",
    pitch:
      'Marketplace de réservation de studios de musique, façon Airbnb — trois profils utilisateurs : artiste, studio, professionnel. Paiement Stripe en deux temps (autorisation puis capture).',
    facts: [
      '3 profils : artiste, studio, professionnel',
      'Paiement Stripe — autorisation → capture',
    ],
    stack: ['Next.js 16', 'Supabase self-hosted', 'GCP'],
    note: "Projet le plus abouti — de l'idée au produit qui tourne en prod.",
  },
  {
    index: '03',
    name: "Home'air",
    status: 'progress',
    statusLabel: 'En finition',
    statusSub: 'avant une prod stabilisée',
    pitch:
      "Marketplace française de services à domicile (jardinage, babysitting, ménage…), avec un compte unique permettant d'être client ou prestataire.",
    facts: [
      'Compte unique client / prestataire',
      "Paiement verrouillé à l'acceptation du devis + réputation",
    ],
    stack: ['Cloud Run'],
    stackPending: ['Stack à préciser'],
    note: 'En ligne, en finition avant une prod stabilisée.',
  },
  {
    index: '04',
    name: "Bi'air",
    status: 'live',
    statusLabel: 'En ligne',
    statusSub: 'depuis le 27 juillet 2026',
    pitch:
      'Catalogue de jeux connus à deux, jouables en pass-and-play sur le même appareil ou à distance en temps réel.',
    facts: [
      '4 jeux : pioche de cartes, pendu, dés, mime',
      'Local (pass-and-play) & distant temps réel (Supabase Realtime)',
    ],
    stack: ['Supabase Realtime'],
    stackPending: ['Stack à préciser'],
    note: 'Architecture pensée dès le départ pour les modes local et distant.',
  },
];

const Projets = () => (
  <section
    id="projets"
    className="w-full bg-surface-elevated [padding:6rem_var(--portfolio-page-padding)_var(--portfolio-section-space)]"
  >
    <div className="mx-auto max-w-[var(--portfolio-content-width)]">
      <motion.div {...reveal()} className="mb-24">
        <p className="mb-4 font-mono text-xs tracking-[0.2em] text-brand-primary uppercase">
          Projets persos
        </p>
        <h2 className="max-w-[45rem] [font-family:var(--portfolio-font-display)] text-[clamp(1.75rem,3.6vw,2.75rem)] leading-tight font-semibold tracking-tight text-fg-primary">
          Des side projects qui tournent en prod
        </h2>
      </motion.div>

      <div>
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            {...reveal(0.1 + i * 0.08)}
            className="grid grid-cols-1 items-center gap-8 border-t border-line-subtle py-16 lg:grid-cols-[5fr_7fr] lg:gap-16"
          >
            <div className="aspect-4/3 overflow-hidden rounded-[var(--radius-lg)] border border-line-subtle bg-surface-page transition-transform duration-500 hover:-translate-y-1">
              <div aria-hidden className="size-full" />
            </div>

            <div>
              <div className="mb-3 flex items-baseline gap-4">
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
                <span>{project.statusLabel}</span>
                <span className="text-fg-tertiary">— {project.statusSub}</span>
              </div>

              <p className="mb-6 max-w-[35rem] text-[16.5px] leading-relaxed text-fg-secondary">
                {project.pitch}
              </p>

              <ul className="mb-6 flex flex-col gap-2 text-[14.5px] text-fg-secondary">
                {project.facts.map((fact) => (
                  <li key={fact} className="flex gap-3">
                    <CheckIcon
                      aria-hidden
                      className="mt-0.5 size-3.5 shrink-0 text-brand-primary"
                    />
                    {fact}
                  </li>
                ))}
              </ul>

              <div className="mb-8 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} tone="neutral" className="font-mono">
                    {tech}
                  </Badge>
                ))}
                {project.stackPending?.map((tech) => (
                  <Badge
                    key={tech}
                    tone="neutral"
                    className="border border-dashed border-line font-mono"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b border-dashed border-line pb-0.5 text-sm font-semibold text-fg-primary transition-colors hover:border-brand-primary hover:text-brand-primary"
                >
                  Voir le projet <ArrowRightIcon className="size-3.5" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 border-b border-dashed border-line pb-0.5 text-sm font-semibold text-fg-primary">
                  Voir le projet <ArrowRightIcon className="size-3.5" />
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export { Projets };
