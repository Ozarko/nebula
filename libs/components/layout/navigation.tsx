import Image from "next/image";

import { cn } from "@utils/ui/cn";

import { HistoryBack } from "./history-back";

interface NavigationProps {
  withHistoryBack?: boolean;
}

export const Navigation = ({ withHistoryBack }: NavigationProps) => {
  return (
    <nav className="container fixed top-0 left-0 right-0 py-4 flex items-center justify-between w-screen">
      {withHistoryBack && <HistoryBack />}
      <div
        className={cn(
          "flex flex-1 items-center justify-center",
          withHistoryBack && " after:content-[''] after:w-6",
        )}
      >
        <Image src="/logo_white.svg" alt="Logo" width={24} height={24} />
      </div>
    </nav>
  );
};
