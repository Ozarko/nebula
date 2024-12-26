import { QuestionaryPageType } from "@enums/questionary";
import { OneMorePageType, Question } from "@typeslib/questionary";

export const isOneMorePage = (
  question: Question,
): question is OneMorePageType => {
  return question.pageType === QuestionaryPageType.OneMorePage;
};
