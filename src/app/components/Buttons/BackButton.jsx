'use client';
import { useRouter } from 'next/navigation'
import { Button } from "./Button";
import React from "react";
import { Left } from "../Icons";
export function BackButton({ text, link = -1 }) {
  const router = useRouter()
  return (
    <div className="flex-col items-start gap-[10px] self-stretch">
      <Button
        text={text}
        variant={"r18-black"}
        onClick={() => router.push(link)}
        icon={Left}
        iconPosition={"left"}
      />
    </div>
  );
}
