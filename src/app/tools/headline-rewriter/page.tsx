'use client';

import { useState } from 'react';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader, Wand2 } from 'lucide-react';
import { rewriteHeadlines, type HeadlineRewriterOutput } from '@/ai/flows/headline-rewriter-flow';

export default function HeadlineRewriterPage() {
  const [headline, setHeadline] = useState('');
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<HeadlineRewriterOutput | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await rewriteHeadlines({ headline, niche });
      setResult(response);
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
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
                  <Input 
                    id="headline" 
                    placeholder="e.g., 5 Mistakes That Are Costing You Sales" 
                    className="mt-2 bg-background text-white" 
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="niche" className="text-white">Your Niche</Label>
                  <Input 
                    id="niche" 
                    placeholder="e.g., E-commerce, Personal Finance" 
                    className="mt-2 bg-background text-white"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                  />
                </div>
                
                {error && (
                  <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold" disabled={loading || !headline || !niche}>
                  {loading ? (
                    <>
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                      Rewriting...
                    </>
                  ) : (
                    <>
                     <Wand2 className="mr-2 h-4 w-4" />
                     Rewrite Headlines
                    </>
                  )}
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
                {result ? (
                  result.rewrittenHeadlines.map((h, index) => (
                    <div key={index} className="p-3 bg-background rounded-md text-white">
                      {h}
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
