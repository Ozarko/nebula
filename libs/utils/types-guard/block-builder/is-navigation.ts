import { SurveyComponentEnum } from "@enums/survey/survey";

import {
  QuestionComponentsType,
  SurveyNavigationType,
} from "@typeslib/survey/components";

export const isSurveyNavigationComponent = (
  config: QuestionComponentsType,
): config is SurveyNavigationType => {
  return config.type === SurveyComponentEnum.Navigation;
};
