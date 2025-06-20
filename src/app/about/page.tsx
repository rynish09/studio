import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <AnimatedWrapper>
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline">
            Signal in the Noise.
          </h1>
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline mt-2">
            Substance over Spectacle.
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80" style={{ lineHeight: 1.6 }}>
            We are a strategic content firm dedicated to building defensible brand narratives for leaders and innovators. We don't chase algorithms; we cultivate authority, trust, and lasting enterprise value.
          </p>
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper delay={200}>
        <section className="mt-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-3xl font-bold font-headline text-white">Our Guiding Philosophy</h3>
                <p className="text-white/80" style={{ lineHeight: 1.7 }}>
                At The ConteX, we believe true influence is an outcome of generosity and expertise, systematically delivered. We distill complexity into clarity, codify success into repeatable systems, and execute with an obsessive focus on craft.
                </p>
                <p className="text-white/80" style={{ lineHeight: 1.7 }}>
                Our mission is to make your perspective the definitive voice in your domain, forging a loyal audience and a brand that commands respect.
                </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden bg-card p-4">
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="Strategic discussion"
                    data-ai-hint="luxury office discussion"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>
        </section>
      </AnimatedWrapper>
      
      <AnimatedWrapper delay={300}>
        <section className="mt-24">
            <div className="bg-card border-border rounded-lg p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 -m-4 w-32 h-32 text-accent/10">
                    <svg fill="currentColor" viewBox="0 0 100 100"><path d="M26,75.5c0,9.6-6.4,14-14,14c-11.2,0-12-11.2-12-14c0-11.2,12-32.2,21-42.5l7,5.2C29,54.5,26,65.9,26,75.5z M74,75.5c0,9.6-6.4,14-14,14c-11.2,0-12-11.2-12-14c0-11.2,12-32.2,21-42.5l7,5.2C77,54.5,74,65.9,74,75.5z"></path></svg>
                </div>
                <div className="relative">
                    <h3 className="text-3xl font-bold font-headline text-white">Our Core Principle</h3>
                    <blockquote className="mt-6 border-l-4 border-accent pl-6">
                        <p className="text-xl md:text-2xl italic text-white" style={{ lineHeight: 1.6 }}>
                        "The most valuable asset in the new economy is attention. We believe the most effective way to earn it is by generously sharing expertise and creating content so valuable, it would be a crime to charge for it."
                        </p>
                    </blockquote>
                    <p className="mt-4 text-sm text-muted-foreground">This is the philosophy we apply to building brands.</p>
                </div>
            </div>
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper delay={400}>
        <section className="mt-24 text-center">
            <h3 className="text-3xl font-bold font-headline text-white">Begin Your Legacy Content Journey</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                Let's explore how our strategic framework can become your most powerful asset.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md">
                <Link href="/contact">Book A Consultation</Link>
            </Button>
        </section>
      </AnimatedWrapper>

    </div>
  );
}
