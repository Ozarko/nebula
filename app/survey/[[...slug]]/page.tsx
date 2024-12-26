import "server-only";

import { redirect } from "next/navigation";

import { StaticPagePath } from "@enums/general/static-page-path";
import { PageBuilder } from "@page-builder/page-builder";
import { getSurveyByConfig } from "@services/get-survey-by-config";
import { getSurveysConfig } from "@services/get-surveys-config";
import { getSurveysSlugs } from "@services/get-surveys-slugs";
import { PageProps } from "@typeslib/app";
import { handleSurveySlug } from "@utils/survey/handleSurveySlug";

export async function generateStaticParams() {
  return getSurveysSlugs();
}

type SurveyItemPageProps = PageProps<{ slug: string[] }>;

export default async function SurveyItemPage({ params }: SurveyItemPageProps) {
  const { slug } = await params;

  const surveyConfigs = getSurveysConfig();

  const slugObject = handleSurveySlug(slug, surveyConfigs);

  if (!slugObject) {
    redirect(StaticPagePath.NotFound);
  }

  const { surveyType, questionId } = slugObject;

  const question = getSurveyByConfig(surveyType, questionId);

  if (!question) {
    redirect(StaticPagePath.NotFound);
  }

  return <PageBuilder question={question} />;
}
