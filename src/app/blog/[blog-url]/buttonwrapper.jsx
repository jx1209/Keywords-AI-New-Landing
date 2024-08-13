// ButtonWrapper.jsx
'use client';

import { Button } from "@/app/components/Buttons";



export function ButtonWrapper(props) {
  return (
    <Button
      {...props}
      onClick={() => {
        window.open("https://platform.keywordsai.co/platform", "_blank");
      }}
    />
  );
}