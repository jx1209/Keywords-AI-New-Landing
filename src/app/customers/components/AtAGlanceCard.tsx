import React from "react";
import { cn } from "@/lib/utils";

interface AtAGlanceCardProps {
  customer: string;
  industry: string;
  stage: string;
  challenge: string;
  solution: string;
  className?: string;
}

export function AtAGlanceCard({
  customer,
  industry,
  stage,
  challenge,
  solution,
  className,
}: AtAGlanceCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-sm py-lg pl-sm bg-gray-2 rounded-lg border border-gray-3",
        className
      )}
    >
      <h3 className="text-lg font-semibold text-gray-white mb-sm">
        AT A GLANCE
      </h3>
      
      <div className="flex flex-col gap-sm">
        <div className="flex flex-col gap-xxxs">
          <span className="text-sm-medium text-gray-white">Customer</span>
          <span className="text-md text-gray-4">{customer}</span>
        </div>
        <div className="flex flex-col gap-xxxs">
          <span className="text-sm-medium text-gray-white">Stage</span>
          <span className="text-md text-gray-4">{stage}</span>
        </div>
        <div className="flex flex-col gap-xxxs">
          <span className="text-sm-medium text-gray-white">Industry</span>
          <span className="text-md text-gray-4">{industry}</span>
        </div>
        
        <div className="flex flex-col gap-xxxs">
          <span className="text-sm-medium text-gray-white">Challenge</span>
          <span className="text-md text-gray-4">{challenge}</span>
        </div>
        
        <div className="flex flex-col gap-xxxs">
          <span className="text-sm-medium text-gray-white">Solution</span>
          <span className="text-md text-gray-4">{solution}</span>
        </div>
      </div>
    </div>
  );
} 