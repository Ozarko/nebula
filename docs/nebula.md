# Documentation for NEBULA Survey Architecture

## Overview

This document outlines the architecture for an application designed to create and manage surveys with flexible configurations. The key requirements include dynamic page generation, user response storage in a state manager, and a flexible system for creating surveys without hard links between screens.

---

## Main Technical Stack

- **Next.js** - for server-side rendering and static generation.
- **TypeScript** - for ensuring type safety and reducing errors.
- **Redux** - for state management.
- **Eslint** - for maintaining code cleanliness and consistency.
- **Prettier** - for automatic code formatting.

---

## Functional Requirements

1. **Dynamic Page Creation**

   - Use Next.js to generate question pages via `getStaticPaths` or `generateStaticParams`.

2. **Flexible Survey Configuration**

   - All questions, answers, and transition logic are stored in separate JSON files.
   - The configuration must allow for easy addition of new screens and question types.

3. **Screen Transition Logic**

   - Transitions between screens depend on user responses.
   - No hard links between screens.

4. **User Response Storage**

   - User responses must be stored in a state manager accessible at all stages of the survey.

5. **Dynamic Placeholders**

   - Support dynamic values in questions, e.g., replacing `{Gender}` with the user’s input.

6. **Final Screen**

   - Display user responses upon completing the survey.

7. **Responsive Design**
   - Support for mobile and desktop devices.

---

## Non-Functional Requirements

1. **Scalability**

   - The architecture must support adding new surveys without significant codebase changes.

2. **Performance**

   - Use static generation for question pages to improve load speeds.

3. **Flexibility**

   - Allow for the addition of new question types, such as text input or date selection.

4. **Readability and Maintainability**

   - Code should be structured for easy reading and maintenance.

5. **Security**
   - Ensure user data protection (e.g., responses should not be stored on the server without explicit need).

---

## Task Checklist

- [] **Project Initialization**

  - [x] Set up a Next.js project with basic pages.
  - [x] Add basic project plan documentation
  - [x] Pin node/npm versions
  - [x] Adjust basic ts config configuration
  - [x] Add commitlint and documentation for commit messages
  - [x] Add Husky, add Lint-staged and commitlint for pre-commit checks
  - [] Configure Eslint + Prettier and add documentation
  - [] Add ts-reset library for type-safe object manipulation and basic types
  - [] Add server-only library

- [ ] **Create Survey Configuration File**

  - [] Prepare a JSON file containing questions, answers, and transition logic (basic).

- [ ] **UI Library Setup**

  - Configure fonts, color palette, and basic components (e.g., buttons, typography).

- [ ] **Pages/Blocks Structure**

  - Create a basic structure for survey pages and blocks including "how does it works" page.

- [ ] **Dynamic Page Generation Layout**

  - Use Next.js to generate question pages from the configuration file.

- [ ] **State Manager Implementation**

  - Set up Redux for storing user responses and survey state.

- [ ] **Dynamic Placeholder Handling**

  - Implement functionality to replace `{}` in question text with corresponding values.

- [ ] **Final Screen Implementation**

  - Develop a screen to display user responses.

- [ ] **Optimization and Refactoring**
  - Review code, fix any issues, and improve structure if needed.

---

## Summary

This documentation provides a clear understanding of functional and non-functional requirements, along with a step-by-step implementation plan. This approach ensures flexibility, scalability, and high code quality.
