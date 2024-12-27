import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

import { cn } from "@utils/ui/cn";
import { validateVariant } from "@utils/ui/validateVariant";

export type ButtonVariantType = {
  default: string;
  special: string;
  empty: string;
};

const mainButtonStyles: string =
  "w-full py-3 px-5 rounded-2xl font-open-sans font-normal text-sm";

const cvaVariant: ButtonVariantType = {
  default: cn(
    mainButtonStyles,
    "border-default bg-secondary text-primary hover:shadow-primary [&.active]:bg-nebula-gradient [&.active]:text-secondary",
  ),
  special: cn(
    mainButtonStyles,
    "bg-secondary text-special hover:shadow-special",
  ),
  empty: "",
};

const buttonVariants = cva(
  "flex items-center justify-center transition-shadow duration-300 ease-in-out",
  {
    variants: {
      variant: cvaVariant,
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type ButtonVariantsType = VariantProps<typeof buttonVariants>;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantsType;

export const validateButtonVariant = (variantKey: string) =>
  validateVariant<ButtonVariantType>(variantKey, cvaVariant);

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
