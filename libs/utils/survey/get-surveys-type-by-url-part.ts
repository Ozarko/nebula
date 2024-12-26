import { SurveyConfig } from "@typeslib/services/survey-config";

export const getSurveysTypeByUrlPart = (
  urlPart: string,
  configs: SurveyConfig[]
) => {
  if (!urlPart) {
    console.error("getSurveysIdByUrlPart: urlPart is not defined");
    return null;
  }
  const surveyConfig = configs.find(
    (config) => config.surveyUrlPart === urlPart
  );
  if (!surveyConfig) {
    console.error("getSurveysIdByUrlPart: surveyConfig is not defined");
    return null;
  }
  return surveyConfig.surveyType;
};
