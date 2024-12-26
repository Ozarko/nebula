export const SimpleLiteralRegex = new RegExp(/\{\{([^}]+)\}\}/.source, "g");

export const ConditionalLiteralRegex = new RegExp(
  /\(\(if\{\{([^}]+)\}\}='([^']+)'\?([^:]+):'([^']*)'\)\)/.source,
  "g"
);

export const AllLiteralsRegex = new RegExp(
  `${SimpleLiteralRegex.source}|${ConditionalLiteralRegex.source}`,
  "g"
);
