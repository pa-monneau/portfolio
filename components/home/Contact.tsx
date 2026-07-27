'use client';

import { LinkButton } from '@recordair/ui-core';
import { MailIcon } from '@recordair/ui-core/icons';
import { motion } from 'motion/react';
import { GithubIcon, LinkedinIcon } from './icons';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const contactLinks = [
  {
    label: 'Email',
    value: 'pierrealexandre.monneau@gmail.com',
    href: 'mailto:pierrealexandre.monneau@gmail.com',
    icon: MailIcon,
  },
  {
    label: 'LinkedIn',
    value: 'pierrealexandre-monneau',
    href: 'https://linkedin.com/in/pierrealexandre-monneau',
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: 'pa-monneau',
    href: 'https://github.com/pa-monneau',
    icon: GithubIcon,
  },
];

const Contact = () => (
  <section
    id="contact"
    className="w-full [padding:var(--portfolio-section-space)_var(--portfolio-page-padding)]"
  >
    <motion.div {...reveal()} className="text-center">
      <p className="mb-4 font-mono text-xs tracking-[0.2em] text-brand-primary uppercase">
        Contact
      </p>
      <h2 className="mx-auto max-w-[42.5rem] [font-family:var(--portfolio-font-display)] text-[clamp(1.75rem,4.2vw,3.25rem)] leading-tight font-semibold tracking-tight text-fg-primary">
        Discutons de votre prochain projet
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-fg-secondary">
        Disponible pour des missions freelance et des postes de lead technique.
      </p>
    </motion.div>

    <motion.div
      {...reveal(0.1)}
      className="mt-16 flex flex-wrap justify-center gap-6"
    >
      {contactLinks.map(({ label, value, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="flex min-w-[12.5rem] items-center gap-3 rounded-[var(--radius-md)] border border-line px-6 py-5 transition-all hover:-translate-y-0.5 hover:border-brand-primary"
        >
          <Icon className="size-5 text-brand-primary" />
          <div>
            <p className="text-sm font-medium text-fg-primary">{label}</p>
            <p className="text-xs text-fg-tertiary">{value}</p>
          </div>
        </a>
      ))}
    </motion.div>

    <motion.div {...reveal(0.18)} className="mt-8 text-center">
      <LinkButton
        href="/CV-Pierre-Alexandre-Monneau.pdf"
        variant="secondary"
        download
      >
        Télécharger le CV
      </LinkButton>
    </motion.div>

    <div className="mt-16 flex flex-wrap items-center justify-center gap-3 border-t border-line-subtle pt-8 font-mono text-xs text-fg-tertiary">
      <p>© {new Date().getFullYear()} Pierre-Alexandre Monneau</p>
      <a href="#top" className="transition-colors hover:text-fg-primary">
        Haut de page
      </a>
    </div>
  </section>
);

export { Contact };
