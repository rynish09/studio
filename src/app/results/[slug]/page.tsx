import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
    const { caseStudies } = await import('@/lib/case-studies');
    return caseStudies.map((cs) => ({
      slug: cs.slug,
    }));
}

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="container mx-auto py-24 sm:py-32">
      <AnimatedWrapper>
        <div className="max-w-4xl mx-auto">
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
        <div className="relative aspect-video max-w-5xl mx-auto mt-12 rounded-lg overflow-hidden shadow-2xl shadow-black/25">
          <Image
            src={study.image}
            alt={study.name}
            data-ai-hint={study.imageHint}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper delay={300}>
        <section className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-headline text-white text-center">The Growth Playbook</h2>
          <div className="mt-12 space-y-12 relative border-l-2 border-border/50 ml-4 pl-8">
            {study.strategy.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[42px] top-1 w-8 h-8 bg-card border-2 border-border rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-accent">{step.title}</h3>
                <p className="mt-2 text-white/80" style={{ lineHeight: 1.7 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedWrapper>
      
      <AnimatedWrapper delay={400}>
        <section className="mt-24 text-center">
            <h3 className="text-3xl font-bold font-headline text-white">Ready for your own success story?</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                Let's discuss how we can tailor a playbook for your brand.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md">
                <Link href="/contact">Book Your Strategy Session</Link>
            </Button>
        </section>
      </AnimatedWrapper>
    </div>
  );
}
