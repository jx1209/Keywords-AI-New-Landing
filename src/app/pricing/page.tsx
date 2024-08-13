import { Pricing } from "../components/Pricing";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keywords AI | The best LLM monitoring platform',
  description: 'Keywords AI is an LLM monitoring platform where you can call 200+ LLMs using the same format and get complete observability.',
  openGraph: {
    type: 'website',
    title: 'Keywords AI - Build better AI products with complete observability',
    description: 'LLM monitoring platform for AI startups',
    url: 'https://keywordsai.co',
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
  return <Pricing/>
}