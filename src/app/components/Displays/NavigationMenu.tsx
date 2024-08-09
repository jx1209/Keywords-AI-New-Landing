import { Trigger } from "@radix-ui/react-dialog";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import React from "react";

type Props = {
  value?: string;
  onValueChange?: (value: string) => void;
  delayDuration?: number;
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export default function SingleNavigationMenu({
  value,
  onValueChange,
  delayDuration,
  trigger,
  children,
}: Props) {
  return (
    <NavigationMenuPrimitive.Root value={value} onValueChange={onValueChange}>
      <NavigationMenuPrimitive.List>
        <NavigationMenuPrimitive.Item value={"open"}>
          <NavigationMenuPrimitive.Trigger asChild>
            {trigger}
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-[calc(100%+4px)] left-0  p-xxs items-start gap-xs rounded-[12px] border border-solid border-gray-3 bg-gray-black flex">
            {children}
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Indicator />
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
}
