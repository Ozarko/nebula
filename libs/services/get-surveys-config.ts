import { surveys } from "@/libs/mock/database-mock";
import { SurveyConfig } from "@typeslib/services/survey-config";

export const getSurveysConfig = (): SurveyConfig[] => {
  const surveysConfigValues = Object.values(surveys);

  return surveysConfigValues.map(
    ({ surveyType, initialQuestionId, surveyUrlPart }) => ({
      surveyType,
      initialUrl: `/${surveyUrlPart}/${initialQuestionId}`,
      surveyUrlPart,
    }),
  );
};
