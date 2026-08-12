import type { ReactNode } from 'react';
import './globals.css';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html lang="fr" className="h-full scroll-smooth antialiased">
    <body className="min-h-full flex flex-col bg-surface-page text-fg-primary">
      {children}
    </body>
  </html>
);

export default RootLayout;
