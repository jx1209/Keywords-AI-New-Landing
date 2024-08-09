import React, { useEffect, useState } from "react";
import AOS from "aos";
import {
  Subtract,
  ArrowRight,
  Brain,
  Search,
  Y,
  Text,
  Stars,
  Chat,
  Document,
  Electric,
} from "src/components/icons-old";
import { Page } from "src/components/Page";
import { Button } from "src/components/Buttons";
import { LinkedIn, Logo, Right } from "src/components/Icons";
import {
  AgentHubLogo,
  CruxLogo,
  JustPaidLogo,
  WonderChatLogo,
  LawmeLogo,
  ShepherdLogo,
  OctolaneLogo,
} from "../Landing1/TeamsLogo";
import { FeatureSection } from "./FeatureSection";
import { IntrimLogo, LogoCard } from "./OtherSVG";
import { Helmet } from "react-helmet";

export function MobileLanding() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const IntroductionSection = () => {
    return (
      <div
        aria-label="frame 636"
        className="flex py-xl px-md flex-col items-center gap-xl self-stretch bg-gray-black"
      >
        <div
          aria-label="frame 2023"
          className="flex flex-col max-w-[1000px] items-center gap-md "
        >
          <div
            aria-label="frame 2024"
            className="flex px-xs py-[6px]  justify-center items-center gap-xxs rounded-lg border border-solid border-gray-3 bg-gray-2"
            data-aos="custom-fade-down"
          >
            <div
              onClick={() =>
                window.open(
                  "https://www.ycombinator.com/companies/keywords-ai/",
                  "_blank"
                )
              }
              aria-aria-label="frame 1603"
              className="flex flex-row justify-center items-center gap-xxs "
            >
              <span className="text-center caption text-resend-64">
                Backed by
              </span>
              <div className="flex items-center gap-xxxs">
                <Y />
                <span className="text-center caption gradient-text">
                  Combinator
                </span>
              </div>
            </div>
          </div>
          <div
            aria-label="frame 1601"
            className="flex-col max-w-[1200px] w-full items-center gap-lg"
          >
            <div
              aria-aria-label="frame 619"
              className="flex flex-col items-center gap-xs self-stretch"
            >
              <p
                className="display-md-bold text-center"
                data-aos="custom-fade-down"
                data-aos-delay="50"
              >
                Fast track GenAI
                <br />
                product development.
              </p>
              <p
                className="text-sm-md text-center text-gray-4"
                data-aos="custom-fade-down"
                data-aos-delay="250"
              >
                Every feature you need to build, deploy, and monitor your
                product. Keywords AI is unified DevOps platform to build LLM
                applications.
              </p>
            </div>
            <div
              aria-label="frame 1816"
              className="flex flex-col items-center justify-center gap-xs"
            >
              <Button
                text="Get started free"
                variant="big-white"
                // onClick={() => (window.location.href = platformURL)}
                onClick={() =>
                  (window.location.href =
                    "https://platform.keywordsai.co/signup")
                }
                icon={Right}
                iconSize="sm"
              />
              <Button
                text="Book a demo"
                variant="big-black"
                icon={Right}
                iconSize="sm"
                iconFill=""
                onClick={() =>
                  window.open("https://cal.com/keywordsai/demo", "_blank")
                }
              />
            </div>
          </div>
        </div>
        <div
          className="flex"
          data-aos="custom-fade-down"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
        >
          <img src="/images/Landing.png" className="w-full max-w-[1200px]" />
        </div>
      </div>
    );
  };

  const CollaborationSection = () => {
    return (
      <div
        aria-label="frame 631"
        className="flex flex-col py-[80px] px-md items-center gap-md self-stretch bg-gray-1"
      >
        <div className="flex flex-col items-center gap-sm self-stretch">
          <span className=" text-center caption-cap gradient-text">
            POWERING THE BEST YC AI STARTUPS
          </span>
        </div>
        <div
          aria-label="frame 2201"
          className="flex flex-wrap justify-center items-start content-start gap-md self-stretch"
        >
          <div onClick={() => window.open("https://retellai.com/", "_blank")}>
            <div className="p-xxs w-[152px] h-[44px] flex justify-center items-center gap-[10px] ">
              <img src="/images/retell.png" className="w-full max-w-[1200px]" />
            </div>
          </div>
          <div
            onClick={() => window.open("https://www.agenthub.dev/", "_blank")}
          >
            <AgentHubLogo />
          </div>
          <div
            onClick={() => window.open("https://www.justpaid.io/", "_blank")}
          >
            <JustPaidLogo />
          </div>
          <div
            onClick={() => window.open("https://www.octolane.com/", "_blank")}
          >
            <OctolaneLogo />
          </div>
          <div onClick={() => window.open("https://www.getcrux.ai", "_blank")}>
            <CruxLogo />
          </div>
          <div onClick={() => window.open("https://shepherd.study/", "_blank")}>
            <ShepherdLogo />
          </div>
        </div>
        <div className="min-h-[1.2px] shrink-0 [background:linear-gradient(90deg,rgba(255,255,255,0.00)_0%,rgba(0,0,0,0.20)_0%,rgba(143,143,143,0.67)_50%,rgba(0,0,0,0.04)_100%)] w-full max-w-[1200px]" />
      </div>
    );
  };

  const CommentSesction = () => {
    return (
      <div
        aria-label="frame 643"
        className="flex-col py-[80px] px-md flex items-center gap-md self-stretch bg-gray-black"
      >
        <svg
          width="70"
          height="25"
          viewBox="0 0 70 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3238 0.5H57.6762C64.2063 0.5 69.5 5.7937 69.5 12.3238C69.5 18.8539 64.2063 24.1476 57.6762 24.1476H12.3238C5.7937 24.1476 0.5 18.8539 0.5 12.3238C0.5 5.7937 5.7937 0.5 12.3238 0.5Z"
            fill="#1E1E23"
          />
          <path
            d="M12.3238 0.5H57.6762C64.2063 0.5 69.5 5.7937 69.5 12.3238C69.5 18.8539 64.2063 24.1476 57.6762 24.1476H12.3238C5.7937 24.1476 0.5 18.8539 0.5 12.3238C0.5 5.7937 5.7937 0.5 12.3238 0.5Z"
            stroke="#3E424A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.7389 6.75032C17.8284 6.68134 17.939 6.63889 18.0495 6.63889C18.2179 6.63889 18.3759 6.71318 18.4759 6.84584L21.4921 10.7407V13.8502L22.3922 14.7523C22.5975 14.9593 22.5975 15.2989 22.3922 15.5058C22.1869 15.7128 21.8501 15.7128 21.6448 15.5058L20.4393 14.2854V11.1068L17.6442 7.49852V7.49321C17.4652 7.26504 17.5073 6.93074 17.7389 6.75032ZM24 15.1148C23.9105 15.0924 23.8257 15.0458 23.7556 14.9752L22.6975 13.9086C22.5765 13.7866 22.5238 13.6221 22.5449 13.4682V10.3533H22.5291L19.4971 6.43725C19.4166 6.3347 19.3809 6.21071 19.3864 6.08889C19.0409 6.03044 18.6859 6 18.3238 6C14.8313 6 12 8.83126 12 12.3238C12 15.8163 14.8313 18.6476 18.3238 18.6476C20.8145 18.6476 22.969 17.2076 24 15.1148Z"
            fill="#F9FAFD"
          />
          <path
            d="M38 9.92814L37.3957 9.32385L35 11.7196L32.6043 9.32385L32 9.92814L34.3957 12.3239L32 14.7196L32.6043 15.3239L35 12.9281L37.3957 15.3239L38 14.7196L35.6043 12.3239L38 9.92814Z"
            fill="#B1B3BC"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.195 15.9244C51.1269 16.0764 51.0306 16.2188 50.9058 16.3436L49.6519 17.5975C49.1033 18.146 48.2139 18.146 47.6653 17.5975L46.4114 16.3436C45.8629 15.7951 45.8628 14.9056 46.4114 14.357L47.6653 13.1031C48.2139 12.5546 49.1034 12.5546 49.6519 13.1031L50.9058 14.357C51.0306 14.4818 51.127 14.6243 51.195 14.7762L52.4067 14.7763L49.437 9.63275C49.0491 8.96089 49.2793 8.10178 49.9512 7.71383L51.4868 6.82724C52.1587 6.4393 53.0179 6.66953 53.4058 7.3414L57.8116 14.9725C58.1995 15.6443 57.9692 16.5034 57.2974 16.8914L55.7617 17.778C55.0899 18.1659 54.2307 17.9357 53.8428 17.2639L53.0695 15.9243L51.195 15.9244ZM50.4312 9.05874L54.8371 16.6898C54.9079 16.8126 55.065 16.8547 55.1877 16.7837L56.7234 15.8971C56.8461 15.8262 56.8883 15.6693 56.8173 15.5465L52.4115 7.9154C52.3407 7.79264 52.1836 7.7506 52.0608 7.82151L50.5252 8.7081C50.4025 8.77896 50.3603 8.93598 50.4312 9.05874ZM50.094 15.1688L48.8401 13.9149C48.7399 13.8147 48.5773 13.8147 48.4771 13.9149L47.2232 15.1688C47.123 15.269 47.123 15.4315 47.2232 15.5318L48.4771 16.7856C48.5774 16.886 48.7399 16.8859 48.8402 16.7857L50.094 15.5319C50.1942 15.4315 50.1942 15.269 50.094 15.1688Z"
            fill="#F9FAFD"
          />
        </svg>

        <div className="flex-col flex items-center gap-lg max-w-[600px] w-full">
          <p className="text-md-md  text-center text-gray-white self-stretch">
            “Keywords AI legit has some of the best UX/DX I've ever seen in my
            life. I'm not even just saying that, I truly don't think I've ever
            integrated a product that was as easy.”
          </p>
          <div className="flex-col items-center gap-xxxs">
            <p className="text-sm-md text-center text-gray-white">
              Rahul Behal
            </p>
            <p className="caption text-center text-gray-4">
              Co-founder, AgentHub (YC W24)
            </p>
          </div>
        </div>
      </div>
    );
  };

  const CallToActionSection = () => {
    return (
      <div className="flex pt-[120px] pb-[200px] px-md flex-col items-center gap-lg bg-gray-black">
        <LogoCard />
        <p className="text-center display-md-bold gradient-text w-full">
          Integrate in minutes. Available today.
        </p>
        <div className="flex flex-col justify-center items-center gap-xs">
          <Button
            text="Sign up for free"
            variant="big-white"
            // onClick={() => (window.location.href = platformURL)}
            onClick={() =>
              (window.location.href = "https://platform.keywordsai.co/signup")
            }
            iconSize="sm"
            icon={Right}
          />
        </div>
      </div>
    );
  };

  return (
    <Page>
      <Helmet>
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
      </Helmet>
      <IntroductionSection />
      <CollaborationSection />
      <CommentSesction />
      <FeatureSection />
      <CallToActionSection />
    </Page>
  );
}
