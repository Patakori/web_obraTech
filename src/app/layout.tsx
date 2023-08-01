import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--inter-font',
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
});

export default function RootLayout({
  children
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
