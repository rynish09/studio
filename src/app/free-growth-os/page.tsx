
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Content OS | The ConteX',
    description: 'The operating system for organic growth. Learn our four-phase framework for building a content engine that drives results.',
};

const frameworkPillars = [
  {
    name: 'STRATEGIZE',
    description: 'Deep Dive & Content Strategy. We immerse ourselves in your brand, market & competitors to define your unique voice & content pillars.',
  },
  {
    name: 'CREATE',
    description: 'Content Production & Execution. Our team of specialists brings the strategy to life with elite-level content creation.',
  },
  {
    name: 'DISTRIBUTE',
    description: 'Platform-Specific Publishing. We manage the entire distribution process, ensuring your content reaches the right audience on the right platform.',
  },
  {
    name: 'ANALYZE',
    description: 'Performance Tracking & Optimization. We continuously monitor performance, using data to refine our approach and double down on what\'s working.',
  },
];

const phases = [
  {
    name: 'PHASE 1: STRATEGIZE',
    subtitle: 'DEEP DIVE & CONTENT STRATEGY',
    items: [
      { title: 'Initial Consultation', description: 'A 60-minute deep dive call to understand your business, goals, and target audience.' },
      { title: 'Brand & Market Analysis', description: "Comprehensive research into your brand's positioning, competitors, and market landscape." },
      { title: 'Content Pillar Definition', description: 'Identifying the core themes and topics that will establish your authority and resonate with your audience.' },
      { title: '90-Day Content Roadmap', description: 'A detailed plan outlining the content to be created, the platforms to be used, and the publishing schedule.' },
    ],
  },
  {
    name: 'PHASE 2: CREATE',
    subtitle: 'CONTENT PRODUCTION & EXECUTION',
    items: [
      { title: 'Content Ideation', description: 'Developing specific content ideas based on the defined pillars and roadmap.' },
      { title: 'Scripting & Copywriting', description: 'Crafting compelling scripts and copy that capture your voice and message.' },
      { title: 'Video & Audio Production', description: 'High-quality video and audio recording, whether in-person or remote.' },
      { title: 'Editing & Post-Production', description: 'Professional editing, graphics, and sound design to create a polished final product.' },
    ],
  },
  {
    name: 'PHASE 3: DISTRIBUTE',
    subtitle: 'PLATFORM-SPECIFIC PUBLISHING',
    items: [
      { title: 'Long-Form Content Publishing', description: 'Publishing full-length videos on YouTube, complete with optimized titles, descriptions, and thumbnails.' },
      { title: 'Short-Form Content Distribution', description: 'Repurposing long-form content into engaging short-form clips for TikTok, Instagram Reels, and YouTube Shorts.' },
      { title: 'Social Media Management', description: 'Posting content on LinkedIn, X, and other relevant platforms with platform-specific copy and visuals.' },
      { title: 'Newsletter & Blog Integration', description: 'Integrating content into your newsletter and blog to nurture your owned audience.' },
    ],
  },
  {
    name: 'PHASE 4: ANALYZE',
    subtitle: 'PERFORMANCE TRACKING & OPTIMIZATION',
    items: [
      { title: 'Weekly Performance Reports', description: 'Detailed reports on key metrics, including views, engagement, and audience growth.' },
      { title: 'Data-Driven Insights', description: 'Analyzing the data to identify trends, top-performing content, and areas for improvement.' },
      { title: 'A/B Testing', description: 'Testing different content formats, headlines, and visuals to optimize performance.' },
      { title: 'Strategy Refinement', description: 'Using the insights gathered to refine the content strategy and double down on what works.' },
    ],
  },
];

export default function GrowthOsPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
        <div className="text-center">
            <PageHeader
                title="THE CONTENT OS"
                subtitle="THE OPERATING SYSTEM FOR ORGANIC GROWTH"
            />
        </div>

        <AnimatedWrapper delay={200}>
            <section className="mt-20 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold font-headline text-center text-white mb-10">THE FRAMEWORK</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {frameworkPillars.map((pillar, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-bold text-accent">{pillar.name}</h3>
                            <p className="mt-2 text-white/70">{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </AnimatedWrapper>
        
        <AnimatedWrapper delay={300}>
            <section className="mt-24 max-w-5xl mx-auto space-y-16">
                {phases.map((phase, index) => (
                    <Card key={index} className="bg-card border-border overflow-hidden">
                        <CardHeader>
                            <CardTitle className="text-3xl font-headline text-accent">{phase.name}</CardTitle>
                            <CardDescription className="text-white/70 !mt-2">{phase.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                {phase.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-white">{item.title}</h4>
                                            <p className="text-white/70 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </section>
        </AnimatedWrapper>
    </div>
  );
}
