import "server-only";

import { surveys } from "@mock/database-mock";
import { isSurveyId } from "./is-survey-id";

export const getValidSurveyId = (surveyId: string): keyof typeof surveys => {
  if (!isSurveyId(surveyId)) {
    throw new Error(`Survey with ID '${surveyId}' not found.`);
  }
  return surveyId;
};
