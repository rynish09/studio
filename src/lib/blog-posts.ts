
import type { ReactNode } from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  publishDate: string;
  excerpt: string;
  content: ReactNode;
  author: {
    name: string;
    avatarUrl: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-content-repurposing-flywheel',
    title: 'The Content Repurposing Flywheel: How to Create 50 Pieces of Content from One',
    publishDate: '2024-07-28',
    excerpt: 'Stop the content treadmill. Learn the system we use to turn a single long-form video into an entire month of high-impact content across all platforms. This is how you achieve omnipresence without burnout.',
    author: {
      name: 'The ConteX Team',
      avatarUrl: 'https://placehold.co/100x100.png'
    },
    content: (
      <div className="space-y-6">
        <p>The biggest lie in content marketing is that you need to be constantly creating something new. The truth is, you probably have a goldmine of content you're not using. The secret to scaling your brand's message isn't more content—it's more from your content.</p>
        <p>This is the core principle behind the Content Repurposing Flywheel, a system designed for maximum leverage. It's how you turn one pillar piece of content—like a podcast, a webinar, or a keynote speech—into a comprehensive content campaign that fuels your brand for weeks.</p>
        <h3 className="text-2xl font-bold text-accent">The Anatomy of a Pillar Piece</h3>
        <p>Your pillar content is your North Star. It should be a deep-dive on a topic central to your brand. Think:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>A 30-60 minute podcast episode</li>
          <li>A comprehensive webinar</li>
          <li>A detailed "how-to" guide or tutorial video</li>
          <li>A keynote presentation</li>
        </ul>
        <p>Once you have this, the flywheel begins.</p>
        <h3 className="text-2xl font-bold text-accent">Phase 1: Atomization</h3>
        <p>This is where we break down the pillar piece into its core components:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Key Insights & Quotes:</strong> Pull out 10-15 powerful, tweetable quotes or insights.</li>
            <li><strong>Actionable Tips:</strong> Identify 5-7 short, actionable tips or steps.</li>
            <li><strong>Core Stories & Anecdotes:</strong> Isolate 3-4 compelling stories or examples shared.</li>
            <li><strong>Data Points & Statistics:</strong> Extract any hard data or statistics you mentioned.</li>
        </ul>
        <h3 className="text-2xl font-bold text-accent">Phase 2: Reformatting for Platforms</h3>
        <p>Now, we take those atoms and reshape them for different platforms:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Short-Form Video (Reels/Shorts/TikTok):</strong> Each actionable tip or short story becomes a 30-60 second video. Use bold captions and engaging visuals. (Yield: 8-11 clips)</li>
            <li><strong>LinkedIn/X Posts:</strong> Each key insight or quote becomes a thought-leadership post. The data points can be turned into text-plus-graphic posts. (Yield: 15-20 posts)</li>
            <li><strong>Image Carousels:</strong> Group related tips into a step-by-step carousel for Instagram or LinkedIn. (Yield: 2-3 carousels)</li>
            <li><strong>Blog Post / Newsletter:</strong> Transcribe the pillar piece, clean it up, and publish it as a long-form article on your website and as a newsletter. (Yield: 2 assets)</li>
            <li><strong>Quote Graphics:</strong> Turn the best quotes into shareable graphics for all platforms. (Yield: 10-15 images)</li>
        </ul>
        <blockquote className="border-l-4 border-accent pl-4 italic text-white/90">
          By following this system, a single 1-hour recording session can generate over 50 unique pieces of content, creating a constant stream of value for your audience and establishing you as an omnipresent authority in your niche.
        </blockquote>
      </div>
    )
  },
  {
    slug: 'authority-is-the-new-currency',
    title: 'Attention is Fleeting, Authority is Forever',
    publishDate: '2024-07-21',
    excerpt: 'Chasing trends is a losing game. The algorithms will change, but authority is an asset that appreciates over time. We break down the four pillars of building true, defensible authority in any market.',
    author: {
      name: 'The ConteX Team',
      avatarUrl: 'https://placehold.co/100x100.png'
    },
    content: (
        <div className="space-y-6">
            <p>In the digital economy, many mistake attention for authority. They are not the same. Attention can be bought or hacked through fleeting trends. It's loud, but temporary. Authority is earned through consistency, expertise, and generosity. It's quiet, but permanent.</p>
            <p>If you build your brand on the shifting sands of algorithms, you will forever be at their mercy. If you build it on the bedrock of authority, you create an asset that compounds in value over time. Here's how.</p>
            <h3 className="text-2xl font-bold text-accent">Pillar 1: A Point of View</h3>
            <p>Authority isn't about having all the answers. It's about having a clear, and often contrarian, point of view. You must stand for something. What is a commonly held belief in your industry that you fundamentally disagree with? Your unique perspective is your flag. Plant it firmly.</p>
            <h3 className="text-2xl font-bold text-accent">Pillar 2: The Generosity Moat</h3>
            <p>The most authoritative figures are the most generous with their knowledge. Your free content must be more valuable than your competitors' paid products. When you give away your best ideas, you create a "generosity moat." It demonstrates supreme confidence in your expertise and builds immense trust with your audience.</p>
            <h3 className="text-2xl font-bold text-accent">Pillar 3: Consistent Proof</h3>
            <p>Your content's job is to consistently prove your point of view is valid. This is done through:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Case Studies:</strong> Show, don't just tell. Break down how your philosophy has achieved real-world results.</li>
                <li><strong>Frameworks:</strong> Codify your expertise into memorable, repeatable systems. This makes your knowledge transferable.</li>
                <li><strong>Data & Evidence:</strong> Back up your claims with research and data to move from opinion to fact.</li>
            </ul>
            <h3 className="text-2xl font-bold text-accent">Pillar 4: Own Your Platform</h3>
            <p>Social media is for renting an audience. A newsletter or a blog is for owning it. Your primary goal on social platforms should be to drive your audience to a channel you control. This is where you nurture the relationship and build a true community, immune to the whims of any single algorithm.</p>
            <blockquote className="border-l-4 border-accent pl-4 italic text-white/90">
            Stop chasing clicks and start building credibility. An audience built on authority will follow you anywhere; an audience built on trends will leave you for the next shiny object.
            </blockquote>
        </div>
    )
  },
  {
    slug: 'youtube-for-b2b-founders',
    title: 'Why B2B Founders Are Leaving Millions on the Table by Ignoring YouTube',
    publishDate: '2024-07-15',
    excerpt: 'You think YouTube is for gamers and vloggers? Think again. It\'s the most powerful B2B trust-building engine on the planet. Here\'s the playbook for founders to dominate their niche with video.',
    author: {
      name: 'The ConteX Team',
      avatarUrl: 'https://placehold.co/100x100.png'
    },
    content: (
        <div className="space-y-6">
            <p>Most B2B founders dismiss YouTube as a platform for consumers. They focus on LinkedIn, write white papers, and attend networking events. These are all valuable, but they are playing in a crowded sandbox. The blue ocean for B2B influence and lead generation is YouTube.</p>
            <p>Why? Because nothing builds trust like video. When a potential client can see you, hear your voice, and learn from your expertise for hours on end, the sales cycle shortens dramatically. By the time they contact you, they are not a cold lead; they are a pre-sold client.</p>
            <h3 className="text-2xl font-bold text-accent">The "Digital Doppelgänger" Effect</h3>
            <p>A library of high-value YouTube videos acts as your digital doppelgänger. It works for you 24/7, educating potential clients, answering their questions, and demonstrating your expertise at scale. You can only be in one meeting at a time, but your videos can be in thousands.</p>
            <h3 className="text-2xl font-bold text-accent">The Winning Content Formula</h3>
            <p>Forget flashy edits and clickbait. The B2B YouTube playbook is about value and clarity.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Client Problem Breakdowns:</strong> Create videos that dissect the most common and painful problems your clients face. Walk them through the "what," the "why," and the "how."</li>
                <li><strong>Framework Deep Dives:</strong> Take the intellectual property you use with your paying clients and teach it. Explain your proprietary frameworks and methodologies. This is the ultimate proof of expertise.</li>
                <li><strong>Case Study Walkthroughs:</strong> Anonymize a client success story and walk through the entire journey—the initial problem, your strategic intervention, and the ultimate result.</li>
                <li><strong>"Ask Me Anything" Sessions:</strong> Record yourself answering the most common questions you get during sales calls. This pre-handles objections at scale.</li>
            </ul>
            <blockquote className="border-l-4 border-accent pl-4 italic text-white/90">
            LinkedIn is where you connect. YouTube is where you convince. In a world where trust is the ultimate conversion tool, a well-executed YouTube strategy isn't just a marketing channel; it's your most valuable business development asset.
            </blockquote>
        </div>
    )
  },
];

export const getPostBySlug = (slug: string) => {
  return blogPosts.find(p => p.slug === slug);
}
