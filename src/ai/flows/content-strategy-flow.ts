
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

const ContentStrategyInputSchema = z.object({
  niche: z.string().describe('The niche or industry for the content strategy.'),
  audience: z.string().describe('The target audience for the content.'),
});
export type ContentStrategyInput = z.infer<typeof ContentStrategyInputSchema>;

const ContentStrategyOutputSchema = z.object({
  topicPillars: z.array(z.string()).describe('A list of 3-5 core content topic pillars.'),
  sampleHeadlines: z.array(z.string()).describe('A list of 5-7 sample headlines based on the topic pillars.'),
  postingSchedule: z.string().describe('A recommended weekly posting schedule.'),
});
export type ContentStrategyOutput = z.infer<typeof ContentStrategyOutputSchema>;

export async function generateContentStrategy(input: ContentStrategyInput): Promise<ContentStrategyOutput> {
  return contentStrategyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentStrategyPrompt',
  input: {schema: ContentStrategyInputSchema},
  output: {schema: ContentStrategyOutputSchema},
  prompt: `You are an expert content strategist. Your task is to generate a foundational content strategy based on the provided niche and target audience.

Provide a list of 3-5 core content topic pillars.
Provide a list of 5-7 engaging sample headlines that fit the topics.
Provide a simple, recommended weekly posting schedule (e.g., "Monday: Pillar 1, Wednesday: Pillar 2, Friday: Pillar 3").

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
