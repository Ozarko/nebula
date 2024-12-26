import { SurveyComponentEnum } from "@enums/survey";
import {
  QuestionComponentsType,
  SurveyHeaderType,
} from "@typeslib/survey/components";

export const isSurveyHeaderComponent = (
  config: QuestionComponentsType,
): config is SurveyHeaderType => {
  return config.type === SurveyComponentEnum.Header;
};
