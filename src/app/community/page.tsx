
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Users, Video, FileText, BrainCircuit, TrendingUp, BarChart } from 'lucide-react';
import Link from 'next/link';

const deliverables = [
  {
    icon: Video,
    title: 'Extensive Course Library',
    description: 'Deep-dive video modules and PDFs covering our entire growth framework.'
  },
  {
    icon: BrainCircuit,
    title: 'Content Strategy & Ideation',
    description: 'Master the art of crafting a content strategy that establishes you as an authority.'
  },
  {
    icon: FileText,
    title: 'Elite-Level Scripting',
    description: 'Learn to write scripts that hook and hold attention from the first second.'
  },
  {
    icon: TrendingUp,
    title: 'Market & Trend Analysis',
    description: 'Stay ahead of the curve by understanding what\'s working in the market right now.'
  },
  {
    icon: BarChart,
    title: 'Performance Analysis & Optimization',
    description: 'Learn to analyze your own data to double down on what works and cut what doesn\'t.'
  },
  {
    icon: Users,
    title: 'Weekly Live Q&A Sessions',
    description: 'Get your personal questions answered by our team in exclusive weekly calls.'
  }
];

export default function CommunityPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <AnimatedWrapper>
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline">
            The ConteX Inner Circle
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80" style={{ lineHeight: 1.6 }}>
            Stop guessing, start building. We've reverse-engineered the playbooks of content titans into a complete operating system for YouTube and Instagram growth. This is where you forge your legacy.
          </p>
        </section>
      </AnimatedWrapper>

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
                        <span className="text-5xl font-black text-white ml-2">$69</span>
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
