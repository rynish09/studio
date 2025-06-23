
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
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
            We are a premier content agency dedicated to building defensible brand narratives for leaders and innovators. As an organic marketing agency, we don't chase algorithms; we cultivate authority, trust, and lasting enterprise value.
          </p>
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper delay={200}>
        <section className="mt-24 max-w-4xl mx-auto">
            <div className="space-y-6 text-center">
                <h3 className="text-3xl font-bold font-headline text-white">Our Guiding Philosophy</h3>
                <p className="text-white/80 text-lg" style={{ lineHeight: 1.7 }}>
                At The ConteX, we believe true influence is an outcome of generosity and expertise, systematically delivered. We distill complexity into clarity, codify success into repeatable systems, and execute with an obsessive focus on craft.
                </p>
                <p className="text-white/80 text-lg" style={{ lineHeight: 1.7 }}>
                Our mission is to make your perspective the definitive voice in your domain, forging a loyal audience and a brand that commands respect.
                </p>
            </div>
        </section>
      </AnimatedWrapper>
      
      <AnimatedWrapper delay={300}>
        <section className="mt-24">
            <div className="bg-card border-border rounded-lg p-8 md:p-12">
                <div className="relative text-center">
                    <h3 className="text-3xl font-bold font-headline text-white">Our Core Principle</h3>
                    <blockquote className="mt-6 max-w-4xl mx-auto">
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
