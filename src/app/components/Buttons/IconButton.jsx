'use client';
import React, { useEffect } from "react";

const IconButton = React.forwardRef(
  (
    {
      onClick,
      icon,
      className = "",
      onMouseEnter = () => {},
      onMouseLeave = () => {},
      hoverFill,
      fillQq,
      iconProps = {},
      active,
    },
    ref
  ) => {
    const [hover, setHover] = React.useState(active);
    useEffect(() => {
      setHover(active);
    }, [active]);
    const handleHover = (e) => {
      onMouseEnter(e);
      setHover(true);
    };
    const handleUnhover = (e) => {
      onMouseLeave(e);
      setHover(false);
    };
    return (
      <div
        aria-label="IconButton"
        ref={ref}
        className={"flex flex-shrink-0 cursor-pointer " + className}
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        onClick={onClick}
      >
        {React.createElement(icon, {
          active: hover,
          ...iconProps,
        })}
      </div>
    );
  }
);

IconButton.displayName = "IconButton";
export { IconButton };


