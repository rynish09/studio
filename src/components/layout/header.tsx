'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/results', label: 'Case Studies' },
  { href: '/community', label: 'Community' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderNavLinks = (mobile = false) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => mobile && setIsMobileMenuOpen(false)}
          className={cn(
            'font-medium transition-colors hover:text-accent',
            pathname === link.href ? 'text-accent' : 'text-white',
            mobile ? 'block py-2 text-lg' : 'text-sm'
          )}
        >
          {link.label}
        </Link>
      ))}
      <Link
        href="/content-strategy"
        onClick={() => mobile && setIsMobileMenuOpen(false)}
        className={cn(
          'font-medium transition-colors hover:text-accent',
          pathname === '/content-strategy' ? 'text-accent' : 'text-white',
          mobile ? 'block py-2 text-lg' : 'text-sm'
        )}
      >
        AI Strategy Tool
      </Link>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="text-2xl"/>
        </Link>

        <nav className="hidden md:flex items-center gap-8">{renderNavLinks()}</nav>

        <div className="hidden md:block">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="/contact">Book a Call</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-l-border w-full p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <Logo className="text-2xl"/>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="h-6 w-6 text-white" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </div>
                <nav className="flex-grow p-6 space-y-4">
                  {renderNavLinks(true)}
                </nav>
                <div className="p-6 border-t border-border">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Book a Call</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
