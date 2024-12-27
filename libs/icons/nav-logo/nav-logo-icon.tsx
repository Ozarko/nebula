import React, { SVGProps } from "react";

import NavLogoDefaultSvg from "./nav-logo-default.svg";
import NavLogoSecondary from "./nav-logo-secondary.svg";

const NavLogoVariant = {
  default: "default",
  secondary: "secondary",
};

export type NavLogoVariantsType = {
  variant?: keyof typeof NavLogoVariant;
};

export type NavLogoIconProps = SVGProps<SVGElement> & NavLogoVariantsType;

export const validateNavLogoVariant = (
  variantKey?: string,
): keyof typeof NavLogoVariant => {
  if (variantKey === NavLogoVariant.secondary) {
    return NavLogoVariant.secondary as keyof typeof NavLogoVariant;
  }
  return NavLogoVariant.default as keyof typeof NavLogoVariant;
};

export const NavLogoIcon = ({
  variant = "default",
  ...props
}: NavLogoIconProps) => {
  if (variant === "secondary") {
    return <NavLogoSecondary {...props} />;
  }

  return <NavLogoDefaultSvg {...props} />;
};
