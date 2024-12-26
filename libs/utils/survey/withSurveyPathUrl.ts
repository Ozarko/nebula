import { StaticPagePath } from "@enums/general/static-page-path";

export const withSurveyPathUrl = (href: string) => {
  return `${StaticPagePath.Survey}/${href}`;
};
