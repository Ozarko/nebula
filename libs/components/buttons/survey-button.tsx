import { SurveyButtonType } from "@typeslib/survey/components";

import { RouterButton } from "./router-button";

export const SurveyButton = ({ config }: SurveyButtonType) => {
  const { title, nextUrl } = config;

  return (
    <RouterButton href={nextUrl} className="mb-5 w-full">
      {title}
    </RouterButton>
  );
};
