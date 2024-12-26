"use client";

import { RouterButton } from "@components/buttons/router-button";
import { useAppDispatch } from "@store/hooks";
import { setSurveyAnswer } from "@store/slices/survey-slice";
import { SurveyButtonType } from "@typeslib/survey/components";
import { WithQuestionId } from "@typeslib/survey/general";
import { withSurveyPathUrl } from "@utils/survey/withSurveyPathUrl";

export const SurveyButton = ({
  config,
  questionId,
}: WithQuestionId<SurveyButtonType>) => {
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
