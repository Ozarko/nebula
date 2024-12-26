"use client";
import { PropsWithChildren } from "react";

import { RouterButton } from "@components/buttons/router-button";
import { useAppDispatch } from "@store/hooks";
import { changeSurveyType } from "@store/slices/survey-slice";
import { withSurveyPathUrl } from "@utils/survey/withSurveyPathUrl";

type SurveyStartButtonProps = PropsWithChildren<{
  href: string;
  surveyType: string;
}>;
export const SurveyStartButton = ({
  href,
  surveyType,
  children,
}: SurveyStartButtonProps) => {
  const dispatch = useAppDispatch();

  const handleStartSurvey = () => {
    dispatch(changeSurveyType({ value: surveyType }));
  };

  const nextUrl = withSurveyPathUrl(href);

  return (
    <RouterButton href={nextUrl} onClick={handleStartSurvey}>
      {children}
    </RouterButton>
  );
};
