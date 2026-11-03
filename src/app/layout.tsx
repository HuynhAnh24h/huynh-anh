import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageContext';

export const metadata: Metadata = {
  title: 'Huỳnh Anh - Frontend Developer @ Digital Creations | Mobile Apps & Web',
  description: 'Portfolio của Huỳnh Anh - Frontend Developer tại Digital Creations, chuyên phát triển ứng dụng di động Mobile Apps (React Native) và nền tảng website hiện đại (Next.js, React, Tailwind, Supabase, Shopify, WordPress).',
  keywords: [
    'Huỳnh Anh',
    'Frontend Developer',
    'Digital Creations',
    'React Native',
    'Mobile App Developer',
    'Next.js',
    'React Developer',
    'Shopify Developer',
    'WordPress Developer',
    'IT System'
  ],
  authors: [{ name: 'Huỳnh Anh' }],
  creator: 'Huỳnh Anh',
  openGraph: {
    title: 'Huỳnh Anh - Frontend Developer @ Digital Creations | Mobile & Web',
    description: 'Portfolio chuyên nghiệp của Huỳnh Anh: Lập trình ứng dụng di động, website hiệu năng cao và quản trị hệ thống IT.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="antialiased min-h-screen selection:bg-[#f5b942] selection:text-[#15110e] bg-[#f8f3ec] dark:bg-[#15110e] text-[#2a1f14] dark:text-[#f5ece4]">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
