"use client";
import { useRouter } from "next/navigation";
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
} from "@/app/components/icons-old";
import { Page } from "@/app/components/Page";
import { Divider } from "@/app/components/Divider";
import { SectionTitle } from "@/app/components/SectionTitle";

import { useEffect, useState } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";
import { Right } from "@/app/components/Icons/iconsDS";
import { Button } from "@/app/components/Buttons/Button/Button";
import Head from "next/head";
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
} from "@/app/components/landing/TeamsLogo";
import FeatureSection from "@/app/components/landing/FeatureSection";
import { AdvantagesSecctions } from "@/app/components/landing/AdvantagesSecctions";
import CodePreview from "@/app/components/landing/CodePreview";
import Image from "next/image";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { MobileLanding } from "../MobileLanding/MobileLanding";
// import "react-multi-carousel/lib/styles.css";
export default function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const IntroductionSection = () => {
    return (
      <div
        aria-label="frame 636"
        className="flex py-xxxl px-sm sm:p-lg flex-col items-center gap-xxxl self-stretch  bg-black_gradient select-none"
      >
        <div
          aria-label="frame 2023"
          className="flex max-w-[1200px] flex-col items-center gap-md w-full"
        >
          <div
            onClick={() =>
              window.open(
                "https://www.ycombinator.com/companies/keywords-ai/",
                "_blank"
              )
            }
            style={{ cursor: "pointer" }}
            aria-label="frame 2024"
            className="flex py-xxxs px-xs justify-center items-center gap-xxs rounded-lg border border-solid border-gray-3 bg-gray-2"
            data-aos="custom-fade-down"
          >
            <span className="text-center text-sm-regular text-resend-64">
              Backed by
            </span>
            <div className="flex items-center gap-xxxs">
              <Y />
              <span className="text-center text-sm-regular gradient-text">
                Combinator
              </span>
            </div>
          </div>
          <div
            aria-label="frame 1601"
            className="flex-col max-w-[1200px] w-full items-center gap-xl"
          >
            <div
              aria-label="frame 619"
              className="flex-col items-center gap-lg w-full max-w-[1000px]"
            >
              <p
                className="sm:hidden text-center display-xl gradient-text"
                data-aos="custom-fade-down"
                data-aos-delay="50"
              >
                LLM monitoring <br />
                for AI startups
              </p>
              <p
                className="hidden sm:block text-center display-sm gradient-text"
                data-aos="custom-fade-down"
                data-aos-delay="50"
              >
                LLM monitoring <br />
                for AI startups
              </p>
              <p
                className="sm:hidden display-xs self-stretch text-gray-4 text-center"
                data-aos="custom-fade-down"
                data-aos-delay="250"
              >
                Meet the easiest way to monitor your LLM workflows. <br />
                Debug and ship reliable AI features so much faster.
              </p>
              <p
                className="hidden sm:flex text-md self-stretch text-gray-4 text-center"
                data-aos="custom-fade-down"
                data-aos-delay="250"
              >
                Easily build, deploy, and monitor your AI application. Keywords
                AI is basically Datadog for LLM applications.
              </p>
            </div>
          </div>
          <div
            aria-label="frame 1816"
            className="flex items-center justify-center gap-xs"
          ></div>
          <div
            className="flex items-center justify-center gap-xs self-stretch"
            data-aos="custom-fade-down"
            data-aos-delay="350"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <Button text="Get started" variant="secondary" /> */}
            <Button
              text="Get started free"
              variant="big-white"
              // onClick={() => (window.location.href = platformURL)}
              onClick={() =>
                (window.location.href = "https://platform.keywordsai.co/signup")
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

        <div
          className="flex"
          data-aos="custom-fade-down"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="w-full px-sm max-w-[1200px]">
            <Image
              src="/images/Landing.png"
              alt="Landing Page"
              width={1200}
              height={675} // Adjust this based on the actual aspect ratio of your image
              style={{ width: "100%", height: "auto" }}
              className=""
            />
          </div>
        </div>
      </div>
    );
  };
  const ColaborationSection = () => {
    const [deviceType, setDeviceType] = useState("desktop");

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setDeviceType("mobile");
        } else if (window.innerWidth < 1024) {
          setDeviceType("tablet");
        } else {
          setDeviceType("desktop");
        }
      };

      // Initial setup
      handleResize();

      // Setup event listener
      window.addEventListener("resize", handleResize);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
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
    );
  };

  const CommentSesction = () => {
    return (
      <div
        aria-label="frame 643"
        className="flex-col py-xxxl px-sm items-center gap-xl self-stretch bg-black_gradient  sm:p-lg"
      >
        <svg
          width={108}
          height={40}
          viewBox="0 0 108 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.11444 20C1.11444 9.23045 9.84489 0.5 20.6144 0.5H87.3855C98.1551 0.5 106.886 9.23045 106.886 20C106.886 30.7696 98.1551 39.5 87.3856 39.5H20.6145C9.84491 39.5 1.11444 30.7696 1.11444 20Z"
            fill="#1E1E23"
          />
          <path
            d="M1.11444 20C1.11444 9.23045 9.84489 0.5 20.6144 0.5H87.3855C98.1551 0.5 106.886 9.23045 106.886 20C106.886 30.7696 98.1551 39.5 87.3856 39.5H20.6145C9.84491 39.5 1.11444 30.7696 1.11444 20Z"
            stroke="#3E424A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.0044 27.201C22.8683 27.505 22.6756 27.7899 22.426 28.0396L19.9183 30.5473C18.821 31.6444 17.0423 31.6444 15.945 30.5473L13.4373 28.0396C12.3402 26.9424 12.3401 25.1635 13.4373 24.0663L15.945 21.5585C17.0422 20.4614 18.8211 20.4614 19.9183 21.5585L22.426 24.0663C22.6756 24.3159 22.8684 24.6009 23.0044 24.9047L25.4277 24.9049L19.4885 14.6178C18.7127 13.2741 19.1731 11.5559 20.5169 10.78L23.5881 9.00678C24.9319 8.2309 26.6503 8.69136 27.426 10.0351L36.2376 25.2972C37.0134 26.641 36.5529 28.3591 35.2093 29.1351L32.1379 30.9083C30.7942 31.6842 29.0758 31.2237 28.3 29.8801L26.7534 27.2008L23.0044 27.201ZM21.4769 13.4698L30.2886 28.7319C30.4303 28.9775 30.7444 29.0616 30.9898 28.9197L34.0613 27.1466C34.3067 27.0047 34.391 26.6909 34.2491 26.4454L25.4375 11.1831C25.2958 10.9376 24.9817 10.8535 24.7361 10.9953L21.6648 12.7685C21.4194 12.9102 21.3351 13.2243 21.4769 13.4698ZM20.8024 25.6899L18.2946 23.1822C18.0942 22.9817 17.7691 22.9817 17.5687 23.1822L15.0609 25.6899C14.8605 25.8904 14.8605 26.2154 15.0609 26.4159L17.5687 28.9235C17.7692 29.1242 18.0942 29.124 18.2948 28.9237L20.8025 26.416C21.0028 26.2154 21.0028 25.8904 20.8024 25.6899Z"
            fill="#F9FAFD"
          />
          <path
            d="M58.6144 16.8057L57.8087 16L54.6144 19.1943L51.4202 16L50.6144 16.8057L53.8087 20L50.6144 23.1943L51.4202 24L54.6144 20.8057L57.8087 24L58.6144 23.1943L55.4202 20L58.6144 16.8057Z"
            fill="#B1B3BC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.5046 9.42375C83.6744 9.29285 83.8842 9.2123 84.0939 9.2123C84.4136 9.2123 84.7132 9.35327 84.903 9.605L90.6266 16.9959V22.8965L92.3347 24.6083C92.7242 25.001 92.7242 25.6454 92.3347 26.0381C91.9451 26.4308 91.3058 26.4308 90.9163 26.0381L88.6288 23.7222V17.6907L83.3248 10.8435V10.8335C82.9852 10.4005 83.0651 9.76611 83.5046 9.42375ZM95.3855 25.2961C95.2157 25.2535 95.0548 25.1653 94.9218 25.0312L92.914 23.0073C92.6843 22.7757 92.5844 22.4635 92.6243 22.1715V16.2608H92.5944L86.8408 8.82967C86.6882 8.63508 86.6203 8.39982 86.6308 8.16868C85.9752 8.05776 85.3016 8 84.6144 8C77.987 8 72.6144 13.3726 72.6144 20C72.6144 26.6274 77.987 32 84.6144 32C89.3409 32 93.4291 29.2675 95.3855 25.2961Z"
            fill="#F9FAFD"
          />
        </svg>
        <div className="flex-col items-center gap-lg max-w-[600px] w-full">
          <p className="display-xs text-center text-gray-white self-stretch">
            &ldquo;Keywords AI legit has some of the best UX/DX I&apos;ve ever
            seen in my life. I&apos;m not even just saying that, I truly
            don&apos;t think I&apos;ve ever integrated a product that was as
            easy.&rdquo;
          </p>
          <div className="flex-col items-center gap-xxxs">
            <p className="text-md-medium text-center text-gray-white">
              Rahul Behal
            </p>
            <p className="text-sm-regular text-center text-gray-4">
              Co-founder, AgentHub (YC W24)
            </p>
          </div>
        </div>
      </div>
    );
  };

  const CallToActionSection = () => {
    return (
      <div className="flex-col py-xxxl px-sm pb-0 items-center gap-xl self-stretch sm:p-lg">
        <p className="sm:hidden max-w-[800px] text-center w-full display-xl gradient-text">
          Integrate in minutes. Available today.
        </p>
        <p className="hidden sm:block max-w-[800px] text-center w-full display-xs gradient-text">
          Integrate in minutes. Available today.
        </p>
        <div className="flex  items-center justify-center gap-xs sm:gap-xxxs">
          <Button
            text="Get started free"
            variant="big-white"
            // onClick={() => (window.location.href = platformURL)}
            onClick={() =>
              (window.location.href = "https://platform.keywordsai.co/signup")
            }
            iconSize="sm"
            icon={Right}
          />
          <Button
            variant="big-black"
            text="Documentation"
            icon={Right}
            iconSize="sm"
            iconFill=""
            onClick={() => window.open("https://docs.keywordsai.co", "_blank")}
          />
        </div>
        <Subtract />
      </div>
    );
  };

  const [isMobile, setIsMobile] = useState(false);
  const screenWidth = useScreenWidth();
  useEffect(() => {
    setIsMobile(screenWidth < 768);
  }, [screenWidth]);

  return (
    <Page>
      {isMobile ? (
        <MobileLanding />
      ) : (
        <>
          <IntroductionSection />
          <ColaborationSection />
          <FeatureSection />
          <CommentSesction />
          <AdvantagesSecctions />
          <CodePreview />
          <CallToActionSection />
        </>
      )}
    </Page>
  );
}
