import { cn } from "@utils/ui/cn";

import { TypographyH1Props, typographyPVariants } from "./typographyP.config";

export const TypographyP = ({
  children,
  variant,
  className,
  ...rest
}: TypographyH1Props) => {
  return (
    <p className={cn(typographyPVariants({ variant }), className)} {...rest}>
      {children}
    </p>
  );
};
