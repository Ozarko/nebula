import React, { PropsWithChildren } from "react";

import { WithClassName } from "@typeslib/general";
import { cn } from "@utils/ui/cn";

export const Section = ({
  children,
  className,
}: PropsWithChildren<WithClassName>) => {
  return (
    <section
      className={cn(
        "container flex flex-col items-center justify-center w-full",
        className,
      )}
    >
      {children}
    </section>
  );
};
