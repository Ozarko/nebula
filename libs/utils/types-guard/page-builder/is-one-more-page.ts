import { SurveyPageEnum } from "@enums/survey";
import { Question } from "@typeslib/survey/general";
import { OneMorePageType } from "@typeslib/survey/page-types";

export const isOneMorePage = (
  question: Question
): question is OneMorePageType => {
  return question.pageType === SurveyPageEnum.OneMorePage;
};
