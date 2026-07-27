'use client';

import { Badge, LinkButton } from '@recordair/ui-core';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { getTechBadgeClassName, sortTechnologies } from '@/lib/techBadge';

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
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden [padding:calc(6rem+4rem)_var(--portfolio-page-padding)_6rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden opacity-60 sm:block"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, var(--color-line-subtle) 0, var(--color-line-subtle) 1px, transparent 1px, transparent clamp(5rem, 10vw, 10rem))',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[8%] -right-10 hidden sm:block"
      >
        <motion.div
          style={{ y: outerY }}
          className="size-[clamp(17.5rem,32vw,32.5rem)] rounded-full border-2 border-brand-primary/15"
        />
        <motion.div
          style={{ y: innerY }}
          className="absolute top-[clamp(3.5rem,8vw,7.5rem)] right-[clamp(2.5rem,4vw,8.75rem)] size-[clamp(8.75rem,16vw,15rem)] rounded-full border-2 border-brand-primary/40"
        />
      </div>

      <motion.div
        variants={prefersReducedMotion ? undefined : container}
        initial={prefersReducedMotion ? undefined : 'hidden'}
        animate={prefersReducedMotion ? undefined : 'show'}
        className="relative max-w-[70rem]"
      >
        <motion.p
          variants={item}
          className="mb-6 font-mono text-[13px] tracking-[0.08em] text-brand-primary uppercase"
        >
          Développeur freelance — Lead technique
        </motion.p>

        <motion.h1
          variants={item}
          className="[font-family:var(--portfolio-font-display)] text-[clamp(2.5rem,6.4vw,6rem)] leading-[0.98] font-semibold tracking-[-0.02em] text-fg-primary"
        >
          Pierre-Alexandre
          <br />
          Monneau
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-[40rem] text-[clamp(1.125rem,2vw,1.5rem)] leading-relaxed text-fg-secondary"
        >
          Lead développeur freelance JS/TS, je conçois et je construis des
          produits du code au business.
        </motion.p>

        <motion.div variants={item} className="mt-12 flex flex-wrap gap-3">
          {sortTechnologies(stack).map((tech) => (
            <Badge
              key={tech}
              tone="neutral"
              className={getTechBadgeClassName(tech)}
            >
              {tech}
            </Badge>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-16 flex flex-wrap gap-4">
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
        className="absolute bottom-12 left-[var(--portfolio-page-padding)] flex items-center gap-3"
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
