import { QueryUrlButton } from "@components/buttons/query-url-button";
import { QueryUrlButtonType } from "@typeslib/survey/components";
import { validateButtonVariant } from "@ui/button/button.config";

export const SurveyQueryUrlButton = ({ config }: QueryUrlButtonType) => {
  const { title, queryKey } = config;

  const variant = validateButtonVariant(config.variant);

  return (
    <QueryUrlButton queryKey={queryKey} variant={variant}>
      {title}
    </QueryUrlButton>
  );
};
