import { PropsWithChildren } from "react";

import type { WithClassName } from "@typeslib/general";
import { cn } from "@utils/ui/cn";

export const TypographyH2 = ({
  children,
  className,
}: PropsWithChildren<WithClassName>) => {
  return (
    <h2
      className={cn(
        "font-open-sans font-normal lg:font-bold text-secondary text-sm lg:text-xl text-center",
        className,
      )}
    >
      {children}
    </h2>
  );
};
