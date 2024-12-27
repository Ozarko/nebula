import "server-only";

import { surveys } from "@/libs/mock/database-mock";

type SurveySlugs = {
  slug: string[];
};

export const getSurveysSlugs = () => {
  // let's imagine that here we have a real API call
  return Object.values(surveys).reduce((acc: SurveySlugs[], survey) => {
    for (const id of Object.keys(survey.questions)) {
      acc.push({ slug: [survey.surveyUrlPart, id] });
    }
    return acc;
  }, []);
};
