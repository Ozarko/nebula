"use client";

import {
  RouterButton,
  RouterButtonProps,
} from "@components/buttons/router-button";
import { changeSurveyType } from "@store/actions/survey-actions";
import { useAppDispatch } from "@store/hooks";
import { withSurveyPathUrl } from "@utils/survey/withSurveyPathUrl";

type SurveyStartButtonProps = RouterButtonProps & {
  surveyType: string;
};

export const SurveyTypeButton = ({
  href,
  surveyType,
  children,
  ...rest
}: SurveyStartButtonProps) => {
  const dispatch = useAppDispatch();

  const handleStartSurvey = () => {
    dispatch(changeSurveyType({ value: surveyType }));
  };

  const nextUrl = withSurveyPathUrl(href);

  return (
    <RouterButton href={nextUrl} onClick={handleStartSurvey} {...rest}>
      {children}
    </RouterButton>
  );
};
