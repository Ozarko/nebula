import { SimpleLiteralRegex, ConditionalLiteralRegex } from "@regex/literals";

export const replaceLiterals = (
  input: string,
  replacements: Record<string, string>
): string => {
  let result = input.replace(
    ConditionalLiteralRegex,
    (_match, literalKey, expectedValue, truePart, falsePart) => {
      const key = literalKey.trim();
      const actualValue = replacements[key];

      if (actualValue === expectedValue) {
        return truePart;
      } else {
        return falsePart;
      }
    }
  );

  result = result.replace(SimpleLiteralRegex, (_match, literalKey) => {
    const key = literalKey.trim();
    return replacements[key] || _match;
  });

  return result;
};
