"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

import { StaticPagePath } from "@enums/general/static-page-path";
import { useAppSelector } from "@store/hooks";
import { selectSurveyType } from "@store/selectors/survey-selectors";

export const SurveyGuard = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const surveyType = useAppSelector(selectSurveyType);

  useEffect(() => {
    if (!surveyType) {
      router.push(StaticPagePath.Home);
    }
  }, [router, surveyType]);

  return children;
};
