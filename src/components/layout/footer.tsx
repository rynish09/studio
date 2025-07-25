
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const footerNav = [
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/results', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/community', label: 'Community' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://youtube.com/@the.contex', icon: Youtube, label: 'YouTube' },
  { href: 'https://www.instagram.com/the.contex', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-4">
              <Logo className="text-3xl" />
            </Link>
            <p className="max-w-xs text-muted-foreground">
              We deconstruct the playbooks of titans to forge the strategies of tomorrow.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
              {footerNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors hover:text-white"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
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
