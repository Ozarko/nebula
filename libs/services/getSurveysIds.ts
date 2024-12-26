import "server-only";

import { surveys } from "@/libs/mock/database-mock";

type SurveyIds = {
  id: string;
};

export const getSurveysIds = () => {
  // let's imagine that here we have a real API call
  return Object.values(surveys).reduce((acc: SurveyIds[], survey) => {
    for (const id of Object.keys(survey)) {
      acc.push({ id });
    }
    return acc;
  }, []);
};
