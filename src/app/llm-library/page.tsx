import Blog from "../components/Blog/Blog";

import type { Metadata } from 'next'
import { Library } from "../components/llm-library/library";

export const metadata: Metadata = {
  title: '250+ AI models | Curated by Keywords AI',
  description: 'Explore 250+ AI models and LLMs in our comprehensive database. Access detailed information to find the best LLMs suited to your needs. Start your search now!',
  openGraph: {
    type: 'website',
    title: '250+ AI models | Curated by Keywords AI',
    description: 'Explore 250+ AI models and LLMs in our comprehensive database. Access detailed information to find the best LLMs suited to your needs. Start your search now!',
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
