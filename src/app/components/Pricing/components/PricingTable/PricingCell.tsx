import { Check } from "@/app/components/icons-old";


interface PricingCellProps {
  text?: string | React.ReactNode;
  hasCheck?: boolean;
  displayCell?: boolean;
  isHighlighted?: boolean;
  isSectionTitle?: boolean;
  checkHighlighted?: boolean;
  className?: string;
}

export function PricingCell({
  text = "",
  hasCheck = false,
  displayCell = true,
  isHighlighted = false,
  checkHighlighted=false,
  isSectionTitle = false,
  className = "",
}: PricingCellProps) {
    const baseClasses = "flex flex-row h-[42px] items-center gap-xxs";
    const borderClasses = displayCell && !isSectionTitle
      ? "shadow-border-b shadow-gray-2"
      : "";
    const textClasses = isSectionTitle
      ? "text-gray-white"
      : isHighlighted
      ? "text-gray-white"
      : "text-gray-4";
  
    return (
      <div className={`${baseClasses} ${borderClasses} ${className}`}>
        {hasCheck && (
          <Check fill={checkHighlighted ? "fill-primary" : "fill-gray-4"} />
        )}
        {displayCell && text ? (
          <span className={textClasses}>{text}</span>
        ) : (
        <div className="w-full" />
      )}
    </div>
  );
}
