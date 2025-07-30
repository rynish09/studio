
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/ui/page-header';
import { CheckCircle, ShieldCheck, Users, Target, Handshake } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Our 2X Revenue Guarantee | The ConteX',
    description: 'Learn about The ConteX\'s 2X Organic Revenue Guarantee. We partner with qualifying businesses to double their organic revenue in 90 days, or we work for free.',
};

const guaranteeFeatures = [
    {
        icon: Target,
        title: 'A Bold Promise',
        description: 'We commit to doubling your monthly revenue from organic channels within 90 days of our partnership. This is our confident pledge to your growth.',
    },
    {
        icon: ShieldCheck,
        title: 'Our Ironclad Commitment',
        description: 'If we don\'t achieve the mutually agreed-upon 2X revenue target, we continue working at the full scope of our engagement, for free, until the goal is met.',
    },
    {
        icon: Handshake,
        title: 'A True Partnership',
        description: 'This model aligns our success directly with yours. We are not a vendor; we are your strategic partner, invested in generating tangible enterprise value for you.',
    },
];

export default function GuaranteePage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <PageHeader
        title="Our 2X Revenue Guarantee"
        subtitle="We don't just promise results; we underwrite them. This is our commitment to forging a true partnership where your success is the only metric that matters."
      />

      <AnimatedWrapper delay={200}>
        <section className="mt-24 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-headline text-white text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {guaranteeFeatures.map((feature, index) => (
                    <Card key={index} className="bg-card border-border text-center flex flex-col items-center p-6">
                        <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-secondary text-accent border-2 border-border shadow-lg mb-4">
                            <feature.icon className="w-8 h-8"/>
                        </div>
                        <CardHeader className="p-0">
                            <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-4">
                            <p className="text-white/70">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper delay={400}>
        <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="max-w-xl">
                <h2 className="text-3xl font-bold font-headline text-accent">Who is a Qualifying Partner?</h2>
                <p className="mt-4 text-lg text-white/80" style={{lineHeight: 1.7}}>
                    Our guarantee is designed for established businesses and experts who are poised for aggressive growth and ready to commit to a strategic partnership.
                </p>
                <ul className="mt-6 space-y-3 text-white/80">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span><span className="font-bold text-white">Proven Business Model:</span> You have a clear, validated offer and understand your target market.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span><span className="font-bold text-white">Existing Customer Base:</span> You have an audience or customer base that can be further leveraged and monetized.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span><span className="font-bold text-white">Commitment to Partnership:</span> You are ready for a collaborative 90-day strategic sprint and are prepared to provide the necessary inputs.</span>
                    </li>
                </ul>
            </div>
             <div>
                <Card className="bg-background border-accent/30 shadow-lg shadow-accent/10">
                    <CardHeader>
                        <CardTitle className="text-2xl text-accent">Why Do We Offer This?</CardTitle>
                        <CardDescription className="text-white/70">To remove your risk and demonstrate our conviction.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-white/80">We believe in our process because we've seen it work. The guarantee forces a level of rigor and strategic alignment that typical agency relationships lack. It ensures we are selective about our partners and fully committed to delivering transformative, not just incremental, results. Your growth is our benchmark for success.</p>
                        <p className="mt-4 text-xs text-muted-foreground">The specific revenue targets and terms are mutually agreed upon during our strategic discovery phase before any commitment is made.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper delay={600}>
        <section className="mt-24 text-center">
            <h3 className="text-3xl font-bold font-headline text-white">Ready to Partner with Conviction?</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                If you meet the criteria and are ready for exponential growth, the next step is a strategic conversation.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md">
                <Link href="/contact">Book Your No-Obligation Call</Link>
            </Button>
        </section>
      </AnimatedWrapper>
    </div>
  );
}
