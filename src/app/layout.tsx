
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import CustomCursor from '@/components/custom-cursor';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'The ConteX - Premier Content Agency for Organic Marketing',
  description: "The ConteX is a top-tier content agency specializing in organic marketing strategies. We create class content to build authority and drive growth for visionary brands.",
  keywords: ['content agency', 'organic marketing agency', 'class content', 'strategic content', 'brand narrative', 'enterprise value', 'SEO'],
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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
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
