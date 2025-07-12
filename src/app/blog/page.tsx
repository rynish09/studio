
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { PageHeader } from '@/components/ui/page-header';
import { blogPosts } from '@/lib/blog-posts';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Blog | The ConteX',
    description: 'Insights and strategies from The ConteX team. We share our playbooks on organic marketing, content strategy, and building legendary brands.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <PageHeader 
        title="From The ConteX Playbook"
        subtitle="Insights on organic marketing, content strategy, and brand building. We share the same frameworks we use to build legendary brands for our clients."
      />

      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <AnimatedWrapper key={post.slug} delay={index * 100}>
            <Link href={`/blog/${post.slug}`} className="block group h-full">
              <Card className="bg-card border-border h-full overflow-hidden transition-all duration-300 group-hover:border-accent group-hover:-translate-y-2 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-accent transition-colors">{post.title}</CardTitle>
                  <CardDescription className="pt-2 text-white/60">
                    {format(new Date(post.publishDate), 'MMMM d, yyyy')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6 pt-0">
                  <p className="text-white/70 mb-6 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center text-accent font-semibold mt-auto">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </AnimatedWrapper>
        ))}
      </section>
    </div>
  );
}
