import "server-only";

import { SurveyGuard } from "@/libs/guards/survey-guard";
import { LayoutProps } from "@typeslib/app";

export default function QuestionaryLayout({ children }: LayoutProps) {
  return <SurveyGuard>{children}</SurveyGuard>;
}
