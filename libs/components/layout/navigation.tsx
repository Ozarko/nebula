import Image from "next/image";

import { Nav, navVariantsType } from "@ui/layout/nav";
import { cn } from "@utils/ui/cn";

import { NavigationHistoryBack } from "./navigation-history-back";

interface NavigationProps {
  withHistoryBack?: boolean;
  navVariant: navVariantsType;
}

export const Navigation = ({
  withHistoryBack,
  navVariant,
}: NavigationProps) => {
  return (
    <Nav {...navVariant}>
      {withHistoryBack && <NavigationHistoryBack />}
      <div
        className={cn(
          "flex flex-1 items-center justify-center",
          withHistoryBack && " after:content-[''] after:w-6",
        )}
      >
        <Image src="/logo_white.svg" alt="Logo" width={24} height={24} />
      </div>
    </Nav>
  );
};
