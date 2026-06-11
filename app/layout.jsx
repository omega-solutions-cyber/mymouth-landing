import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'MyMouth — Suprasi savo gijimą kiekvieną dieną',
  description:
    'Aiškūs nurodymai, mažiau klaidų, daugiau ramybės. Programėlė, kuri veda per visą gijimo procesą po burnos chirurgijos.',
  icons: {
    icon: '/icon.webp',
    apple: '/icon.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt" className={`${jakarta.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
