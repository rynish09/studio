import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <AnimatedWrapper>
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline">
            Strategy Over Noise.
          </h1>
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline mt-2">
            Depth Over Virality.
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80" style={{ lineHeight: 1.6 }}>
            We're not just another content agency. We are a team of strategic partners obsessed with building sustainable growth engines for discerning founders and creators. We believe in creating content that doesn't just capture attention, but builds authority, trust, and enterprise-level revenue.
          </p>
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper delay={200}>
        <section className="mt-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-3xl font-bold font-headline text-white">The Principle Behind the Playbook</h3>
                <p className="text-white/80" style={{ lineHeight: 1.7 }}>
                At The ConteX, we operate on a simple but powerful principle: true influence isn't built on fleeting trends, but on a deep understanding of your audience and a relentless focus on value. We dissect what works, codify it into a repeatable system, and execute with precision.
                </p>
                <p className="text-white/80" style={{ lineHeight: 1.7 }}>
                Our goal is to make your expertise the undeniable authority in your niche, creating a loyal following that converts and a brand that endures.
                </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden bg-card p-4">
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="Strategic meeting"
                    data-ai-hint="strategy meeting"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>
        </section>
      </AnimatedWrapper>
      
      <AnimatedWrapper delay={300}>
        <section className="mt-24">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 -m-4 w-32 h-32 text-accent/10">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.414 2.586a2 2 0 00-2.828 0L6 4.172V10h5.828l-1.414-1.414a2 2 0 010-2.828zM12 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        <path d="M4 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"></path>
                    </svg>
                </div>
                <div className="relative">
                    <h3 className="text-3xl font-bold font-headline text-white">The ConteX Guarantee</h3>
                    <blockquote className="mt-6 border-l-4 border-accent pl-6">
                        <p className="text-xl md:text-2xl italic text-white" style={{ lineHeight: 1.6 }}>
                        "Pay 70% upfront for our 90-day plan. You only pay the final 30% if you believe we've delivered tangible growth. We bet on our systems, so you can bet on your success."
                        </p>
                    </blockquote>
                    <p className="mt-4 text-sm text-muted-foreground">This applies to our 90-day DFY and DWY plans.</p>
                </div>
            </div>
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper delay={400}>
        <section className="mt-24 text-center">
            <h3 className="text-3xl font-bold font-headline text-white">Ready to Elevate Your Content?</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                Let's discuss how our playbook can become your growth engine.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md">
                <Link href="/contact">Book Your Strategy Session</Link>
            </Button>
        </section>
      </AnimatedWrapper>

    </div>
  );
}
