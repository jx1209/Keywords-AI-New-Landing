import cn from "@/utilities/ClassMerge";
import { ArrowRight, ArrowLeft } from "../icons-old";
import "./Button.css";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      variant,
      text,
      arrow = true,
      className = "",
      borderRadius = "rounded-lg",
      onClick,
      textClassName = "",
      bgColor = "bg-gray-white",
      hoverColor = "hover:bg-[#33557D]",
      clickedColor = "active:bg-[#33557D]",
      textColor = "text-gray-black",
      textHoverColor = "group-hover:text-gray-white",
      textClickedColor = "group-active:text-gray-white",
      arrowFill = "fill-gray-black",
      arrowDirection = "right",
    },
    ref
  ) => {
    switch (variant) {
      case "primary":
        bgColor = "bg-primary";
        hoverColor = "hover:bg-[#33557D]";
        clickedColor = "active:bg-[#33557D]";
        break;
      case "header":
        bgColor = "bg-transparent";
        hoverColor = "hover:bg-gray-3";
        clickedColor = "active:bg-transparent";
        textColor = "text-gray-4";
        textHoverColor = "group-hover:text-gray-white";
        textClickedColor = "group-active:text-gray-white";
        arrowFill = "fill-gray-4";
        break;
      case "secondary":
        bgColor = "bg-gray-white";
        hoverColor = "hover:bg-gray-4";
        clickedColor = "active:bg-gray-4";
        textColor = "text-gray-black";
        textHoverColor = "group-hover:text-gray-black";
        textClickedColor = "group-active:text-gray-black";
        arrowFill = "fill-gray-black";
        break;
      case "secondary-gray":
        bgColor = "bg-gray-2";
        hoverColor = "hover:bg-gray-4";
        clickedColor = "active:bg-gray-3";
        textColor = "text-gray-white";
        textHoverColor = "group-hover:text-gray-white";
        textClickedColor = "group-active:text-gray-white";
        arrowFill = "fill-gray-white";
        break;
      case "secondary-black":
        bgColor = "bg-gray-black";
        hoverColor = "hover:bg-gray-2";
        clickedColor = "active:bg-gray-2";
        textColor = "text-gray-white";
        textHoverColor = "group-hover:text-gray-white";
        textClickedColor = "group-active:text-gray-white";
        arrowFill = "fill-gray-white";
        className = cn(className, "border border-solid border-gray-3");
        break;
      case "news":
        className = cn(className, "border border-solid border-gray-3");
        bgColor = "bg-gray-2";
        borderRadius = "rounded-lg";
        textColor = "text-gray-white";
        arrowFill = "fill-gray-white";
        
      case "beta":
        bgColor = "bg-gradient-in";
        textColor = "text-gray-white";
        hoverColor = "bg-gradient-in";
        clickedColor = "black-gradient";
        borderRadius = "rounded-lg";
        className = cn(
          className,
          "hover:cursor-default gradient-in max-h-[36px] tracking-[0.56px]"
        );
    }
    return (
      <button
        ref={ref}
        className={cn(
          "group inline-flex min-w-[60px] px-sm py-xxs justify-center items-center gap-xxs ",
          borderRadius,
          bgColor,
          hoverColor,
          clickedColor,
          className,
          arrowDirection === "left" ? "flex-row-reverse" : "flex-row"
        )}
        onClick={onClick}
      >
        <span
          className={cn(
            "flex-1 text-sm-regular text-center",
            textColor,
            textHoverColor,
            textClickedColor,
            textClassName
          )}
        >
          {text}
        </span>
        {arrow && arrowDirection === "right" && <ArrowRight fill={arrowFill} />}
        {arrow && arrowDirection === "left" && <ArrowLeft ill={arrowFill} />}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };