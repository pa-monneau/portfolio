'use client';

import { Badge, Card, CardContent } from '@recordair/ui-core';
import { CheckIcon, WrenchIcon } from '@recordair/ui-core/icons';
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
  note: string;
};

const projects: Project[] = [
  {
    index: '01',
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
    index: '02',
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
    index: '03',
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
  <section id="projets" className="mx-auto max-w-4xl px-6 py-24 sm:px-12">
    <motion.div {...reveal()}>
      <p className="mb-4 font-mono text-xs tracking-[0.2em] text-brand-primary uppercase">
        Projets persos
      </p>
      <h2 className="max-w-xl text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">
        Des side projects qui tournent en prod
      </h2>
    </motion.div>

    <div className="mt-12 flex flex-col gap-6">
      {projects.map((project, i) => (
        <motion.div key={project.name} {...reveal(0.1 + i * 0.08)}>
          <Card variant="elevated">
            <CardContent className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <span className="font-mono text-sm text-fg-tertiary">
                {project.index}
              </span>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold text-fg-primary">
                    {project.name}
                  </h3>
                  <Badge
                    tone={project.status === 'live' ? 'success' : 'warning'}
                    icon={
                      project.status === 'live' ? (
                        <CheckIcon className="size-3.5" />
                      ) : (
                        <WrenchIcon className="size-3.5" />
                      )
                    }
                  >
                    {project.statusLabel}
                  </Badge>
                  <span className="text-xs text-fg-tertiary">
                    {project.statusSub}
                  </span>
                </div>

                <p className="mt-3 text-fg-secondary">{project.pitch}</p>

                <ul className="mt-3 flex flex-col gap-1 text-sm text-fg-secondary">
                  {project.facts.map((fact) => (
                    <li key={fact} className="flex gap-2">
                      <span aria-hidden className="text-brand-primary">
                        —
                      </span>
                      {fact}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} tone="neutral" className="font-mono">
                      {tech}
                    </Badge>
                  ))}
                  {project.stackPending?.map((tech) => (
                    <Badge
                      key={tech}
                      tone="neutral"
                      className="font-mono italic opacity-60"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="mt-4 text-sm text-fg-tertiary italic">
                  {project.note}
                </p>

                <p className="mt-3 font-mono text-xs tracking-[0.1em] text-fg-tertiary uppercase">
                  Lien à venir
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
);

export { Projets };
