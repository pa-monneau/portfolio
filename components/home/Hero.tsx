'use client';

import { Badge, LinkButton } from '@recordair/ui-core';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';

const stack = ['Next.js', 'React', 'React Native', 'PostgreSQL'];

// Intensité et facteurs de vitesse repris du design validé (outer -0.12, inner -0.22,
// intensité par défaut 0.5) : deux cercles qui dérivent à des vitesses différentes au
// scroll, sans les lignes verticales du design d'origine (retirées, non désirées).
const PARALLAX_INTENSITY = 0.5;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const outerY = useTransform(scrollY, (y) =>
    prefersReducedMotion ? 0 : y * -0.12 * PARALLAX_INTENSITY,
  );
  const innerY = useTransform(scrollY, (y) =>
    prefersReducedMotion ? 0 : y * -0.22 * PARALLAX_INTENSITY,
  );

  return (
    <section className="relative flex min-h-[calc(100vh-65px)] flex-col justify-center overflow-hidden px-6 py-24 sm:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-24 hidden sm:block"
      >
        <motion.div
          style={{ y: outerY }}
          className="size-[420px] rounded-full border border-brand-primary/20"
        />
        <motion.div
          style={{ y: innerY }}
          className="absolute top-24 right-24 size-[220px] rounded-full border border-brand-primary/40"
        />
      </div>

      <motion.div
        variants={prefersReducedMotion ? undefined : container}
        initial={prefersReducedMotion ? undefined : 'hidden'}
        animate={prefersReducedMotion ? undefined : 'show'}
        className="relative max-w-2xl"
      >
        <motion.p
          variants={item}
          className="mb-4 font-mono text-xs tracking-[0.2em] text-brand-primary uppercase"
        >
          Développeur freelance — Lead technique
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl font-bold tracking-tight text-fg-primary sm:text-6xl"
        >
          Pierre-Alexandre Monneau
        </motion.h1>

        <motion.p variants={item} className="mt-6 text-lg text-fg-secondary">
          Lead développeur freelance JS/TS, je conçois et je construis des
          produits du code au business.
        </motion.p>

        <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge key={tech} tone="neutral" className="font-mono">
              {tech}
            </Badge>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
          <LinkButton href="#projets" variant="primary">
            Voir les projets
          </LinkButton>
          <LinkButton href="#contact" variant="secondary">
            Me contacter
          </LinkButton>
        </motion.div>
      </motion.div>

      <motion.div
        variants={prefersReducedMotion ? undefined : item}
        initial={prefersReducedMotion ? undefined : 'hidden'}
        animate={prefersReducedMotion ? undefined : 'show'}
        className="absolute bottom-10 left-6 flex items-center gap-3 sm:left-12"
      >
        <span aria-hidden className="h-8 w-px bg-line" />
        <span className="font-mono text-xs tracking-[0.2em] text-fg-tertiary uppercase">
          Défiler
        </span>
      </motion.div>
    </section>
  );
};

export { Hero };
