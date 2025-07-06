
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/ui/page-header';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Our Content Agency | The ConteX',
  description: 'Learn about The ConteX, a premier content agency specializing in organic marketing. We build brand narratives for leaders through expert content marketing and strategy.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <PageHeader
        title={<>Signal in the Noise.<br />Substance over Spectacle.</>}
        subtitle="We are a premier content agency dedicated to building defensible brand narratives for leaders and innovators. As an organic marketing agency, we don't chase algorithms; we cultivate authority, trust, and lasting enterprise value."
      />

      <AnimatedWrapper delay={200}>
        <section className="mt-24 max-w-4xl mx-auto">
            <div className="space-y-6 text-center">
                <h3 className="text-3xl font-bold font-headline text-white">Our Guiding Philosophy</h3>
                <p className="text-white/80 text-lg" style={{ lineHeight: 1.7 }}>
                At The ConteX, our content agency believes true influence is an outcome of generosity and expertise, systematically delivered. We distill complexity into clarity, codify success into repeatable systems, and execute with an obsessive focus on craft and class content.
                </p>
                <p className="text-white/80 text-lg" style={{ lineHeight: 1.7 }}>
                Our mission is to make your perspective the definitive voice in your domain, forging a loyal audience and a brand that commands respect through organic marketing.
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
                        "The most valuable asset in the new economy is attention. We believe the most effective way to earn it is by generously sharing expertise and creating class content so valuable, it would be a crime to charge for it."
                        </p>
                    </blockquote>
                    <p className="mt-4 text-sm text-muted-foreground">This is the philosophy our content agency applies to building brands.</p>
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
