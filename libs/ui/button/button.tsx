import { cn } from "@utils/ui/cn";

import { ButtonProps, buttonVariants } from "./button.config";

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
