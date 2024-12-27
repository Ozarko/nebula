import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

import { cn } from "@utils/ui/cn";
import { validateVariant } from "@utils/ui/validateVariant";

type TypographyH1VariantType = {
  default: string;
  special: string;
};

const cvaVariant: TypographyH1VariantType = {
  default: "text-dark",
  special: "text-secondary",
};

const typographyH1Variants = cva(
  "font-open-sans text-center text-2xl font-bold",
  {
    variants: {
      variant: cvaVariant,
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type TypographyH1VariantsType = VariantProps<
  typeof typographyH1Variants
>;

export type TypographyH1Props = HTMLAttributes<HTMLHeadingElement> &
  TypographyH1VariantsType;

export const validateTypographyH1Variant = (variantKey: string) =>
  validateVariant<TypographyH1VariantType>(variantKey, cvaVariant);

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
