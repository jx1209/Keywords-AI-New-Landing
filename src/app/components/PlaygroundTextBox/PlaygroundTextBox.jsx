import cn from "@/utilities/ClassMerge";
import { Ai21, OpenAi, Star } from "../icons-old";

export function PlaygroundTextBox({ company, modelName, isBest, outputText }) {
  let icon = <OpenAi />;
  if (company === "openai") {
    icon = <OpenAi />;
  } else if (company === "ai21") {
    icon = <Ai21 />;
  }
  return (
    <div
      aria-label="playground textbox"
      className={cn(
        "flex-col items-start gap-xxs flex-1 w-full  rounded-sm bg-gray-black px-xs py-xxs border border-solid",
        isBest ? "border-gray-white" : "border-gray-3"
      )}
    >
      <div className="flex justify-between items-center self-stretch">
        <div
          className={
            "flex px-xxs py-xxxs items-center gap-xxs rounded-sm bg-gray-2 border border-solid border-gray-3"
          }
        >
          {icon}
          <p className="text-sm-regular text-gray-white">{modelName}</p>
        </div>
        {isBest && <Star />}
      </div>
      <p className="text-sm-regular flex-1  [overflow-y:overlay] text-gray-white">
        {outputText}
      </p>
    </div>
  );
}
