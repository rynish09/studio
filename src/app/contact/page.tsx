import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ContactForm } from './contact-form';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <AnimatedWrapper>
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline">
            Start The Conversation
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80" style={{ lineHeight: 1.6 }}>
            Choose the path that best suits your ambitions. Whether you're ready for a deep dive or simply wish to get our strategic insights, we're ready to connect.
          </p>
        </section>
      </AnimatedWrapper>
      
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-12">
        <AnimatedWrapper className="lg:col-span-3">
          <Card className="bg-card border-border h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline text-white">Book a 1-on-1 Strategy Session</CardTitle>
              <CardDescription className="text-white/70">
                This is a no-obligation, 30-minute deep-dive call to deconstruct your content challenges and map out a potent growth trajectory.
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
                Not ready for a call? Get our playbook of curated resources and systems by joining our private mailing list.
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
