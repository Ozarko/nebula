import dynamic from "next/dynamic";

import { ButtonSkeleton } from "@components/skeletons/button-skeleton";
import { DescriptionSkeleton } from "@components/skeletons/description-skeleton";
import { HeaderSkeleton } from "@components/skeletons/header-skeleton";
import { NavSkeleton } from "@components/skeletons/nav-skeleton";
import { QuestionComponentsType } from "@typeslib/survey/components";
import { WithQuestionId } from "@typeslib/survey/general";
import { isSurveyNavigationComponent } from "@utils/types-guard/block-builder/is-navigation";
import { isSurveyQueryUrlButtonComponent } from "@utils/types-guard/block-builder/is-query-url-button";
import { isSurveyButtonComponent } from "@utils/types-guard/block-builder/is-survey-button";
import { isSurveyDescriptionComponent } from "@utils/types-guard/block-builder/is-survey-description";
import { isSurveyHeaderComponent } from "@utils/types-guard/block-builder/is-survey-header";

const SurveyButton = dynamic(
  async () => {
    const { SurveyButton } = await import(
      "@components/survey/buttons/survey-button"
    );
    return SurveyButton;
  },
  { loading: () => <ButtonSkeleton /> },
);

const SurveyHeader = dynamic(
  async () => {
    const { SurveyHeader } = await import(
      "@components/survey/typography/survey-header"
    );
    return SurveyHeader;
  },
  { loading: () => <HeaderSkeleton /> },
);

const SurveyDescription = dynamic(
  async () => {
    const { SurveyDescription } = await import(
      "@components/survey/typography/survey-description"
    );
    return SurveyDescription;
  },
  { loading: () => <DescriptionSkeleton /> },
);

const SurveyQueryUrlButton = dynamic(
  async () => {
    const { SurveyQueryUrlButton } = await import(
      "@components/survey/buttons/survey-query-url-button"
    );
    return SurveyQueryUrlButton;
  },
  { loading: () => <ButtonSkeleton /> },
);

const SurveyNavigation = dynamic(
  async () => {
    const { SurveyNavigation } = await import(
      "@components/survey/layout/survey-navigation"
    );
    return SurveyNavigation;
  },
  { loading: () => <NavSkeleton /> },
);

export const BlockBuilder = ({
  questionId,
  ...props
}: WithQuestionId<QuestionComponentsType>) => {
  switch (true) {
    case isSurveyButtonComponent(props):
      return <SurveyButton {...props} questionId={questionId} />;
    case isSurveyHeaderComponent(props):
      return <SurveyHeader {...props} />;
    case isSurveyDescriptionComponent(props):
      return <SurveyDescription {...props} />;
    case isSurveyQueryUrlButtonComponent(props):
      return <SurveyQueryUrlButton {...props} />;
    case isSurveyNavigationComponent(props):
      return <SurveyNavigation {...props} />;
    default:
      return null;
  }
};
