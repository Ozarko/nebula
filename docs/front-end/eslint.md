# ESLint Configuration Documentation

This document provides an overview of the ESLint configuration used in this project.

## Plugins

The following ESLint plugins are used:

- **eslint-plugin-jsx-a11y**: Provides accessibility linting rules for JSX.
- **eslint-plugin-import**: Helps ensure proper import/export syntax and order.
- **eslint-plugin-security**: Adds security-related linting rules.

## Extends

The configuration extends the following base configurations:

- **next**: Provides Next.js specific linting rules.
- **prettier**: Integrates Prettier for code formatting.

## File Types

The configuration applies to the following file types:

- `**/*.jsx`
- `**/*.tsx`

## Rules

### Accessibility Rules

The configuration includes recommended rules from `eslint-plugin-jsx-a11y`:

```javascript
...jsxA11y.configs.recommended.rules
```
