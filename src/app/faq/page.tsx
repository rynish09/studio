
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { PageHeader } from '@/components/ui/page-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqList } from '@/lib/faq-list';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | The ConteX',
    description: 'Find answers to common questions about our content agency, custom packages, pricing, process, and the results you can expect.',
};

export default function FaqPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <PageHeader 
        title="Frequently Asked Questions"
        subtitle="Clarity is kindness. Here are direct answers to the most common questions about our process, pricing, and partnerships."
      />

      <section className="mt-20 max-w-4xl mx-auto">
        <AnimatedWrapper>
            <Accordion type="single" collapsible className="w-full">
            {faqList.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-xl font-bold text-left text-white/90 hover:text-accent transition-colors">
                    {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-white/80 pt-2" style={{lineHeight: 1.7}}>
                    {faq.answer}
                </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </AnimatedWrapper>
      </section>

      <AnimatedWrapper delay={300}>
        <section className="mt-24 text-center">
            <h3 className="text-3xl font-bold font-headline text-white">Have a Different Question?</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                The best way to get answers is to talk with us directly. Let's discuss your specific goals on a no-obligation strategy call.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md">
                <Link href="/contact">Book Your Strategy Call</Link>
            </Button>
        </section>
      </AnimatedWrapper>
    </div>
  );
}
