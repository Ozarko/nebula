"use client";

import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

import { StaticPagePath } from "@enums/general/static-page-path";
import { Button, ButtonProps } from "@ui/button";

type RouterButtonProps = ButtonProps & {
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
    router.push(`${StaticPagePath.Survey}${href}`, navigationOptions);
  };

  return <Button onClick={handleNavigation} {...props} />;
};
