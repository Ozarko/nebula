import { cn } from "@utils/ui/cn";

import {
  ChevronLeftIconProps,
  chevronLeftIconVariants,
} from "./chevron-left-icon.config";
import ChevronLeft from "./chevron-left.svg";

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
