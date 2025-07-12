import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { PageHeader } from '@/components/ui/page-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Thank You & Book Your Call | The ConteX',
    description: 'Your request has been received. Please select a time for your strategy session on the calendar.',
};

export default function ThankYouPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <PageHeader 
        title="Thank You. Final Step."
        subtitle="Your request has been sent. Now, let's get your strategy session on the books. Please choose a time that works best for you below."
      />
      
      <AnimatedWrapper delay={200}>
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://calendly.com/thecontexagency09/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0f19&text_color=ffffff&primary_color=ef4444"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly Booking"
            ></iframe>
          </div>
        </div>
      </AnimatedWrapper>
    </div>
  );
}
