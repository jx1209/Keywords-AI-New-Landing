"use client";
import { Page } from "@/app/components/Page/Page";
import PricingCard from "./components/PricingCard/PricingCard";
import { Button } from "@/app/components/Buttons";
import { PricingTable } from "./components/PricingTable/PricingTable";
import { useEffect, useState } from "react";
import { models } from "src/utilities/constants";
import TextSwitchButton from "@/app/components/Buttons/TextSwitchButton";
import { Tag } from "@/app/components/Tag/Tag";
import {
  AgentHubLogo,
  CruxLogo,
  EduPhoriaAiLogo,
  OctolaneLogo,
  JobLoomLogo,
  JustPaidLogo,
  LawmeLogo,
  MilaLogo,
  ShepherdLogo,
  WonderChatLogo,
} from "@/app/components/landing/TeamsLogo";
import Image from "next/image";
export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const [teamPrice, setTeamPrice] = useState("$239");
  const [enterprisePrice, setEnterprisePrice] = useState("$3999");
  const [bonus, setBonus] = useState("Billed annually");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleSwitchChange = (checked) => {
    setIsYearly(checked);
    setTeamPrice(checked ? "$239 " : "$299");
    setEnterprisePrice(checked ? "$3999" : "$4999");
    setBonus(checked ? "Billed annually" : "Billed monthly");
  };

  const remaining = models.length;
  const cards = [
    {
      title: "Free",
      description: "Best for indie hackers.",
      price: "$0",
      featureTitle: "Free plan features:",
      bonus: "Free forever",
      button: (
        <Button
          variant={"r4-black"}
          text={"Get started free"}
          className="self-stretch shadow-border shadow-gray-3 rounded-sm bg-gray-2"
          onClick={
            () =>
              (window.location.href =
                "https://platform.keywordsai.co/platform/api/plans") // should direct to the pricing page in the platform later
          }
          type="button"
        />
      ),
      currentPlan: "View Usage Details",
      features: [
        // "$10 free LLM credits",
        "10k logs free",
        "2 seats",
        // "$15 free LLM credits",
        "Community support",
      ],
      plan: "starter",
      rank: 2,
    },
    {
      title: isYearly ? (
        <div className="flex  items-center gap-xxs">
          Team
          <Tag
            text="-20%"
            textColor="text-success"
            border=""
            borderRadious="rounded-sm"
            backgroundColor="bg-success/10"
          />
        </div>
      ) : (
        "Team"
      ),
      description: "Best for early stage startups.",
      price: teamPrice,
      bonus: bonus,
      featureTitle: "Everything in Free, plus",
      currentPlan: "View Usage Details",
      // bgColor: "bg-gray-2",
      // border: "shadow-gray-4 shadow-border",
      button: (
        <Button
          variant={"r4-white"}
          text={"Get started"}
          bgColor="bg-gray-white"
          textColor="text-gray-black"
          className="self-stretch items-center justify-center gap-xxs"
          width="w-full"
          onClick={
            () =>
              (window.location.href =
                "https://platform.keywordsai.co/platform/api/plans") // should direct to the pricing page in the platform later
          }
          type="button"
        />
      ),

      features: [
        // "$100 free LLM credits",
        "1M logs free",
        "5 seats",
        "Custom evaluations",
        "Founders 24/7 support",
        // "$99 per additional 1M requests",
        // "Admin roles",
        // "Advanced model fallback",
        // `Mistral, Anthropic, and ${remaining} more models`,
        // "CTO priority support",
      ],
      plan: "flex_32k",
      rank: 3,
    },
    {
      title: "Enterprise",
      description: "Best for high-growth teams.",
      price: "Custom",
      featureTitle: "Everything in Team, plus",
      button: (
        <Button
          variant={"r4-black"}
          text={"Book a demo"}
          className="self-stretch shadow-border shadow-gray-3 rounded-sm bg-gray-2"
          onClick={() =>
            window.open("https://cal.com/keywordsai/demo", "_blank")
          }
        />
      ),
      currentPlan: "View Usage Details",
      features: [
        "Unlimited logs",
        "Unlimited seats",
        "HIPAA & SOC-2 compliance",
        "Uptime SLA",
      ],
      plan: "custom",
      rank: 4,
    },
  ];

  return (
    <Page>
      {/* <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@keywordsai" />
        <meta name="twitter:title" content="Keywords AI" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Keywords AI - Build better AI products with complete observability"
        />
        <meta
          property="og:description"
          content="Keywords AI makes it easy to ship AI applications.Every feature you need to build, deploy, and monitor your AI product. Keywords AI is the new way to build software with LLMs."
        />
        <meta property="og:url" content="https://keywordsai.co" />
        <meta property="og:site_name" content="Keywords AI" />
        <meta
          name="description"
          content="Keywords AI makes it easy to ship AI applications.Every feature you need to build, deploy, and monitor your AI product. Keywords AI is the new way to build software with LLMs."
        />
      </Helmet> */}
      {/* upper container */}
      <div className="flex-col px-xl pt-xxl pb-xxxl items-center gap-xl self-stretch">
        {/* section title */}
        <div className="flex flex-col max-w-[1000px] items-center gap-xs">
          <p className="display-lg text-center text-gray-white ">
            Simple Pricing.{" "}
            <span className="display-lg text-center text-gray-4 ">
              {" "}
              Start for Free.
            </span>
          </p>
          <p className="text-md-medium text-center text-gray-4 ">
            Get started free and scale as you go.
          </p>
        </div>

        {/* pricing cards */}
        <div className="flex-col items-center gap-lg">
          <div className={`flex items-center gap-xxs`}>
            {isYearly && <div className="w-[46px] h-[4px]"></div>}
            <TextSwitchButton
              checked={isYearly}
              leftValue="Monthly"
              rightValue="Annually"
              onCheckedChange={handleSwitchChange}
            />
            {isYearly && (
              <Tag
                text="-20%"
                textColor="text-success"
                border=""
                borderRadious="rounded-sm"
                backgroundColor="bg-success/10"
              />
            )}
          </div>
          <div className="flex max-w-[1000px] items-start content-start gap-y-[24px] gap-x-[20px]  flex-wrap">
            {cards.map((card, index) => (
              <PricingCard {...card} price={card.price} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div
        aria-label="frame 631"
        className="flex-col px-[120px] sm:p-lg items-center gap-xl self-stretch  bg-black_gradient  flex-nowrap"
      >
        <div className="flex-col items-center gap-sm self-stretch text-center caption-cap gradient-text">
          POWERING THE WORLD’S BEST AI STARTUPS
        </div>
        <div className="flex flex-wrap flex-row w-[935px] max-w-[1200px] justify-center items-start content-start gap-[20px]">
          <div
            onClick={() => window.open("https://www.agenthub.dev/", "_blank")}
          >
            <AgentHubLogo />
          </div>
          <div onClick={() => window.open("https://retellai.com/", "_blank")}>
            <div className="p-xxs w-[152px] h-[44px] flex justify-center items-center gap-[10px] ">
              <div
                className="w-full max-w-[1200px] relative"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src="/images/retell.png"
                  alt="Retell"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <div onClick={() => window.open("https://shepherd.study/", "_blank")}>
            <ShepherdLogo />
          </div>
          <div
            onClick={() => window.open("https://www.justpaid.io/", "_blank")}
          >
            <JustPaidLogo />
          </div>
          <div onClick={() => window.open("https://www.getcrux.ai", "_blank")}>
            <CruxLogo />
          </div>
          <div
            onClick={() => window.open("https://www.octolane.com/", "_blank")}
          >
            <OctolaneLogo />
          </div>
          <div onClick={() => window.open("https://i.inc/", "_blank")}>
            <div className="p-xxs w-[152px] h-[44px] flex justify-center items-center gap-[10px] ">
              <div className="w-full max-w-[1200px]">
                <Image
                  src="/images/IInc.png"
                  alt="IInc"
                  width={1200}
                  height={675} // Adjust this based on the actual aspect ratio of your image
                  style={{ width: "100%", height: "auto" }}
                  className=""
                />
              </div>
            </div>
          </div>
          <div onClick={() => window.open("https://www.lawme.ai/", "_blank")}>
            <LawmeLogo />
          </div>
          <div onClick={() => window.open("https://wonderchat.io/", "_blank")}>
            <WonderChatLogo />
          </div>
        </div>
      </div>
      {/* pricing table */}
      <div className="flex flex-col px-xl pt-xxxl pb-[240px] gap-xl items-center self-stretch w-full">
        <PricingTable />
        {/* 
          <PricingTable /> */}
      </div>
    </Page>
  );
}
