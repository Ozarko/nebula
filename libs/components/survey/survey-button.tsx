"use client";

import { RouterButton } from "@components/buttons/router-button";
import { SurveyButtonType } from "@typeslib/survey/components";

export const SurveyButton = ({ config }: SurveyButtonType) => {
  const { title, nextUrl } = config;

  return (
    <RouterButton href={nextUrl} className="mb-5 w-full">
      {title}
    </RouterButton>
  );
};
