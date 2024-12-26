import "server-only";

import { redirect } from "next/navigation";

import { getSurveyByConfig } from "@/libs/services/getSurveyByConfig";
import { getSurveysIds } from "@/libs/services/getSurveysIds";
import { StaticPagePath } from "@enums/static-page-path";
import { PageProps } from "@typeslib/app";

export async function generateStaticParams() {
  return getSurveysIds();
}

type SurveyItemPageProps = PageProps<{ id: string; survey: string }>;

export default async function SurveyItemPage({ params }: SurveyItemPageProps) {
  const { survey, id } = await params;
  const question = getSurveyByConfig(survey, id);

  if (!question) {
    redirect(StaticPagePath.NotFound);
  }

  return <>{JSON.stringify(question)}</>;
}
