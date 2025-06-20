import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedWrapper from '@/components/ui/animated-wrapper';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      <section className="relative container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center p-4 z-10">
        <AnimatedWrapper>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 max-w-4xl leading-tight font-headline">
            Crafting Digital Legacies Through Content
          </h1>
          <p
            className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-body"
            style={{ lineHeight: 1.6 }}
          >
            We partner with visionary brands to build enduring influence and authority with strategic, organic content systems.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-accent/40 hover:scale-105"
            >
              <Link href="/process">Discover Our Method</Link>
            </Button>
          </div>
        </AnimatedWrapper>
      </section>
    </div>
  );
}
