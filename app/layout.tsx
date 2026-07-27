import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pierre-Alexandre Monneau — Portfolio',
  description: 'Développeur freelance JS/TS — parcours et projets.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-surface-page text-fg-primary">
        {children}
      </body>
    </html>
  );
}
