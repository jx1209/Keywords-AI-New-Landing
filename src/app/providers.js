// app/providers.js
// 'use client'
// import posthog from 'posthog-js'
// import { PostHogProvider } from 'posthog-js/react'

// if (typeof window !== 'undefined') {
//   posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
//     api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
//     person_profiles: 'identified_only',
//     capture_pageview: false // Disable automatic pageview capture, as we capture manually
//   })
// }

// export function PHProvider({ children }) {
//   return <PostHogProvider client={posthog}>{children}</PostHogProvider>
// }

// app/providers.jsx
'use client'
  import posthog from 'posthog-js'
  import { PostHogProvider as PHProvider } from 'posthog-js/react'
  import { useEffect } from 'react'
  import PostHogPageView from "./PostHogPageView"

  export function PostHogProvider({ children }) {
    useEffect(() => {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
        capture_pageleave: true,
      })
    }, [])
  
    return (
      <PHProvider client={posthog}>
        <PostHogPageView />
        {children}
      </PHProvider>
    )
  }