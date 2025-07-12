
import { notFound } from 'next/navigation';
import { getPostBySlug, blogPosts } from '@/lib/blog-posts.tsx';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: BlogPostPageProps,
): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | The ConteX',
    };
  }

  return {
    title: `${post.title} | The ConteX Blog`,
    description: post.excerpt,
    openGraph: {
        title: `${post.title} | The ConteX Blog`,
        description: post.excerpt,
    },
  };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
      slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-24 sm:py-32">
      <AnimatedWrapper>
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="flex items-center gap-2 text-accent font-semibold hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
          
          <article>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-headline leading-tight">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{post.author.name}</span>
                </div>
                <Separator orientation="vertical" className="h-5"/>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.publishDate}>
                        {format(new Date(post.publishDate), 'MMMM d, yyyy')}
                    </time>
                </div>
              </div>
            </header>

            <Separator className="my-8"/>

            <div className="prose prose-invert prose-lg max-w-none text-white/80 prose-headings:text-white prose-a:text-accent prose-strong:text-white prose-blockquote:border-accent">
                {post.content}
            </div>
          </article>
        </div>
      </AnimatedWrapper>
      
      <AnimatedWrapper delay={300}>
        <section className="mt-24 text-center bg-card border border-border rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold font-headline text-white">Turn Insights Into Action</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                Inspired by this article? Let's discuss how these principles can be applied directly to your brand to build authority and drive growth.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-md">
                <Link href="/contact">
                    Book Your Free Strategy Call
                </Link>
            </Button>
        </section>
      </AnimatedWrapper>
    </div>
  );
}
