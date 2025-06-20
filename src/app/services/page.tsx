import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'DFY: Done For You',
    valueProp: 'Your complete content engine, managed and optimized by our elite team.',
    deliverables: [
      'Full-scale content strategy & production',
      'Multi-platform management (YT, IG, etc.)',
      'Performance analytics & reporting',
      'Dedicated growth specialist',
    ],
    cta: 'Apply for DFY',
    className: 'lg:col-span-2',
  },
  {
    title: 'DWY: Done With You',
    valueProp: 'We coach you to build your own growth engine, fixing bottlenecks along the way.',
    deliverables: [
      'Niche-focused coaching (IG & YT)',
      'Weekly strategy calls',
      'Content feedback & optimization',
      'Access to our internal systems',
    ],
    cta: 'Learn More',
    className: '',
  },
  {
    title: 'DIY: Do It Yourself',
    valueProp: 'Join our exclusive community and access the course that fixes your mistakes.',
    deliverables: [
      'Paid Skool community access',
      'Comprehensive content course',
      'Weekly live Q&A sessions',
      'Peer-to-peer support network',
    ],
    cta: 'Join The Community',
    className: '',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <AnimatedWrapper>
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline">
            The Arsenal
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80" style={{ lineHeight: 1.6 }}>
            A suite of services engineered for every stage of growth. From complete delegation to guided execution, we have a playbook for you.
          </p>
        </section>
      </AnimatedWrapper>
      
      <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <AnimatedWrapper key={service.title} delay={index * 150} className={service.className}>
            <Card className="bg-card border-border h-full flex flex-col group overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold font-headline text-white">{service.title}</CardTitle>
                    <CardDescription className="text-white/70 pt-2" style={{ lineHeight: 1.6 }}>{service.valueProp}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 mb-8">
                        {service.deliverables.map(item => (
                            <li key={item} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                                <span className="text-white">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold transition-transform duration-300 group-hover:scale-105">
                        <Link href="/contact">{service.cta}</Link>
                    </Button>
                </CardContent>
            </Card>
          </AnimatedWrapper>
        ))}
      </section>
    </div>
  );
}
