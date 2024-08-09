import clsx from "clsx";
// this is a function for making conditional classnames easier to add
// for example: className={cn("p-8", message.role === "user" ? "bg-white" : "bg-muted")}
export default function cn(...inputs) {
  // return twMerge(clsx(...inputs));
  return clsx(...inputs);
}
