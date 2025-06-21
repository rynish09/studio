
'use client';

import { useState } from 'react';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader, Wand2 } from 'lucide-react';
import { generateContentStrategy, type ContentStrategyOutput } from '@/ai/flows/content-strategy-flow';

export default function ContentStrategyPage() {
  const [niche, setNiche] = useState('');
  const [audience, setAudience] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ContentStrategyOutput | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await generateContentStrategy({ niche, audience });
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
            AI Content Strategy
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80" style={{ lineHeight: 1.6 }}>
            Define your niche and target audience, and let our AI generate a foundational content strategy with topic ideas and posting schedules.
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
                  <Label htmlFor="niche" className="text-white">Your Niche</Label>
                  <Input 
                    id="niche" 
                    placeholder="e.g., SaaS for startups, Fitness coaching" 
                    className="mt-2 bg-background text-white" 
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="audience" className="text-white">Target Audience</Label>
                  <Textarea 
                    id="audience" 
                    placeholder="e.g., Early-stage founders, busy professionals over 30" 
                    className="mt-2 bg-background text-white" 
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                  />
                </div>
                
                {error && (
                  <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold" disabled={loading || !niche || !audience}>
                  {loading ? (
                    <>
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                     <Wand2 className="mr-2 h-4 w-4" />
                     Generate Strategy
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
              <CardTitle className="text-2xl font-bold font-headline">Generated Plan</CardTitle>
              <CardDescription>Your AI-powered content plan will appear here.</CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6 text-white">
                  <div>
                    <h3 className="font-bold text-accent text-lg">Topic Pillars</h3>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-white/80">
                      {result.topicPillars.map((pillar, i) => <li key={i}>{pillar}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-accent text-lg">Sample Headlines</h3>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-white/80">
                      {result.sampleHeadlines.map((headline, i) => <li key={i}>{headline}</li>)}
                    </ul>
                  </div>
                   <div>
                    <h3 className="font-bold text-accent text-lg">Posting Schedule</h3>
                    <p className="mt-2 text-white/80">{result.postingSchedule}</p>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-background rounded-md text-white/70 min-h-[200px] flex items-center justify-center">
                  Awaiting input...
                </div>
              )}
            </CardContent>
          </Card>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
