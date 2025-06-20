import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    name: 'Alex Hormozi',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'man portrait',
    title: 'The Volume & Value Playbook',
    description: 'We engineered a high-volume content system that amplified his core message across platforms, turning his expertise into a multi-million dollar enterprise.',
    playbook: [
      'High-frequency, short-form video sprints.',
      'Repurposing long-form content into dozens of micro-assets.',
      'Data-driven topic selection based on audience engagement.',
      'Authority-building through consistent, value-packed frameworks.',
    ],
  },
  {
    name: 'Iman Gadzhi',
    image: 'https://placehold.co/400x400.png',
    imageHint: 'young entrepreneur',
    title: 'The Aspirational Authority Playbook',
    description: 'We crafted a narrative-driven content strategy that built an aspirational brand, attracting a loyal following and driving high-ticket sales.',
    playbook: [
      'Cinematic long-form YouTube content.',
      'Aesthetic-focused Instagram strategy.',
      'Building a "walled garden" community for die-hard fans.',
      'Leveraging scarcity and exclusivity in content releases.',
    ],
  },
];

export default function ResultsPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <AnimatedWrapper>
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline">
            Evidence Of The System
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80" style={{ lineHeight: 1.6 }}>
            Our playbooks aren't theoretical. They are battle-tested systems that have generated massive growth for the world's top creators. Here's a look under the hood.
          </p>
        </section>
      </AnimatedWrapper>

      <section className="mt-24 space-y-24">
        {caseStudies.map((study, index) => (
          <AnimatedWrapper key={study.name} delay={index * 200}>
            <Card className="bg-card border-border overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={study.image}
                    alt={study.name}
                    data-ai-hint={study.imageHint}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent md:bg-gradient-to-r"></div>
                </div>
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl lg:text-4xl font-bold font-headline text-white">{study.name}</h2>
                  <h3 className="text-xl lg:text-2xl font-semibold text-accent mt-1">{study.title}</h3>
                  <p className="mt-4 text-white/80" style={{ lineHeight: 1.6 }}>{study.description}</p>
                  <div className="mt-8 space-y-3">
                    {study.playbook.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedWrapper>
        ))}
      </section>

      <AnimatedWrapper delay={600}>
        <section className="mt-24 text-center">
            <h2 className="text-3xl font-bold font-headline text-white">You're Next.</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                Ready to have a custom growth playbook built for your brand?
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md">
                <Link href="/contact">Book Your Free Strategy Call</Link>
            </Button>
        </section>
      </AnimatedWrapper>
    </div>
  );
}
