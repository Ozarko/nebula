"use client";

import { SurveyTypeButton } from "@components/survey/buttons/survey-type-button";
import { useSurveyLiterals } from "@hooks/use-survey-literals";
import { useAppSelector } from "@store/hooks";
import { selectAllSurveyAnswers } from "@store/selectors/survey-selectors";
import { ResultsPageType } from "@typeslib/survey/page-types";
import { TypographyH1 } from "@ui/typography/typographyH1";
import { TypographyP } from "@ui/typography/typographyP";
import { buildStoryWithAllAnswers } from "@utils/survey/build-story-with-all-answers";

export const ResultsPage = ({ matchers }: ResultsPageType) => {
  const surveyAnswers = useAppSelector(selectAllSurveyAnswers);

  const storyParts = buildStoryWithAllAnswers(matchers, surveyAnswers);

  const withReplacedLiterals = useSurveyLiterals(storyParts);

  return (
    <div className="max-w-2xl flex flex-col items-center justify-center gap-6 h-[80vh]">
      <TypographyH1 variant="special">What we have found for you</TypographyH1>
      <TypographyP variant="special">{withReplacedLiterals}</TypographyP>
      <div className="w-fit">
        <SurveyTypeButton href={"/"} surveyType={""}>
          Discover the futures
        </SurveyTypeButton>
      </div>
    </div>
  );
};