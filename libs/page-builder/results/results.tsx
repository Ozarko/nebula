"use client";

import { SurveyTypeButton } from "@components/survey/buttons/survey-type-button";
import { SurveyNavigation } from "@components/survey/layout/survey-navigation";
import { SurveyComponentEnum } from "@enums/survey/survey";
import { useSurveyLiterals } from "@hooks/use-survey-literals";
import { useAppSelector } from "@store/hooks";
import { selectAllSurveyAnswers } from "@store/selectors/survey-selectors";
import { ResultsPageType } from "@typeslib/survey/page-types";
import { TypographyH1 } from "@ui/typography/typographyH1/typographyH1";
import { TypographyP } from "@ui/typography/typographyP/typographyP";
import { buildStoryWithAllAnswers } from "@utils/survey/build-story-with-all-answers";

export const ResultsPage = ({ matchers, header }: ResultsPageType) => {
  const surveyAnswers = useAppSelector(selectAllSurveyAnswers);

  const storyParts = buildStoryWithAllAnswers(matchers, surveyAnswers);

  const withReplacedLiterals = useSurveyLiterals(storyParts);

  return (
    <>
      <SurveyNavigation
        type={SurveyComponentEnum.Navigation}
        id={"results"}
        config={header}
      />
      <div className="max-w-2xl flex flex-col items-center gap-6 h-[80vh]">
        <TypographyH1 variant="special">
          What we have found for you based on your answers
        </TypographyH1>
        <TypographyP variant="special">{withReplacedLiterals}</TypographyP>
        <div className="w-fit">
          <SurveyTypeButton href={"/"} surveyType={""} withSurveyPath={false}>
            Discover the future
          </SurveyTypeButton>
        </div>
      </div>
    </>
  );
};
