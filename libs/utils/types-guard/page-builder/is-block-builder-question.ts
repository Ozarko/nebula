import { QuestionaryPageType } from "@enums/questionary";
import { BlockBuilderQuestion, Question } from "@typeslib/questionary";

export const isBlockBuilderQuestion = (
  question: Question,
): question is BlockBuilderQuestion => {
  return question.pageType === QuestionaryPageType.BlockBuilder;
};
