'use client';

import { useState } from 'react';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from 'lucide-react';

export default function HeadlineRewriterPage() {
  const [results, setResults] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // AI logic will be implemented here. For now, we show a message.
  };

  return (
    <div className="container mx-auto py-24 sm:py-32">
      <AnimatedWrapper>
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline">
            SEO Headline Rewriter
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80" style={{ lineHeight: 1.6 }}>
            Input a successful headline from your niche. Our AI will rewrite a series of new headlines that emulate its winning components for enhanced SEO.
          </p>
        </section>
      </AnimatedWrapper>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <AnimatedWrapper delay={150}>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-headline">Generator</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="headline" className="text-white">Winning Headline</Label>
                  <Input id="headline" placeholder="e.g., 5 Mistakes That Are Costing You Sales" className="mt-2 bg-background text-white" />
                </div>
                <div>
                  <Label htmlFor="niche" className="text-white">Your Niche</Label>
                  <Input id="niche" placeholder="e.g., E-commerce, Personal Finance" className="mt-2 bg-background text-white" />
                </div>
                <Alert className="bg-secondary">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle className="text-accent">Feature Coming Soon!</AlertTitle>
                  <AlertDescription className="text-white/80">
                    The AI backend for this tool is being finalized. Stay tuned for updates.
                  </AlertDescription>
                </Alert>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold" disabled>
                  Rewrite Headlines
                </Button>
              </form>
            </CardContent>
          </Card>
        </AnimatedWrapper>

        <AnimatedWrapper delay={300}>
          <Card className="bg-card border-border min-h-[400px]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-headline">Generated Headlines</CardTitle>
              <CardDescription>AI-powered suggestions will appear here.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {results.length > 0 ? (
                  results.map((headline, index) => (
                    <div key={index} className="p-3 bg-background rounded-md text-white">
                      {headline}
                    </div>
                  ))
                ) : (
                  <div className="p-4 bg-background rounded-md text-white/70 min-h-[200px] flex items-center justify-center">
                    Awaiting input...
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
