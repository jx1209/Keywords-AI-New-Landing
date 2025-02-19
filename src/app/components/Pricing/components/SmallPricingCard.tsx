import React from "react";
import { Button } from "src/app/components/Buttons";
import TextSwitchButton from "src/app/components/Buttons/TextSwitchButton";
import cn from "src/utilities/ClassMerge";

export interface PricingCardProps {
  plan: string;
  displayPlan: string;
  monthlyPrice: number | string;
  yearlyPrice: number | string | undefined;
  yearlyDiscount?: number;
  isYearly: boolean;
  currentPlan: string;
  handleSwitchChange: (checked: boolean) => void;
  onClick?: () => void;
}

export default function SmallPricingCard({
  plan,
  displayPlan,
  monthlyPrice,
  yearlyPrice,
  yearlyDiscount,
  isYearly,
  currentPlan,
  handleSwitchChange,
  onClick,
}: PricingCardProps) {
  const planStatus = () => {
    const planOrder = {
      free: 0,
      pro: 1,
      team: 2,
      enterprise: 3,
    };
};

  return (
    <div
      className={cn(
        "flex flex-col pt-xs pb-sm px-sm items-start gap-md flex-1 ",
        plan === "team" ? "bg-gray-2" : "rounded-md"
      )}
    >
      <div className="flex flex-col items-start gap-sm self-stretch h-[148px]">
        <div className="flex flex-col items-start gap-xxs">
          <div className="flex flex-row items-center gap-xxs h-[20px]">
            <span className="text-sm-md text-gray-4">{displayPlan}</span>
            {isYearly && yearlyDiscount && (
              <p className="caption text-primary rounded-sm">
                -{yearlyDiscount}%
              </p>
            )}
          </div>
          <div className="flex flex-row items-end gap-xxs">
            <span className="display-sm text-gray-white">
              {plan !== "enterprise" ? "$" : ""}
              {isYearly ? yearlyPrice : monthlyPrice}
            </span>
            {plan !== "enterprise" && (
              <span className="caption text-gray-4 pb-[3px]">
                / seat per month
              </span>
            )}
          </div>
        </div>
        <Button
          variant={
            plan.toLowerCase() === "enterprise"
              ? "r4-white"
              : plan.toLowerCase() === "team"
              ? "r4-primary"
              : "r4-white"
          }
          text={plan.toLowerCase() === "enterprise" ? "Request trial" : plan.toLowerCase() === "free" ? "Get started" : `Try for free`}
          disabled={plan.toLowerCase() === "enterprise"}
          width="w-full"
          onClick={onClick}
        />
        <div className="flex flex-col items-center self-stretch">
          {yearlyPrice && Number.isInteger(yearlyPrice) ? (
            <TextSwitchButton
              checked={isYearly}
              leftValue="Monthly"
              rightValue="Annually"
              onCheckedChange={handleSwitchChange}
              className="caption"
            />
          ) : (
            <div className="h-[24px]" />
          )}
        </div>
      </div>
    </div>
  );
}
