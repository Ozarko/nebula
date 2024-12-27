import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

import { cn } from "@utils/ui/cn";
import { validateVariant } from "@utils/ui/validateVariant";

export type MainVariantType = {
  default: string;
  special: string;
};

const cvaMainVariant: MainVariantType = {
  default: "bg-background-main",
  special: "bg-nebula-gradient",
};

const mainVariants = cva("flex flex-col items-center min-h-screen pt-[76px]", {
  variants: {
    variant: cvaMainVariant,
  },
  defaultVariants: {
    variant: "default",
  },
});

type MainVariantsType = VariantProps<typeof mainVariants>;
type NavProps = HTMLAttributes<HTMLElement> & MainVariantsType;

export const validateMainVariant = (variantKey: string) =>
  validateVariant<MainVariantType>(variantKey, cvaMainVariant);

export const Main = ({ children, variant, className, ...rest }: NavProps) => {
  return (
    <main className={cn(mainVariants({ variant }), className)} {...rest}>
      {children}
    </main>
  );
};
