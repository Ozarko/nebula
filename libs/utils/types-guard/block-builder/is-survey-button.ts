import { SurveyComponentEnum } from "@enums/survey";
import {
  QuestionComponentsType,
  SurveyButtonType,
} from "@typeslib/survey/components";

export const isSurveyButtonComponent = (
  config: QuestionComponentsType,
): config is SurveyButtonType => {
  return config.type === SurveyComponentEnum.Button;
};
