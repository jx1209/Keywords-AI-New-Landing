
// import { Footer, MobileFooter } from "src/components/Footer/Footer";
// import { Navbar } from "src/components/Navbar";

// export function NavigationLayout({ user, mobile }) {
  
//   return (
//     <div className="flex-col w-full min-h-screen relative">
//       <Navbar />
//       {!user?.email && !mobile && <Footer />}
//     {!user?.email && mobile && <MobileFooter />}
//     </div>
//   );
// }

// components/layouts/NavigationLayout.js
'use client';
import { Footer, MobileFooter } from "@/app/components/Footer/Footer"
import { Navbar } from "@/app/components/Navbar/Navbar"
import { useScreenWidth } from '@/hooks/useScreenWidth'
import { useEffect, useState } from "react";

export function NavigationLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false)
  const screenWidth = useScreenWidth()
  useEffect(() => {
    setIsMobile(screenWidth < 768)
  }, [screenWidth])

  return (
    <div className="flex-col w-full min-h-screen relative">
      <Navbar />
      {children}
      {!isMobile && <Footer />}
      {isMobile && <MobileFooter />}
      </div>
  )
}