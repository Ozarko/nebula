import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

import { cn } from "@utils/ui/cn";
import { validateVariant } from "@utils/ui/validateVariant";

type TypographyPVariantType = {
  default: string;
  special: string;
};

const typographyPVariant: TypographyPVariantType = {
  default: "text-dark",
  special: "text-secondary",
};

const typographyPVariants = cva(
  "font-open-sans font-normal text-sm text-center",
  {
    variants: {
      variant: typographyPVariant,
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type TypographyPVariantsType = VariantProps<typeof typographyPVariants>;

export type TypographyH1Props = HTMLAttributes<HTMLHeadingElement> &
  TypographyPVariantsType;

export const validateTypographyPVariant = (variantKey: string) =>
  validateVariant<TypographyPVariantType>(variantKey, typographyPVariant);

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
