
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Users, Video, FileText, BrainCircuit, TrendingUp, BarChart } from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Community for Content Marketing Mastery | The ConteX',
    description: 'Join The ConteX community to master content marketing for YouTube and Instagram. Learn our organic marketing frameworks and grow your business.',
};

const deliverables = [
  {
    icon: Video,
    title: 'Extensive Course Library',
    description: 'Deep-dive video modules and PDFs covering our entire growth framework for YouTube and Instagram.'
  },
  {
    icon: BrainCircuit,
    title: 'Content Strategy & Ideation',
    description: 'Master crafting a content strategy, ideation, and defining upload frequency to establish authority.'
  },
  {
    icon: FileText,
    title: 'Elite-Level Scripting',
    description: 'Learn to write scripts that hook and hold attention from the first second to the last.'
  },
  {
    icon: TrendingUp,
    title: 'Market & Trend Analysis',
    description: 'Stay ahead of the curve by understanding what is working in the market right now.'
  },
  {
    icon: BarChart,
    title: 'Performance Analysis',
    description: 'Learn to analyze your content performance to double down on what works and cut what does not.'
  },
  {
    icon: Users,
    title: 'Weekly Live Q&A Sessions',
    description: 'Get your personal questions answered by our team in exclusive weekly group calls.'
  }
];

export default function CommunityPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <PageHeader 
        title="The ConteX Inner Circle"
        subtitle="Stop guessing, start building. We've reverse-engineered the playbooks of content titans into a complete operating system for YouTube and Instagram growth. This is where you forge your legacy."
      />

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <AnimatedWrapper delay={150} className="lg:col-span-2">
            <h2 className="text-3xl font-bold font-headline text-white mb-8">What You Will Master</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deliverables.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-secondary text-accent">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-white">{item.title}</h3>
                            <p className="text-white/70 mt-1">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </AnimatedWrapper>
        
        <AnimatedWrapper delay={300} className="lg:col-span-1">
            <Card className="bg-card border-border sticky top-28">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold font-headline text-white">Join The Inner Circle</CardTitle>
                    <CardDescription className="text-white/70">Become a content titan.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="my-4 text-center">
                        <span className="text-2xl font-bold text-muted-foreground line-through">$99</span>
                        <span className="text-5xl font-black text-white ml-2">$49</span>
                        <p className="text-accent font-semibold mt-2">Limited Time Offer</p>
                    </div>
                    <Button asChild size="lg" className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-7 rounded-md">
                        <Link href="https://whop.com/the-conte-x/?store=true" target="_blank">Buy Now & Get Instant Access</Link>
                    </Button>
                    <ul className="mt-8 space-y-3 text-sm text-white/80">
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-accent" />
                            <span>Instant access to all course material</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-accent" />
                            <span>Invitation to private community</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-accent" />
                            <span>Join the next weekly Q&A call</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
