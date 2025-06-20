import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin } from 'lucide-react';

const footerNav = [
  { href: '/about', label: 'About' },
  { href: '/process', label: 'Process' },
  { href: '/results', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Github, label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Signal in the Noise. Substance over Spectacle.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-muted-foreground hover:bg-secondary hover:text-white"
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Navigate
              </h3>
              <ul className="mt-4 space-y-2">
                {footerNav.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-base text-muted-foreground hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Tools
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/tools/content-strategy" className="text-base text-muted-foreground hover:text-white">Content Strategy</Link>
                </li>
                <li>
                  <Link href="/tools/headline-rewriter" className="text-base text-muted-foreground hover:text-white">Headline Rewriter</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Get Started
              </h3>
              <p className="mt-4 text-base text-muted-foreground">
                Ready to build your growth playbook?
              </p>
              <Button asChild className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                <Link href="/contact">Book a Free Call</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The ConteX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
