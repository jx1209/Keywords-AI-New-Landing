"use client";
import React, { useEffect, useState } from "react";
import { LogHeader } from "./components/LogHeader/LogHeader";
import { LogContent } from "./components/LogContent/LogContent";
import { Page } from "@/app/components/Page/Page";
import logs from "./change_logs";
import './ChangeLog.css';

export function ChangeLog() {
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

  // const [logs, setLogs] = useState<any[]>([]);

  // useEffect(() => {
  //   const importAllLogs = async () => {
  //     const modules: Record<string, () => Promise<any>> = import.meta.glob('./change_logs/*.json');
  //     const importedLogs = await Promise.all(
  //       Object.values(modules).map((module) => module())
  //     );

  //     const sortedLogs = importedLogs.sort((a, b) => {
  //       // Assuming each log has a 'date' field. Adjust this if your date field is named differently
  //       return new Date(b.date).getTime() - new Date(a.date).getTime();
  //     });

  //     setLogs(importedLogs);
  //   };

  //   importAllLogs();
  //   console.log(logs);
  // }, []);
  const sortedLogs = React.useMemo(() => {
    return [...logs].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  return (
    <Page>
      <div
        aria-label="frame 798"
        className={`flex flex-col items-center self-stretch ${
          isMobile 
            ? "pt-[40px] pb-[60px] gap-[60px] px-4" 
            : "pt-[80px] pr-xl pb-[120px] pl-xl gap-[120px]"
        }`}
      >
        <LogHeader />
        {sortedLogs.map((log, index) => (
          <div 
            key={index}
            className={isMobile ? "w-full" : "w-auto max-w-[1200px]"}
          >
            <LogContent log={log} />
          </div>
        ))}
      </div>
    </Page>
  );
}
