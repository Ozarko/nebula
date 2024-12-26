import { QuestionaryComponentType } from "@enums/questionary";

export type QuestionComponentType<TQType, TQConfig> = {
  type: TQType;
  config: Record<string, TQConfig>;
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

export type SurveyHeader = QuestionComponentType<
  QuestionaryComponentType.Header,
  SurveyHeaderConfigType
>;

export type SurveyDescriptionConfigType = {
  text: string;
};

export type SurveyDescription = QuestionComponentType<
  QuestionaryComponentType.Description,
  SurveyDescriptionConfigType
>;

export type QuestionComponentsType = (
  | SurveyDescription
  | SurveyHeader
  | SurveyButtonType
)[];

export type Question = {
  id: string;
  pageType: string;
  components: QuestionComponentsType;
};

export type QuestionaryType = Record<string, Question>;
