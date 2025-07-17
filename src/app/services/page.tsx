
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/ui/page-header';
import { servicesList } from '@/lib/services-list';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content Marketing Services | The ConteX Organic Marketing Agency',
  description:
    'Explore the full suite of services offered by The ConteX. We are a full-service organic marketing and content agency dedicated to building legendary brands.',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <PageHeader
        title="Your End-to-End Growth Partner"
        subtitle="We provide integrated solutions to build your brand into an industry-defining force. Below is our full arsenal of capabilities, which we use to build a custom package based on your unique goals."
      />

      <section className="mt-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {servicesList.map((service, index) => (
                <AnimatedWrapper 
                    key={service.id} 
                    delay={index * 100}
                    className={index % 2 === 0 ? 'md:[&.is-visible]:animate-slide-in-left' : 'md:[&.is-visible]:animate-slide-in-right'}
                >
                    <Card className="bg-card border-border shadow-lg transition-all duration-300 hover:border-accent hover:-translate-y-1 h-full flex flex-col">
                        <CardHeader className="flex flex-row items-start gap-4">
                            <span className="text-4xl font-black text-accent/50 w-16 text-center">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <CardTitle className="text-2xl text-accent !mt-0">{service.label}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-white/80" style={{ lineHeight: 1.7 }}>{service.description}</p>
                        </CardContent>
                    </Card>
                </AnimatedWrapper>
            ))}
        </div>
      </section>

      <AnimatedWrapper delay={400}>
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold font-headline text-white">
            Ready for a Bespoke Strategy?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            Your goals are unique. Your plan must be too. Let's build a
            custom package that combines our capabilities into a cohesive
            growth engine for your brand.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md"
          >
            <Link href="/contact">
              Book Your Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </section>
      </AnimatedWrapper>
    </div>
  );
}
