"use client";

import { useSurveyLiterals } from "@hooks/useSurevyLiterals";
import { SurveyHeaderType } from "@typeslib/survey/components";
import { TypographyH2 } from "@ui/typography/typographyH2";

export const SurveyHeader = ({ config }: SurveyHeaderType) => {
  const { title } = config;

  const header = useSurveyLiterals(title);

  return <TypographyH2 className="mb-[30px]">{header}</TypographyH2>;
};
