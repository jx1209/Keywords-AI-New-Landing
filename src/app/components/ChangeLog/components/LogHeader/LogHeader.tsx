import React from 'react';
import { ChangeLogHeaderLine, LogoChangeLog, SmallDotChangeLog } from '@/app/components/Icons';
import { Button } from '@/app/components/Buttons';

export function LogHeader() {
  return (
    <div aria-label='frame 2210'
      className="flex flex-col items-center gap-lg self-stretch">
        <div aria-label='frame 2203'
            className='flex p-[14.164px] gap-[47.213px] items-start'>
            <LogoChangeLog />
        </div>
        <div aria-label='frame 1568'
          className='flex flex-col items-center gap-xs self-stretch'>
            <p className='display-lg'>
              Changelog
            </p>
            <p className='text-gray-4 text-md'>
              New updates and improvements to Keywords AI.
            </p>
            <div aria-label='frame 1611'
              className='flex items-center gap-[8px]'>
              <a href='https://twitter.com/keywordsai' target="_blank" rel="noopener noreferrer" className="text-sm-md text-primary cursor-pointer hover:text-primary-2">
                Follow us on Twitter
              </a>
              <SmallDotChangeLog />
              <a href='https://discord.gg/KEanfAafQQ' target="_blank" rel="noopener noreferrer" className="text-sm-md text-primary cursor-pointer hover:text-primary-2">
                Join our Discord community
              </a>
            </div>
        </div>
        <ChangeLogHeaderLine />
    </div>
  );
}
