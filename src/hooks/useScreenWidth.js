// hooks/useScreenWidth.js
// 'use client'
// import { useState, useEffect } from 'react'

// export function useScreenWidth() {
//   const [width, setWidth] = useState(
//     typeof window !== 'undefined' ? window.innerWidth : 0
//   )

//   useEffect(() => {
//     if (typeof window === 'undefined') return

//     const handleResize = () => setWidth(window.innerWidth)
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   return width
// }
'use client'
import { useState, useEffect } from 'react'

export function useScreenWidth() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Set the initial width
    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}
