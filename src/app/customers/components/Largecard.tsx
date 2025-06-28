import React from "react";
import Customers from "../../components/Customers/Customers";
import CustomerDetail from "../[customer-url]/page";
import Link from "next/link";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  date: string;
  industry: string;
  companyLogo: string;
  slug: string;
  id: number;
};

export const Largecard: React.FC<Props> = ({
  image,
  title,
  date,
  industry,
  companyLogo,
  slug,
  id,
}) => {
  const isExternalLink = slug.startsWith('http://') || slug.startsWith('https://');
  return (
    <Link
      className="w-full max-w-[588px] min-h-[703px] after:flex flex-col pb-lg items-start gap-lg flex-1 rounded-lg border border-gray-3 bg-gray-2 cursor-pointer transform transition-transform duration-200 hover:scale-101"
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
      <div className="relative w-full h-[331px]">
        <Image
          src={image}
          alt="cover"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col py-0 px-lg items-start gap-sm self-stretch">
        <div className="flex flex-col items-start gap-xxs ">
          <span className="caption text-gray-4">{industry}</span>
          <span className="display-xs-md text-gray-white min-h-[80px]">
            {title}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center self-stretch ">
          <span className="caption text-gray-4">{date}</span>
          <div className="relative h-[24px] w-[24px]">
            <Image
              src={companyLogo}
              alt="company logo"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
