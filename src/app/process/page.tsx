
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/ui/page-header';
import { Crown, Rocket, Map, Search } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Our Content Marketing Process | The ConteX Agency',
    description: 'Discover the proprietary 4-step framework our content agency uses for organic marketing success. Our process builds legendary brands through strategic content marketing.',
};

const processSteps = [
  {
    step: '01',
    title: 'Phase 1: Deep Discovery & Strategic Audit',
    description: 'Our journey begins with data, not assumptions. We immerse ourselves in your world, auditing your brand, market, and competitors to identify your unique voice and define what success looks like. This is the foundation upon which legacies are built.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Phase 2: The Bespoke Content Playbook',
    description: "Armed with insight, we architect your custom Content Playbook. This is a strategic roadmap detailing the exact themes, formats, and channels needed to establish you as the definitive authority. We define your content pillars and map out the first 90 days of execution.",
    icon: Map,
  },
  {
    step: '03',
    title: 'Phase 3: Elite Execution & Optimization',
    description: "Strategy is nothing without execution. Our team of specialists brings the playbook to life with precision and an obsessive focus on quality. We continuously monitor performance, using data to refine our approach and ensure every piece of content drives results.",
    icon: Rocket,
  },
  {
    step: '04',
    title: 'Phase 4: Scaling Authority & Industry Domination',
    description: "With a proven content engine, we scale. We amplify your message, expand your reach, and solidify your position as the undeniable leader in your field. This is where your brand transcends the noise and becomes a signal—an authority that commands respect, trust, and enterprise value.",
    icon: Crown,
  },
];

export default function ProcessPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <PageHeader
        title="Our Proven Path to Authority"
        subtitle="This isn't guesswork; it's a battle-tested system. Our proprietary 4-phase process is designed to turn your expertise into a powerful, defensible brand that commands attention and drives growth."
      />
      
      <section className="mt-24 max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-4 w-1 bg-border/20 h-full -z-10" aria-hidden="true" />
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <AnimatedWrapper 
                key={step.step} 
                delay={index * 200}
                className={index % 2 === 0 ? '[&.is-visible]:animate-slide-in-left' : '[&.is-visible]:animate-slide-in-right'}
              >
                <div className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary text-accent border-2 border-border shadow-lg">
                      <step.icon className="w-8 h-8"/>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="bg-card border-border rounded-xl p-6 flex-1 shadow-lg">
                    <h3 className="text-2xl font-bold font-headline text-white">{step.title}</h3>
                    <p className="mt-4 text-white/70" style={{ lineHeight: 1.7 }}>{step.description}</p>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      <AnimatedWrapper delay={800}>
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold font-headline text-white">Ready to Walk The Path?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            A system is only as good as its execution. Let's talk about building a custom growth engine for your brand.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md">
            <Link href="/contact">Book Your Strategy Call</Link>
          </Button>
        </section>
      </AnimatedWrapper>
    </div>
  );
}
