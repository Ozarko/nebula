import { SurveyAnswer } from "@store/slices/survey-slice";
import { ResultsPageMatchersType } from "@typeslib/survey/page-types";

export const buildStoryWithAllAnswers = (
  storyConfig: ResultsPageMatchersType,
  userAnswers: SurveyAnswer[]
): string => {
  const storyParts: string[] = [];

  // Create a map for user answers for quick lookup
  const userAnswersMap = new Map<string, string>();
  userAnswers.forEach((answer) => {
    userAnswersMap.set(answer.literalKey, answer.value);
  });

  // Iterate through the storyConfig keys
  for (const [key, matchers] of Object.entries(storyConfig)) {
    const userAnswerValue = userAnswersMap.get(key);
    if (userAnswerValue) {
      const matcher = matchers.find((m) => m.matcher === userAnswerValue);
      if (matcher) {
        storyParts.push(matcher.description);
      }
    }
  }

  return storyParts.join("\n");
};
