import { AllLiteralsRegex } from "@regex/literals";

export const hasLiterals = (str: string): boolean => {
  return AllLiteralsRegex.test(str);
};
