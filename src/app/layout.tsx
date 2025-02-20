import type { Metadata } from 'next';
import { Playfair, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/header/Header';
import Footer from '@/components/shared/footer/Footer';

const serifFont = Playfair({
  variable: '--font-playfair',
  subsets: ['cyrillic', 'latin'],
  weight: ['600', '900'],
});

const sansSerifFont = Montserrat({
  variable: '--font-montserrat',
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '900'],
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
      <body className={`body light-scheme ${serifFont.variable} ${sansSerifFont.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
