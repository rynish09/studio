import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
    title: 'Discovery & Audit',
    description: 'Our content agency conducts a comprehensive audit of your existing content ecosystem and market positioning to identify foundational gaps and opportunities.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Strategy & Playbook Design',
    description: 'Based on our findings, we design a bespoke class content playbook—a strategic roadmap detailing themes, formats, and distribution channels for organic marketing success.',
    icon: Map,
  },
  {
    step: '03',
    title: 'Execution & Optimization',
    description: 'Our team executes the playbook with precision, creating and distributing high-value content while continuously monitoring performance data to optimize your organic marketing.',
    icon: Rocket,
  },
  {
    step: '04',
    title: 'Scaling & Authority',
    description: 'We leverage data-driven insights to double down on what works, scaling class content production to establish you as the undeniable authority in your niche.',
    icon: Crown,
  },
];

export default function ProcessPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <PageHeader
        title="The Playbook for Class Content"
        subtitle="Our proprietary 4-step framework from our organic marketing agency is designed to build legendary brands. It's a system for clarity, repeatability, and relentless growth."
      />
      
      <section className="mt-24">
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10" aria-hidden="true"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedWrapper key={step.step} delay={index * 150}>
                <Card className="bg-card border-border h-full p-8 text-center space-y-4 relative overflow-hidden group">
                  <div className="absolute -top-12 -right-12 w-32 h-32 text-white/5 font-black text-9xl group-hover:text-accent/10 transition-colors duration-300">
                    {step.step}
                  </div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-secondary text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                      <step.icon className="w-10 h-10"/>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold font-headline text-white">{step.title}</h3>
                    <p className="mt-2 text-white/70 flex-grow" style={{ lineHeight: 1.6 }}>{step.description}</p>
                  </div>
                </Card>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      <AnimatedWrapper delay={600}>
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold font-headline text-white">Ready To Implement This Process?</h2>
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
