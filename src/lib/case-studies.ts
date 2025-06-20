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
    slug: 'aura-craft',
    name: 'AuraCraft',
    niche: 'Artisanal Home Goods',
    synopsis: 'AuraCraft transformed from an Etsy side-hustle into a seven-figure home decor brand by showcasing the art of creation and building a community around authentic craftsmanship.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'pottery artisan',
    strategy: [
      {
        title: 'Step 1: The "Meet the Maker" Content Pillar',
        description: 'Initial content focused heavily on behind-the-scenes videos. Short, satisfying clips of pottery wheels, wood carving, and candle pouring gained massive traction on Instagram Reels and TikTok, humanizing the brand and highlighting product quality.'
      },
      {
        title: 'Step 2: Educational "Lifestyle" Content',
        description: 'Expanded into tutorials on home styling, creating vignettes, and caring for artisanal products. This positioned AuraCraft as an authority in home aesthetics, not just a seller of goods. Blog posts and Pinterest guides drove significant organic traffic.'
      },
      {
        title: 'Step 3: User-Generated Content (UGC) Engine',
        description: 'Launched a monthly hashtag contest (#AuraInTheWild) encouraging customers to share photos of AuraCraft products in their homes. Winning entries were featured on all channels and received gift cards, creating a self-sustaining loop of authentic social proof.'
      },
      {
        title: 'Step 4: The "Limited Drop" Model',
        description: 'Leveraged the engaged community by building hype for limited-edition product drops via email and social media. This created scarcity and urgency, leading to consistent sell-out collections within hours and boosting revenue significantly.'
      }
    ]
  },
  {
    slug: 'summit-coaching',
    name: 'Summit Coaching',
    niche: 'Executive Performance Coaching',
    synopsis: 'Summit Coaching established market dominance by shifting from generic business advice to highly specific, actionable frameworks delivered through high-production long-form content.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'business person speaking',
    strategy: [
      {
        title: 'Step 1: The "One Problem, One Video" YouTube Strategy',
        description: 'Each weekly YouTube video tackled a single, painful problem for executives (e.g., "How to Run a 30-Minute Tactical Meeting"). This hyper-focused approach led to high search rankings and watch times, establishing authority.'
      },
      {
        title: 'Step 2: The "Framework" Repurposing System',
        description: 'Every long-form video was built around a memorable 3-4 step framework. This framework was then repurposed into a Twitter thread, a LinkedIn carousel, and several short-form video clips, maximizing reach with minimal extra effort.'
      },
      {
        title: 'Step 3: The "Value-First" Lead Magnet',
        description: 'Instead of a generic ebook, Summit offered a free 5-day email course that solved a tangible problem, taken directly from their most popular YouTube content. This generated a highly qualified email list.'
      },
      {
        title: 'Step 4: The "Private Insights" Newsletter',
        description: 'The weekly newsletter wasn\'t just a content roundup. It provided exclusive analysis on business news or a deeper dive into a recent framework, converting email subscribers into high-ticket coaching clients by demonstrating unparalleled value.'
      }
    ]
  },
  {
    slug: 'greenleaf-eats',
    name: 'Greenleaf Eats',
    niche: 'Plant-Based Meal Delivery',
    synopsis: 'Greenleaf Eats carved out a premium niche in the competitive meal-kit market by focusing on the vibrant, delicious results of their food, not just the health benefits.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'vibrant salad',
    strategy: [
        {
            title: 'Step 1: Visual-First Food Storytelling',
            description: 'Instagram became the primary channel, featuring high-quality, colorful photos and videos of finished meals. Content focused on texture, flavor, and the beauty of plant-based ingredients, making the food irresistible.'
        },
        {
            title: 'Step 2: "Time-Saving" Content for Busy Professionals',
            description: 'Content marketing targeted busy professionals by emphasizing the convenience and quality of their service. Blog posts and social content were titled "5 Healthy Lunches That Take 2 Minutes" or "Reclaim Your Evenings," speaking directly to a core pain point.'
        },
        {
            title: 'Step 3: Partnering with Micro-Influencers',
            description: 'Collaborated with health and wellness micro-influencers who had high engagement rates. These partners created authentic review content and recipes using Greenleaf products, building trust with their target demographic.'
        },
        {
            title: 'Step 4: The Recipe & Resource Hub',
            description: 'Developed a free online resource hub with plant-based recipes, cooking tips, and nutritional guides. This SEO-optimized content attracted organic traffic from people searching for plant-based solutions, later converting them to paying customers.'
        }
    ]
  },
  {
    slug: 'nomad-gear',
    name: 'Nomad Gear',
    niche: 'Durable Travel Tech',
    synopsis: 'Nomad Gear became the go-to brand for digital nomads by proving the real-world durability of their products through extreme content marketing.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'travel backpack mountain',
    strategy: [
        {
            title: 'Step 1: "Will It Break?" Torture Test Series',
            description: 'A YouTube series where they subjected their gear (chargers, cables, power banks) to extreme conditions: freezing, dropping, submerging. These videos went viral, creating undeniable proof of product quality.'
        },
        {
            title: 'Step 2: Ambassador Program with Full-Time Travelers',
            description: 'Equipped 10 full-time digital nomads with free gear in exchange for monthly content showcasing the products in real-world scenarios across the globe. This provided a constant stream of authentic, aspirational content.'
        },
        {
            title: 'Step 3: The "Ultimate Nomad Desk Setup" Guide',
            description: 'Created comprehensive blog and video guides on building the perfect mobile workspace, featuring their products as the central components. This became a cornerstone piece of content, ranking high for valuable keywords.'
        },
        {
            title: 'Step 4: Community-Sourced Product Development',
            description: 'Used their engaged social media following to poll for new product ideas and features. This not only ensured product-market fit but also made their community feel invested in the brand\'s success, leading to powerful word-of-mouth marketing.'
        }
    ]
  },
  {
    slug: 'codex-academy',
    name: 'Codex Academy',
    niche: 'Web Development Bootcamps',
    synopsis: 'Codex Academy disrupted the coding education space by creating project-based tutorials that delivered tangible results and career transformations.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'coding on laptop',
    strategy: [
        {
            title: 'Step 1: The "Build It With Me" Long-Form Tutorial',
            description: 'Published free, in-depth (2-3 hour) YouTube tutorials showing how to build a complete, professional-level application (e.g., "Build a SaaS App with Next.js"). This demonstrated their teaching expertise and provided immense value upfront.'
        },
        {
            title: 'Step 2: The "Code Snippet" Social Strategy',
            description: 'Repurposed key functions and concepts from their long-form tutorials into bite-sized code snippets and explanations for Twitter and Instagram. This attracted developers and showcased their practical, no-fluff approach.'
        },
        {
            title: 'Step 3: Student Success Stories as Hero Content',
            description: 'Made student testimonials the centerpiece of their marketing. Each month, they published a detailed blog post and video interview with a recent graduate who landed a job, focusing on their journey and the projects they built.'
        },
        {
            title: 'Step 4: The "Free Mini-Course" Funnel',
            description: 'Offered a free 7-day email course that guided a user through building a small but impressive project. This acted as a perfect trial for their teaching style and was a high-converting lead magnet for their paid bootcamps.'
        }
    ]
  },
  {
    slug: 'the-finance-distilled',
    name: 'Finance Distilled',
    niche: 'Personal Finance for Millennials',
    synopsis: 'Finance Distilled grew a loyal audience of over a million by breaking down complex financial topics into simple, visual, and relatable content.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'financial chart graph',
    strategy: [
        {
            title: 'Step 1: The Visual Explainer Carousel',
            description: 'Used Instagram and LinkedIn carousels as their primary format. Each carousel broke down one topic (e.g., "What is a Roth IRA?") into 5-7 simple, well-designed slides with minimal text and clear visuals. This made complex information highly shareable.'
        },
        {
            title: 'Step 2: The Relatable Analogy Framework',
            description: 'Explained all financial concepts using simple, everyday analogies (e.g., "Investing is like planting a tree"). This demystified finance and made their content accessible to absolute beginners, which was their core audience.'
        },
        {
            title: 'Step 3: The "Weekly Money Memo" Newsletter',
            description: 'A once-a-week newsletter that summarized the most important financial news story in a simple, digestible way. It became a must-read for their audience and a primary channel for promoting their digital products.'
        },
        {
            title: 'Step 4: The "Ask Me Anything" Community Building',
            description: 'Hosted weekly Q&A sessions on Instagram Stories where followers could ask any financial question. Answering these questions publicly built trust and provided an endless source of ideas for new content.'
        }
    ]
  },
  {
    slug: 'flow-state-fitness',
    name: 'Flow State Fitness',
    niche: 'Mindful Fitness & Yoga',
    synopsis: 'Flow State Fitness built a premium online studio by focusing on the mental benefits of exercise and creating immersive, calming content experiences.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'woman yoga pose',
    strategy: [
        {
            title: 'Step 1: The "Follow-Along" Cinematic Workout',
            description: 'Produced high-quality, cinematic follow-along yoga and workout videos for YouTube, filmed in beautiful, serene locations. The focus was on calm instruction and atmosphere, not high-intensity hype.'
        },
        {
            title: 'Step 2: The "Mindful Minute" Social Content',
            description: 'Shared 60-second guided breathing exercises, meditations, and single-pose tutorials on TikTok and Reels. This provided a quick dose of value and perfectly reflected their brand ethos.'
        },
        {
            title: 'Step 3: The "Challenge" as a Community Catalyst',
            description: 'Ran free, 7-day "Mindfulness Challenges" via email and a private community group. These challenges encouraged daily practice and fostered a strong sense of community, which was a key driver for membership conversions.'
        },
        {
            title: 'Step 4: The Instructor as the Brand',
            description: 'Built the personal brand of the lead instructor, sharing their philosophy, daily routines, and personal journey. This created a deep, authentic connection with the audience that transcended the workout content.'
        }
    ]
  }
];

export const getCaseStudyBySlug = (slug: string) => {
  return caseStudies.find(cs => cs.slug === slug);
}
