import { SurveyAnswer } from "@store/slices/survey-slice";
import { ResultsPageMatchersType } from "@typeslib/survey/page-types";

export const buildStoryWithAllAnswers = (
  storyConfig: ResultsPageMatchersType,
  userAnswers: SurveyAnswer[],
) => {
  const storyParts: string[] = [];
  const userAnswersMap = userAnswers.reduce(
    (acc: Record<string, string>, answer) => {
      acc[answer.literalKey] = answer.value;
      return acc;
    },
    {},
  );

  const userAnswerEntries = Object.entries(userAnswersMap);

  userAnswerEntries.forEach(([key, value]) => {
    const matcher = storyConfig[key];
    if (matcher) {
      const matcherValue = matcher.find((m) => m.matcher === value);
      if (matcherValue) {
        storyParts.push(matcherValue.description);
      }
    }
  });

  return storyParts.join("\n");
};
