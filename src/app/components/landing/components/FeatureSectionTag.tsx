import React from "react";

interface FeatureSectionTagProps {
  text: string;
}

export default function FeatureSectionTag({ text }: FeatureSectionTagProps) {
  return <div className="caption-cap gradient-text">{text.toUpperCase()}</div>;
}
