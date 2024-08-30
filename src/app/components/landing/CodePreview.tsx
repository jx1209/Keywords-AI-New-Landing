import React from "react";
import { CodeBoxDisplay } from "./CodeBoxDisplay";

type Props = {};

export default function CodePreview({}: Props) {
  return (
    <div
      aria-label="frame 664"
      className="flex-col py-xxxl px-sm sm:px-lg items-center gap-xl self-stretch bg-black_gradient"
    >
      <div className="flex-col items-center gap-lg self-stretch">
        <ElectricLogo />
        <div className="flex-col items-center gap-sm self-stretch">
          <p className="sm:hidden display-lg gradient-text text-center self-stretch">
            Integrate within minutes
          </p>
          <p className="hidden sm:block display-xs gradient-text text-center self-stretch">
            Integrate within minutes
          </p>
          <p className="sm:hidden text-lg text-center text-gray-4">
            Easy integration with OpenAI style API call.
          </p>
          <p className="hidden sm:block text-md text-center text-gray-4">
            Easy integration with OpenAI style API call.
          </p>
        </div>
      </div>
      {/* code box */}
      <CodeBoxDisplay />
      <p className="max-w-[600px] w-full text-gray-4 text-center display-sm">
        A simple interface so you can switch without rewriting code.{" "}
        <span className=" text-gray-white">
          It fits right into your codebase.
        </span>
      </p>
      <div className="min-h-[1.2px] shrink-0 [background:linear-gradient(90deg,rgba(255,255,255,0.00)_0%,rgba(0,0,0,0.20)_0%,rgba(143,143,143,0.67)_50%,rgba(0,0,0,0.04)_100%)] w-full max-w-[1200px]" />
    </div>
  );
}

const ElectricLogo = () => (
  <svg
    width={190}
    height={206}
    viewBox="0 0 190 206"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_15205_35933"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={190}
      height={206}
    >
      <rect x={0.75} width={188.5} height={206} fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_15205_35933)">
      <path
        d="M79.8318 158.488V157.988H79.3318H1.94455L110.168 1.60116V90.5644V91.0644H110.668H188.056L79.8318 247.451V158.488Z"
        fill="url(#paint0_linear_15205_35933)"
        stroke="url(#paint1_linear_15205_35933)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_15205_35933"
        x1={95}
        y1={249.052}
        x2={95}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0} />
        <stop offset={0.7} stopOpacity={0} />
        <stop offset={0.95} stopOpacity={0} />
        <stop offset={1} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_15205_35933"
        x1={0.990479}
        y1={124.526}
        x2={189.01}
        y2={124.526}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#38BDF8" stopOpacity={0} />
        <stop stopColor="#38BDF8" stopOpacity={0} />
        <stop offset={0.3302} stopColor="#E8E8E8" stopOpacity={0.2} />
        <stop offset={0.6441} stopColor="#8F8F8F" stopOpacity={0.67} />
        <stop offset={0.9893} stopColor="#EC4899" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
