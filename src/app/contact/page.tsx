
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { PageHeader } from '@/components/ui/page-header';
import type { Metadata } from 'next';
import { CustomPlanForm } from './custom-plan-form';

export const metadata: Metadata = {
    title: 'Book a Consultation | The ConteX',
    description: 'Ready to build your legacy? Customize your strategic content plan and book a consultation with The ConteX, a premier organic marketing agency.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
       <AnimatedWrapper delay={200}>
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
               <PageHeader 
                title="Start The Conversation"
                subtitle="You're one step away from a bespoke strategy. Select the services you need below, and then schedule your call to lock in your plan with our team."
              />
            </div>
            <CustomPlanForm />
         </div>
      </AnimatedWrapper>
    </div>
  );
}
