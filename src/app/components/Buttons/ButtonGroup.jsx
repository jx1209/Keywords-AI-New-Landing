import React, { useState } from 'react';
import { Button } from "./Button";

export default function ButtonGroup({ buttons }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button, index) => {
    button.onClick();
    setActiveButton(index);
  };

return (
    <div className="flex-row bg-gray-2 rounded-sm h-fit">
      {buttons.map((button, index) => (
        <Button 
          key={index}
          active={activeButton === index}
          variant="r4-gray-2"
          {...button}
          onClick={() => handleClick(button, index)}
        />
      ))}
    </div>
  );
}