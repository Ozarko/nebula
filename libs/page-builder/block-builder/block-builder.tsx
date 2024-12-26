import dynamic from "next/dynamic";

import { QuestionComponentsType } from "@typeslib/survey/components";
import { isSurveyQueryUrlButtonComponent } from "@utils/types-guard/block-builder/is-query-url-button";
import { isSurveyButtonComponent } from "@utils/types-guard/block-builder/is-survey-button";
import { isSurveyDescriptionComponent } from "@utils/types-guard/block-builder/is-survey-description";
import { isSurveyHeaderComponent } from "@utils/types-guard/block-builder/is-survey-header";

const SurveyButton = dynamic(async () => {
  const { SurveyButton } = await import("@components/survey/survey-button");
  return SurveyButton;
});

const SurveyHeader = dynamic(async () => {
  const { SurveyHeader } = await import("@components/typography/survey-header");
  return SurveyHeader;
});

const SurveyDescription = dynamic(async () => {
  const { SurveyDescription } = await import(
    "@components/typography/survey-description"
  );
  return SurveyDescription;
});

const SurveyQueryUrlButton = dynamic(async () => {
  const { QueryUrlButton } = await import(
    "@components/buttons/query-url-button"
  );
  return QueryUrlButton;
});

export const BlockBuilder = (props: QuestionComponentsType) => {
  switch (true) {
    case isSurveyButtonComponent(props):
      return <SurveyButton {...props} />;
    case isSurveyHeaderComponent(props):
      return <SurveyHeader {...props} />;
    case isSurveyDescriptionComponent(props):
      return <SurveyDescription {...props} />;
    case isSurveyQueryUrlButtonComponent(props):
      return <SurveyQueryUrlButton {...props} />;
    default:
      return null;
  }
};
