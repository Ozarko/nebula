"use client";
import { PropsWithChildren } from "react";

import { RouterButton } from "@components/buttons/router-button";
import { useAppDispatch } from "@store/hooks";
import { changeSurveyType } from "@store/slices/survey-slice";

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

  return (
    <RouterButton href={href} onClick={handleStartSurvey}>
      {children}
    </RouterButton>
  );
};
