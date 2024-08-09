import React, { forwardRef } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import cn from "@/utilities/ClassMerge";

const Slider = forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-3">
      <SliderPrimitive.Range className="absolute h-full bg-gray-3" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-[16px] w-[16px] rounded-full  outline-none border-[1.5px] border-gray-white bg-gray-4 disabled:pointer-events-none hover:cursor-pointer " />
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

export const SliderDisplay = ({ defaultValue, max, step, name }) => {
  const [value, setValue] = React.useState([defaultValue]);
  const handleValueChange = (value) => {
    setValue(value);
  };
  return (
    <div className="flex-col items-start gap-md">
      <div className="flex justify-between items-center self-stretch">
        <span className="text-sm-regular text-gray-4">{name}</span>
        <span className="text-sm-regular text-gray-white">{value}</span>
      </div>
      <Slider
        defaultValue={[defaultValue]}
        max={max}
        step={step}
        onValueChange={handleValueChange}
      />
    </div>
  );
};
