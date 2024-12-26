import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../create-app-slice";
import { StorageSlicesEnum } from "@enums/storage/storage";

export type SurveyState = {
  selectedSurvey: string;
  surveyAnswers: {
    [key: string]: string;
  };
};

const initialState: SurveyState = {
  selectedSurvey: "",
  surveyAnswers: {},
};

export const surveySlice = createAppSlice({
  name: StorageSlicesEnum.SurveySlice,
  initialState,
  reducers: (create) => ({
    changeSurveyType: create.reducer(
      (state, action: PayloadAction<{ value: string }>) => {
        state.selectedSurvey = action.payload.value;
        state.surveyAnswers = {};
      },
    ),
    setSurveyAnswer: create.reducer(
      (state, action: PayloadAction<{ key: string; value: string }>) => {
        state.surveyAnswers[action.payload.key] = action.payload.value;
      },
    ),
  }),
  selectors: {
    selectSurveyType: (state) => state.selectedSurvey,
    selectSurveyAnswer: (state, key: string) => state.surveyAnswers[key],
    selectAllSurveyAnswers: (state) => state.surveyAnswers,
  },
});

export const { changeSurveyType, setSurveyAnswer } = surveySlice.actions;
