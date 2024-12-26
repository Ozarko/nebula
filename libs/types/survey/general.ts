import { SurveyComponentEnum } from "@enums/survey";
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
