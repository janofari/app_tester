import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Obispado App',
  description: 'Gestión de patrimonio arquitectónico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
