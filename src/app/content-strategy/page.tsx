'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitLead } from '@/app/contact/actions';

import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader, Wand2, Lightbulb, CheckCircle, BarChart2 } from 'lucide-react';
import { generateContentStrategy, type ContentStrategyOutput } from '@/ai/flows/content-strategy-flow';
import { PageHeader } from '@/components/ui/page-header';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
});

const strategyFormSchema = z.object({
  niche: z.string().min(3, "Please describe your niche."),
  audience: z.string().min(10, "Please describe your target audience in more detail."),
});

export default function ContentStrategyPage() {
  const [isGated, setIsGated] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ContentStrategyOutput | null>(null);

  const leadForm = useForm<z.infer<typeof leadFormSchema>>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: { name: "", email: "" },
  });

  const strategyForm = useForm<z.infer<typeof strategyFormSchema>>({
    resolver: zodResolver(strategyFormSchema),
    defaultValues: { niche: "", audience: "" },
  });

  const handleLeadSubmit = (values: z.infer<typeof leadFormSchema>) => {
    submitLead(values); // Fire and forget lead submission
    setIsGated(false);
  };

  const handleStrategySubmit = async (values: z.infer<typeof strategyFormSchema>) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await generateContentStrategy(values);
      setResult(response);
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-24 sm:py-32">
      <PageHeader
        title="AI Content Strategy Generator"
        subtitle="Our proprietary AI tool, trained on the playbooks of content titans. Define your niche and audience to receive a bespoke, actionable content strategy designed to build authority."
      />

      <div className="mt-20 max-w-6xl mx-auto">
        {isGated ? (
          <AnimatedWrapper>
            <Card className="bg-card border-border max-w-lg mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold font-headline">Unlock The AI Strategist</CardTitle>
                <CardDescription>Enter your details to gain instant access to our free tool.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...leadForm}>
                  <form onSubmit={leadForm.handleSubmit(handleLeadSubmit)} className="space-y-6">
                    <FormField control={leadForm.control} name="name" render={({ field }) => (
                      <FormItem>
                        <Label>Name</Label>
                        <FormControl>
                          <Input placeholder="e.g., Alex Hormozi" {...field} className="bg-background text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={leadForm.control} name="email" render={({ field }) => (
                      <FormItem>
                        <Label>Email</Label>
                        <FormControl>
                          <Input placeholder="e.g., alex@acquisition.com" type="email" {...field} className="bg-background text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                      Access The Tool
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </AnimatedWrapper>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedWrapper delay={150}>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold font-headline">Generator</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...strategyForm}>
                    <form onSubmit={strategyForm.handleSubmit(handleStrategySubmit)} className="space-y-6">
                      <FormField control={strategyForm.control} name="niche" render={({ field }) => (
                        <FormItem>
                          <Label>Your Niche</Label>
                          <FormControl>
                             <Input placeholder="e.g., SaaS for startups, Fitness coaching" {...field} className="mt-2 bg-background text-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                       )} />
                       <FormField control={strategyForm.control} name="audience" render={({ field }) => (
                          <FormItem>
                            <Label>Target Audience</Label>
                            <FormControl>
                              <Textarea placeholder="e.g., Early-stage founders, busy professionals over 30" {...field} className="mt-2 bg-background text-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                       )} />
                      
                      {error && (
                        <Alert variant="destructive">
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}
                      
                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold" disabled={loading}>
                        {loading ? (
                          <><Loader className="mr-2 h-4 w-4 animate-spin" />Generating...</>
                        ) : (
                          <><Wand2 className="mr-2 h-4 w-4" />Generate Strategy</>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </AnimatedWrapper>

            <AnimatedWrapper delay={300}>
              <Card className="bg-card border-border min-h-[400px]">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold font-headline">Your Generated Playbook</CardTitle>
                  <CardDescription>Your AI-powered content plan will appear here.</CardDescription>
                </CardHeader>
                <CardContent>
                  {result ? (
                    <div className="space-y-8 text-white">
                      <div>
                        <h3 className="flex items-center gap-2 font-bold text-accent text-xl mb-3"><BarChart2 className="w-5 h-5"/>Current Trends</h3>
                        <ul className="space-y-2 text-white/80 pl-4">
                          {result.trendingTopics.map((trend, i) => <li key={i} className="border-l-2 border-accent/30 pl-3">{trend}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h3 className="flex items-center gap-2 font-bold text-accent text-xl mb-4"><Lightbulb className="w-5 h-5"/>Top 5 Content Ideas</h3>
                        <div className="space-y-4">
                          {result.contentIdeas.map((idea, i) => 
                            <div key={i} className="p-4 bg-secondary/60 rounded-lg border border-border">
                              <h4 className="font-bold text-white">{i+1}. {idea.title}</h4>
                              <p className="text-white/70 mt-1 text-sm">{idea.description}</p>
                            </div>
                          )}
                        </div>
                      </div>
                       <div>
                        <h3 className="flex items-center gap-2 font-bold text-accent text-xl mb-3"><CheckCircle className="w-5 h-5"/>Your Next Step</h3>
                        <p className="mt-2 text-white/80 bg-secondary/30 p-4 rounded-md border border-dashed border-accent/40" style={{lineHeight: 1.7}}>{result.callToAction}</p>
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
        )}
      </div>
    </div>
  );
}
