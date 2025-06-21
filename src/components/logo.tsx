
import { cn } from '@/lib/utils';

export const Logo = ({ className }: { className?: string }) => (
  <div className={cn('font-headline font-black text-3xl tracking-tighter', className)}>
    <span className="text-white">The Conte</span>
    <span className="text-accent">X</span>
  </div>
);
