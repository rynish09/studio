import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Audit',
    description: 'We conduct a comprehensive audit of your existing content ecosystem and market positioning to identify foundational gaps and opportunities.',
  },
  {
    step: '02',
    title: 'Strategy & Playbook Design',
    description: 'Based on our findings, we design a bespoke content playbook—a strategic roadmap detailing themes, formats, and distribution channels.',
  },
  {
    step: '03',
    title: 'Execution & Optimization',
    description: 'Our team executes the playbook with precision, creating and distributing high-value content while continuously monitoring performance data.',
  },
  {
    step: '04',
    title: 'Scaling & Authority',
    description: 'We leverage data-driven insights to double down on what works, scaling content production to establish you as the undeniable authority in your niche.',
  },
];

export default function ProcessPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <AnimatedWrapper>
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline">
            The Playbook
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80" style={{ lineHeight: 1.6 }}>
            Our proprietary 4-step framework is designed to build legendary brands. It's a system for clarity, repeatability, and relentless growth.
          </p>
        </section>
      </AnimatedWrapper>
      
      <section className="mt-24">
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/30" aria-hidden="true"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedWrapper key={step.step} delay={index * 150}>
                <Card className="bg-card border-border h-full p-6 text-center space-y-4 relative overflow-hidden">
                  <div className="absolute -top-8 -left-8 w-24 h-24 text-white/5 font-black text-8xl">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-secondary text-accent font-black text-2xl">
                      {step.step}
                    </div>
                    <h3 className="mt-6 text-2xl font-bold font-headline text-white">{step.title}</h3>
                    <p className="mt-2 text-white/70" style={{ lineHeight: 1.6 }}>{step.description}</p>
                  </div>
                </Card>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      <AnimatedWrapper delay={600}>
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold font-headline text-white">Explore Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            The system is proven. The evidence is clear. Explore the results we've engineered for visionary brands.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md">
            <Link href="/results">View Case Studies</Link>
          </Button>
        </section>
      </AnimatedWrapper>
    </div>
  );
}
