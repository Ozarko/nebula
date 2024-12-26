import { SurveyComponentEnum } from "@enums/survey";
import {
  QueryUrlButtonType,
  QuestionComponentsType,
} from "@typeslib/survey/components";

export const isSurveyQueryUrlButtonComponent = (
  config: QuestionComponentsType,
): config is QueryUrlButtonType => {
  return config.type === SurveyComponentEnum.QueryUrlButton;
};
