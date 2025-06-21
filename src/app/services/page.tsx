
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { DraftingCompass, Factory, Megaphone } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: DraftingCompass,
    title: 'The Blueprint',
    subtitle: 'Strategic Playbook Design',
    description: 'A comprehensive, one-time audit and strategy design. We deliver a complete playbook for your brand\'s content, identifying your unique narrative, target audience, and a 90-day execution plan.',
    audience: 'Best for: Brands with in-house teams who need expert direction.',
  },
  {
    icon: Factory,
    title: 'The Engine',
    subtitle: 'Full-Service Content Execution',
    description: 'Our flagship, full-service partnership. We become your dedicated content department, executing the strategy from creation to distribution and optimization. We build your legacy, so you can focus on your business.',
    audience: 'Best for: Visionaries who want to outsource their entire content operation.',
  },
  {
    icon: Megaphone,
    title: 'The Amplifier',
    subtitle: 'Founder & CEO Branding',
    description: 'A specialized program designed to turn founders and CEOs into the definitive voice of their industry. We distill your expertise into a powerful personal brand that drives enterprise value.',
    audience: 'Best for: CEOs & Founders ready to become the face of their brand.',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <AnimatedWrapper>
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline">
            Our Offerings
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80" style={{ lineHeight: 1.6 }}>
            We provide a focused suite of services designed for one purpose: to build enduring authority and enterprise value through content.
          </p>
        </section>
      </AnimatedWrapper>

      <section className="mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedWrapper key={service.title} delay={index * 150}>
              <Card className="bg-card border-border h-full flex flex-col group hover:border-accent transition-colors duration-300">
                <CardHeader className="items-center text-center">
                    <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-secondary text-accent mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                      <service.icon className="w-10 h-10"/>
                    </div>
                  <CardTitle className="text-2xl font-bold font-headline text-white">{service.title}</CardTitle>
                  <CardDescription className="text-accent font-semibold">{service.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow text-center p-6 pt-0">
                  <p className="text-white/70 flex-grow" style={{ lineHeight: 1.6 }}>
                    {service.description}
                  </p>
                  <p className="mt-6 text-sm text-muted-foreground italic">{service.audience}</p>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </section>

      <AnimatedWrapper delay={600}>
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold font-headline text-white">Ready to Forge Your Legacy?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            A single conversation can be the catalyst for industry-defining authority. Let's explore your potential.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md">
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>
        </section>
      </AnimatedWrapper>
    </div>
  );
}
