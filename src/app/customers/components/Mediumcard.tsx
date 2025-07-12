"use client";

import React from "react";

import CustomerDetail from "../[customer-url]/page";
import Link from "next/link";
import Image from "next/image";
import { Customer } from "../customer-list/customer-list";
import { getLogoComponent, isLogoComponentName } from "@/utilities/logoMapper";

type Props = {
  customer: Customer;
};

export const MediumCard: React.FC<Props> = ({ customer }) => {
  const isExternalLink = customer.slug.startsWith('http://') || customer.slug.startsWith('https://');
  return (
    <Link
      className="flex flex-col items-start gap-lg flex-1 rounded-lg border border-gray-3 bg-gray-2 max-w-[400px] w-full cursor-pointer transform transition-transform duration-200 hover:scale-101"
      href={`${customer.slug}`}
      {...(isExternalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {/* <img
        className="flex flex-col h-[200px] min-w-[320px] w-full justify-center items-center gap-xl self-stretch  rounded-t-lg rounded-b-[0px] bg-gray-black"
        src={customer.cover.url}
        alt="cover"
      /> */}
      <div className="relative min-w-[320px] w-full aspect-[16/9]">
        <Image
          src={customer.cover.url}
          alt="cover"
          fill
          sizes="(min-width: 320px) 100vw, 320px"
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col py-[0px] px-lg items-start gap-sm self-stretch">
        <div className="flex flex-col items-start gap-[8px]  ">
          <div className="flex items-center min-h-[28px]">
            {isLogoComponentName(customer.company.logo.url) ? (
              getLogoComponent(customer.company.logo.url)
            ) : (
              <span className="caption text-gray-4">{customer.industry}</span>
            )}
          </div>
          <span className="display-xs-md text-gray-white self-stretch min-h-[96px]">
            {customer.title}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center self-stretch">
          <span className="caption text-gray-4">{customer.date}</span>

          <div className="relative h-[24px] w-[24px] flex items-center justify-center">
            {isLogoComponentName(customer.company.logo.url) ? (
              <div className="scale-[0.2] origin-center">
                {getLogoComponent(customer.company.logo.url)}
              </div>
            ) : (
              <Image
                src={customer.company.logo.url}
                alt="company logo"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
