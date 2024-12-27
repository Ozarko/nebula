import { SurveyConfig } from "@typeslib/services/survey-config";

export const getSurveysTypeByUrlPart = (
  urlPart: string,
  configs: SurveyConfig[]
) => {
  const surveyConfig = configs.find(
    (config) => config.surveyUrlPart === urlPart
  );

  if (!surveyConfig) {
    console.log("getSurveysIdByUrlPart: surveyConfig is not defined");
    return null;
  }

  return surveyConfig.surveyType;
};
