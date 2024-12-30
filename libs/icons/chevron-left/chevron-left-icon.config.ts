import { validateVariant } from "@utils/ui/validateVariant";
import { cva, VariantProps } from "class-variance-authority";
import { SVGProps } from "react";

type ChevronLeftVariantType = {
  default: string;
  secondary: string;
};

const cvaVariant: ChevronLeftVariantType = {
  default: "[&>path]:fill-black",
  secondary: "[&>path]:fill-secondary",
};

export const chevronLeftIconVariants = cva("", {
  variants: {
    variant: cvaVariant,
  },
  defaultVariants: {
    variant: "default",
  },
});
export type ChevronLeftIconVariantsType = VariantProps<
  typeof chevronLeftIconVariants
>;
export type ChevronLeftIconProps = SVGProps<SVGElement> &
  ChevronLeftIconVariantsType;

export const validateChevronLeftVariant = (variantKey?: string) =>
  validateVariant<ChevronLeftVariantType>(variantKey, cvaVariant);
