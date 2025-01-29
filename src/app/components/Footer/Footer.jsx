import { useState } from "react";
import {
  LinkedIn,
  Logo,
  Twitter,
  Discord,
  ProductHunt,
  DividerLine,
  Y,
} from "../Icons";
import { SmallDot } from "../icons-old";
import "./Footer.css";
import { IntrimLogo } from "@/app/components/MobileLanding/OtherSVG";
import { usePathname, useRouter } from "next/navigation";
export function Footer() {
  const router = useRouter();
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isDiscordHovered, setIsDiscordHovered] = useState(false);

  // Handlers for Twitter
  const handleTwitterEnter = () => setIsTwitterHovered(true);
  const handleTwitterLeave = () => setIsTwitterHovered(false);

  // Handlers for LinkedIn
  const handleLinkedInEnter = () => setIsLinkedInHovered(true);
  const handleLinkedInLeave = () => setIsLinkedInHovered(false);

  // Handlers for Discord
  const handleDiscordEnter = () => setIsDiscordHovered(true);
  const handleDiscordLeave = () => setIsDiscordHovered(false);
  return (
    <div
      aria-label="Footer"
      className="flex flex-col flex-1 pb-lg items-center gap-lg self-stretch bg-gray-black sm:pt-0 sm:px-lg sm:pb-xxs "
    >
      <div className="line bg-gray-2"></div>
      {/* <div className="hidden sm:flex w-full justify-center caption text-gray-4">
        Copyright © 2024 Keywords AI Inc. All rights reserved.
      </div> */}
      <div className="flex flex-1 h-fit max-w-[1200px] w-full justify-between sm:gap-xxs">
        <div className="flex flex-col justify-between items-start self-stretch">
          <div className="flex gap-sm flex-col">
            <div className="flex items-center gap-xxs">
              <Logo />
              <div className="text-sm-md text-gray-4 sm:hidden">
                {"Keywords AI - the LLM observability platform."}
              </div>
            </div>
            <div className="flex items-center gap-sm">
              <div className="flex items-start gap-sm">
                <ProductHunt />
              </div>
              <div className="flex items-center max-w-[1200px] justify-center gap-xxs">
                <DividerLine />
                <span className="text-center caption text-resend-64">
                  Backed by
                </span>
                <span className="flex items-center gap-xxxs">
                  <Y size="md" />
                  <span className="text-center caption gradient-text">
                    Combinator
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row items-start gap-sm">
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
        </div>
        <div className="flex flex-wrap w-[632px] items-center content-center gap-y-sm gap-x-md">
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <span className="text-gray-white text-sm-md">Product </span>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <span className="text-gray-white text-sm-md">Integrations </span>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <span className="text-gray-white text-sm-md">Resources </span>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <span className="text-gray-white text-sm-md">Developers </span>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://www.keywordsai.co/"
                // href="#"
                // target="_blank"
                rel="noopener noreferrer"
                // onClick={(e) => {
                //   e.preventDefault();
                //   window.scrollTo({ top: 0, behavior: "smooth" });
                // }}
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Features
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://docs.keywordsai.co/integration/development-frameworks/openai-sdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  OpenAI SDK
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <span
                className="text-gray-4 text-sm-regular hover:text-gray-white"
                onClick={() => window.open("https://discord.gg/KEanfAafQQ")}
                style={{ cursor: "pointer" }}
              >
                Contact Us
              </span>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://docs.keywordsai.co/get-started/overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Docs
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://docs.keywordsai.co/integration/supported-models"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Models
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://docs.keywordsai.co/integration/development-frameworks/anthropic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Anthropic SDK
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://www.keywordsai.co/privacy-policy"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Privacy Policy
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://discord.gg/KEanfAafQQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Discord
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://www.keywordsai.co/pricing"
                rel="noopener noreferrer"
                onClick={() => window.scrollTo(0, 0)}
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Pricing
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://docs.keywordsai.co/integration/development-frameworks/langchain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  LangChain
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://www.keywordsai.co/tou"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Terms of Use
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://docs.keywordsai.co/get-started/llm-inference"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  LLM proxy
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a href="/changelog" target="_blank" rel="noopener noreferrer">
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Changelog
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://docs.keywordsai.co/integration/development-frameworks/llama-index"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  LlamaIndex
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a href="https://www.keywordsai.co/dpa" rel="noopener noreferrer">
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  DPA
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://status.keywordsai.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Status
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://www.keywordsai.co/blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Blog
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://docs.keywordsai.co/integration/providers/openrouter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  OpenRouter
                </span>
              </a>
            </div>
          </div>
          {/* <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0"></div> */}
          {/* <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://docs.keywordsai.co/integration/own-api-keys"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  LiteLLM
                </span>
              </a>
            </div>
          </div> */}
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://comply.dog/yc5bmv#checklist"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  GDPR
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center gap-xxs text-gray4 sm:hidden">
          <span
            className="caption text-gray-4"
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://comply.dog/yc5bmv#checklist")}
          >
            GDPR
          </span>
          <SmallDot fill="fill-gray-4" />
          <span
            className="caption text-gray-4"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/privacy-policy")}
          >
            Privacy Policy
          </span>
          <SmallDot fill="fill-gray-4" />
          <span
            className="caption text-gray-4"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/terms-of-use")}
          >
            Terms of Use
          </span>
          <SmallDot fill="fill-gray-4" />
          <span
            className="caption text-gray-4"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/dpa")}
          >
            DPA
          </span>
          <SmallDot fill="fill-gray-4" />
          <span
            className="caption text-gray-4"
            style={{ cursor: "pointer" }}
            onClick={() => window.open("mailto:team@keywordsai.co")}
          >
            Contact Us
          </span>
        </div> */}
    </div>
  );
}
export function MobileFooter() {
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isDiscordHovered, setIsDiscordHovered] = useState(false);

  // Handlers for Twitter
  const handleTwitterEnter = () => setIsTwitterHovered(true);
  const handleTwitterLeave = () => setIsTwitterHovered(false);

  // Handlers for LinkedIn
  const handleLinkedInEnter = () => setIsLinkedInHovered(true);
  const handleLinkedInLeave = () => setIsLinkedInHovered(false);

  // Handlers for Discord
  const handleDiscordEnter = () => setIsDiscordHovered(true);
  const handleDiscordLeave = () => setIsDiscordHovered(false);
  return (
    <div className="flex flex-row py-xs px-md justify-between items-center self-stretch bg-gray-2">
      <div className="flex flex-row gap-xxs items-center">
        <IntrimLogo />
        <span className="text-sm-md text-gray-4">
          The LLM observability platform.
        </span>
      </div>
      <div className="flex items-start flex-row gap-sm">
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
          href="https://twitter.com/keywordsai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row w-[16px] h-[16px] justify-center items-center gap-[10px]"
          onMouseEnter={handleTwitterEnter}
          onMouseLeave={handleTwitterLeave}
        >
          <Twitter active={isTwitterHovered} />
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
      </div>
    </div>
  );
}
