"use client";

import { withSuspense } from "@hoc/withSuspense";
import { useSurveyLiterals } from "@hooks/use-survey-literals";
import { SurveyHeaderType } from "@typeslib/survey/components";
import {
  TypographyH1,
  validateTypographyH1Variant,
} from "@ui/typography/typographyH1";

export const SurveyHeader = withSuspense(({ config }: SurveyHeaderType) => {
  const { title } = config;

  const header = useSurveyLiterals(title);

  const variant = validateTypographyH1Variant(config.variant);

  return (
    <TypographyH1 className="mb-[30px]" variant={variant}>
      {header}
    </TypographyH1>
  );
});
