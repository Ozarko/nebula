import { SurveyHeaderType } from "@typeslib/survey/components";
import { TypographyH2 } from "@ui/typography/typographyH2";

export const SurveyHeader = ({ config }: SurveyHeaderType) => {
  const { title } = config;
  return <TypographyH2 className="mb-[30px]">{title}</TypographyH2>;
};
