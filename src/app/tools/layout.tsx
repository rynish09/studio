
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AI Marketing Tools | The ConteX',
    description: 'Use our suite of AI-powered tools, including the Content Strategy Generator and SEO Headline Rewriter, to enhance your marketing efforts.',
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
