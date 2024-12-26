import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../create-app-slice";
import { StorageSlicesEnum } from "@enums/storage/storage";

export type SurveyState = {
  selectedSurvey: string;
  surveyAnswers: {
    id: string;
    value: string;
    literalKey: string;
  }[];
};

const initialState: SurveyState = {
  selectedSurvey: "",
  surveyAnswers: [],
};

export const surveySlice = createAppSlice({
  name: StorageSlicesEnum.SurveySlice,
  initialState,
  reducers: (create) => ({
    changeSurveyType: create.reducer(
      (state, action: PayloadAction<{ value: string }>) => {
        state.selectedSurvey = action.payload.value;
        state.surveyAnswers = [];
      },
    ),
    setSurveyAnswer: create.reducer(
      (
        state,
        action: PayloadAction<{
          id: string;
          value: string;
          literalKey: string;
        }>,
      ) => {
        state.surveyAnswers.push({
          id: action.payload.id,
          value: action.payload.value,
          literalKey: action.payload.literalKey,
        });
      },
    ),
  }),
  selectors: {
    selectSurveyType: (state) => state.selectedSurvey,
    selectSurveyAnswer: (state, id: string) => {
      return state.surveyAnswers.find((answer) => answer.id === id);
    },
    selectAllSurveyAnswers: (state) => state.surveyAnswers,
  },
});

export const { changeSurveyType, setSurveyAnswer } = surveySlice.actions;
