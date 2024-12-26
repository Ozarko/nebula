"use client";

import { useSurveyLiterals } from "@hooks/useSurevyLiterals";
import { SurveyDescriptionType } from "@typeslib/survey/components";
import { TypographyP } from "@ui/typography/typographyP";

export const SurveyDescription = ({ config }: SurveyDescriptionType) => {
  const { text } = config;

  const description = useSurveyLiterals(text);

  return <TypographyP className="mb-[40px]">{description}</TypographyP>;
};
