'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { type Locale, routing } from '@/i18n/routing';

/**
 * Bouton FR / EN : un clic bascule vers l'autre locale, sur la même route
 * (site mono-page). Persistance par URL localisée (next-intl, préfixe `always`).
 */
const LanguageSwitcher = () => {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('Nav');

  const other = routing.locales.find(
    (candidate) => candidate !== locale,
  ) as Locale;

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: other })}
      aria-label={t('switchLanguage')}
      className="rounded-full border border-line-subtle bg-surface-elevated px-3 py-2 font-mono text-xs font-medium tracking-wide text-fg-primary transition-colors hover:border-brand-primary hover:text-brand-primary"
    >
      FR / EN
    </button>
  );
};

export { LanguageSwitcher };
