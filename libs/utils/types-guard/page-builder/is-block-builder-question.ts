import { SurveyPageEnum } from "@enums/survey/survey";
import { Question } from "@typeslib/survey/general";
import { BlockBuilderQuestion } from "@typeslib/survey/page-types";

export const isBlockBuilderQuestion = (
  question: Question,
): question is BlockBuilderQuestion => {
  return question.pageType === SurveyPageEnum.BlockBuilder;
};
