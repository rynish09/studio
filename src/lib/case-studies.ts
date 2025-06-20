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
  },
  {
    slug: 'gary-vaynerchuk',
    name: 'Gary Vaynerchuk',
    niche: 'Marketing & Entrepreneurship',
    synopsis: 'Pioneered the "document, don\'t create" philosophy, building a media empire by relentlessly sharing his journey and insights across every social platform.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'man speaking stage',
    strategy: [
      {
        title: 'Step 1: The Content Pyramid Model',
        description: 'He records one long-form piece of "pillar" content (like a keynote or podcast) and then has his team reverse-engineer it into dozens of smaller clips, quotes, and articles for every platform.'
      },
      {
        title: 'Step 2: "Document, Don\'t Create"',
        description: 'Instead of creating polished content, he documents his daily life as a CEO and investor. This provides an endless stream of authentic material and removes creative blocks.'
      },
      {
        title: 'Step 3: Platform Saturation & Native Content',
        description: 'He doesn\'t just post the same content everywhere. He understands the context of each platform (e.g., LinkedIn vs. TikTok) and tailors his message to fit, maximizing engagement.'
      },
      {
        title: 'Step 4: High-Volume, High-Speed Execution',
        description: 'His core advantage is the sheer volume and speed of his content production. By out-publishing everyone in his niche, he stays top-of-mind and captures disproportionate attention.'
      }
    ]
  },
  {
    slug: 'codie-sanchez',
    name: 'Codie Sanchez',
    niche: 'Unconventional Investing & SMB',
    synopsis: 'Educates millions on "boring businesses" like laundromats and car washes, using contrarian takes and high-quality production to make wealth-building accessible.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'woman business elegant',
    strategy: [
      {
        title: 'Step 1: Contrarian Niche Domination',
        description: 'While others focus on tech or stocks, she carved out the niche of "boring" small and medium businesses (SMBs), offering unique value and facing less competition.'
      },
      {
        title: 'Step 2: The "Contrarian-Hook" Newsletter',
        description: 'Her social content (especially on Twitter/X) uses strong, contrarian hooks to drive sign-ups for her "Contrarian Thinking" newsletter, which is her primary owned-media channel.'
      },
      {
        title: 'Step 3: High-Trust Visuals & Data',
        description: 'Her content is packed with data, charts, and financial breakdowns, establishing credibility. This is paired with an aspirational aesthetic that builds trust and authority.'
      },
      {
        title: 'Step 4: Community as a Moat',
        description: 'She has built a paid community around her content, creating a powerful network effect and a flywheel where members share deals, insights, and successes, reinforcing the value of her brand.'
      }
    ]
  },
  {
    slug: 'mrbeast',
    name: 'MrBeast',
    niche: 'YouTube Entertainment & Philanthropy',
    synopsis: 'Reinvented YouTube by focusing obsessively on audience retention, creating high-stakes philanthropic spectacles that are impossible to ignore.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'youtube creator fun',
    strategy: [
      {
        title: 'Step 1: The Viral Idea Flywheel',
        description: 'He reinvests nearly every dollar earned back into creating bigger, more audacious videos. This creates a feedback loop where each video is more viral than the last.'
      },
      {
        title: 'Step 2: Obsessive Optimization',
        description: 'He is famously obsessed with optimizing thumbnails, titles, and video introductions to maximize click-through rate and retention, often testing dozens of versions before publishing.'
      },
      {
        title: 'Step 3: High-Stakes, Simple Concepts',
        description: 'His video ideas are incredibly high-stakes but simple to understand (e.g., "Last to Leave Circle Wins $500,000"). This makes them universally appealing and easy to share.'
      },
      {
        title: 'Step 4: The Power of Generosity',
        description: 'His brand is built on large-scale philanthropy. By giving away millions, he creates feel-good content that generates massive goodwill and is highly shareable.'
      }
    ]
  },
  {
    slug: 'ali-abdaal',
    name: 'Ali Abdaal',
    niche: 'Productivity & Education',
    synopsis: 'Transitioned from a medical doctor to one of the world\'s leading productivity experts by creating systematic, evidence-based content for students and professionals.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'man desk productivity',
    strategy: [
      {
        title: 'Step 1: The "Part-Time YouTuber" Method',
        description: 'He built his channel while studying at Cambridge and working as a doctor, proving that it\'s possible to create high-quality content without going full-time, which made him highly relatable.'
      },
      {
        title: 'Step 2: Systematized Content Creation',
        description: 'He treats his YouTube channel like a business, with clear systems for scripting, filming, and editing. This allows him to produce high-quality, well-researched videos consistently.'
      },
      {
        title: 'Step 3: Evidence-Based Advice',
        description: 'Drawing from his medical background, he grounds his productivity advice in scientific studies and research papers, giving his content a layer of authority that many competitors lack.'
      },
      {
        title: 'Step 4: Diversified Content Funnel',
        description: 'His YouTube channel acts as the top of his funnel, feeding subscribers into his weekly newsletter, which then promotes his paid courses, creating a cohesive and profitable content ecosystem.'
      }
    ]
  },
  {
    slug: 'sahil-bloom',
    name: 'Sahil Bloom',
    niche: 'Mental Models & Finance',
    synopsis: 'Grew a massive audience on Twitter by breaking down complex financial and philosophical concepts into simple, visually-engaging threads and frameworks.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'man thinking abstract',
    strategy: [
      {
        title: 'Step 1: The Curiosity-Driven Thread',
        description: 'He crafts long-form Twitter threads that start with a powerful hook and then methodically break down a complex idea (e.g., mental models, financial concepts) into digestible chunks.'
      },
      {
        title: 'Step 2: Visual Storytelling',
        description: 'He frequently uses simple, custom-made visuals and charts to illustrate his points, making his threads more engaging and shareable than text-only content.'
      },
      {
        title: 'Step 3: Consistent Newsletter CTA',
        description: 'Every successful thread ends with a clear call-to-action to subscribe to his newsletter, The Curiosity Chronicle. This has allowed him to convert his Twitter fame into a powerful owned asset.'
      },
      {
        title: 'Step 4: Cross-Platform Amplification',
        description: 'He partners with other large accounts and media outlets to amplify his best work, and he repurposes his threads into newsletter articles and podcast episodes to maximize their lifespan and reach.'
      }
    ]
  },
  {
    slug: 'justin-welsh',
    name: 'Justin Welsh',
    niche: 'Solopreneurship & LinkedIn Growth',
    synopsis: 'Built a multi-million dollar one-person business by openly documenting his journey and providing hyper-practical advice for growing an audience on LinkedIn.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'man laptop business',
    strategy: [
      {
        title: 'Step 1: Niche Down on a Platform',
        description: 'He became the undisputed expert on one platform: LinkedIn. By focusing his energy, he built a reputation as the go-to source for LinkedIn growth strategies.'
      },
      {
        title: 'Step 2: Build in Public',
        description: 'He shares everything: his revenue, his systems, his failures. This radical transparency builds immense trust and makes his audience feel like they are part of his journey.'
      },
      {
        title: 'Step 3: The "Content Operating System"',
        description: 'He developed and sells a system for content creation. His free content is a testament to the system\'s effectiveness, making the purchase a logical next step for his followers.'
      },
      {
        title: 'Step 4: Actionable, Bite-Sized Content',
        description: 'His LinkedIn posts are famously practical and easy to implement. He avoids fluff and provides immediate value, which trains his audience to pay attention to everything he posts.'
      }
    ]
  },
  {
    slug: 'ryan-holiday',
    name: 'Ryan Holiday',
    niche: 'Stoicism & Modern Philosophy',
    synopsis: 'He single-handedly repopularized Stoicism for a modern audience, building an empire of books, courses, and communities around ancient wisdom.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'books philosophy statue',
    strategy: [
      {
        title: 'Step 1: Reading as Content Generation',
        description: 'His entire content engine is fueled by his voracious reading. He uses a notecard system to capture ideas, which become the building blocks for his articles, books, and videos.'
      },
      {
        title: 'Step 2: The "Daily Stoic" Habit',
        description: 'He created a daily email newsletter (and later a podcast and social media accounts) that provides a short, stoic meditation. This builds a consistent habit with his audience and keeps his philosophy top-of-mind.'
      },
      {
        title: 'Step 3: Bridging Ancient Wisdom to Modern Problems',
        description: 'His genius is in his ability to take dense, ancient texts and apply their lessons to modern-day challenges like stress, ambition, and digital noise, making them highly relevant.'
      },
      {
        title: 'Step 4: The Perennial Seller',
        description: 'He focuses on creating work that will be as relevant in 100 years as it is today. By tackling timeless topics, he has built a backlist of books that continue to sell year after year.'
      }
    ]
  }
];

export const getCaseStudyBySlug = (slug: string) => {
  return caseStudies.find(cs => cs.slug === slug);
}
