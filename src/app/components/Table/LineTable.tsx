import React from "react";
import cn from "@/utilities/ClassMerge";

/**
 *
 * @param {*} param0
 * @returns
 */

interface LineTableProps {
  headers?: any[];
  headerLayout?: string;
  rows?: any[];
  rowLayout?: string;
  variant?: string;
  columnNames?: string[];
  width?: string;
  stickyHeader?: boolean;
  onClick?: (e: any) => void;
  hover?: boolean;
  differentLastColumn?: boolean;
  lineColor?: string;
  paddingStyle?: string;
  rightAlign?: boolean;
  noLineLastRow?: boolean;
}

export function LineTable({
  headers,
  headerLayout,
  rows,
  rowLayout,
  variant,
  columnNames,
  width = "max-w-[800px] w-full",
  stickyHeader = false,
  onClick,
  hover,
  differentLastColumn = true,
  lineColor = "shadow-gray-2",
  paddingStyle = "mx-lg",
  rightAlign = false,
  noLineLastRow = false,
}: LineTableProps) {
  const gridTemplateColumns = headers?.length
    ? `grid-cols-${headers.length}`
    : "";
  switch (variant) {
    case "billings":
      headers = ["Date", "Amount", "Payment ID"];
      headerLayout = "grid-cols-[160px,160px,78px,1fr]";
      rowLayout = "grid-cols-[160px,160px,1fr,auto]";
      columnNames = ["date", "amount", "payment_id", "actions"];
      differentLastColumn = false;
      noLineLastRow = true;
      break;
    case "api-keys":
      // We will have to pass in the header as porps because the last column is dynamic
      // headers = ["Name", "Key", "Created", "Last Used", "Status"];
      headerLayout = "grid-cols-[240px,100px,1fr]";
      rowLayout = "grid-cols-[240px,100px,1fr]";
      differentLastColumn = true;
      noLineLastRow = true;
      break;
    case "webhooks":
      headers = ["Label", "Event Type", "Created", ""];
      headerLayout = "grid-cols-[512px,160px,100px,1fr]";
      rowLayout = "grid-cols-[512px,160px,100px,1fr]";
      differentLastColumn = true;
      noLineLastRow = true;
      break;
    case "rate-limits":
      headers = ["", "Free plan", "Pro plan", "Team plan", "Enterprise plan"];
      headerLayout = "grid-cols-[120px,170px,170px,170px,170px]";
      rowLayout = "grid-cols-[120px,170px,170px,170px,170px]";
      rightAlign = true;
      differentLastColumn = false;
      noLineLastRow = true;
      break;
  }
  let rowIterator = columnNames || (rows?.[0] && Object.keys(rows[0]));
  const formatNumber = (value: number | any) => {
    if (typeof value === "number") {
      return value.toLocaleString();
    }
    return value;
  };
  return (
    <div className={cn("flex-col h-full", width)}>
      <div
        className={cn(
          "text-sm text-gray-4 self-stretch grid shadow-border-b",
          lineColor,
          headerLayout || gridTemplateColumns,
          stickyHeader && "w-full px-lg"
        )}
      >
        {headers?.map((header, idx) => (
          <div
            className={cn(
              "flex-row items-center py-xxs ",
              idx > 0 && rightAlign ? "justify-end" : "justify-start",
              idx === headers.length - 1 && differentLastColumn
                ? "justify-end"
                : "justify-start"
            )}
            key={idx}
          >
            {header}
          </div>
        ))}
      </div>
      <div className={cn("overflow-y-auto w-full")}>
        {rows?.map((row, idx) => (
          <div
            className={cn(
              "text-sm  self-stretch grid py-xxs ",
              noLineLastRow && idx === rows.length - 1 ? "" : "shadow-border-b",
              stickyHeader && paddingStyle,
              lineColor,
              variant == "webhooks" ? "text-gray-4" : "text-gray-4",
              rowLayout || gridTemplateColumns,
              hover && "hover:bg-gray-2 cursor-pointer"
            )}
            key={idx}
            onClick={() => onClick && onClick(row)}
          >
            {rowIterator?.map((header: any, idx: number) => (
              <div
                className={cn(
                  "flex-row  items-center self-stretch overflow-hidden overflow-ellipsis",
                  idx > 0 && rightAlign ? "justify-end" : "justify-start"
                )}
                key={idx}
              >
                {formatNumber(row[header])}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
