import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React from "react";
import { DownArrow, RightArrow } from "@/app/components/Icons";
import cn from "@/utilities/ClassMerge";
import { Button } from "@/app/components/Buttons";

type AccordionProps = {
  isExpanded?: boolean;
  className?: string;
  value?: string;
  defaultOpen?: boolean;
  onValueChange?: (value: string) => void;
  collapsible?: boolean;
  content?: {
    trigger: React.ReactNode;
    triggerClassName?: string;
    content: any;
    contentClassName?: string;
    className?: string;
  };
};
interface CustomTriggerProps {
  onClick: () => void;
  children: React.ReactNode;
  isExpanded: boolean;
  className?: string;  // Add this line
}

const CustomTrigger = React.forwardRef<HTMLDivElement, CustomTriggerProps>(
  ({ onClick, children, isExpanded, className, ...props }, ref) =>(
    <div ref={ref} {...props}>
      <Button
        variant="text"
        padding="p-0"
        text={children?.toString()}
        textClassName="text-gray-white text-md-medium"
        textColor="text-gray-white"
        icon={isExpanded ? DownArrow : RightArrow}
        iconSize="xs"
        iconFill=""
        onClick={onClick}
      />
    </div>
  )
);

CustomTrigger.displayName = 'CustomTrigger'

const Accordion = ({
  className,
  value,
  onValueChange,
  defaultOpen,
  collapsible = true,
  content = {
    trigger: <div>trigger1</div>,
    triggerClassName: "",
    content: <div>content1</div>,
    contentClassName: "bg-yellow",
  },
}: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      className={className || "flex-col self-stretch"}
      collapsible={collapsible}
      type={"single"}
      defaultValue={defaultOpen ? value || "1" : undefined}
      value={value}
      onValueChange={onValueChange}
    >
      <AccordionItem
        value={value || "1"}
        className={cn(content.contentClassName, " w-full")}
      >
        <AccordionTrigger
          className={cn(
            content.triggerClassName ||
              "flex items-center gap-xxs py-xxxs text-sm-md text-gray-4 hover:text-gray-white",
            "outline-none"
          )}
        >
          {content.trigger}
        </AccordionTrigger>
        <AccordionContent>{content.content}</AccordionContent>
      </AccordionItem>
    </AccordionPrimitive.Root>
  );
};

Accordion.displayName = 'Accordion'
export default Accordion

const AccordionItem = React.forwardRef(
  (
    {
      children,
      className,
      value,
      ...props
    }: { children: React.ReactNode; className?: string; value: string },
    forwardedRef
  ) => (
    <AccordionPrimitive.Item
      className={className}
      value={value}
      {...props}
      ref={forwardedRef as React.Ref<HTMLDivElement>}
    >
      {children}
    </AccordionPrimitive.Item>
  )
);

AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef(
  (
    {
      children,
      className,
      ...props
    }: { children: React.ReactNode; className?: string },
    forwardedRef
  ) => {
    const [hover, setHover] = React.useState(false);
    const [isExpanded, setIsExpanded] = React.useState(false);
    return (
      <AccordionPrimitive.Header className="flex self-stretch ">
        {/* <AccordionPrimitive.Trigger
          className={cn(className, "group")}
          {...props}
          ref={forwardedRef as React.Ref<HTMLButtonElement>}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => setIsExpanded(!isExpanded)}
        > */}
        {/* <Right
            className=" ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-90 group-hover:fill-gray-5"
            active={hover}
          /> */}

        {/* {isExpanded ? 
            <Button
              variant="text"
              padding="p-0"
              text={children}
              textClassName="text-gray-white text-md-medium"
              textColor="text-gray-white"
              icon={DownArrow}
              iconSize="xs"
              iconFill=""
            /> 
          : 
            <Button
              variant="text"
              padding="p-0"
              text={children}
              textClassName="text-gray-white text-md-medium"
              textColor="text-gray-white"
              icon={RightArrow}
              iconSize="xs"
              iconFill=""
            /> 
          } */}
        <AccordionPrimitive.Trigger asChild>
          <CustomTrigger
            className={cn(className, "group")}
            onClick={() => setIsExpanded(!isExpanded)}
            isExpanded={isExpanded}
          >
            {children}
          </CustomTrigger>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = React.forwardRef(
  (
    {
      children,
      className,
      ...props
    }: { children: React.ReactNode; className?: string },
    forwardedRef
  ) => (
    <AccordionPrimitive.Content
      className={cn(
        // "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp",
        " overflow-hidden w-full",
        className
      )}
      {...props}
      ref={forwardedRef as React.Ref<HTMLDivElement>}
    >
      {children}
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = 'AccordionContent'
