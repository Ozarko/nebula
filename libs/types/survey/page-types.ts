import { QuestionComponentsType } from "./components";
import { BaseQuestion } from "./general";

export type OneMorePageType = BaseQuestion & {
  oneMoreProp: string;
};

export type ResultsPageMatcherType = {
  matcher: string;
  description: string;
};

export type ResultsPageMatchersType = Record<string, ResultsPageMatcherType[]>;

export type ResultsPageType = BaseQuestion & {
  matchers: ResultsPageMatchersType;
};

export type BlockBuilderQuestion = BaseQuestion & {
  components: QuestionComponentsType[];
};
