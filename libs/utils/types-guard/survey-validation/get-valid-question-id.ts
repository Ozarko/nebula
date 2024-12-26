import "server-only";

import { surveys } from "@mock/database-mock";
import { isQuestionId } from "./is-question-id";

export const getValidQuestionId = (
  surveyId: keyof typeof surveys,
  questionId: string,
) => {
  if (!isQuestionId(surveyId, questionId)) {
    throw new Error(
      `Question with ID '${questionId}' not found in survey '${surveyId}'.`,
    );
  }
  const survey = surveys[surveyId];

  return questionId as keyof typeof survey.questions;
};
