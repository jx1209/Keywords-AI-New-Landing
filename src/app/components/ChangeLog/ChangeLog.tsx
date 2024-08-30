// import React, {useEffect, useState} from 'react';
// import { LogHeader } from './components/LogHeader/LogHeader';
// import {LogContent } from './components/LogContent/LogContent';
// import { Page } from 'src/components/Page';
// import log1 from './change_logs/v1.json';
// import log2 from './change_logs/v2.json';

// export function ChangeLog() {

//   const logs = [log1, log2];

//   return (
//     <Page>
//       <div aria-label='frame 798'
//         className="flex pt-[80px] pr-xl pb-[120px] pl-xl flex-col items-center gap-xl self-stretch ">
//         <LogHeader />
//         {logs.map((log, index) => (
//           <LogContent key={index} log={log} />
//         ))}
//       </div>
//     </Page>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import { LogHeader } from "./components/LogHeader/LogHeader";
import { LogContent } from "./components/LogContent/LogContent";
import { Page } from "@/app/components/Page/Page";
import logs from "./change_logs";

export function ChangeLog() {
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
        className="flex pt-[80px] pr-xl pb-[120px] pl-xl flex-col items-center gap-[120px] self-stretch"
      >
        <LogHeader />
        {logs.map((log, index) => (
          <LogContent key={index} log={log} />
        ))}
      </div>
    </Page>
  );
}
