
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/ui/page-header';
import { DownloadCloud } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Download The Free Growth OS | The ConteX',
    description: 'Get instant access to our acclaimed Growth OS. This is the operating system we use to forge industry titans. Download your free copy now.',
};

export default function GrowthOsPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
        <div className="flex flex-col items-center justify-center text-center">
            <PageHeader
                title={<>The ConteX Growth OS</>}
                subtitle="This isn't a list of 'hacks.' This is the operating system we use to forge industry titans. The principles within are a cheat code for building a legacy brand. Download it now."
            />

            <AnimatedWrapper delay={200}>
                <div className="mt-16">
                    <div 
                        data-ai-hint="document book"
                        className="bg-card border border-border p-8 rounded-lg shadow-2xl max-w-md mx-auto"
                    >
                        <img 
                            src="https://placehold.co/400x500.png" 
                            alt="Growth OS PDF Preview" 
                            className="rounded-md w-full h-auto object-cover shadow-lg"
                        />
                    </div>
                </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper delay={300}>
                <div className="mt-12">
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        You're one click away from the playbook that has built legendary brands.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-accent/40 hover:scale-105"
                    >
                        <a
                            href="https://drive.google.com/file/d/1CnV5yb52qCayWMEGNnVkmHqtcxhpvFPG/view?usp=drivesdk"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <DownloadCloud className="w-6 h-6 mr-3" />
                            Download The Free Growth OS
                        </a>
                    </Button>
                     <p className="mt-4 text-sm text-muted-foreground">
                        Clicking will open the PDF in a new tab.
                    </p>
                </div>
            </AnimatedWrapper>
        </div>
    </div>
  );
}
