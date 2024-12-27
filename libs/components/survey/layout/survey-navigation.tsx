import {
  Navigation,
  NavigationProps,
  validateNavigationVariant,
} from "@components/layout/navigation";
import { SurveyNavigationType } from "@typeslib/survey/components";

export const SurveyNavigation = ({ config }: SurveyNavigationType) => {
  const navConfig = config?.navConfig;
  const navLogoConfig = config?.navLogoConfig;
  const historyBackConfig = config?.historyBackConfig;

  const { navConfigVariant, navLogoConfigVariant, historyBackConfigVariant } =
    validateNavigationVariant({
      navConfigKey: navConfig?.variant,
      historyBackConfigKey: historyBackConfig?.variant,
      navLogoConfigKey: navLogoConfig?.variant,
    });

  const navigationProps: NavigationProps = {};

  if (navConfig && navConfigVariant) {
    navigationProps.navConfig = {
      variant: navConfigVariant,
    };
  }

  if (navLogoConfig && navLogoConfigVariant) {
    navigationProps.navLogoConfig = {
      variant: navLogoConfigVariant,
    };
  }

  if (historyBackConfig && historyBackConfigVariant) {
    navigationProps.historyBackConfig = {
      variant: historyBackConfigVariant,
    };
  }

  return <Navigation {...navigationProps} />;
};
