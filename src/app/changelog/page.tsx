import { ChangeLog } from "../components/ChangeLog/ChangeLog";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Changelog | Keywords AI',
  description: 'Latest updates, improvements, and new features for Keywords AI',
  openGraph: {
    title: 'Changelog | Keywords AI',
    description: 'Latest updates, improvements, and new features for Keywords AI',
    images: [
      {
        url: 'https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/changelog/cover.png',
        alt: 'Keywords AI Changelog'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog | Keywords AI',
    description: 'Latest updates, improvements, and new features for Keywords AI',
    images: ['https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/changelog/cover.png'],
    creator: '@KeywordsAI',
  }
}

export default function Page() {
  return <ChangeLog />
}