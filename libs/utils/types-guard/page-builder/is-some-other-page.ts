import { QuestionaryPageType } from "@enums/questionary";
import { Question, SomeOtherPageType } from "@typeslib/questionary";

export const isSomeOtherPage = (
  question: Question,
): question is SomeOtherPageType => {
  return question.pageType === QuestionaryPageType.SomeOtherPage;
};
