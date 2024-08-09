'use client';
import React, { useEffect, useState } from "react";
import { Button } from "./Button";

export default function ButtonGroupSmall({ buttons, defaultActive = 0, buttonPadding = "py-xxxs px-xxs" }) {
  const [activeButton, setActiveButton] = useState(defaultActive);

  const handleClick = (button, index) => {
    button.onClick && button.onClick();
    setActiveButton(index);
  };

  return (
    <div className=" flex flex-row self-stretch rounded-sm bg-gray-2 shadow-border shadow-gray-3 h-[28px] items-center px-[1px]">
      {buttons.map((button, index) => {
        return (
          <Button
            key={index}
            active={index == defaultActive}
            variant="small"
            borderColor="border-none"
            {...button}
            bgColor="bg-gray-2"
            onClick={() => handleClick(button, index)}
            width="w-full"
            //   padding="py-xxs px-sm"
            padding={buttonPadding}
            className="flex-0 justify-center align-center h-[26px]"
          />
        );
      })}
    </div>
  );
}
