import React from "react";
import cn from "src/utilities/ClassMerge";

interface Props {
  icon?: React.ReactNode;
  text?: string;
  border?: string;
  textColor?: string;
  backgroundColor?: string;
  onClick?: () => void;
  hidden?: boolean;
}

export function Tag({
  icon,
  text,
  border = "shadow-transparent",
  backgroundColor = "bg-success/10",
  textColor = "text-success",
  onClick,
  hidden,
}: Props) {
  return (
    <div
      className={cn(
        "flex-row gap-xxxs px-xxs py-xxxs rounded-sm bg-success/10 items-center whitespace-nowrap max-w-[400px",
        border,
        backgroundColor,
        hidden && "hidden"
      )}
      onClick={onClick}
    >
      {icon}
      {text && (
        <span
          className={cn(
            "flex-1 caption overflow-hidden overflow-ellipsis w-full",
            textColor
          )}
        >
          {text}
        </span>
      )}
    </div>
  );
}
