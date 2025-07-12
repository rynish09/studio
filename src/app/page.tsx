import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { caseStudies } from '@/lib/case-studies';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Crown, Map, Rocket, Search, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { servicesList } from '@/lib/services-list';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqList } from '@/lib/faq-list';

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

const vipFaqs = faqList.filter(f => f.vip).slice(0, 3);

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
                <Link href="/contact">Book A Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-bold text-lg px-10 py-7 rounded-md border-2 border-border"
              >
                <Link href="/free-growth-os">Get The Free Growth OS</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              A suite of solutions designed to build your brand into an industry-defining force.
            </p>
          </AnimatedWrapper>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {servicesList.slice(0, 8).map((service, index) => (
                  <AnimatedWrapper key={service.id} delay={index * 100}>
                      <Link href="/services" className="block group h-full">
                        <Card className="bg-card border-border text-center p-4 h-full transition-colors group-hover:border-accent">
                            <CardContent className="p-0">
                              <p className="font-semibold text-white/90">{service.label}</p>
                            </CardContent>
                        </Card>
                      </Link>
                  </AnimatedWrapper>
              ))}
          </div>
          <AnimatedWrapper className="mt-12 text-center">
              <Button asChild variant="outline" size="lg" className="font-bold">
                  <Link href="/services">Explore All Services</Link>
              </Button>
          </AnimatedWrapper>
        </div>
      </section>

       <section className="py-24 sm:py-32 bg-card border-y border-border">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimatedWrapper>
                  <div className="max-w-xl">
                      <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Your 90-Day Transformation</h2>
                      <p className="mt-4 text-lg text-white/80" style={{lineHeight: 1.7}}>
                          Our discovery call isn't a sales pitch. It's the first step in a strategic partnership. We'll diagnose your current content ecosystem and co-create a custom 90-day plan designed for one thing: turning your expertise into undeniable authority and enterprise value.
                      </p>
                      <ul className="mt-6 space-y-3 text-white/80">
                          <li className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                              <span><span className="font-bold text-white">Full Content Audit:</span> We identify what's working, what's not, and where the untapped potential lies.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                              <span><span className="font-bold text-white">Bespoke 90-Day Playbook:</span> You get a clear, actionable roadmap with content pillars, formats, and distribution channels.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                              <span><span className="font-bold text-white">Transparent Pricing & Scope:</span> No surprises. We'll define the exact scope of our engagement and what you can expect.</span>
                          </li>
                      </ul>
                      <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                        <Link href="/contact">Book Your No-Obligation Call</Link>
                      </Button>
                  </div>
              </AnimatedWrapper>
              <AnimatedWrapper delay={200}>
                  <Card className="bg-background border-accent/30 shadow-lg shadow-accent/10">
                      <CardHeader>
                          <CardTitle className="text-2xl text-accent">What is a Custom Package?</CardTitle>
                          <CardDescription className="text-white/70">It's a tailored selection of our services, packaged into a 90-day sprint.</CardDescription>
                      </CardHeader>
                      <CardContent>
                          <p className="text-white/80">Every visionary brand is unique. That's why we don't do "one-size-fits-all." On our call, we'll listen to your goals and hand-pick the services—from YouTube production to content repurposing—that will generate the highest leverage for you right now.</p>
                          <p className="mt-4 font-bold text-white">Example Package for a Founder:</p>
                          <ul className="mt-2 list-disc list-inside text-sm text-white/70 space-y-1">
                              <li>2x Long-Form YouTube Videos/Month</li>
                              <li>16x Repurposed Short-Form Clips</li>
                              <li>8x LinkedIn/X Thought Leadership Posts</li>
                              <li>Weekly Content Performance Report</li>
                          </ul>
                      </CardContent>
                  </Card>
              </AnimatedWrapper>
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

      <section className="py-24 sm:py-32 bg-secondary/30">
        <div className="container mx-auto">
           <AnimatedWrapper className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Answers to Your Questions</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Clarity is kindness. Here are some answers to common questions we receive.
            </p>
          </AnimatedWrapper>
          <div className="mt-16 max-w-3xl mx-auto">
             <Accordion type="single" collapsible className="w-full">
                {vipFaqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold text-left text-white">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-white/80" style={{lineHeight: 1.7}}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
          </div>
           <AnimatedWrapper className="mt-12 text-center">
              <Button asChild variant="outline" size="lg" className="font-bold">
                  <Link href="/faq">See All FAQs</Link>
              </Button>
          </AnimatedWrapper>
        </div>
      </section>
    </>
  );
}
