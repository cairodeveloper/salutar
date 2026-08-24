import type { Metadata } from 'next';
import './globals.css';
import salutarLogo from './logo-sem-fundo.png';

export const metadata: Metadata = {
  title: 'Salutar — Marketing que movimenta',
  description: 'Agência de marketing, criatividade e crescimento digital.',
  icons: { icon: salutarLogo.src },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
