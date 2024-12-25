import { PropsWithChildren } from "react";

import { WithClassName } from "@typeslib/general";
import { cn } from "@utils/ui/cn";

export const TypographyP = ({
  children,
  className,
}: PropsWithChildren<WithClassName>) => {
  return (
    <p
      className={cn(
        "font-open-sans font-normal text-secondary text-sm text-center",
        className,
      )}
    >
      {children}
    </p>
  );
};
