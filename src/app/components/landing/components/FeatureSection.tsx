import React from "react";
import FeatureSectionTag from "./FeatureSectionTag";

interface FeatureSectionProps {
  tag: string;
  title: string;
  description: string;
  cards?: {
    text?: string;
    graphic?: string;
  }[];
  isComingSoon?: boolean;
}

export default function FeatureSection({
  tag,
  title,
  description,
  cards,
  isComingSoon,
}: FeatureSectionProps) {
  return (
    <div className="flex flex-col items-start gap-xl w-full py-[160px] self-stretch">
      <div className="flex flex-col items-start gap-xxs w-full self-stretch">
        <div className="flex items-center gap-xxs">
          <FeatureSectionTag text={tag} />
          {isComingSoon && (
            <div className="flex items-center gap-xxs">
              <p className="caption-cap text-primary">COMING SOON</p>
            </div>
          )}
        </div>
        <h2 className="text-white display-lg">{title}</h2>
        <p className="text-gray-4 text-text-md">{description}</p>
      </div>

      <div className="grid grid-cols-2 w-full">
        {cards?.map((card, index) => (
          <div className="flex p-[1px] shadow-border shadow-gray-2">
            <div key={index} className="flex flex-col p-lg gap-xxs w-full">
              <p className="text-gray-white display-xs">{card.text}</p>
              {card.graphic && card.graphic}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
