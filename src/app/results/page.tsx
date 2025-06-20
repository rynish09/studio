import Link from 'next/link';
import Image from 'next/image';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { caseStudies } from '@/lib/case-studies';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ResultsPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <AnimatedWrapper>
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline">
            Our Clients' Stories
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80" style={{ lineHeight: 1.6 }}>
            We don't just build content strategies; we build legacies. Explore how we've helped brands transform their presence and performance through organic growth.
          </p>
        </section>
      </AnimatedWrapper>

      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <AnimatedWrapper key={study.slug} delay={index * 100}>
            <Link href={`/results/${study.slug}`} className="block group">
              <Card className="bg-card border-border h-full overflow-hidden transition-all duration-300 group-hover:border-accent group-hover:-translate-y-2">
                <div className="relative aspect-video">
                  <Image
                    src={study.image}
                    alt={study.name}
                    data-ai-hint={study.imageHint}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{study.niche}</Badge>
                  <CardTitle className="text-2xl font-bold text-white">{study.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">{study.synopsis}</p>
                  <div className="flex items-center text-accent font-semibold">
                    <span>View Breakdown</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </AnimatedWrapper>
        ))}
      </section>
    </div>
  );
}
