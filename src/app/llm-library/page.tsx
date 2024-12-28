import Blog from "../components/Blog/Blog";

import type { Metadata } from 'next'
import { Library } from "../components/llm-library/library";

export const metadata: Metadata = {
  title: '250+ AI models | Curated by Keywords AI',
  description: 'Comprehensive directory of 250+ AI models and large language models (LLMs) and their capabilities. Compare details, pricing, benchmarks, and more.',
  openGraph: {
    type: 'website',
    title: '250+ AI models | Curated by Keywords AI',
    description: 'Comprehensive directory of 250+ AI models and large language models (LLMs) and their capabilities. Compare details, pricing, benchmarks, and more.',
    url: 'https://keywordsai.co/llm-library',
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
    title: 'Keywords AI',
    images: ['https://keywordsai-static.s3.amazonaws.com/social_media_images/social_image.png'],
  },
}


export default function Page() {
  return <Library />
}
