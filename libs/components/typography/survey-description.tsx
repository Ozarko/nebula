import { SurveyDescriptionType } from "@typeslib/survey/components";
import { TypographyP } from "@ui/typography/typographyP";

export const SurveyDescription = ({ config }: SurveyDescriptionType) => {
  const { text } = config;
  return <TypographyP className="mb-[40px]">{text}</TypographyP>;
};
