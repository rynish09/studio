
import AnimatedWrapper from '@/components/ui/animated-wrapper';

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <AnimatedWrapper className={className}>
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80" style={{ lineHeight: 1.6 }}>
          {subtitle}
        </p>
      </section>
    </AnimatedWrapper>
  );
}
