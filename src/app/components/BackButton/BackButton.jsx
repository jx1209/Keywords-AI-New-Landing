'use client';
import { useRouter } from 'next/navigation'
import { Button } from "../Button_old";
export function BackButton({ text, link = -1 }) {
  const router = useRouter()
  return (
    <div className="flex-col items-start gap-[10px] self-stretch">
      <Button
        text={text}
        variant={"header"}
        arrowDirection={"left"}
        onClick={() => router.push(link)}
      />
    </div>
  );
}
