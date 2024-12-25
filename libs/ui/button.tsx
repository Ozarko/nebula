import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

import { cn } from "../utils/ui/cn";

const buttonVariants = cva(
  "flex items-center justify-center w-full py-3 px-5 rounded-2xl font-open-sans font-normal text-base border border-border shadow-primary",
  {
    variants: {
      variant: {
        default: "bg-secondary",
        secondary: "bg-nebula-gradient text-secondary border-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = ({
  className,
  variant,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
      type={type}
      {...props}
    />
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };
