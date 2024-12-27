"use client";

import { withSuspense } from "@hoc/withSuspense";
import { useSurveyLiterals } from "@hooks/use-survey-literals";
import { SurveyDescriptionType } from "@typeslib/survey/components";
import {
  TypographyP,
  validateTypographyPVariant,
} from "@ui/typography/typographyP";

export const SurveyDescription = withSuspense(
  ({ config }: SurveyDescriptionType) => {
    const { text } = config;

    const description = useSurveyLiterals(text);

    const variant = validateTypographyPVariant(config.variant);

    return (
      <TypographyP className="mb-[40px]" variant={variant}>
        {description}
      </TypographyP>
    );
  },
);
