"use client";

import React from "react";
import { customers } from "../../customers/articles/articles";
import { Largecard } from "../../customers/components/Largecard";
import { MediumCard } from "../../customers/components/Mediumcard";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Make sure you have lucide-react installed

export default function Customers() {
  const customers_list = customers.slice().reverse();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex flex-col items-center gap-lg self-stretch pt-[140px] px-sm pb-[120px] relative">
      
      <span className="text-gray-white max-w-[1200px] w-full display-sm">
        Customers
      </span>
      <div className="flex flex-col items-start gap-lg max-w-[1200px] w-full ">
        {!isMobile ? (
          // Desktop layout
          <>
            <div className="flex flex-row items-start gap-md self-stretch">
              {customers_list.slice(0, 2).map((customer) => (
                <Largecard
                  key={customer.id}
                  image={customer.cover.url} // Assuming cover.url is the image URL
                  title={customer.title}
                  date={customer.date}
                  industry={customer.industry}
                  companyLogo={customer.company.logo.url}
                  slug={customer.slug}
                  id={customer.id}
                />
              ))}
            </div>
            <div className="flex flex-wrap items-start gap-md self-stretch">
              {customers_list.slice(2).map((customer) => (
                <MediumCard key={customer.id} customer={customer} />
              ))}
            </div>
          </>
        ) : (
          // Mobile layout - all customers in vertical layout using MediumCard
          <div className="flex flex-col items-start gap-md self-stretch">
            {customers_list.map((customer) => (
              <MediumCard key={customer.id} customer={customer} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 