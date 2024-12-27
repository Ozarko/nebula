"use client";

import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

import { Button, ButtonProps } from "@ui/button";

export type RouterButtonProps = ButtonProps & {
  href: string;
  navigationOptions?: NavigateOptions;
};

export const RouterButton = ({
  href,
  navigationOptions,
  onClick,
  ...props
}: RouterButtonProps) => {
  const router = useRouter();

  const handleNavigation = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    router.push(href, navigationOptions);
  };

  return <Button onClick={handleNavigation} {...props} />;
};
