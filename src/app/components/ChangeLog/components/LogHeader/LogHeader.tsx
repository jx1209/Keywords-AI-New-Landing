"use client";
import React, { useEffect, useState } from 'react';
import { ChangeLogHeaderLine, LogoChangeLog, SmallDotChangeLog } from '@/app/components/Icons';
import { Button } from '@/app/components/Buttons';

export function LogHeader() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Effect to detect screen size and update state
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on initial render
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div aria-label='frame 2210'
      className="flex flex-col items-center gap-lg self-stretch">
        <div aria-label='frame 2203'
            className='flex p-[14.164px] gap-[47.213px] items-start'>
            <LogoChangeLog />
        </div>
        <div aria-label='frame 1568'
          className='flex flex-col items-center gap-xs self-stretch'>
            <p className={`${isMobile ? 'text-2xl' : 'display-lg'}`}>
              Changelog
            </p>
            <p className={`text-gray-4 text-md ${isMobile ? 'text-center px-4' : ''}`}>
              New updates and improvements to Keywords AI.
            </p>
            <div aria-label='frame 1611'
              className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center gap-[8px]`}>
              <a href='https://twitter.com/keywordsai' target="_blank" rel="noopener noreferrer" className="text-sm-md text-primary cursor-pointer hover:text-primary-2">
                Follow us on X
              </a>
              {!isMobile && <SmallDotChangeLog />}
              <a href='https://discord.gg/KEanfAafQQ' target="_blank" rel="noopener noreferrer" className="text-sm-md text-primary cursor-pointer hover:text-primary-2">
                Join our Discord community
              </a>
            </div>
        </div>
        <ChangeLogHeaderLine className={isMobile ? 'w-full' : ''} />
    </div>
  );
}
