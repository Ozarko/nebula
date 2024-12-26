import "server-only";

import { surveys } from "@mock/database-mock";

export const isQuestionId = (
  surveyId: keyof typeof surveys,
  questionId: string,
): boolean => {
  const survey = surveys[surveyId];

  return questionId in survey.questions;
};
