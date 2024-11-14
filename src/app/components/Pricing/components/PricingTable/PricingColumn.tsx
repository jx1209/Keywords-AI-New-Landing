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
  checkHighlighted=false,
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
          {Object.entries(section).map(([key, value]) => {
            if (key === "section") return null;
            return (
              <PricingCell
                key={key}
                text={value.text}
                hasCheck={value.hasCheck}
                isHighlighted={highlighted}
                checkHighlighted={checkHighlighted}
                className="w-full"
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
