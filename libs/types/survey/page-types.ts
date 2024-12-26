import { QuestionComponentsType } from "./components";
import { BaseQuestion } from "./general";

export type OneMorePageType = BaseQuestion & {
  oneMoreProp: string;
};

export type SomeOtherPageType = BaseQuestion & {
  someOtherProp: string;
};

export type BlockBuilderQuestion = BaseQuestion & {
  components: QuestionComponentsType[];
};
