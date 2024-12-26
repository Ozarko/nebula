"use client";

import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

import { Button, ButtonProps } from "@ui/button";

type RouterButtonProps = ButtonProps & {
  href: string;
  navigationOptions?: NavigateOptions;
};

export const RouterButton = ({
  href,
  navigationOptions,
  ...props
}: RouterButtonProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(href, navigationOptions);
  };

  return <Button onClick={handleNavigation} {...props} />;
};
