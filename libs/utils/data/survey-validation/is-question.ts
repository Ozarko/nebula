import "server-only";

import { Question } from "@typeslib/questionary";

export const isQuestion = (question: any): question is Question => {
  return (
    typeof question === "object" &&
    question !== null &&
    typeof question.id === "string" &&
    typeof question.pageType === "string" &&
    Array.isArray(question.components)
  );
};
