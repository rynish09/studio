import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { PageHeader } from '@/components/ui/page-header';
import type { Metadata } from 'next';
import { CustomPlanForm } from '../contact/custom-plan-form';

export const metadata: Metadata = {
  title: 'Customize Your Growth Plan | The ConteX',
  description:
    'Build your custom organic marketing and content plan. Select the services you need and book a call to get started with The ConteX agency.',
};

export default function CustomPlanPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <PageHeader
        title="Build Your Custom Growth Package"
        subtitle="You're one step away from a bespoke strategy. Select the services you need below, and then schedule your call to lock in your plan with our team."
      />

      <AnimatedWrapper delay={200} className="mt-20 max-w-4xl mx-auto">
        <CustomPlanForm />
      </AnimatedWrapper>
    </div>
  );
}