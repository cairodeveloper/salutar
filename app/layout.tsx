import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Salutar — Marketing que movimenta',
  description: 'Agência de marketing, criatividade e crescimento digital.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
