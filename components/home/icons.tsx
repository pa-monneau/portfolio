import type { SVGProps } from 'react';

// LinkedIn/GitHub n'existent pas dans le sous-ensemble d'icônes Design'air
// (packages/ui-core/src/icons, re-export lucide-react curé) — logos de marque
// dessinés en local, au même gabarit que les icônes lucide (viewBox 24, stroke).

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...props}
  >
    <title>LinkedIn</title>
    <path d="M6.94 8.5H3.56V21H6.94V8.5z" />
    <path d="M5.25 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
    <path d="M21 21v-7.15c0-3.4-1.8-4.98-4.2-4.98-1.94 0-2.8 1.07-3.28 1.82V9.15h-3.4c.04.9 0 11.85 0 11.85h3.4v-6.62c0-.35.03-.71.13-.96.28-.71.93-1.44 2.01-1.44 1.42 0 2 1.08 2 2.67V21H21z" />
  </svg>
);

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...props}
  >
    <title>GitHub</title>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

export { GithubIcon, LinkedinIcon };
