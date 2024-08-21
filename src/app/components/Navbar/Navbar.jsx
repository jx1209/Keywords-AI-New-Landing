"use client";
import { ArrowRight, Logo } from "../icons-old";
import "./Navbar.css";
import React from "react";
import cn from "@/utilities/ClassMerge";
import { Button } from "../Buttons";
import {
  AsyncIcon,
  DashboardIcon,
  Down,
  Left,
  Pencil,
  PlaygroundIcon,
  ProxyIcon,
  RequestsIcon,
  Right,
  Up,
  UserAnalyticsIcon,
} from "../Icons";
import { platformURL } from "src/utilities/platformURL";
import SingleNavigationMenu from "../Displays/NavigationMenu";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const leftItems = [
    {
      title: "Request logging",
      subTitle: "Trace request logs and user sessions.",
      icon: RequestsIcon,
      link: "https://docs.keywordsai.co/features/monitoring/logging",
    },
    {
      title: "Usage dashboard",
      subTitle: "Visualize metrics and usage.",
      icon: DashboardIcon,
      link: "https://docs.keywordsai.co/features/monitoring/analytics",
    },
    {
      title: "User analytics",
      subTitle: "View product usage by user.",
      icon: UserAnalyticsIcon,
      link: "https://docs.keywordsai.co/features/monitoring/user-data",
    },
    {
      title: "Prompt management",
      subTitle: "Collaborate and iterate on prompts.",
      icon: Pencil,
      link: "https://docs.keywordsai.co/features/prompt/prompt-management",
    },
    {
      title: "Model playground",
      subTitle: "Explore and A/B test 100+ models.",
      icon: PlaygroundIcon,
      link: "https://docs.keywordsai.co/features/prompt/",
    },
  ];
  const rightItems = [
    {
      title: "Proxy",
      subTitle:
        "Run API requests directly through us. Built-in load balancing, fallback, and routing with a unified API.",
      icon: AsyncIcon,
      link: "https://docs.keywordsai.co/api-endpoints/proxy-endpoints/chat-completions",
    },
    {
      title: "Logging",
      subTitle:
        "Log requests and user sessions asynchronously without using a proxy endpoint.",
      icon: ProxyIcon,
      link: "https://docs.keywordsai.co/api-endpoints/async-endpoints/request-logging-endpoint",
    },
  ];
  const [open, setOpen] = React.useState("");
  return (
    <div
      aria-label="Navigation Bar"
      className=" w-full flex-col sm:flex-row px-sm sm:px-lg py-xs sm:py-sm justify-between items-center bg-gray-black bg-opacity-0 backdrop-blur-[3px] border-b border-gray-2 fixed z-10 "
    >
      <div className="flex max-w-[1200px] justify-between items-center flex-1 w-full">
        <div className="flex flex-row gap-lg items-center ">
          <div
            className="flex items-center gap-xxs self-stretch hover:cursor-pointer"
            onClick={() => {
              router.push("/");
              window.scrollTo(0, 0);
            }}
          >
            <Logo />
            <p className="display-xs font-[600] text-center">Keywords AI</p>
          </div>
          {
            <div className="sm:hidden flex items-center gap-xs ">
              {/* <Button
              text="Overview"
              variant="header"
              onClick={() => navigate("/")}
              active={location.pathname == "/"}
            /> */}
              <SingleNavigationMenu
                value={open}
                onValueChange={setOpen}
                trigger={
                  <Button
                    text="Features"
                    variant="header"
                    // onClick={() => window.open(platformURL, "_blank")}
                    onClick={() => {
                      // window.location.href = platformURL + "/login";
                    }}
                    iconPosition="right"
                    icon={Down}
                    iconSize="xxs"
                    active={open == "open"}
                    iconFill="fill-gray-4 "
                    iconHoverFill="fill-gray-black   transition-transform  origin-center  rotate-180 duration-0"
                  />
                }
              >
                <>
                  <div className="flex-col w-[280px] items-start gap-xxxs">
                    {leftItems.map((item, index) => (
                      <NavigationItem key={index} {...item} />
                    ))}
                  </div>
                  <div className="flex-col justify-between items-center self-stretch">
                    <div className="flex-col w-[360px] items-start gap-xxs">
                      {rightItems.map((item, index) => (
                        <NavigationItem
                          key={index}
                          {...item}
                          border="shadow-border shadow-gray-2"
                        />
                      ))}
                    </div>
                    <div
                      className="flex p-xs justify-center items-center gap-xxs bg-gray-black hover:bg-gray-2 rounded-md w-full cursor-pointer group "
                      onClick={() =>
                        window.open("https://docs.keywordsai.co/features/")
                      }
                    >
                      <p className="text-sm-md text-gray-4 group-hover:text-gray-white">
                        Explore all features
                      </p>
                      <Right fill="fill-gray-4 group-hover:fill-gray-white" />
                    </div>
                  </div>
                </>
              </SingleNavigationMenu>
              {/* <Button
                text="Platform"
                variant="header"
                // onClick={() => window.open(platformURL, "_blank")}
                onClick={() => {
                  window.location.href = platformURL + "/login";
                }}
                // active={location.pathname == "/"}
              /> */}
              <Button
                text="Docs"
                variant="header"
                onClick={() =>
                  window.open("https://docs.keywordsai.co", "_blank")
                }
                // active={location.pathname == "/"}
              />
              <Button
                text="Changelog"
                variant="header"
                onClick={() => router.push("/changelog")}
                active={pathname == "/changelog"}
              />
              <Button
                text="Pricing"
                variant="header"
                onClick={() => {
                  router.push("/pricing");
                  window.scrollTo(0, 0);
                }}
                // active={location.pathname == "/pricing"}
              />
              <Button
                text="Models"
                variant="header"
                textClickedColor="text-gray-4"
                onClick={() =>
                  window.open("https://platform.keywordsai.co/platform/models")
                }
              />
              <Button
                text="Blog"
                variant="header"
                onClick={() => {
                  router.push("/blog");
                  window.scrollTo(0, 0);
                }}

                // active={location.pathname == "/pricing"}
              />
              <Button
                text="Discord"
                variant="header"
                onClick={() => window.open("https://discord.gg/KEanfAafQQ")}
                // active={location.pathname == "/pricing"}
              />

              {/* <Button
              text="Changelog"
              variant="header"
              onClick={() => navigate("/changelog")}
              active={location.pathname == "/changelog"}
            /> */}
            </div>
          }
        </div>

        <div className="sm:hidden flex items-center gap-xs">
          <Button
            text="Log in"
            variant="header"
            onClick={() => {
              window.location.href = platformURL + "/login";
            }}
            // onClick={() => navigate("beta-access")}
          />
          <Button
            text="Sign up"
            variant="r18-white"
            icon={Right}
            // onClick={() => (window.location.href = platformURL + "/login")}
            onClick={() =>
              (window.location.href = "https://platform.keywordsai.co/signup")
            }
          />
        </div>
      </div>
    </div>
  );
}

const NavigationItem = ({ title, subTitle, link, icon, border = "" }) => {
  const [hover, setHover] = React.useState(false);
  const router = useRouter();
  return (
    <div
      className={cn(
        "rounded-md flex-col py-xxs px-xs justify-center items-start  w-full cursor-pointer",
        hover ? "bg-gray-2" : "bg-gray-black",
        border,
        border ? "gap-xs" : "gap-xxxs"
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        if (link.startsWith("http")) {
          window.open(link, "_blank");
        } else {
          router.push(link);
          window.scrollTo(0, 0);
        }
      }}
    >
      <div className="flex items-center gap-xs w-full">
        <div className="w-[12px] h-[12px] flex items-center justify-center gap-[10px]">
          {React.createElement(icon, { active: hover })}
        </div>
        <p className="text-sm-md flex-1 text-gray-white">{title}</p>
      </div>
      <div className="flex pl-[24px] items-center gap-xs w-full ">
        <p className="caption flex-1 text-gray-4">{subTitle}</p>
      </div>
    </div>
  );
};
