import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

import { validateVariant } from "@utils/ui/validateVariant";

export type NavVariantType = {
  default: string;
  special: string;
};

const cvaVariant: NavVariantType = {
  default: "bg-background-default",
  special: "bg-transparent",
};

export const navVariants = cva("fixed top-0 left-0 right-0 py-4 w-screen", {
  variants: {
    variant: cvaVariant,
  },
  defaultVariants: {
    variant: "default",
  },
});

export type NavVariantsType = VariantProps<typeof navVariants>;
export type NavProps = HTMLAttributes<HTMLElement> & NavVariantsType;

export const validateNavVariant = (variantKey?: string) =>
  validateVariant<NavVariantType>(variantKey, cvaVariant);
