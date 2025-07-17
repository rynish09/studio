
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, caseStudies } from '@/lib/case-studies';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata, ResolvingMetadata } from 'next';
import { ArrowRight } from 'lucide-react';

interface CaseStudyPageProps {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: CaseStudyPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return {
      title: 'Case Study Not Found | The ConteX',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: `${study.name} Content Marketing Case Study | The ConteX`,
    description: `A content agency's breakdown of ${study.name}'s organic marketing strategy. ${study.synopsis}`,
    openGraph: {
        title: `${study.name} Content Marketing Case Study | The ConteX`,
        description: `A content agency's breakdown of ${study.name}'s organic marketing strategy. ${study.synopsis}`,
    },
  };
}

export async function generateStaticParams() {
    return caseStudies.map((cs) => ({
      slug: cs.slug,
    }));
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="container mx-auto py-24 sm:py-32">
      <AnimatedWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">{study.niche}</Badge>
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline">
            {study.name}
          </h1>
          <p className="mt-6 text-xl text-white/80" style={{ lineHeight: 1.6 }}>
            {study.synopsis}
          </p>
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper delay={200}>
        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-headline text-white text-center mb-12">The Growth Playbook</h2>
          <div className="grid grid-cols-1 gap-8">
            {study.strategy.map((step, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] items-start">
                    <div className="flex flex-col items-center justify-center p-6 bg-secondary h-full">
                        <span className="text-4xl font-black text-accent">0{index + 1}</span>
                    </div>
                    <div className="p-6">
                        <CardTitle className="text-2xl text-accent">{step.title}</CardTitle>
                        <CardContent className="p-0 mt-4">
                            <p className="text-white/80" style={{ lineHeight: 1.7 }}>{step.description}</p>
                        </CardContent>
                    </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </AnimatedWrapper>
      
      <AnimatedWrapper delay={300}>
        <section className="mt-24 text-center bg-card border border-accent/20 rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold font-headline text-white">Inspired? Let's Build Your Legacy.</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                The same principles that built these titans can be applied to your brand. Our content agency specializes in tailoring these strategies to your unique voice and goals.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md">
                <Link href="/contact">
                    Book Your Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </Button>
        </section>
      </AnimatedWrapper>
    </div>
  );
}
