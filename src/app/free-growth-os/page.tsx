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
            title="The Growth OS"
            subtitle="Your Blueprint for Unstoppable Business and Personal Growth"
        />

        <div className="mt-20 max-w-4xl mx-auto space-y-12">
            <AnimatedWrapper>
                <section>
                    <h2 className="text-3xl font-bold font-headline text-accent mb-4">Introduction: Unlock Your Full Potential</h2>
                    <p className="text-lg text-white/80" style={{ lineHeight: 1.7 }}>
                        In today's dynamic landscape, growth isn't just an aspiration—it's a necessity. Whether you're a budding entrepreneur, a seasoned business owner, or an ambitious professional, the ability to strategically expand your reach, influence, and impact is paramount. This comprehensive guide, the "Growth OS," is designed to equip you with the principles, techniques, and actionable insights needed to not only survive but thrive. We will delve into the core strategies that drive business expansion and the art of cultivating a powerful personal brand, providing you with a complete framework for sustained success.
                    </p>
                </section>
            </AnimatedWrapper>

            <AnimatedWrapper delay={200}>
                <section>
                    <h2 className="text-3xl font-bold font-headline text-accent mb-4">Section 1: The Engine of Enterprise - Business Growth Strategies</h2>
                    <div className="space-y-6 text-lg text-white/80" style={{ lineHeight: 1.7 }}>
                        <p>
                            True business growth is not accidental; it's the result of deliberate strategy and relentless execution. Drawing insights from leading experts, we've identified core principles that propel businesses forward, ensuring not just survival, but market leadership. At its heart, growth is about understanding where your current strengths lie and where your future opportunities reside.
                        </p>
                        <h3 className="text-2xl font-bold text-white pt-4">The Core and Beyond: Where 80/20 Rules Apply</h3>
                        <p>
                            Eighty percent of your growth potential often lies within your existing operations. This means innovating in your core business – refining your products, optimizing your services, and deepening your customer relationships. This foundational work is non-negotiable for sustained success. However, to truly outpace the competition and achieve exponential growth, you must look beyond the familiar.
                        </p>
                        <p>
                            The remaining 20% of outperformance comes from strategically venturing into adjacencies. These are new markets, new product lines, or new business models that leverage your existing capabilities or customer insights. This expansion requires a keen eye for opportunity and a willingness to adapt. Consider these four rationales for successful adjacency moves:
                        </p>
                        <ul className="list-disc list-outside pl-5 space-y-2">
                            <li><strong>Customer Relationships:</strong> Deeply understanding your customers' pain points and unmet needs allows you to offer new solutions or expand into related services.</li>
                            <li><strong>Capabilities Leverage:</strong> Your existing assets, technologies, and skilled personnel can be repurposed or applied to new markets, creating new revenue streams.</li>
                            <li><strong>Value Chain Expansion:</strong> Moving upstream or downstream in your industry's value chain can unlock synergies and capture greater value.</li>
                            <li><strong>Disruption & Innovation:</strong> Identifying gaps in the market or inefficiencies in existing models can lead to groundbreaking business model innovations.</li>
                        </ul>
                        <h3 className="text-2xl font-bold text-white pt-4">Cultivating a Growth Mindset: Beyond the Numbers</h3>
                        <p>
                            Beyond market dynamics, internal culture plays a pivotal role. Building an innovation culture where new ideas are encouraged, tested, and scaled is crucial. This fosters agility and ensures your business remains at the forefront of change. Furthermore, in an increasingly conscious world, leveraging sustainability as an accelerant to growth is no longer optional. Environmentally and socially responsible practices not only attract a new generation of consumers but also drive efficiency and foster long-term resilience.
                        </p>
                        <p>
                            Finally, strategic financial management is key. This includes portfolio reallocation, a concept often referred to as 'shrinking to grow.' This involves divesting underperforming assets and reinvesting those resources into high-growth opportunities. Similarly, periodically pruning your portfolio ensures that your business remains lean, focused, and poised for healthy growth from a continually optimized base.
                        </p>
                         <div className="py-8 my-8">
                            <GrowthFlowchart />
                         </div>
                    </div>
                </section>
            </AnimatedWrapper>

            <AnimatedWrapper delay={400}>
                <section>
                    <h2 className="text-3xl font-bold font-headline text-accent mb-4">Section 2: The Art of Influence - Personal Branding for Impact</h2>
                    <div className="space-y-6 text-lg text-white/80" style={{ lineHeight: 1.7 }}>
                        <p>
                            Your personal brand is more than just a resume; it's your unique fingerprint in the professional world. It's how you're perceived, what you stand for, and the value you bring to every interaction. A strong personal brand amplifies your voice, opens doors to new opportunities, and establishes you as a recognized authority in your field.
                        </p>
                        <h3 className="text-2xl font-bold text-white pt-4">Defining Your Unique Identity</h3>
                        <p>
                            Building a powerful personal brand begins with introspection. You need to clearly articulate three core elements:
                        </p>
                        <ol className="list-decimal list-outside pl-5 space-y-2">
                            <li><strong>Your Unique Perspective:</strong> What makes you, you? This encompasses your background, experiences, culture, and even your identity. How do these elements shape your understanding of the world and your profession? Your unique lens is your superpower.</li>
                            <li><strong>Your Values and Purpose:</strong> What causes are you passionate about? What problems do you want to solve? Your values are the compass that guides your actions and defines your authentic self. Aligning your brand with your purpose creates a powerful, resonant message.</li>
                            <li><strong>Your Expertise:</strong> What skills, knowledge, and insights do you possess that add tangible value? This isn't just about what you do, but how you apply your expertise to make a difference. Whether you're a master strategist, a creative visionary, or a data wizard, your expertise is the foundation of your credibility.</li>
                        </ol>
                        <p>
                           By combining these three elements, you forge a distinct personal brand that sets you apart.
                        </p>
                        <h3 className="text-2xl font-bold text-white pt-4">Strategies for Amplifying Your Brand</h3>
                        <p>
                            Once you've defined your brand, the next step is to actively cultivate and amplify it. This involves consistent effort and strategic engagement:
                        </p>
                         <ul className="list-disc list-outside pl-5 space-y-2">
                            <li><strong>Exercise Your Brand:</strong> Don't just talk about your brand; live it. Seek out projects, initiatives, and roles that align with your unique perspective, values, and expertise. This allows you to demonstrate your brand in action and build a portfolio of relevant work.</li>
                            <li><strong>Connect with Like-minded Colleagues:</strong> Surround yourself with individuals who inspire you, challenge your thinking, and share your passions. Networking isn't just about exchanging business cards; it's about building meaningful relationships that foster mutual growth and support.</li>
                            <li><strong>Create and Share Content:</strong> Become a thought leader by consistently producing and sharing valuable content. This could include articles, blog posts, social media updates, videos, or presentations. Don't just curate; add your unique perspective and insights to every piece of content you share.</li>
                            <li><strong>Seek Opportunities:</strong> As your personal brand gains traction, new opportunities will emerge. Be proactive in seeking speaking engagements, collaborations, mentorship roles, or leadership positions that allow you to further showcase your expertise and expand your influence.</li>
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
                    <CardHeader>
                        <CardTitle className="text-3xl font-headline text-accent">Your Journey to Unstoppable Growth Starts Now</CardTitle>
                        <CardDescription className="text-lg text-white/70 pt-2">
                            {isSubmitted
                                ? "Thank you! Please select a time that works for you below."
                                : "This blueprint is just the beginning. To get your free Growth OS and unlock the next step, please provide your details. This isn't just a download; it's the first step towards building your legacy."}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {!isSubmitted ? (
                            <GrowthOsForm onSuccess={handleSuccess} />
                        ) : (
                            <div className="aspect-[3/4] sm:aspect-video rounded-lg overflow-hidden border border-border bg-background mt-4">
                                <iframe
                                src="https://calendly.com/thecontexagency09/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=101116&text_color=ffffff&primary_color=ff0000"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Calendly Booking"
                                ></iframe>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
      </AnimatedWrapper>
    </div>
  );
}
