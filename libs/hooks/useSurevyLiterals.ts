"use client";

import { useAppSelector } from "@store/hooks";
import { selectAllSurveyAnswers } from "@store/selectors/survey-slectors";
import { extractLiterals } from "@utils/literals/extract-literals";
import { replaceLiterals } from "@utils/literals/replace-literals";

export const useSurveyLiterals = (text: string) => {
  const literalsArray = extractLiterals(text);
  const surveyAnswersList = useAppSelector(selectAllSurveyAnswers);

  const selectedLiterals = literalsArray.reduce(
    (acc: Record<string, string>, literal) => {
      const foundedLiteral = surveyAnswersList.find(
        (answer) => answer.literalKey === literal
      );

      if (foundedLiteral) {
        acc[literal] = foundedLiteral.value;
      }
      return acc;
    },
    {}
  );

  if (!literalsArray.length) return text;

  return replaceLiterals(text, selectedLiterals);
};
