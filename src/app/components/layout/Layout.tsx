
import type { Metadata } from 'next';
import React from 'react';
import Header from './Header';
import { Footer } from 'react-day-picker';
import FixedFooter from './FixedFooter';

export const metadata: Metadata = {
  title: 'Meu App Next.js',
  description: 'Um aplicativo Next.js moderno',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="pt-BR">
      <body>
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-grow">
            {children} {/* Aqui é onde o conteúdo da página será renderizado */}
          </main>
          <Footer />
          <FixedFooter />
        </div>
      </body>
    </html>
  );
}