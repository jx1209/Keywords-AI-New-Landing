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
  LumonaLogo,
  GovlyLogo,
  MomenticLogo,
  FirstQuadrantLogo,
  WaddleLogo,
  RevisionDojoLogo,
  IIncLogo,
  RetellLogoSmall,
  OctolaneSmall,
  FirstQuadrantSmall,
  JustpaidSmall,
} from "@/app/components/landing/TeamsLogo";
import Image from "next/image";
import CompanyCard from "./components/PricingCard/CompanyCard";
import SmallPricingCard from "./components/SmallPricingCard";
export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const [basicPrice, setBasicPrice] = useState("$7");
  const [teamPrice, setTeamPrice] = useState("$42");
  const [enterprisePrice, setEnterprisePrice] = useState("$3999");
  const [bonus, setBonus] = useState("Billed annually");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleSwitchChange = (checked) => {
    setIsYearly(checked);
    setBasicPrice(checked ? "$7" : "$9");
    setTeamPrice(checked ? "$42 " : "$49");
    setEnterprisePrice(checked ? "$3999" : "$4999");
    setBonus(checked ? "Billed annually" : "Billed monthly");
  };

  const remaining = models.length;
  const cards = [
    {
      title: "Free",
      description: "Best for getting started.",
      price: "$0",
      featureTitle: "Free plan features:",
      bonus: "Free forever",
      button: (
        <Button
          variant={"big-black"}
          width="w-full"
          textClassName="text-sm-md"
          justification="justify-center"
          text={"Try for free"}
          borderColor="shadow-border shadow-gray-3"
          bgColor="bg-gray-2"
          borderRadius="rounded-xl"
          padding="py-[10px]"
          onClick={() =>
            window.open("https://platform.keywordsai.co/platform/api/plans")
          }
        />
      ),
      hasDemo: false,
      currentPlan: "View Usage Details",
      features: [
        // "$10 free LLM credits",
        "1k logs free",
        "2 seats",
        "Community support",
      ],
      plan: "starter",
      rank: 2,
    },
    {
      title: isYearly ? (
        <div className="flex  items-center gap-xxs">Pro</div>
      ) : (
        "Pro"
      ),
      description: "Best for indie hackers.",
      price: basicPrice,
      bonus: isYearly ? (
        <div className="flex  items-center gap-xxs">
          {bonus}
          <p className="text-primary caption-md">-22%</p>
        </div>
      ) : (
        <div className="flex  items-center gap-xxs">{bonus}</div>
      ),
      featureTitle: "Everything in Free, plus",
      currentPlan: "View Usage Details",
      // bgColor: "bg-gray-2",
      // border: "shadow-gray-4 shadow-border",
      button: (
        <Button
          variant={"big-black"}
          textClassName="text-sm-md"
          width="w-full"
          justification="justify-center"
          text={"Try for free"}
          borderColor="shadow-border shadow-gray-3"
          bgColor="bg-gray-2"
          borderRadius="rounded-xl"
          padding="py-[10px]"
          onClick={() =>
            window.open("https://platform.keywordsai.co/platform/api/plans")
          }
        />
      ),
      hasDemo: false,
      features: [
        // "$100 free LLM credits",
        "10k logs free",
        "5 prompts",
        "Unlimited seats",
        "Email support",
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
      title: (
        <div className="flex items-center gap-xxs">
          Team
          <Tag
            text="Recommended"
            textColor="text-primary"
            border=""
            borderRadius="rounded-sm"
            backgroundColor="bg-primary/10"
          />
        </div>
      ),
      description: "Best for high-growth startups.",
      price: teamPrice,
      bonus: isYearly ? (
        <div className="flex  items-center gap-xxs">
          {bonus}
          <p className="text-primary caption-md">-14%</p>
        </div>
      ) : (
        <div className="flex  items-center gap-xxs">{bonus}</div>
      ),
      featureTitle: "Everything in Pro, plus",
      currentPlan: "View Usage Details",
      // bgColor: "bg-gray-2",
      // border: "shadow-gray-4 shadow-border",
      button: (
        <Button
          variant={"big-black"}
          text={"Try for free"}
          textClassName="text-sm-md"
          textColor="text-gray-white"
          width="w-full"
          justification="justify-center"
          bgColor="bg-primary-2"
          hoverColor="bg-primary"
          borderRadius="rounded-xl"
          padding="py-[10px]"
          onClick={() =>
            window.open("https://platform.keywordsai.co/platform/api/plans")
          }
        />
      ),
      hasDemo: true,
      features: [
        // "$100 free LLM credits",
        "100k logs free",
        "Unlimited prompts",
        "Custom evaluations",
        "Custom evaluations",
        "Private Slack support",
        // "$99 per additional 1M requests",
        // "Admin roles",
        // "Advanced model fallback",
        // `Mistral, Anthropic, and ${remaining} more models`,
        // "CTO priority support",
      ],
      plan: "team",
      rank: 3,
    },
    {
      title: "Enterprise",
      description: "Best for large organizations.",
      price: "Custom",
      featureTitle: "Everything in Team, plus",
      button: (
        <Button
          variant={"big-black"}
          width="w-full"
          justification="justify-center"
          text={"Request a trial"}
          textClassName="text-sm-md"
          borderColor="shadow-border shadow-gray-3"
          bgColor="bg-gray-2"
          borderRadius="rounded-xl"
          padding="py-[10px]"
          onClick={() =>
            window.open("https://cal.com/keywordsai/demo", "_blank")
          }
        />
      ),
      hasDemo: true,
      currentPlan: "View Usage Details",
      features: [
        "Unlimited logs",
        "Unlimited logs",
        "HIPAA & SOC-2 compliance",
        "HIPAA & SOC-2 compliance",
        "Uptime SLA",
        "24/7 support",
      ],
      plan: "custom",
      rank: 4,
    },
  ];
  const companyCards = [
    {
      company: "JustPaid",
      text: (
        <p className="text-gray-4 text-sm-md">
          <span className="text-gray-white text-sm-md">100M+ </span>
          LLM requests logged. Ensuring
          <span className="text-gray-white text-sm-md"> 99.99% uptime </span>
          across all LLM systems.
        </p>
      ),
      logo: <JustpaidSmall />,
    },
    {
      company: "Octolane",
      text: (
        <p className="text-gray-4 text-sm-md">
          <span className="text-gray-white text-sm-md">100M+ </span>
          LLM requests logged. Ensuring
          <span className="text-gray-white text-sm-md"> 99.99% uptime </span>
          across all LLM systems.
        </p>
      ),
      logo: <OctolaneSmall />,
    },
    {
      company: "First Quadrant",
      text: (
        <p className="text-gray-4 text-sm-md">
          <span className="text-gray-white text-sm-md">100M+ </span>
          LLM requests logged. Ensuring
          <span className="text-gray-white text-sm-md"> 99.99% uptime </span>
          across all LLM systems.
        </p>
      ),
      logo: (
        <div className=" h-[20px] flex justify-center items-center">
          <FirstQuadrantSmall />
        </div>
      ),
    },
    {
      company: "Retell AI",
      text: (
        <p className="text-gray-4 text-sm-md">
          <span className="text-gray-white text-sm-md">100M+ </span>
          LLM requests logged. Ensuring
          <span className="text-gray-white text-sm-md"> 99.99% uptime </span>
          across all LLM systems.
        </p>
      ),
      logo: <RetellLogoSmall />,
    },
  ];

  const pricingCards = [
    {
      plan: "free",
      displayPlan: "Free",
      monthlyPrice: 0,
      yearlyPrice: 0,
      onClick: () => {
        window.open(`https://platform.keywordsai.co/platform/api/plans`);
      },
    },
    {
      plan: "pro",
      displayPlan: "Pro",
      monthlyPrice: 9,
      yearlyPrice: 7,
      yearlyDiscount: 22,
      onClick: () => {
        window.open(`https://platform.keywordsai.co/platform/api/plans`);
      },
    },
    {
      plan: "team",
      displayPlan: "Team",
      monthlyPrice: 49,
      yearlyPrice: 42,
      yearlyDiscount: 14,
      onClick: () => {
        window.open(`https://platform.keywordsai.co/platform/api/plans`);
      },
    },
    {
      plan: "enterprise",
      displayPlan: "Enterprise",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      onClick: () => {
        window.open("https://cal.com/keywordsai/demo", "_blank");
      },
    },
  ];
  return (
    <Page>
      {/* upper container */}
      <div className="w-full flex-col px-xl pt-xxl pb-xxxl items-center gap-xl self-stretch">
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
                text="-14%"
                textColor="text-primary"
                border=""
                borderRadius="rounded-sm"
                backgroundColor="bg-primary/10"
              />
            )}
          </div>
          <div className=" max-w-[1200px] flex w-full items-end justify-start gap-y-xs gap-x-md flex-wrap">
            {cards.map((card, index) => (
              <PricingCard
                {...card}
                price={card.price}
                key={index}
                bgColor={
                  card.description === "Best for high-growth startups."
                    ? "bg-gray-2"
                    : "bg-gray-black"
                }
              />
            ))}
            {/* <div className="w-full flex items-start justify-start gap-md">
              {companyCards.map((companyCard, index) => (
                <CompanyCard {...companyCard} key={index} />
              ))}
            </div> */}
          </div>
        </div>
      </div>
      {/* <div
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
      </div> */}
      <div
        aria-label="Collaboration section"
        className="flex-col py-xxxl px-sm sm:p-lg items-center gap-xl self-stretch  bg-black_gradient  flex-nowrap"
      >
        <div className="flex-col items-center gap-sm self-stretch text-center caption-cap gradient-text">
          POWERING THE WORLD’S BEST AI STARTUPS
        </div>

        <div className="flex flex-wrap flex-row w-[1174px] max-w-[1200px] justify-center items-start content-start gap-[20px]">
          <div
            onClick={() => window.open("https://www.gumloop.com/", "_blank")}
            className="cursor-pointer"
          >
            <AgentHubLogo />
          </div>
          <div
            className="w-[152px] h-[44px] flex justify-center items-center cursor-pointer"
            onClick={() => window.open("https://retellai.com/", "_blank")}
          >
            <Image
              src="/images/retell.png"
              alt="Retell"
              width={1200}
              height={675} // Adjust this based on the actual aspect ratio of your image
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div
            onClick={() => window.open("https://www.govly.com/", "_blank")}
            className="cursor-pointer"
          >
            <GovlyLogo />
          </div>
          <div
            className="w-[152px] h-[44px] flex justify-center items-center cursor-pointer"
            onClick={() => window.open("https://www.tryandai.com/", "_blank")}
          >
            <Image
              src="/images/AndAI.png"
              alt="&AI"
              width={1200}
              height={675} // Adjust this based on the actual aspect ratio of your image
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div
            onClick={() => window.open("https://www.justpaid.io/", "_blank")}
            className="cursor-pointer"
          >
            <JustPaidLogo />
          </div>
          <div
            onClick={() => window.open("https://www.gentooai.com/", "_blank")}
            className="cursor-pointer"
          >
            <WaddleLogo />
          </div>
          <div
            onClick={() => window.open("https://firstquadrant.ai/", "_blank")}
            className="cursor-pointer"
          >
            <FirstQuadrantLogo />
          </div>
          <div
            onClick={() => window.open("https://i.inc/", "_blank")}
            className="cursor-pointer"
          >
            <IIncLogo />
          </div>
          <div
            onClick={() => window.open("https://momentic.ai/", "_blank")}
            className="cursor-pointer"
          >
            <MomenticLogo />
          </div>
          <div
            onClick={() => window.open("https://www.octolane.com/", "_blank")}
            className="cursor-pointer"
          >
            <OctolaneLogo />
          </div>
          <div
            onClick={() => window.open("https://www.lumona.ai/", "_blank")}
            className="cursor-pointer"
          >
            <LumonaLogo />
          </div>
          <div
            onClick={() =>
              window.open("https://www.revisiondojo.com/", "_blank")
            }
            className="cursor-pointer"
          >
            <RevisionDojoLogo />
          </div>
        </div>
        {/* </Carousel> */}

        <div className="min-h-[1.2px] shrink-0 [background:linear-gradient(90deg,rgba(255,255,255,0.00)_0%,rgba(0,0,0,0.20)_0%,rgba(143,143,143,0.67)_50%,rgba(0,0,0,0.04)_100%)] w-full max-w-[1200px]" />
      </div>
      {/* pricing table */}
      <div className="flex flex-col px-xl pt-xxxl pb-[240px] gap-xl items-center self-stretch w-full">
        <div className="flex-col gap-0 max-w-[1200px] w-full">
          <div className="flex flex-row w-full gap-sm items-start self-stretch sticky -top-lg bg-gray-1">
            <div className="flex flex-row min-w-[240px] flex-1 items-start self-stretch" />
            {pricingCards.map((card) => (
              <SmallPricingCard
                key={card.plan}
                plan={card.plan}
                displayPlan={card.displayPlan}
                monthlyPrice={card.monthlyPrice}
                yearlyPrice={card.yearlyPrice}
                yearlyDiscount={card.yearlyDiscount}
                isYearly={isYearly}
                currentPlan={card.plan}
                handleSwitchChange={handleSwitchChange}
                onClick={card.onClick}
              />
            ))}
          </div>
          <PricingTable />
          {/* 
          <PricingTable /> */}
        </div>
      </div>
    </Page>
  );
}
