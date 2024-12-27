import { SurveyConfig } from "@typeslib/services/survey-config";
import { getSurveysTypeByUrlPart } from "./get-surveys-type-by-url-part";

export const handleSurveySlug = (slug: string[], configs: SurveyConfig[]) => {
  if (!slug) {
    console.log("handleSurveySlug: slug is not defined");
    return null;
  }
  if (!slug[0] || !slug[1]) {
    console.log("handleSurveySlug: slug[0] or slug[1] is not defined");
    return null;
  }
  const surveyType = getSurveysTypeByUrlPart(slug[0], configs);

  if (!surveyType) {
    console.log("handleSurveySlug: surveyType is not defined");
    return null;
  }

  return { surveyType, questionId: slug[1] };
};
