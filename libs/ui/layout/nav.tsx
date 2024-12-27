"use client";

import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

import { cn } from "@utils/ui/cn";

const navVariants = cva(
  "container fixed top-0 left-0 right-0 py-4 flex items-center justify-between w-screen",
  {
    variants: {
      variant: {
        default: "bg-background-main",
        special: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type navVariantsType = VariantProps<typeof navVariants>;
export type NavProps = HTMLAttributes<HTMLElement> & navVariantsType;

export const Nav = ({ children, variant, className, ...rest }: NavProps) => {
  return (
    <nav className={cn(navVariants({ variant }), className)} {...rest}>
      {children}
    </nav>
  );
};
