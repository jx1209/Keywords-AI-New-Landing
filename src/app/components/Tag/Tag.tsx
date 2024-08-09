import cn from "@/utilities/ClassMerge";

interface Props {
  icon?: React.ReactNode;
  text?: string;
  border?: string;
  textColor?: string;
  backgroundColor?: string;
  onClick?: () => void;
  className?: string;
  borderRadious?: string;
  padding?: string;
}

export function Tag({
  icon,
  text,
  border = "shadow-border shadow-gray-3",
  backgroundColor = "bg-gray-2",
  textColor = "text-gray-4",
  className = "flex-row",
  borderRadious,
  padding = "px-xxs py-xxxs",
  onClick,
}: Props) {
  return (
    <div
      className={cn(
        " gap-xxxs  rounded-full  items-center whitespace-nowrap max-w-[400px]",
        padding,
        borderRadious,
        border,
        backgroundColor,
        className
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
