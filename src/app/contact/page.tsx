
'use client';

import { useState } from 'react';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ContactForm } from './contact-form';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto py-24 sm:py-32">
       <AnimatedWrapper>
         <PageHeader 
            title="Connect With Us"
            subtitle="Ready to build your legacy? The first step is a strategic conversation. Complete the form below to book a complimentary, no-obligation strategy call."
          />
      </AnimatedWrapper>
       
       <div className="mt-20 max-w-4xl mx-auto">
            <AnimatedWrapper delay={200}>
                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle className="text-3xl font-headline text-accent">Book Your Strategy Call</CardTitle>
                        <CardDescription className="text-lg text-white/70 pt-2">
                            {isSubmitted
                                ? "Thank you! Please select a time that works for you below."
                                : "This isn't a sales pitch. It's a strategic session. First, please provide your details so we can prepare for our call."}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {!isSubmitted ? (
                            <ContactForm onSuccess={handleSuccess} />
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
            </AnimatedWrapper>
       </div>
    </div>
  );
}
