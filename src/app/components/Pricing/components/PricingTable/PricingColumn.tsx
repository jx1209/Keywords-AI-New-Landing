import { Check } from "@/app/components/icons-old";

import { PricingCell } from "./PricingCell";
import { Button } from "@/app/components/Buttons";

interface PricingCellValue {
  text: any;
  hasCheck: boolean;
}

interface PricingSection {
  section: string;
  [key: string]: string | PricingCellValue;
}

interface PricingColumnProps {
  title: string;
  buttonText: string;
  cells: PricingSection[];
  highlighted?: boolean;
  onButtonClick: () => void;
  checkHighlighted?: boolean;
}

export function PricingColumn({
  title,
  buttonText,
  cells,
  highlighted = false,
  checkHighlighted = false,
  onButtonClick,
}: PricingColumnProps) {
  const columnClasses = `flex flex-col py-md items-start gap-md flex-1 self-stretch ${
    highlighted ? "bg-gray-2 shadow-border shadow-gray-3 rounded-md p-md" : ""
  }`;

  return (
    <div className={columnClasses}>
      {/* Header */}
      <div className="flex flex-col items-start gap-sm self-stretch">
        <span className="display-sm text-gray-white">{title}</span>
        <Button
          variant={highlighted ? "r4-primary" : "r4-white"}
          text={buttonText}
          className="flex-1"
          width="w-full"
          onClick={onButtonClick}
        />
      </div>
      {title === "Free" && (
        <div className="text-md-regular text-gray-4 w-1/5 flex items-center h-[36px] min-w-[187px]  gap-xxs">
          <Check fill="fill-gray-4" />
          Free forever
        </div>
      )}
      {title === "Pro" && (
        <div className="text-md-regular text-gray-4 w-1/5 flex items-center h-[36px] min-w-[187px] gap-xxs">
          <Check fill="fill-gray-4" />7 days free
        </div>
      )}
      {title === "Team" && (
        <div className="text-md-regular text-gray-white w-1/5 flex items-center h-[36px] min-w-[187px] gap-xxs">
          <Check fill="fill-primary" />7 days free
        </div>
      )}
      {title === "Enterprise" && (
        <div className="text-md-regular text-gray-4 w-1/5 flex items-center h-[36px] min-w-[187px] gap-xxs">
          <Check fill="fill-primary" />1 month free
        </div>
      )}

      {/* Cells */}
      {cells.map((section, index) => (
        <div
          key={index}
          className="flex flex-col justify-end items-start w-full"
        >
          <PricingCell
            text={section.section}
            displayCell={false}
            isHighlighted={highlighted}
            checkHighlighted={checkHighlighted}
            className="w-full"
          />
          {/* {title === "Free" && (

          )} */}
          {Object.entries(section).map(([key, value]) => {
            if (key === "section") return null;
            // return (
            //   <PricingCell
            //     key={key}
            //     text={value.text}
            //     hasCheck={value.hasCheck}
            //     isHighlighted={highlighted}
            //     checkHighlighted={checkHighlighted}
            //     className="w-full"
            //   />
            // );
          })}
        </div>
      ))}
    </div>
  );
}
