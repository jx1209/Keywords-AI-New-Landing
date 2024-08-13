import { Button } from "./Button";
import React from "react";
import { Dots } from "../Icons";

const DotsButton = React.forwardRef(({ onClick }, ref) => {
  return (
    <div className="flex flex-col items-start gap-[10px] self-stretch justify-center">
      <Button
        type={"button"}
        ref={ref}
        variant={"icon"}
        // onClick={() => setOpen(!open)}
        onClick={onClick}
        icon={Dots}
        borderColor="shadow-transparent"
        borderHoverColor="shadow-transparent"
        bgColor="bg-gray-black"
      />
    </div>
  );
})

DotsButton.displayName = 'DotsButton';

export { DotsButton };
