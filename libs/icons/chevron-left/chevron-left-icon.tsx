import { cva, VariantProps } from "class-variance-authority";
import { SVGProps } from "react";

import { cn } from "@utils/ui/cn";
import { validateVariant } from "@utils/ui/validateVariant";

import ChevronLeft from "./chevron-left.svg";

type ChevronLeftVariantType = {
  default: string;
  secondary: string;
};

const cvaVariant: ChevronLeftVariantType = {
  default: "[&>path]:fill-black",
  secondary: "[&>path]:fill-secondary",
};

const chevronLeftIconVariants = cva("", {
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

export const ChevronLeftIcon = ({
  variant,
  className,
  ...rest
}: ChevronLeftIconProps) => {
  return (
    <ChevronLeft
      className={cn(chevronLeftIconVariants({ variant }), className)}
      {...rest}
    />
  );
};
