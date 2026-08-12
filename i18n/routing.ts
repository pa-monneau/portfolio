import { defineRouting } from 'next-intl/routing';

/**
 * Routing i18n. Site en export statique (`output: "export"`) : pas de proxy /
 * middleware possible, donc pas de rewrite invisible pour une locale par
 * défaut sans préfixe. Les deux locales sont préfixées (`/fr`, `/en`),
 * pré-générées via `generateStaticParams`. La racine `/` redirige vers
 * `/fr` (`app/page.tsx`).
 */
export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];
