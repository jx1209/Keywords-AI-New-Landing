'use client';

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PHProvider({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: 'identified_only',
        capture_pageview: false
      })
    }
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

export const platformURL = 'https://platform.keywordsai.co';

export function usePlatformURL() {
  return platformURL;
}