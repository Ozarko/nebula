import { Question } from "@typeslib/survey/general";
import "server-only";


export const isQuestion = (question: any): question is Question => {
  return (
    typeof question === "object" &&
    question !== null &&
    typeof question.id === "string" &&
    typeof question.pageType === "string"
  );
};
