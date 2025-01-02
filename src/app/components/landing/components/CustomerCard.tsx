import cn from "@/utilities/ClassMerge";
import React from "react";

interface CustomerCardProps {
  url: string;
  logo: any;
  className?: string;
}

export default function CustomerCard({
  url,
  logo,
  className,
}: CustomerCardProps) {
  return (
    <div
      className={cn("cursor-pointer", className)}
      onClick={() => window.open(`${url}`, "_blank")}
    >
      {logo}
    </div>
  );
}
