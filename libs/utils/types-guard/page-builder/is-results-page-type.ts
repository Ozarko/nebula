import { SurveyPageEnum } from "@enums/survey/survey";
import { Question } from "@typeslib/survey/general";
import { ResultsPageType } from "@typeslib/survey/page-types";

export const isResultsPage = (
  question: Question,
): question is ResultsPageType => {
  return question.pageType === SurveyPageEnum.Results;
};
