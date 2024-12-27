"use client";

import { RouterButton } from "@components/buttons/router-button";
import { setSurveyAnswer } from "@store/actions/survey-actions";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectSurveyAnswer } from "@store/selectors/survey-selectors";
import { SurveyButtonType } from "@typeslib/survey/components";
import { WithQuestionId } from "@typeslib/survey/general";
import { validateButtonVariant } from "@ui/button";
import { withSurveyPathUrl } from "@utils/survey/withSurveyPathUrl";
import { cn } from "@utils/ui/cn";

type SurveyButtonProps = WithQuestionId<SurveyButtonType>;

export const SurveyButton = ({ config, questionId }: SurveyButtonProps) => {
  const { title, nextUrl, value, literalKey } = config;

  const dispatch = useAppDispatch();
  const activeValue = useAppSelector((state) =>
    selectSurveyAnswer(state, questionId),
  );

  const href = withSurveyPathUrl(nextUrl);

  const handleAnswer = () => {
    dispatch(
      setSurveyAnswer({
        id: questionId,
        value: value,
        literalKey,
      }),
    );
  };

  const variant = validateButtonVariant(config.variant);

  return (
    <RouterButton
      href={href}
      onClick={handleAnswer}
      className={cn("mb-5 w-full", activeValue?.value === value && "active")}
      variant={variant}
    >
      {title}
    </RouterButton>
  );
};
