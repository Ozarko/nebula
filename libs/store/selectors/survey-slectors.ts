import { surveySlice } from "@store/slices/survey-slice";

export const { selectSurveyType, selectSurveyAnswer, selectAllSurveyAnswers } =
  surveySlice.selectors;
