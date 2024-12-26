import { SurveyPageEnum } from "@enums/survey/survey";
import { Question } from "@typeslib/survey/general";
import { SomeOtherPageType } from "@typeslib/survey/page-types";

export const isSomeOtherPage = (
  question: Question,
): question is SomeOtherPageType => {
  return question.pageType === SurveyPageEnum.SomeOtherPage;
};
