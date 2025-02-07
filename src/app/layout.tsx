import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      <body className={`light-scheme ${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
