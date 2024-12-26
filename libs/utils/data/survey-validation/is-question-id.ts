import "server-only";

import { surveys } from "@mock/database-mock";

export const isQuestionId = (
  surveyId: keyof typeof surveys,
  questionId: string,
): boolean => {
  return questionId in surveys[surveyId];
};
