
import Link from 'next/link';
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
            Deconstructing Greatness
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80" style={{ lineHeight: 1.6 }}>
            Success leaves clues. Our content agency deconstructs the playbooks of industry titans who turned organic marketing and class content into empires. Learn from the best.
          </p>
        </section>
      </AnimatedWrapper>

      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <AnimatedWrapper key={study.slug} delay={index * 100}>
            <Link href={`/results/${study.slug}`} className="block group h-full">
              <Card className="bg-card border-border h-full overflow-hidden transition-all duration-300 group-hover:border-accent group-hover:scale-[1.03] flex flex-col">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-4">{study.niche}</Badge>
                  <CardTitle className="text-2xl font-bold text-white">{study.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <p className="text-white/70 mb-6 flex-grow">{study.synopsis}</p>
                  <div className="flex items-center text-accent font-semibold mt-auto">
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
