
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import CustomCursor from '@/components/custom-cursor';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'The ConteX - Premier Content Agency for Organic Marketing',
  description: "The ConteX is a top-tier content agency specializing in organic marketing strategies and class content to build authority and drive growth for visionary brands.",
  keywords: ['content agency', 'organic marketing agency', 'class content', 'strategic content', 'brand narrative', 'enterprise value', 'SEO', 'content marketing'],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('dark', inter.variable)}>
      <head />
      <body className={cn('font-body antialiased')}>
        <CustomCursor />
        <div className="relative z-10">
          <Header />
          <main className="animate-fade-in pt-20">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
