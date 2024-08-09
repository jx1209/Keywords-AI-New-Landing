import { useState } from "react";
import { Duplicate } from "../icons-old";

export function CopyCode({ code }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="flex justify-center items-center gap-xxs self-stretch hover:cursor-pointer"
      onClick={() => {
        setClicked(true);
        navigator.clipboard.writeText(code);
      }}
    >
      <Duplicate />
      <p className="text-sm-regular text-center text-gray-4">
        {clicked ? "Copied" : "Copy code"}
      </p>
    </div>
  );
}
