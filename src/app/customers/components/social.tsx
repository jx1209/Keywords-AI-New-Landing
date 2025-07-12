"use client";

import React, { useState } from "react";
import { Discord, LinkedIn, Twitter } from "@/app/components/Icons";

export default function SocialIcons() {
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isDiscordHovered, setIsDiscordHovered] = useState(false);

  const handleTwitterEnter = () => setIsTwitterHovered(true);
  const handleTwitterLeave = () => setIsTwitterHovered(false);

  const handleLinkedInEnter = () => setIsLinkedInHovered(true);
  const handleLinkedInLeave = () => setIsLinkedInHovered(false);

  const handleDiscordEnter = () => setIsDiscordHovered(true);
  const handleDiscordLeave = () => setIsDiscordHovered(false);

  return (
    <div className="flex flex-row items-start gap-sm">
      <a
        href="https://www.linkedin.com/company/keywordsai"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row w-[16px] h-[16px] justify-center items-center gap-[10px]"
        onMouseEnter={handleLinkedInEnter}
        onMouseLeave={handleLinkedInLeave}
      >
        <LinkedIn active={isLinkedInHovered} />
      </a>
      <a
        href="https://discord.gg/KEanfAafQQ"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row w-[16px] h-[16px] justify-center items-center gap-[10px]"
        onMouseEnter={handleDiscordEnter}
        onMouseLeave={handleDiscordLeave}
      >
        <Discord active={isDiscordHovered} />
      </a>
      <a
        href="https://twitter.com/keywordsai"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row w-[16px] h-[16px] justify-center items-center gap-[10px]"
        onMouseEnter={handleTwitterEnter}
        onMouseLeave={handleTwitterLeave}
      >
        <Twitter active={isTwitterHovered} />
      </a>
    </div>
  );
}
