import { QuestionaryComponentType } from "@enums/questionary";

export type QuestionComponentType<TQType, TQConfig> = {
  type: TQType;
  id: string;
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

export type BaseQuestion = {
  id: string;
  pageType: string;
};

export type BlockBuilderQuestion = BaseQuestion & {
  components: QuestionComponentsType;
};

export type SomeOtherPageType = BaseQuestion & {
  someOtherProp: string;
};

export type OneMorePageType = BaseQuestion & {
  oneMoreProp: string;
};

export type Question =
  | BlockBuilderQuestion
  | SomeOtherPageType
  | OneMorePageType;

export type QuestionaryType = Record<string, SomeOtherPageType>;
