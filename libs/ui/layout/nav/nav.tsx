import { cn } from "@utils/ui/cn";

import { NavProps, navVariants } from "./nav.config";

export const Nav = ({ children, variant, className, ...rest }: NavProps) => {
  return (
    <nav className={cn(navVariants({ variant }), className)} {...rest}>
      <div className="container flex items-center justify-between">
        {children}
      </div>
    </nav>
  );
};
