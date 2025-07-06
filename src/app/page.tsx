
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { caseStudies } from '@/lib/case-studies';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Crown, Map, Rocket, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const featuredStudies = caseStudies.slice(0, 3);

const processSteps = [
  {
    icon: Search,
    title: 'Discovery & Audit',
    description: 'We map your content landscape to find untapped opportunities.',
  },
  {
    icon: Map,
    title: 'Strategy Design',
    description: 'We architect a bespoke content playbook for market leadership.',
  },
  {
    icon: Rocket,
    title: 'Content Execution',
    description: 'Our team executes the playbook, creating high-authority class content.',
  },
  {
    icon: Crown,
    title: 'Scale & Dominate',
    description: 'We scale production to solidify you as the undeniable industry voice.',
  },
];

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/50 z-0"></div>
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        <section className="relative container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center p-4 z-10">
          <AnimatedWrapper>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 max-w-4xl leading-tight font-headline">
              We Don't Build Brands. We Forge Legacies with Class Content.
            </h1>
            <p
              className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-body"
              style={{ lineHeight: 1.6 }}
            >
              As a leading content agency, we specialize in organic marketing and strategic content marketing to turn your expertise into enterprise value. Our medium is class content. Our metric is authority.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-accent/40 hover:scale-105"
              >
                <Link href="/contact">Book a Strategy Call</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-bold text-lg px-10 py-7 rounded-md border-2 border-border"
              >
                <Link href="/process">Discover Our Method</Link>
              </Button>
            </div>
          </AnimatedWrapper>
        </section>
      </div>
      
      <section className="py-24 sm:py-32 bg-card border-y border-border">
        <div className="container mx-auto">
          <AnimatedWrapper className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">The ConteX Method: An Organic Marketing Agency's Approach</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              A systematic approach to building a legendary brand through strategic, class content.
            </p>
          </AnimatedWrapper>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedWrapper key={index} delay={index * 150} className="text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-lg bg-secondary text-accent">
                  <step.icon className="w-8 h-8"/>
                </div>
                <h3 className="mt-6 text-xl font-bold font-headline text-white">{step.title}</h3>
                <p className="mt-2 text-white/70">{step.description}</p>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container mx-auto">
          <AnimatedWrapper className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Learn From The Titans of Content</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Our content agency deconstructs the playbooks of giants. Here's a glimpse of what's inside.
            </p>
          </AnimatedWrapper>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStudies.map((study, index) => (
              <AnimatedWrapper key={study.slug} delay={index * 100}>
                <Link href={`/results/${study.slug}`} className="block group h-full">
                  <Card className="bg-card border-border h-full overflow-hidden transition-all duration-300 group-hover:border-accent group-hover:-translate-y-2 flex flex-col">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">{study.niche}</Badge>
                      <CardTitle className="text-2xl font-bold text-white">{study.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <p className="text-white/70 mb-4 flex-grow">{study.synopsis}</p>
                      <div className="flex items-center text-accent font-semibold mt-auto">
                        <span>View Breakdown</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedWrapper>
            ))}
          </div>
          <AnimatedWrapper className="mt-16 text-center">
              <Button asChild variant="outline" size="lg" className="font-bold">
                  <Link href="/results">Explore All Case Studies</Link>
              </Button>
          </AnimatedWrapper>
        </div>
      </section>
    </>
  );
}
