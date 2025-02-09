import type { Metadata } from 'next';
import { Playfair, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/header/Header';

const serifFont = Playfair({
  variable: '--font-playfair',
  subsets: ['cyrillic', 'latin'],
  weight: ['700', '900'],
});

const sansSerifFont = Montserrat({
  variable: '--font-montserrat',
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Сборы по фигурному катанию',
  description: 'Приглашаем в Санкт-Петербург на сборы по фигурному катанию на коньках',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`light-scheme ${serifFont.variable} ${sansSerifFont.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
