
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { PageHeader } from '@/components/ui/page-header';
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ContactForm } from './contact-form';

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
            subtitle="Whether you're ready to build your legacy or seeking invaluable resources to start, you're in the right place. Choose your path below."
          />
      </AnimatedWrapper>
       
       <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedWrapper delay={200}>
                <Card className="bg-card border-border h-full">
                    <CardHeader>
                        <CardTitle className="text-3xl font-headline text-accent">Option 1: Book a Strategy Call</CardTitle>
                        <CardDescription className="text-lg text-white/70 pt-2">
                            For established experts ready for a strategic partnership. Let's build your 90-day growth playbook together.
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
            
            <AnimatedWrapper delay={300}>
                <Card className="bg-card border-border h-full">
                    <CardHeader>
                        <CardTitle className="text-3xl font-headline text-accent">Option 2: Get The Free Growth OS</CardTitle>
                        <CardDescription className="text-lg text-white/70 pt-2">
                            Access the exact frameworks we use to build industry titans. Enter your details for instant access.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ContactForm />
                    </CardContent>
                </Card>
            </AnimatedWrapper>
       </div>
    </div>
  );
}
