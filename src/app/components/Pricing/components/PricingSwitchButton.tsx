import React from "react";

export default function PricingSwtichButton({
  
}) {
  return (
    <div className="flex justify-center items-start gap-xxxs rounded-lg shadow-border shadow-gray-3 bg-gray-1">
      <div className="flex flex-row py-xxxs px-xs justify-center items-center gap-xxs rounded-lg shadow-border shadow-gray-4 bg-gray-2">
        <div className="flex flex-row justify-center items-center gap-xxs">
          <span className="text-sm-regular text-center text-gray-white ">
            Monthly
          </span>
        </div>
      </div>
      <div className="flex flex-row py-xxxs px-xs justify-center items-center gap-xxs rounded-lg bg-gray-1">
        <div className="flex flex-row justify-center items-center gap-xxs">
          <span className="text-sm-regular text-center text-gray-4">
            Annually
          </span>
        </div>
      </div>
    </div>
  );
}
