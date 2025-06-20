export interface CaseStudy {
  slug: string;
  name: string;
  niche: string;
  synopsis: string;
  image: string;
  imageHint: string;
  strategy: {
    title: string;
    description: string;
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'alex-hormozi',
    name: 'Alex Hormozi',
    niche: 'Business Scaling & Acquisition',
    synopsis: 'Grew a portfolio to $100M+ and now gives away his business playbooks for free to build a massive audience and brand equity.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'man confident speaker',
    strategy: [
      {
        title: 'Step 1: The "Value Bomb" Content Model',
        description: 'He creates content so valuable people would pay thousands for it, then gives it away for free (e.g., his books "$100M Offers"). This builds immense trust and reciprocity at scale.'
      },
      {
        title: 'Step 2: Unfiltered, Direct-to-Camera Delivery',
        description: 'Using simple, direct videos with bold captions, he eliminates production barriers. The focus is 100% on the potency of the message, creating a raw and authentic connection.'
      },
      {
        title: 'Step 3: The "Grand Slam Offer" Philosophy',
        description: 'He structures everything around offers that are so good, you feel stupid saying no. His free content is the ultimate example, attracting a massive, loyal audience without paid ads.'
      },
      {
        title: 'Step 4: Massive Repurposing Engine',
        description: 'Long-form video podcasts are dissected into dozens of short-form clips for Reels, TikTok, and Shorts. This strategy maximizes reach and saturates platforms, driving exponential audience growth.'
      }
    ]
  },
  {
    slug: 'iman-gadzhi',
    name: 'Iman Gadzhi',
    niche: 'Online Business & SMMA',
    synopsis: 'Built a multi-million dollar education empire by crafting an aspirational brand narrative through high-production, cinematic storytelling.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'man luxury suit',
    strategy: [
      {
        title: 'Step 1: Cinematic YouTube Documentaries',
        description: 'He produces high-production, documentary-style videos that blend his life story, business lessons, and aspirational visuals (travel, luxury), selling a vision, not just a course.'
      },
      {
        title: 'Step 2: Branding Abstract Concepts',
        description: 'He created and branded protocols like "Monk Mode." This gives his community a shareable concept to rally around, fostering a cult-like following and reinforcing his ideas.'
      },
      {
        title: 'Step 3: Educational Transparency',
        description: 'His content provides detailed, step-by-step breakdowns of his business models (like SMMA), positioning his paid programs as the logical next step for those who are serious.'
      },
      {
        title: 'Step 4: Meticulous Aesthetic Cohesion',
        description: 'A consistent and carefully crafted personal brand (dark tones, classic style) is maintained across all platforms, reinforcing an "old money" aesthetic that resonates with his target audience.'
      }
    ]
  },
  {
    slug: 'leila-hormozi',
    name: 'Leila Hormozi',
    niche: 'Operations & Business Scaling (B2B)',
    synopsis: 'As CEO of Acquisition.com, she shares hyper-practical, operational advice for scaling businesses, establishing herself as a leading expert for founders.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'woman ceo office',
    strategy: [
        {
            title: 'Step 1: Hyper-Specific, No-Fluff Content',
            description: 'Her content focuses on dense, tactical advice for operators—hiring frameworks, meeting structures, management systems. There is zero fluff, which immediately signals expertise.'
        },
        {
            title: 'Step 2: Framework-Driven Teaching',
            description: 'She packages all advice into memorable frameworks and models (e.g., the "Talent Stack"). This makes complex operational theory easy to understand, remember, and apply.'
        },
        {
            title: 'Step 3: Mastery of B2B Platforms',
            description: 'She dominates platforms where business leaders congregate, like LinkedIn and Twitter, with text-and-graphic-based content that is perfect for professional consumption and sharing.'
        },
        {
            title: 'Step 4: The "Build" Podcast for Deep Dives',
            description: 'Her podcast allows for in-depth conversations on operational topics, establishing long-form authority and providing a rich source of content to be repurposed into clips and threads.'
        }
    ]
  },
  {
    slug: 'alex-eubank',
    name: 'Alex Eubank',
    niche: 'Fitness & Lifestyle',
    synopsis: 'Built a massive fitness community and apparel brand by documenting his life with raw authenticity, making his journey relatable to millions.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'fitness man gym',
    strategy: [
        {
            title: 'Step 1: Radical Transparency Through Vlogging',
            description: 'Daily YouTube vlogs showcase his entire life—the workouts, the struggles, his faith. This creates a deep, parasocial bond with his audience that transcends fitness.'
        },
        {
            title: 'Step 2: Community-Centric Branding',
            description: 'He heavily promotes and integrates with a brand (YoungLA) and uses slogans ("Stay Relentless") that his community adopts as their own identity, turning followers into tribe members.'
        },
        {
            title: 'Step 3: Authentic, In-the-Moment Content',
            description: 'He utilizes Instagram Stories and short-form video to share real-time workouts, meals, and thoughts, making his content feel immediate, unscripted, and trustworthy.'
        },
        {
            title: 'Step 4: Collaboration as a Growth Engine',
            description: 'He consistently collaborates with other fitness influencers, cross-pollinating audiences and creating a network effect where his reach expands with every new partnership.'
        }
    ]
  },
  {
    slug: 'simon-squibb',
    name: 'Simon Squibb',
    niche: 'Entrepreneurship & Angel Investing',
    synopsis: 'Gained millions of followers by taking his message to the streets, offering to fund business ideas on the spot and democratizing entrepreneurship.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'man talking street',
    strategy: [
        {
            title: 'Step 1: The "Street-Level" Content Hook',
            description: 'A viral man-on-the-street interview format on TikTok/Reels where he asks people for their business ideas and offers real startup capital. It\'s raw, engaging, and has a built-in "what happens next" hook.'
        },
        {
            title: 'Step 2: A Clear, Compelling Mission',
            description: 'His entire content strategy is framed around a simple, powerful mission: "to help a million people start a business." This gives his content purpose and inspires a movement.'
        },
        {
            title: 'Step 3: User-Generated Content as the Core',
            description: 'He built a platform (The Purposeful Project) that encourages users to submit their own business pitches, effectively making his audience the star of the show and the source of endless content.'
        },
        {
            title: 'Step 4: Radical Generosity as a Flywheel',
            description: 'The core content loop is based on giving away money, time, and advice with no immediate strings attached. This creates massive goodwill and a powerful word-of-mouth flywheel.'
        }
    ]
  }
];

export const getCaseStudyBySlug = (slug: string) => {
  return caseStudies.find(cs => cs.slug === slug);
}
