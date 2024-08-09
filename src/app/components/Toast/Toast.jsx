import * as ToastPrimitive from "@radix-ui/react-toast";
import { Close, Failed, PassCheck } from "../icons-old";

export const Toast = ({
  title,
  content,
  children,
  open,
  setOpen,
  variant = "success",
  ...props
}) => {
  return (
    <>
      <ToastPrimitive.Root
        className="bg-gray-2 rounded-md shadow-window border border-solid border-gray-3 flex-col items-start w-[360px] gap-xxxs px-md py-sm flex-1 self-stretch"
        open={open}
        onOpenChange={setOpen}
        duration={3000}
      >
        <ToastPrimitive.Title className="flex justify-between items-center self-stretch">
          <div className="flex items-center gap-xxs">
            {variant === "success" ? <PassCheck /> : <Failed />}
            <span className="text-sm-md text-gray-white">{title}</span>
          </div>
          <ToastPrimitive.Action asChild altText="close notification">
            <button>
              <Close />
            </button>
          </ToastPrimitive.Action>
        </ToastPrimitive.Title>
        <ToastPrimitive.Description className="flex pl-[24px] items-start gap-[10px] caption text-gray-4">
          {content}
        </ToastPrimitive.Description>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="fixed top-[32px] right-[29px] flex  w-[360px] m-0 list-none z-[2147483647] outline-none" />
    </>
  );
};
