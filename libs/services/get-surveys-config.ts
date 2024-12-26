import { surveys } from "@/libs/mock/database-mock";
import { SurveyConfig } from "@typeslib/services/survey-config";

export const getSurveysConfig = (): SurveyConfig[] => {
  const surveysConfigEntry = Object.values(surveys);

  return surveysConfigEntry.map(
    ({ surveyType, initialQuestionId, surveyUrlPart }) => ({
      surveyType,
      initialUrl: `/${surveyUrlPart}/${initialQuestionId}`,
      surveyUrlPart,
    })
  );
};
