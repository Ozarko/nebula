# Commit Message Convention

This document outlines the commit message convention based on the CommitLint guidelines.
Following this convention helps maintain consistent and readable commit messages across a project.

## Structure

Each commit message should consist of the following parts:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 1. Type

The `type` indicates the nature of the commit. Use one of the following predefined types:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation-only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
- **ci**: Changes to CI configuration files and scripts
- **revert**: Reverts a previous commit
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)

### 2. Scope

The `scope` specifies the area of the codebase affected by the commit (optional but recommended). Examples:

- `ui`
- `api`
- `database`
- `auth`

### 3. Subject

The `subject` is a brief description of the change (max 50 characters). Use the imperative mood (e.g., "fix," "add," "remove" instead of "fixed," "added," "removed").

### 4. Body

The `body` provides additional details about the commit (optional). Explain **what** and **why** (but not **how**).

- Use bullet points if necessary.
- Limit lines to 72 characters.

### 5. Footer

The `footer` is used for referencing tasks, breaking changes, or any meta-information (optional). Use the following format:

- **Task References**: `Closes #123`, `Relates to #456`
- **Breaking Changes**: `BREAKING CHANGE: <description>`

## Examples

### Simple Commit

```
feat(ui): add dark mode toggle

Implemented a toggle button for dark mode in the settings page.
```

### Commit with Body

```
fix(api): handle null values in user profile

Fixed a bug where the API would return a 500 error if the user profile contained null values in optional fields. Added a null check to prevent this issue.
```

### Commit with Footer

```
build(dependencies): update to Webpack 5

Upgraded Webpack to version 5 to leverage improved tree-shaking and module federation features.

BREAKING CHANGE: The build process now requires Node.js 14 or higher.
```

## Tips

- Use present tense: "add" not "added" or "adds."
- Capitalize the first letter of the subject.
- Do not end the subject with a period.
- Keep the subject concise.

Following this convention ensures a clear and maintainable history for your project.
