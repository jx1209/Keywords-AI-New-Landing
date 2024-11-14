import "./PricingCard.css";
import React, { useEffect } from "react";
import { FeatureTick } from "@/app/components/icons-old";
import cn from "src/utilities/ClassMerge";
import { Tag } from "../tag";
import { Button } from "@/app/components/Buttons";
import { Right, RightArrow } from "@/app/components/Icons";

const ranking = {
  flex_8k: 1,
  flex_32k: 2,
  pro: 3,
};

export default function PricingCard({
  price,
  plan = "plan",
  title = "Title",
  description = "Description Here",
  bonus = "",
  featureTitle = "Here are the features",
  buttonVar = "r4-primary",
  buttonText = "Try for free",
  bgColor = "bg-gray-black",
  border = "shadow-gray-3 shadow-border",
  priceDescription = "Price Description",
  currentPlan = "Current Plan",
  button = {
    text: "Choose This",
    className: "button-tertiary-white button-fill",
    icon: null,
  },
  upgradeButton = {
    text: "Get Started",
    className: " button-fill",
  },
  hasDemo = false,
  downgradeButton = {
    text: "Talk to us",
    className: "button-secondary-black self-stretch",
    icon: null,
    onClick: () => {
      window.open(
        "https://airtable.com/app5rlVP01ZZNXurS/shrEyS6G8lAoLX0E3",
        "_blank"
      );
    },
  },
  features = [],
}) {
  const [hover, setHover] = React.useState(false);

  useEffect(() => {
    price = price;
  }, [price]);
  return (
    <div
      className={cn(
        "flex  px-[24px] pt-[24px] pb-[120px] flex-col items-center gap-xl flex-1 w-full rounded-[18px] min-w-[282px] shadow-border",
        bgColor,
        plan == "team" ? "shadow-gray-3" : "shadow-gray-2"
      )}
    >
      <div className="flex flex-col items-start justify-center gap-xxs self-stretch">
        <div className="self-stretch display-sm"> {title}</div>
        <span className="text-md-regular self-stretch text-gray-4">
          {description}
        </span>
      </div>
      <div className="flex flex-col items-center gap-lg self-stretch">
        <div className="flex flex-col h-[56px] items-start self-stretch">
          {price && (
            <div className="flex items-end">
              <span className="display-sm "> {price}</span>
              {plan == "custom" || plan == "starter" ? (
                <span className="text-sm-regular text-gray-4 py-[3px]"></span>
              ) : (
                <span className="text-sm-regular text-gray-4 py-[3px]">
                  &nbsp;/ user per month{" "}
                </span>
              )}
            </div>
          )}
          {price && (
            <span className="text-sm-regular text-gray-4">{bonus}</span>
          )}
        </div>
        {/* <Button variant={buttonVar} text={buttonText} width="w-full" className="self-stretch items-center justify-center gap-xxs" /> */}
        <div className="flex flex-col items-center justify-start gap-xs w-full">
          {button}
          {hasDemo ? (
            <Button
              variant="text"
              text="Book a demo"
              gap="gap-xxs"
              icon={RightArrow}
              iconFill="fill-gray-white"
              iconPosition="right"
              textColor="text-gray-white"
              textClassName="text-sm"
              hoverColor="bg-gray-3"
              padding="py-xxxs px-xs"
              borderRadius="rounded-md"
              onClick={
                () =>
                  (window.location.href =
                    "https://cal.com/keywordsai/demo") // should direct to the pricing page in the platform later
              }
            />
          ) : <div className="h-[20px]"> </div> }
        </div>
      </div>

      <div className="flex flex-col items-start gap-md self-stretch">
        <span className="text-md-md text-gray-white"> {featureTitle} </span>
        <div className="flex flex-col items-start gap-xs">
          {features.map((feature, index) => (
            <div className="flex items-center gap-xs" key={index}>
              <FeatureTick fill="fill-primary" />
              <span className="text-md-regular text-gray-white">{feature}</span>
            </div>
          ))}
          {/* {plan == "starter" && (
              <div className="flex items-center gap-xs h-[24px]">
                <span className="text-md-regular text-gray-white">
                </span>
              </div>
            )} */}
          {/* {plan == "starter" && (
              <div className="flex items-center gap-xs h-[24px]">
                <span className="text-md-regular text-gray-white">
                </span>
              </div>
            )}
            {plan == "custom" && (
              <div className="flex items-center gap-xs h-[24px]">
                <span className="text-md-regular text-gray-white">
                </span>
              </div>
            )} */}
        </div>
      </div>
    </div>
  );
}
