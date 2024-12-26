"use client";

import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

import { StaticPagePath } from "@enums/general/static-page-path";
import { useAppSelector } from "@store/hooks";
import { selectSurveyType } from "@store/selectors/survey-slectors";

export const SurveyGuard = ({ children }: PropsWithChildren) => {
  const surveyType = useAppSelector(selectSurveyType);

  if (!surveyType) {
    redirect(StaticPagePath.Home);
  }

  return children;
};
