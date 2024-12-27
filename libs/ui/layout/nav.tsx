import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

import { cn } from "@utils/ui/cn";
import { validateVariant } from "@utils/ui/validateVariant";

export type NavVariantType = {
  default: string;
  special: string;
};

const cvaVariant: NavVariantType = {
  default: "bg-background-default",
  special: "bg-transparent",
};

const navVariants = cva("fixed top-0 left-0 right-0 py-4 w-screen", {
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

export const Nav = ({ children, variant, className, ...rest }: NavProps) => {
  return (
    <nav className={cn(navVariants({ variant }), className)} {...rest}>
      <div className="container flex items-center justify-between">
        {children}
      </div>
    </nav>
  );
};
