import { ModelDetailContent } from '@/app/components/llm-library/ModelDetailContent';

import type { Metadata } from 'next'

export async function generateMetadata({ params }: {
  params: Promise<{ "llm-url": string }>
}): Promise<Metadata> {
  const resolvedParams = await params;
  const modelName = decodeURIComponent(resolvedParams["llm-url"]);
  
  return {
    title: `${modelName} | AI Model Details | Keywords AI`,
    description: `Learn about ${modelName}, including pricing, context window, and capabilities. Find detailed specifications and try it in our playground.`,
    openGraph: {
      type: 'website',
      title: `${modelName} | AI Model Details | Keywords AI`,
      description: `Explore ${modelName}'s capabilities, pricing, and technical specifications. Access detailed information about this AI model and try it in our playground.`,
      url: `https://keywordsai.co/llm-library/${modelName}`,
      siteName: 'Keywords AI',
      images: [
        {
          url: 'https://keywordsai-static.s3.amazonaws.com/social_media_images/social_image.png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@keywordsai',
      title: `${modelName} | Keywords AI`,
      images: ['https://keywordsai-static.s3.amazonaws.com/social_media_images/social_image.png'],
    },
  }
}

export default async function ModelDetail({
  params,
}: {
  params: Promise<{ "llm-url": string }>;
}) {
  const resolvedParams = await params;
  const modelName = resolvedParams["llm-url"];
  return (
    <ModelDetailContent modelName={modelName} />
  );
}
