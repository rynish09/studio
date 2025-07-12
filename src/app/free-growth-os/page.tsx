import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/ui/page-header';
import { Zap, BrainCircuit, Repeat, BarChart, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Free Growth OS | The ConteX',
  description:
    'Access the blueprint for market domination. Our Growth OS is the operating system we use to forge industry titans. Internalize and apply these principles.',
};

const pillars = [
  {
    icon: BrainCircuit,
    title: 'Pillar 1: Audience Psychography - The Empathy Engine',
    description:
      "Forget demographics. We map the soul of your audience. What are their deepest fears? Their most audacious ambitions? We don't target '35-year-old men.' We speak to 'the founder who fears obsolescence' or 'the innovator crippled by imposter syndrome.' This is how you create a magnetic connection.",
  },
  {
    icon: Zap,
    title: 'Pillar 2: The Value Bomb - Your Generosity Moat',
    description:
      'The core of our philosophy. Your free content must be more valuable than your competitors\' paid products. We architect "Value Bombs"—comprehensive guides, frameworks, and systems so potent, your audience would feel criminal not paying for them. This isn\'t just content; it\'s irrefutable proof of your expertise.',
  },
  {
    icon: Repeat,
    title: 'Pillar 3: The Repurposing Engine - Content Omnipresence',
    description:
      'One piece of pillar content (a podcast, a webinar, a keynote) does not equal one asset. It equals fifty. We build systems to atomize your core ideas into a barrage of high-impact content: short-form videos, Twitter threads, LinkedIn carousels, and visual assets. You become an omnipresent authority.',
  },
  {
    icon: BarChart,
    title: 'Pillar 4: The Authority Flywheel - Monetizing Trust',
    description:
      'Attention is fleeting. Authority is an asset. The Authority Flywheel is a system where consistent Value Bombs, amplified by the Repurposing Engine, build a loyal audience. This audience trusts you implicitly, making monetization (whether through products, services, or community) a natural, frictionless outcome.',
  },
];

const formats = [
    {
        title: 'The "How To" Post without the "How"',
        description: 'Instead of a generic "How to do X," you write "I achieved Y result. Here is the exact 3-step system I used." This reframes the content from generic advice to a proven, personal case study. It builds immediate authority. Example: Alex Hormozi\'s content on scaling gyms wasn\'t theory; it was the exact playbook he used to build his own empire.',
    },
    {
        title: 'The Contrarian Take That Isn\'t Just for Shock Value',
        description: 'Find a commonly held belief in your industry and challenge it with data and logic. The key is to be insightful, not just inflammatory. Example: Codie Sanchez built her brand on the contrarian idea that "boring businesses" like laundromats are a better path to wealth than sexy tech startups. She backs it up with numbers, making her argument compelling.',
    }
]

export default function GrowthOsPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <PageHeader
        title={<>The ConteX Growth OS</>}
        subtitle="You have been granted access. This isn't a list of 'hacks.' This is the operating system we use to forge industry titans. The principles within are a cheat code for building a legacy brand. Read it. Internalize it. Apply it."
      />

      <AnimatedWrapper delay={200}>
        <section className="mt-24 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold font-headline text-white text-center">
            The Four Pillars of a Content Legacy
          </h3>
          <p className="mt-4 text-center text-lg text-white/80">
            This is the framework that underpins every successful brand we've
            studied and built. Master these four pillars, and you master your
            market.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="bg-card border-border flex flex-col">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-secondary text-accent">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper delay={300}>
        <section className="mt-24 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold font-headline text-white text-center">
            Practical Implementation: Steal These Formats
          </h3>
          <p className="mt-4 text-center text-lg text-white/80">
            Theory is nothing without execution. Here are two battle-tested
            content formats you can use today.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {formats.map((format, index) => (
                <Card key={index} className="bg-card border-border">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-accent">{format.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-white/70">{format.description}</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper delay={400}>
        <section className="mt-24 text-center bg-card border border-accent/30 rounded-lg p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline">
              The Unfair Advantage
            </h2>
            <p
              className="mt-6 max-w-3xl mx-auto text-xl text-white/80"
              style={{ lineHeight: 1.7 }}
            >
              You now have the playbook. The entire strategy is laid out before
              you. But knowledge is not power.{' '}
              <span className="text-accent font-bold">
                Applied knowledge is power.
              </span>
            </p>
            <p
              className="mt-4 max-w-3xl mx-auto text-lg text-white/70"
              style={{ lineHeight: 1.7 }}
            >
              Executing this at an elite level requires obsession, consistency,
              and a team that lives and breathes this philosophy. It's the
              difference between knowing the path and walking the path.
            </p>
            <p
              className="mt-6 max-w-3xl mx-auto text-xl text-white font-bold"
              style={{ lineHeight: 1.7 }}
            >
              We are the execution partners for founders who demand to be
              legends. We don't just advise; we build your content engine for
              you.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-10 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-accent/40 hover:scale-105"
            >
              <Link
                href="https://calendly.com/thecontexagency09/30min"
                target="_blank"
              >
                Book Your Strategy Call & Skip The Line
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              This is not a sales call. It's a strategic session to see if we're
              a fit to build your legacy.
            </p>
          </div>
        </section>
      </AnimatedWrapper>
    </div>
  );
}
