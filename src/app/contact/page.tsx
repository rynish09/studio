
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ContactForm } from './contact-form';
import { PageHeader } from '@/components/ui/page-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Our Content Agency | The ConteX',
    description: 'Connect with The ConteX, a leading organic marketing agency. Book a strategy session to discuss your content marketing needs and start building your brand.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <PageHeader 
        title="Start The Conversation"
        subtitle="Choose the path that best suits your ambitions. Whether you're ready for a deep dive with our content agency or simply wish to get our strategic insights, we're ready to connect."
      />
      
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-12">
        <AnimatedWrapper className="lg:col-span-3">
          <Card className="bg-card border-border h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline text-white">Book a 1-on-1 Strategy Session</CardTitle>
              <CardDescription className="text-white/70">
                This is a no-obligation, 30-minute deep-dive call with our content agency to deconstruct your challenges and map out a potent growth trajectory.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <iframe
                  src="https://calendly.com/thecontexagency09/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0f19&text_color=ffffff&primary_color=ef4444"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Calendly Booking"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </AnimatedWrapper>
        
        <AnimatedWrapper delay={200} className="lg:col-span-2">
          <Card className="bg-card border-border h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline text-white">Get The Free Growth OS</CardTitle>
              <CardDescription className="text-white/70">
                Not ready for a call? Get our playbook of curated resources and systems for creating class content by joining our private mailing list.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-center">
              <ContactForm />
            </CardContent>
          </Card>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
