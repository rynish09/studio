
'use client';

import { useState } from 'react';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GrowthFlowchart } from '@/components/growth-flowchart';
import { PersonalBrandingFlowchart } from '@/components/personal-branding-flowchart';
import { GrowthOsForm } from './growth-os-form';

export default function GrowthOsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto py-24 sm:py-32">
        <PageHeader
            title="THE FREE GROWTH OS"
            subtitle="Your Blueprint for Unstoppable Business and Personal Growth"
        />

        {!isSubmitted ? (
            <AnimatedWrapper delay={200}>
                <div className="mt-20 max-w-2xl mx-auto">
                    <Card className="bg-card border-border">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl font-headline text-accent">Unlock Your Blueprint</CardTitle>
                            <CardDescription className="text-lg text-white/70 pt-2">
                                To access the complete Growth OS, provide your details below. This is the first step towards building your legacy.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <GrowthOsForm onSuccess={handleSuccess} />
                        </CardContent>
                    </Card>
                </div>
            </AnimatedWrapper>
        ) : (
            <>
                <div className="mt-20 max-w-4xl mx-auto space-y-12">
                    <AnimatedWrapper>
                        <section>
                            <h2 className="text-3xl font-bold font-headline text-accent mb-4">Introduction: Unlock Your Full Potential</h2>
                            <p className="text-lg text-white/80" style={{ lineHeight: 1.7 }}>
                                In today's landscape, growth isn't an aspiration—it's a necessity. Whether you're a budding entrepreneur or a seasoned professional, the ability to strategically expand your reach and impact is paramount. This "Growth OS" is designed to equip you with the principles and actionable insights needed to thrive. We will delve into core strategies for business expansion and the art of cultivating a powerful personal brand, providing a complete framework for sustained success.
                            </p>
                        </section>
                    </AnimatedWrapper>

                    <AnimatedWrapper delay={200}>
                        <section>
                            <h2 className="text-3xl font-bold font-headline text-accent mb-4">Section 1: The Engine of Enterprise - Business Growth</h2>
                            <div className="space-y-6 text-lg text-white/80" style={{ lineHeight: 1.7 }}>
                                <p>
                                    True business growth is not accidental; it's the result of deliberate strategy. At its heart, growth is about understanding your current strengths and future opportunities.
                                </p>
                                <h3 className="text-2xl font-bold text-white pt-4">The Core and Beyond: Where 80/20 Rules Apply</h3>
                                <p>
                                    Eighty percent of your growth potential often lies within your existing operations—innovating in your core business. This is non-negotiable. However, to truly achieve exponential growth, you must look beyond. The remaining 20% of outperformance comes from strategically venturing into adjacencies: new markets, products, or business models that leverage your existing capabilities.
                                </p>
                                <ul className="list-disc list-outside pl-5 space-y-2">
                                    <li><strong>Customer Relationships:</strong> Use deep customer understanding to offer new solutions.</li>
                                    <li><strong>Capabilities Leverage:</strong> Repurpose your existing assets and skills for new markets.</li>
                                    <li><strong>Value Chain Expansion:</strong> Move upstream or downstream to unlock new synergies.</li>
                                    <li><strong>Disruption & Innovation:</strong> Identify market gaps to create groundbreaking business models.</li>
                                </ul>
                                <h3 className="text-2xl font-bold text-white pt-4">Cultivating a Growth Mindset</h3>
                                <p>
                                    Beyond markets, an internal culture of innovation is pivotal. Building a system where new ideas are encouraged and scaled fosters agility. Furthermore, leveraging sustainability as a growth accelerant and strategic financial management—like divesting underperforming assets to reinvest in high-growth opportunities—ensures your business remains lean, focused, and poised for healthy growth.
                                </p>
                                 <div className="py-8 my-8">
                                    <GrowthFlowchart />
                                 </div>
                            </div>
                        </section>
                    </AnimatedWrapper>

                    <AnimatedWrapper delay={400}>
                        <section>
                            <h2 className="text-3xl font-bold font-headline text-accent mb-4">Section 2: The Art of Influence - Personal Branding</h2>
                            <div className="space-y-6 text-lg text-white/80" style={{ lineHeight: 1.7 }}>
                                <p>
                                    Your personal brand is your unique fingerprint in the professional world. It's how you're perceived, what you stand for, and the value you bring. A strong personal brand amplifies your voice, opens doors, and establishes you as a recognized authority.
                                </p>
                                <h3 className="text-2xl font-bold text-white pt-4">Defining Your Unique Identity</h3>
                                <p>
                                    Building a powerful brand begins with introspection. You must clearly articulate three core elements:
                                </p>
                                <ol className="list-decimal list-outside pl-5 space-y-2">
                                    <li><strong>Your Unique Perspective:</strong> How does your background, experience, and identity shape your view? Your unique lens is your superpower.</li>
                                    <li><strong>Your Values and Purpose:</strong> What problems do you want to solve? Aligning your brand with your purpose creates a powerful, resonant message.</li>
                                    <li><strong>Your Expertise:</strong> What skills and knowledge do you possess that add tangible value? Your expertise is the foundation of your credibility.</li>
                                </ol>
                                <h3 className="text-2xl font-bold text-white pt-4">Strategies for Amplifying Your Brand</h3>
                                <p>
                                    Once defined, you must actively cultivate your brand:
                                </p>
                                 <ul className="list-disc list-outside pl-5 space-y-2">
                                    <li><strong>Exercise Your Brand:</strong> Live it. Seek projects that align with your brand to demonstrate it in action.</li>
                                    <li><strong>Connect with Colleagues:</strong> Build meaningful relationships that foster mutual growth.</li>
                                    <li><strong>Create and Share Content:</strong> Become a thought leader by consistently producing valuable content with your unique insights.</li>
                                    <li><strong>Seek Opportunities:</strong> Proactively seek speaking engagements, collaborations, and leadership roles to expand your influence.</li>
                                </ul>
                                <div className="py-8 my-8">
                                   <PersonalBrandingFlowchart />
                                </div>
                            </div>
                        </section>
                    </AnimatedWrapper>
                </div>

                <AnimatedWrapper delay={600}>
                     <div className="mt-20 max-w-4xl mx-auto">
                        <Card className="bg-card border-border">
                            <CardHeader className="text-center">
                                <CardTitle className="text-3xl font-headline text-accent">Your Journey to Growth Starts Now</CardTitle>
                                <CardDescription className="text-lg text-white/70 pt-2">
                                    Thank you. Your blueprint is unlocked. To turn these insights into action, please select a time for your complimentary strategy call below.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-[3/4] sm:aspect-video rounded-lg overflow-hidden border border-border bg-background mt-4">
                                    <iframe
                                    src="https://calendly.com/thecontexagency09/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=101116&text_color=ffffff&primary_color=ff0000"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    title="Calendly Booking"
                                    ></iframe>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
              </AnimatedWrapper>
            </>
        )}
    </div>
  );
}
