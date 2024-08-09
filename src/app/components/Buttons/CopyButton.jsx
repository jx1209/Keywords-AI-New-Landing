import React from "react";
import { IconButton } from ".";
import { Copy, Check } from "../Icons";

export default function CopyButton({
  text,
  onClick = () => {},
  className = "",
}) {
  const [copied, setCopied] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  return (
    <IconButton
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        onClick();
        setCopied(true);
        navigator.clipboard.writeText(text).then(() => {
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        });
      }}
      iconProps={{
        fill: copied
          ? "fill-success"
          : hover
          ? "fill-gray-white"
          : "fill-gray-4",
      }}
      icon={copied ? Check : Copy}
    />
  );
}
