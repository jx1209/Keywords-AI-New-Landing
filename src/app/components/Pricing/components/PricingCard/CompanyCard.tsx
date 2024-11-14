import React from "react";

export default function CompanyCard({
  company,
  text,
  logo,
}: {
  company: string;
  text: React.ReactNode;
  logo: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start justify-start gap-md py-[24px] px-[24px] rounded-[18px]">
      {text}
      {logo}
    </div>
  );
}
