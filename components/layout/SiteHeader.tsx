import Link from 'next/link';

const navLinks = [
  { href: '#parcours', label: 'Parcours' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
];

const SiteHeader = () => (
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
      <button
        type="button"
        aria-label="Changer de langue"
        className="rounded-full border border-line-subtle bg-surface-elevated px-3 py-2 font-mono text-xs font-medium tracking-wide text-fg-primary transition-colors hover:border-brand-primary hover:text-brand-primary"
      >
        FR / EN
      </button>
    </nav>
  </header>
);

export { SiteHeader };
