import {
  BlockBuilderQuestion,
  OneMorePageType,
  SomeOtherPageType,
} from "./page-types";

export type BaseQuestion = {
  id: string;
  pageType: string;
};

export type Question =
  | BlockBuilderQuestion
  | SomeOtherPageType
  | OneMorePageType;

export type SurveyType = {
  surveyType: string;
  surveyUrlPart: string;
  initialQuestionId: string;
  questions: Record<string, Question>;
};

export type WithQuestionId<T> = {
  questionId: string;
} & T;
