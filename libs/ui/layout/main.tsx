import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

import { cn } from "@utils/ui/cn";

const mainVariants = cva(
  "flex flex-col items-center container min-h-screen pt-[76px]",
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

type mainVariantsType = VariantProps<typeof mainVariants>;
type NavProps = HTMLAttributes<HTMLElement> & mainVariantsType;

export const Main = ({ children, variant, className, ...rest }: NavProps) => {
  return (
    <main className={cn(mainVariants({ variant }), className)} {...rest}>
      {children}
    </main>
  );
};
