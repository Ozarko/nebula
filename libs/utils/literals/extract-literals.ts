import { SimpleLiteralRegex, ConditionalLiteralRegex } from "@regex/literals";

export const extractLiterals = (str: string): string[] => {
  if (!str?.length) return [];

  const literals = new Set<string>();

  const simpleMatches = str.matchAll(SimpleLiteralRegex);
  for (const match of simpleMatches) {
    if (match[1]) {
      literals.add(match[1].trim());
    }
  }

  const conditionalMatches = str.matchAll(ConditionalLiteralRegex);
  for (const match of conditionalMatches) {
    if (match[1]) {
      literals.add(match[1].trim());
    }
  }

  return Array.from(literals);
};
