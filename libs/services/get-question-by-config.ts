import "server-only";

import { surveys } from "@mock/database-mock";
import { Nullable } from "@typeslib/general";
import { getValidSurveyId } from "@utils/types-guard/survey-validation/get-valid-survey-id";
import { getValidQuestionId } from "@utils/types-guard/survey-validation/get-valid-question-id";
import { isQuestion } from "@utils/types-guard/survey-validation/is-question";
import { Question } from "@typeslib/survey/general";

export const getQuestionByConfig = (
  surveyURlPart: string,
  questionId: string,
): Nullable<Question> => {
  try {
    const validSurveyId = getValidSurveyId(surveyURlPart);
    const validQuestionId = getValidQuestionId(validSurveyId, questionId);

    if (!validSurveyId || !validQuestionId) return null;

    const survey = surveys[validSurveyId];
    const question = survey.questions[validQuestionId];

    if (!isQuestion(question)) {
      throw new Error(
        `Invalid question data for questionId '${validQuestionId}'`,
      );
    }

    return question;
  } catch (e) {
    console.log("Error in getQuestionByConfig", e);
    return null;
  }
};
