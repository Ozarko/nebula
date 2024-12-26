import "server-only";

import { surveys } from "@mock/database-mock";

export const isSurveyId = (
  surveyId: string,
): surveyId is keyof typeof surveys => {
  return surveyId in surveys;
};
