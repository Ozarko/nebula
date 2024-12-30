import { cn } from "@utils/ui/cn";

import { mainVariants, NavProps } from "./main.config";

export const Main = ({ children, variant, className, ...rest }: NavProps) => {
  return (
    <main className={cn(mainVariants({ variant }), className)} {...rest}>
      {children}
    </main>
  );
};
