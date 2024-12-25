import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import securityPlugin from "eslint-plugin-security";
import eslintPluginPrettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next", "prettier"),
  {
    files: ["**/*.tsx"],
    plugins: {
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      security: securityPlugin,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      ...securityPlugin.configs.recommended.rules,
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling"],
            "index",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "comma-dangle": ["error", "always-multiline"],
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "no-unused-vars": ["error"],
    },
  },
];

export default eslintConfig;
