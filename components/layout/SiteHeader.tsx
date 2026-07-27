import Link from 'next/link';

const navLinks = [
  { href: '#parcours', label: 'Parcours' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
];

const SiteHeader = () => (
  <header className="sticky top-0 z-10 flex items-center justify-between border-b border-line-subtle bg-surface-page/80 px-6 py-4 backdrop-blur sm:px-12">
    <Link
      href="/"
      className="font-mono text-sm font-bold tracking-tight text-fg-primary"
    >
      P-A Monneau
    </Link>
    <nav className="flex items-center gap-8">
      <ul className="hidden items-center gap-8 text-sm text-fg-secondary sm:flex">
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
      <div className="flex items-center gap-1 font-mono text-xs tracking-wide text-fg-tertiary">
        <span className="text-fg-primary">FR</span>
        <span aria-hidden>/</span>
        <span>EN</span>
      </div>
    </nav>
  </header>
);

export { SiteHeader };
