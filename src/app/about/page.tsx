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
                    <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.414 2.586a2 2 0 00-2.828 0L6 4.172V10h5.828l-1.414-1.414a2 2 0 010-2.828zM12 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        <path d="M4 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"></path>
                    </svg>
                </div>
                <div className="relative">
                    <h3 className="text-3xl font-bold font-headline text-white">Our Partnership Promise</h3>
                    <blockquote className="mt-6 border-l-4 border-accent pl-6">
                        <p className="text-xl md:text-2xl italic text-white" style={{ lineHeight: 1.6 }}>
                        "We operate on a performance basis. We align our success with yours, ensuring a partnership built on tangible results and mutual trust. Your growth is our benchmark."
                        </p>
                    </blockquote>
                    <p className="mt-4 text-sm text-muted-foreground">This principle underpins all our client engagements.</p>
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
