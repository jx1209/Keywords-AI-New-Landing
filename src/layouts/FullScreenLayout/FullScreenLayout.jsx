import { Outlet } from "react-router-dom";
import { Subtract } from "src/components/icons-old";

export function FullScreenLayout() {
  return (
    <div className="flex-col min-h-screen relative">
      <div className="flex-col px-lg py-md pb-0 justify-between items-center flex-1">
        <Outlet />
        <Subtract />
      </div>
    </div>
  );
}
