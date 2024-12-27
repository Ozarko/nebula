import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../create-app-slice";
import { StorageSlicesEnum } from "@enums/storage/storage";

export type SurveyAnswer = {
  id: string;
  value: string;
  literalKey: string;
};

export type SurveyState = {
  selectedSurvey: string;
  surveyAnswers: SurveyAnswer[];
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
      }
    ),
    setSurveyAnswer: create.reducer(
      (
        state,
        action: PayloadAction<{
          id: string;
          value: string;
          literalKey: string;
        }>
      ) => {
        const { id, value, literalKey } = action.payload;
        const surveyAnswer = state.surveyAnswers.find(
          (answer) => answer.id === id
        );
        if (surveyAnswer) {
          surveyAnswer.value = value;
          surveyAnswer.literalKey = literalKey;
        } else {
          state.surveyAnswers.push({ id, value, literalKey });
        }
      }
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
