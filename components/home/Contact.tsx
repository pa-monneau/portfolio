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
  <section id="contact" className="mx-auto max-w-4xl px-6 py-24 sm:px-12">
    <motion.div {...reveal()}>
      <p className="mb-4 font-mono text-xs tracking-[0.2em] text-brand-primary uppercase">
        Contact
      </p>
      <h2 className="max-w-xl text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">
        Discutons de votre prochain projet
      </h2>
      <p className="mt-4 max-w-xl text-fg-secondary">
        Disponible pour des missions freelance et des postes de lead technique.
      </p>
    </motion.div>

    <motion.div {...reveal(0.1)} className="mt-10 flex flex-wrap gap-4">
      {contactLinks.map(({ label, value, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-3 rounded-lg border border-line px-4 py-3 transition-colors hover:border-brand-primary/40 hover:bg-line-subtle"
        >
          <Icon className="size-5 text-brand-primary" />
          <div>
            <p className="text-sm font-medium text-fg-primary">{label}</p>
            <p className="text-xs text-fg-tertiary">{value}</p>
          </div>
        </a>
      ))}
    </motion.div>

    <motion.div {...reveal(0.18)} className="mt-8">
      <LinkButton
        href="/CV-Pierre-Alexandre-Monneau.pdf"
        variant="secondary"
        download
      >
        Télécharger le CV
      </LinkButton>
    </motion.div>

    <div className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-line-subtle pt-6 text-sm text-fg-tertiary">
      <p>© {new Date().getFullYear()} Pierre-Alexandre Monneau</p>
      <a href="#top" className="transition-colors hover:text-fg-primary">
        Haut de page
      </a>
    </div>
  </section>
);

export { Contact };
