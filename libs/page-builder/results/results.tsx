"use client";

import { useSurveyLiterals } from "@hooks/use-survey-literals";
import { useAppSelector } from "@store/hooks";
import { selectAllSurveyAnswers } from "@store/selectors/survey-selectors";
import { ResultsPageType } from "@typeslib/survey/page-types";
import { TypographyH2 } from "@ui/typography/typographyH2";
import { TypographyP } from "@ui/typography/typographyP";
import { buildStoryWithAllAnswers } from "@utils/survey/build-story-with-all-answers";

export const ResultsPage = ({ matchers }: ResultsPageType) => {
  const surveyAnswers = useAppSelector(selectAllSurveyAnswers);

  const storyParts = buildStoryWithAllAnswers(matchers, surveyAnswers);

  const withReplacedLiterals = useSurveyLiterals(storyParts);

  return (
    <main className="flex flex-col items-center container min-h-screen pt-[76px]">
      <TypographyH2>What we have found for you</TypographyH2>
      <TypographyP className="whitespace-pre-wrap mt-5">
        {withReplacedLiterals}
      </TypographyP>
    </main>
  );
};
