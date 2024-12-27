"use client";

import { withSuspense } from "@hoc/withSuspense";
import { useSurveyLiterals } from "@hooks/use-survey-literals";
import { SurveyHeaderType } from "@typeslib/survey/components";
import { TypographyH2 } from "@ui/typography/typographyH2";

export const SurveyHeader = withSuspense(({ config }: SurveyHeaderType) => {
  const { title } = config;

  const header = useSurveyLiterals(title);

  return <TypographyH2 className="mb-[30px]">{header}</TypographyH2>;
});
