import NavLogoDefaultSvg from "./nav-logo-default.svg";
import { NavLogoIconProps } from "./nav-logo-icon.config";
import NavLogoSecondary from "./nav-logo-secondary.svg";

export const NavLogoIcon = ({
  variant = "default",
  ...props
}: NavLogoIconProps) => {
  if (variant === "secondary") {
    return <NavLogoSecondary {...props} />;
  }

  return <NavLogoDefaultSvg {...props} />;
};
