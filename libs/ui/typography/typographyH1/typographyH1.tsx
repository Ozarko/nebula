import { cn } from "@utils/ui/cn";

import { TypographyH1Props, typographyH1Variants } from "./typographyH1.config";

export const TypographyH1 = ({
  children,
  className,
  variant,
  ...rest
}: TypographyH1Props) => {
  return (
    <h2 className={cn(typographyH1Variants({ variant }), className)} {...rest}>
      {children}
    </h2>
  );
};
