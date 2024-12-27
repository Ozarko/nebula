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
  withSurveyPath?: boolean;
};

export const SurveyTypeButton = ({
  href,
  surveyType,
  children,
  withSurveyPath = true,
  ...rest
}: SurveyStartButtonProps) => {
  const dispatch = useAppDispatch();

  const handleStartSurvey = () => {
    dispatch(changeSurveyType({ value: surveyType }));
  };

  const withSurveyUrl = withSurveyPathUrl(href);

  const nextUrl = withSurveyPath ? withSurveyUrl : href;

  return (
    <RouterButton href={nextUrl} onClick={handleStartSurvey} {...rest}>
      {children}
    </RouterButton>
  );
};
