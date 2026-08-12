import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/**
 * Navigation localisée : à utiliser à la place de `next/link` et
 * `next/navigation` pour tout ce qui doit conserver/changer la locale
 * (préfixe la locale courante dans l'URL générée).
 */
export const {
  Link,
  redirect,
  permanentRedirect,
  usePathname,
  useRouter,
  getPathname,
} = createNavigation(routing);
