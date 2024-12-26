import "server-only";

import { surveys } from "@mock/database-mock";
import { Nullable } from "@typeslib/general";
import { Question } from "@typeslib/questionary";
import { getValidSurveyId } from "@utils/data/survey-validation/get-valid-survey-id";
import { getValidQuestionId } from "@utils/data/survey-validation/get-valid-question-id";
import { isQuestion } from "@utils/data/survey-validation/is-question";

export const getSurveyByConfig = (
  surveyId: string,
  questionId: string,
): Nullable<Question> => {
  try {
    const validSurveyId = getValidSurveyId(surveyId);
    const validQuestionId = getValidQuestionId(validSurveyId, questionId);

    if (!validSurveyId || !validQuestionId) return null;

    const survey = surveys[validSurveyId];
    const question = survey[validQuestionId];

    if (!isQuestion(question)) {
      throw new Error(
        `Invalid question data for questionId '${validQuestionId}'`,
      );
    }

    return question;
  } catch (e) {
    console.error("Error in getSurveyByConfig:", e);
    return null;
  }
};
