import React from "react";
import { ArrowDown } from "../icons-old";
import "./LanguageSelect.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function LanguageSelect({
  languages,
  currentLanguage,
  setCurrentLanguage,
}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none" asChild>
        <button className="flex justify-center items-center gap-xxs">
          <p className="text-sm-regular text-center text-gray-4">
            {currentLanguage}
          </p>
          <ArrowDown />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="w-[240px] flex-col items-start rounded-md p-xxxs bg-gray-2 border border-solid border-gray-3"
          align="end"
        >
          {languages.map((language) => (
            <DropdownMenu.Item
              key={language.name}
              className="text-gray-white outline-none flex self-stretch"
              onClick={() => setCurrentLanguage(language.name)}
            >
              <div className="flex px-xs py-xxs items-center gap-xxs flex-1 rounded-sm hover:bg-gray-3 hover:cursor-pointer group">
                {React.createElement(language.icon, {
                  fill: "fill-gray-4 group-hover:fill-gray-white",
                })}
                <span className="text-sm-regular text-gray-4 group-hover:text-gray-white">
                  {language.name}
                </span>
              </div>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
