
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { PageHeader } from '@/components/ui/page-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Book a Consultation | The ConteX',
    description: 'Schedule your free, no-obligation strategy call with The ConteX. Let\'s build your custom 90-day content playbook.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
       <AnimatedWrapper delay={200}>
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
               <PageHeader 
                title="Book Your Strategy Call"
                subtitle="This 30-minute call is the first step. We'll discuss your goals, audit your current strategy, and determine if we're the right partner to build your legacy. There's no pressure and no obligation."
              />
            </div>
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="aspect-[3/4] sm:aspect-video rounded-lg overflow-hidden border border-border bg-card">
                <iframe
                  src="https://calendly.com/thecontexagency09/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=101116&text_color=ffffff&primary_color=ff0000"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Calendly Booking"
                ></iframe>
              </div>
            </div>
         </div>
      </AnimatedWrapper>
    </div>
  );
}
