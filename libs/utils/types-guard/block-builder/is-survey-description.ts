import { SurveyComponentEnum } from "@enums/survey/survey";
import {
  QuestionComponentsType,
  SurveyDescriptionType,
} from "@typeslib/survey/components";

export const isSurveyDescriptionComponent = (
  config: QuestionComponentsType,
): config is SurveyDescriptionType => {
  return config.type === SurveyComponentEnum.Description;
};
