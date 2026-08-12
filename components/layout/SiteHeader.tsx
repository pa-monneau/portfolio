'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';

const SiteHeader = () => {
  const t = useTranslations('Nav');

  const navLinks = [
    { href: '#parcours', label: t('parcours') },
    { href: '#projets', label: t('projets') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-line-subtle bg-surface-page/80 [padding:1.5rem_var(--portfolio-page-padding)] backdrop-blur-sm">
      <Link
        href="#top"
        className="[font-family:var(--portfolio-font-display)] text-[17px] font-semibold tracking-tight text-fg-primary"
      >
        P-A Monneau
      </Link>
      <nav className="flex items-center gap-5 sm:gap-10">
        <ul className="hidden items-center gap-8 text-sm font-medium text-fg-secondary sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-fg-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export { SiteHeader };
