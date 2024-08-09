import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";
import cn from "@/utilities/ClassMerge";

type DropDownMenuProps = {
  trigger: React.ReactNode;
  items: React.ReactNode;
  open: boolean | undefined;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  width?: string;
  disabled?: boolean;
  className?: string;
  height?: string;
};

export const NewDropDownMenu = ({
  trigger, // The trigger elements, the buttons
  items, // The items to be displayed in the dropdown
  open, // The state of the dropdown
  setOpen, // The function to change the state of the dropdown
  side = "bottom",
  sideOffset = 10,
  align = "center",
  alignOffset = -4,
  width,
  height,
  disabled,
  className,
}: DropDownMenuProps) => {
  return (
    <DropdownMenuPrimitive.Root
      modal={true}
      open={open && !disabled}
      onOpenChange={(open) => setOpen(open && !disabled)} //Yep, just not allowing it to open
    >
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          data-theme="DarkTheme"
          aria-label="dropdown-menu"
          className={cn(
            "flex-col items-start rounded-md p-xxxs bg-gray-2 shadow-input-default overflow-y-auto z-[100] ",
            width || "w-full",
            className,
            disabled && "opacity-0",
            height || "h-auto"
          )}
          sideOffset={sideOffset}
          align={align}
          side={side}
          alignOffset={alignOffset}
        >
          {items}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};
