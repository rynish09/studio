'use server';
/**
 * @fileOverview A content strategy generation AI agent.
 *
 * - generateContentStrategy - A function that handles the content strategy generation.
 * - ContentStrategyInput - The input type for the generateContentStrategy function.
 * - ContentStrategyOutput - The return type for the generateContentStrategy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const ContentStrategyInputSchema = z.object({
  niche: z.string().min(3, "Please describe your niche."),
  audience: z.string().min(10, "Please describe your target audience in more detail."),
});
export type ContentStrategyInput = z.infer<typeof ContentStrategyInputSchema>;

export const ContentStrategyOutputSchema = z.object({
  trendingTopics: z.array(z.string()).describe('A list of 3-4 currently trending topics or formats in the specified niche.'),
  contentIdeas: z
    .array(z.object({
      title: z.string().describe('A compelling, clickable headline for the content idea.'),
      description: z.string().describe('A brief description of what the content would cover and why it provides value.')
    }))
    .describe('A list of the top 5 specific content ideas (e.g., video, blog post, thread) based on the niche and audience.'),
  callToAction: z.string().describe('A concluding paragraph that naturally transitions into a call-to-action, suggesting that executing this strategy effectively requires expertise and inviting the user to book a call to discuss partnership.'),
});
export type ContentStrategyOutput = z.infer<typeof ContentStrategyOutputSchema>;

export async function generateContentStrategy(input: ContentStrategyInput): Promise<ContentStrategyOutput> {
  const validatedInput = ContentStrategyInputSchema.safeParse(input);
  if (!validatedInput.success) {
    throw new Error('Invalid input.');
  }
  return contentStrategyFlow(validatedInput.data);
}

const prompt = ai.definePrompt({
  name: 'contentStrategyPrompt',
  input: {schema: ContentStrategyInputSchema},
  output: {schema: ContentStrategyOutputSchema},
  prompt: `You are an expert content strategist and an organic marketing agency consultant. Your task is to generate a powerful, actionable content strategy based on the provided niche and target audience.

Your tone should be authoritative, insightful, and compelling. You are giving away valuable secrets to build trust.

1.  **Analyze Current Trends:** Identify 3-4 key trends or content formats that are currently performing well in the user's niche.
2.  **Generate Top 5 Content Ideas:** Create a list of 5 specific, high-value content ideas. For each idea, provide a powerful headline and a brief description explaining the angle and value proposition. These should be concrete ideas, not just topics.
3.  **Craft a Call-to-Action:** Write a concluding paragraph. Start by summarizing the value of the strategy provided. Then, pivot to the challenge of execution. Explain that having a great strategy is only half the battle, and that elite-level execution is what separates good from legendary. End with a clear and compelling call-to-action inviting them to book a strategy call with your agency, "The ConteX," to become an execution partner.

Niche: {{{niche}}}
Target Audience: {{{audience}}}`,
});

const contentStrategyFlow = ai.defineFlow(
  {
    name: 'contentStrategyFlow',
    inputSchema: ContentStrategyInputSchema,
    outputSchema: ContentStrategyOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
