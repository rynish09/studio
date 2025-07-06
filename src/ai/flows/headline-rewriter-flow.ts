
'use server';
/**
 * @fileOverview An AI agent for rewriting headlines.
 *
 * - rewriteHeadlines - A function that handles the headline rewriting process.
 * - HeadlineRewriterInput - The input type for the rewriteHeadlines function.
 * - HeadlineRewriterOutput - The return type for the rewriteHeadlines function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HeadlineRewriterInputSchema = z.object({
  headline: z.string().describe('The original headline to be rewritten.'),
  niche: z.string().describe('The niche or industry for which the headline is targeted.'),
});
export type HeadlineRewriterInput = z.infer<typeof HeadlineRewriterInputSchema>;

const HeadlineRewriterOutputSchema = z.object({
  rewrittenHeadlines: z.array(z.string()).describe('A list of 5 rewritten headline variations.'),
});
export type HeadlineRewriterOutput = z.infer<typeof HeadlineRewriterOutputSchema>;

export async function rewriteHeadlines(input: HeadlineRewriterInput): Promise<HeadlineRewriterOutput> {
  return headlineRewriterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'headlineRewriterPrompt',
  input: {schema: HeadlineRewriterInputSchema},
  output: {schema: HeadlineRewriterOutputSchema},
  prompt: `You are an expert SEO copywriter and content strategist. Your task is to rewrite the given headline to be more compelling, click-worthy, and optimized for search engines, tailored to the specified niche.

Generate 5 distinct variations of the headline.

Original Headline: {{{headline}}}
Niche: {{{niche}}}`,
});

const headlineRewriterFlow = ai.defineFlow(
  {
    name: 'headlineRewriterFlow',
    inputSchema: HeadlineRewriterInputSchema,
    outputSchema: HeadlineRewriterOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
