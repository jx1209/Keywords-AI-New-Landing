import React from "react";
import Customers from "../../components/Customers/Customers";
import CustomerDetail from "../[customer-url]/page";
import Link from "next/link";
import Image from "next/image";
import { getLogoComponent, isLogoComponentName } from "@/utilities/logoMapper";

type Props = {
  image: string;
  title: string;
  date: string;
  industry: string;
  companyLogo: string;
  slug: string;
  id: number;
  highlight?: {
    value: string;
    description: string;
  };
};

export const Largecard: React.FC<Props> = ({
  image,
  title,
  date,
  industry,
  companyLogo,
  slug,
  id,
  highlight,
}) => {
  const isExternalLink = slug.startsWith('http://') || slug.startsWith('https://');
  return (
    <Link
      className="w-full max-w-[588px] after:flex flex-col items-start gap-lg flex-1 rounded-lg border border-gray-3 bg-gray-2 cursor-pointer transform transition-transform duration-200 hover:scale-101"
      href={`${slug}`}
      {...(isExternalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      // onClick={() => {
      //   // router.push(`customers/${slug}`);
      //   <CustomerDetail />;
      // }}
    >
      {/* <img
        className="flex flex-col h-[280px] min-w-[320px] w-full justify-center items-center gap-xl self-stretch  rounded-t-lg rounded-b-[0px] bg-gray-black "
        src={image}
        alt="cover"
      /> */}
      <div className="relative w-full h-[331px] min-w-[320px]">
        <Image
          src={image}
          alt="cover"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col px-lg items-start gap-sm ">
        <div className="flex flex-col items-start gap-lg ">
          <div className="flex items-center min-h-[28px]">
            {getLogoComponent(companyLogo)}
          </div>
          <span className="display-xs-md text-gray-white min-h-[84px]">
            {title}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center ">
          <div className="flex gap-xs items-start ">
            <span className="display-xs text-gray-white">{highlight?.value || ""}</span>
            <span className="text-md-medium text-gray-white">{highlight?.description || ""}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
