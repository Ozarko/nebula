"use client";

import { RouterButton } from "@components/buttons/router-button";
import { setSurveyAnswer } from "@store/actions/survey-actions";
import { useAppDispatch } from "@store/hooks";
import { SurveyButtonType } from "@typeslib/survey/components";
import { WithQuestionId } from "@typeslib/survey/general";
import { withSurveyPathUrl } from "@utils/survey/withSurveyPathUrl";

type SurveyButtonProps = WithQuestionId<SurveyButtonType>;

export const SurveyButton = ({ config, questionId }: SurveyButtonProps) => {
  const dispatch = useAppDispatch();

  const { title, nextUrl, value, literalKey } = config;

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

  return (
    <RouterButton href={href} onClick={handleAnswer} className="mb-5 w-full">
      {title}
    </RouterButton>
  );
};
