import {
  ChevronLeftIconVariantsType,
  validateChevronLeftVariant,
} from "@/libs/icons/chevron-left/chevron-left-icon";
import {
  NavLogoIcon,
  NavLogoVariantsType,
  validateNavLogoVariant,
} from "@/libs/icons/nav-logo/nav-logo-icon";
import { Nav, NavVariantsType, validateNavVariant } from "@ui/layout/nav";
import { cn } from "@utils/ui/cn";

import { NavigationHistoryBack } from "./navigation-history-back";

export type NavigationProps = Partial<{
  navConfig: NavVariantsType;
  historyBackConfig: ChevronLeftIconVariantsType;
  navLogoConfig: NavLogoVariantsType;
}>;

type ValidateNavigationVariants = {
  navConfigKey?: string;
  historyBackConfigKey?: string;
  navLogoConfigKey?: string;
};

export const validateNavigationVariant = ({
  navConfigKey,
  historyBackConfigKey,
  navLogoConfigKey,
}: ValidateNavigationVariants) => {
  const navConfigVariant = validateNavVariant(navConfigKey);
  const navLogoConfigVariant = validateNavLogoVariant(navLogoConfigKey);

  const historyBackConfigVariant =
    validateChevronLeftVariant(historyBackConfigKey);

  return {
    navConfigVariant,
    navLogoConfigVariant,
    historyBackConfigVariant,
  };
};

export const Navigation = ({
  historyBackConfig,
  navConfig,
  navLogoConfig,
}: NavigationProps) => {
  return (
    <Nav {...navConfig}>
      {historyBackConfig && <NavigationHistoryBack {...historyBackConfig} />}
      <div
        className={cn(
          "flex flex-1 items-center justify-center",
          historyBackConfig && " after:content-[''] after:w-6",
        )}
      >
        <div className="flex items-center justify-center w-6 h-6">
          <NavLogoIcon {...navLogoConfig} />
        </div>
      </div>
    </Nav>
  );
};
