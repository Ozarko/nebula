import { SurveyComponentEnum } from "@enums/survey/survey";

export type QuestionComponentType<TQType, TQConfig> = {
  type: TQType;
  id: string;
  config: TQConfig;
};

export type SurveyButtonConfigType = {
  title: string;
  value: string;
  storageKey: string;
  nextUrl: string;
};

export type SurveyButtonType = QuestionComponentType<
  string,
  SurveyButtonConfigType
>;

export type SurveyHeaderConfigType = {
  title: string;
};

export type SurveyHeaderType = QuestionComponentType<
  SurveyComponentEnum.Header,
  SurveyHeaderConfigType
>;

export type SurveyDescriptionConfigType = {
  text: string;
};

export type SurveyDescriptionType = QuestionComponentType<
  SurveyComponentEnum.Description,
  SurveyDescriptionConfigType
>;

export type QueryUrlButtonConfigType = {
  title: string;
  queryKey: string;
};

export type QueryUrlButtonType = QuestionComponentType<
  SurveyComponentEnum.QueryUrlButton,
  QueryUrlButtonConfigType
>;

export type QuestionComponentsType =
  | SurveyDescriptionType
  | SurveyHeaderType
  | SurveyButtonType
  | QueryUrlButtonType;
