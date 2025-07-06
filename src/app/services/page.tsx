
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { PageHeader } from '@/components/ui/page-header';
import { DraftingCompass, Factory, Megaphone, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content Marketing Services | The ConteX Organic Marketing Agency',
  description:
    'Explore the services offered by The ConteX, a premier content agency. We specialize in organic marketing, content strategy, and founder amplification to drive growth.',
};

const services = [
  {
    icon: DraftingCompass,
    title: 'Strategy Blueprint',
    subtitle: 'Your 90-Day Plan for Market Domination',
    description:
      'For brands with an execution team needing world-class direction. We conduct a forensic audit and deliver a comprehensive playbook—your step-by-step guide to becoming the undisputed authority in your niche.',
    audience:
      'Best for: Brands with an in-house team seeking elite-level strategic direction.',
    link: '/contact',
  },
  {
    icon: Factory,
    title: 'Full-Scale Content Partnership',
    subtitle: 'Your Outsourced Content Engine',
    description:
      "Our flagship offering. We become your dedicated content engine, managing everything from ideation to distribution. We handle the content, you handle the growth. This is how legacies are built.",
    audience:
      "Best for: Founders demanding a complete, 'done-for-you' content operation.",
    link: '/contact',
  },
  {
    icon: Megaphone,
    title: 'Founder Amplification',
    subtitle: 'From Expert to Industry Icon',
    description:
      "A bespoke program to distill your unique expertise into a powerful personal brand that drives enterprise value. We don't just build content; we build influence.",
    audience:
      'Best for: CEOs & Founders ready to become the undisputed voice of their industry.',
    link: '/contact',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <PageHeader
        title="Services Built to Forge Legends"
        subtitle="As a top-tier organic marketing agency, we offer a focused suite of content marketing services. Each is engineered to build enduring authority and transform your brand into the definitive voice of your industry."
      />

      <section className="mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <AnimatedWrapper
              key={service.title}
              delay={index * 150}
              className="h-full"
            >
              <Link href={service.link} className="block h-full group">
                <Card className="bg-card border-border h-full flex flex-col hover:border-accent hover:bg-card/90 transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="items-center text-center">
                    <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-secondary text-accent mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                      <service.icon className="w-10 h-10" />
                    </div>
                    <CardTitle className="text-2xl font-bold font-headline text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-accent font-semibold h-12">
                      {service.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow text-center p-6 pt-0">
                    <p
                      className="text-white/70 flex-grow"
                      style={{ lineHeight: 1.6 }}
                    >
                      {service.description}
                    </p>
                    <p className="mt-6 text-sm text-muted-foreground italic">
                      {service.audience}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 justify-center mt-auto">
                    <div className="font-bold text-accent flex items-center">
                      <span>Book a Consultation</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </AnimatedWrapper>
          ))}
        </div>
      </section>

      <AnimatedWrapper delay={600}>
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold font-headline text-white">
            Ready to Forge Your Legacy?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            A single conversation with our content agency can be the catalyst
            for industry-defining authority. Let's explore your potential.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md"
          >
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>
        </section>
      </AnimatedWrapper>
    </div>
  );
}
