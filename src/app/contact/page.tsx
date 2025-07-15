
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { PageHeader } from '@/components/ui/page-header';
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'Contact Us & Get Free Resources | The ConteX',
    description: 'Schedule a strategy call or get instant access to our acclaimed Growth OS. Let\'s start building your legacy.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
       <AnimatedWrapper>
         <PageHeader 
            title="Connect With Us"
            subtitle="Ready to build your legacy? The first step is a strategic conversation. Book a complimentary, no-obligation strategy call below."
          />
      </AnimatedWrapper>
       
       <div className="mt-20 max-w-4xl mx-auto">
            <AnimatedWrapper delay={200}>
                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle className="text-3xl font-headline text-accent">Book Your Strategy Call</CardTitle>
                        <CardDescription className="text-lg text-white/70 pt-2">
                            This isn't a sales pitch. It's a strategic session to diagnose your content ecosystem and co-create a custom 90-day growth plan.
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
            </AnimatedWrapper>
       </div>
    </div>
  );
}
