import { SurveyComponentEnum } from "@enums/survey/survey";

export type QuestionComponentType<TQType, TQConfig> = {
  type: TQType;
  id: string;
  config: TQConfig;
};

export type SurveyButtonConfigType = {
  title: string;
  value: string;
  literalKey: string;
  nextUrl: string;
  variant: string;
};

export type SurveyButtonType = QuestionComponentType<
  string,
  SurveyButtonConfigType
>;

export type SurveyHeaderConfigType = {
  title: string;
  variant: string;
};

export type SurveyHeaderType = QuestionComponentType<
  SurveyComponentEnum.Header,
  SurveyHeaderConfigType
>;

export type SurveyDescriptionConfigType = {
  text: string;
  variant: string;
};

export type SurveyDescriptionType = QuestionComponentType<
  SurveyComponentEnum.Description,
  SurveyDescriptionConfigType
>;

export type QueryUrlButtonConfigType = {
  title: string;
  queryKey: string;
  variant: string;
};

export type QueryUrlButtonType = QuestionComponentType<
  SurveyComponentEnum.QueryUrlButton,
  QueryUrlButtonConfigType
>;

export type SurveyNavigationConfigType = {
  navConfig?: {
    variant: string;
  };
  navLogoConfig?: {
    variant: string;
  };
  historyBackConfig?: {
    variant: string;
  };
};

export type SurveyNavigationType = QuestionComponentType<
  SurveyComponentEnum.Navigation,
  SurveyNavigationConfigType
>;

export type QuestionComponentsType =
  | SurveyDescriptionType
  | SurveyHeaderType
  | SurveyButtonType
  | QueryUrlButtonType
  | SurveyNavigationType;
