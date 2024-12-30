import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

import { validateVariant } from "@utils/ui/validateVariant";

export type MainVariantType = {
  default: string;
  special: string;
};

const cvaMainVariant: MainVariantType = {
  default: "bg-background-main",
  special: "bg-nebula-gradient",
};

export const mainVariants = cva(
  "flex flex-col items-center min-h-screen pt-[76px]",
  {
    variants: {
      variant: cvaMainVariant,
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type MainVariantsType = VariantProps<typeof mainVariants>;
export type NavProps = HTMLAttributes<HTMLElement> & MainVariantsType;

export const validateMainVariant = (variantKey: string) =>
  validateVariant<MainVariantType>(variantKey, cvaMainVariant);
